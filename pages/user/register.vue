<template>
	<div class="flex-1 p-5 lg:p-10 ">
		<h1 class="text-4xl font-medium md:text-5xl mb-3 md:mb-10 text-base-content border-primary border-b-8 pb-1 inline-block">
			<font-awesome-icon icon="briefcase" /> ลงเวลาปฎิบัติราชการ
		</h1>
		<div class="bg-white rounded-xl min-w-full ">
			<p v-if="$apollo.queries.me.loading">Loading...</p>
			<UserInfo v-else :fullname="me.fullName" :position="me.role[0]" />

			<div class="regis p-5 mb-3 rounded-xl shadow">
				<div class="flex flex-col md:flex-row">
					<p class="text-4xl font-bold mb-3 md:w-1/2 text-black">
						ลงเวลาปฎิบัติราชการ
					</p>

					<p
						class="
							text-lg
							md:text-2xl
							text-gray-500
							mb-3
							text-left
							md:text-right md:w-1/2
						"
					>
						<font-awesome-icon icon="calendar-alt" />
						{{ $moment(Date.now()).format("LLLL") }}
					</p>
				</div>
				<p v-if="$apollo.queries.status.loading">Loading...</p>
				<div v-else class="grid xl:grid-cols-2 md:grid-cols-1 gap-4">
					<div
						v-if="status.checkIn == null"
						class="
							flex flex-row
							cursor-pointer
							md:flex-col
							bg-primary
							hover:bg-primary-focus
							p-5
							rounded-xl
							text-center text-white text-3xl
							md:text-6xl
						"
						@click="checkInConfirm"
					>
						<font-awesome-icon
							class="md:mx-auto md:mb-10 mr-5"
							icon="sign-in-alt"
						/>
						<p class="font-bold">ลงชื่อเข้า</p>
					</div>
					<div
						v-else
						class="
							flex flex-row
							cursor-not-allowed
							bg-green-200
							md:flex-col
							p-5
							rounded-xl
							text-center text-white text-3xl
							md:text-6xl
						"
					>
						<font-awesome-icon
							class="md:mx-auto md:mb-10 mr-5"
							icon="sign-in-alt"
						/>
						<p class="font-bold">ลงชื่อเข้า</p>
					</div>
					<div
						v-if="status.checkOut == null"
						class="
							flex flex-row
							cursor-pointer
							md:flex-col
							bg-accent
							hover:bg-accent-focus
							p-5
							rounded-xl
							text-center text-white text-3xl
							md:text-6xl
						"
						@click="checkOutConfirm"
					>
						<font-awesome-icon
							class="md:mx-auto md:mb-10 mr-5"
							icon="sign-out-alt"
						/>
						<p class="font-bold">ลงชื่อออก</p>
					</div>
					<div
						v-else
						class="
							flex flex-row
							cursor-not-allowed
							bg-red-200
							md:flex-col
							p-5
							rounded-xl
							text-center text-white text-3xl
							md:text-6xl
						"
					>
						<font-awesome-icon
							class="md:mx-auto md:mb-10 mr-5"
							icon="sign-out-alt"
						/>
						<p class="font-bold">ลงชื่อออก</p>
					</div>
				</div>
			</div>

			<div class="today-status p-5 rounded-xl shadow">
				<p class="text-4xl font-bold mb-3 text-black">สถานะวันนี้</p>
				<p v-if="$apollo.queries.status.loading">Loading...</p>
				<History
					v-else
					:key="status.updatedAt"
					class="bg-white"
					:location="status.location"
					:date="status.date"
					:checkIn="status.checkIn"
					:checkOut="status.checkOut"
				/>
			</div>
		</div>
	</div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gql from "graphql-tag";
import userCheckIn from "../../gql/userCheckIn.gql";
import userCheckOut from "../../gql/userCheckOut.gql";

export default {
	layout: "user",
	data() {
		return {
			show: false,
			inputLocation: "",
			me: {},
			status: {},
			locationOption: {
				บ้าน: "บ้าน",
				โรงเรียน: "โรงเรียน",
			},
		};
	},
	head() {
		return {
			title: "ลงเวลาปฎิบัติราชการ",
		};
	},
	methods: {
		async checkIn() {
			const inputLocation = this.inputLocation;
			try {
				await this.$apollo
					.mutate({
						mutation: userCheckIn,
						variables: {
							location: inputLocation,
						},
					})
					.then(({ data }) => {
						this.status = data.checkIn;
					});
				this.$swal({
					title: "ลงเวลาปฎิบัติราชการเรียบร้อยแล้ว",
					message: `เวลา ${this.status.checkIn}`,
					icon: "success",
				});
			} catch (error) {
				this.$swal({
					title: "เกิดข้อผิดพลาด",
					text: error.message,
					icon: "error",
				});
			}
			// eslint-disable-next-line no-console
			console.log(this.status);
		},
		async checkOut() {
			try {
				await this.$apollo
					.mutate({
						mutation: userCheckOut,
					})
					.then(({ data }) => {
						this.status = data.checkOut;
					});
				this.$swal({
					title: "ลงเวลาปฎิบัติราชการเรียบร้อยแล้ว",
					message: `เวลา ${this.status.checkOut}`,
					icon: "success",
				});
			} catch (error) {
				this.$swal({
					title: "เกิดข้อผิดพลาด",
					text: error.message,
					icon: "error",
				});
			}
			console.log(this.status);
		},
		checkInConfirm() {
			this.$swal({
				title: "เลือกสถานที่ทำงาน",
				input: "radio",
				inputOptions: this.locationOption,
				inputValidator: (value) => {
					if (!value) {
						return "กรุณาเลือกสถานที่ทำงาน";
					}
				},
				showCancelButton: true,
				confirmButtonColor: "#10B981",
				cancelButtonColor: "#EF4444",
				confirmButtonText: "ลงเวลา",
				cancelButtonText: "ยกเลิก",
				showLoaderOnConfirm: true,
			}).then((result) => {
				if (result.isConfirmed) {
					this.inputLocation = result.value;
					this.checkIn();
				}
			});
		},
		checkOutConfirm() {
			this.$swal({
				title: "ยืนยันการลงชื่อออก",
				text: "คุณต้องการลงชื่อออกใช่หรือไม่",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#10B981",
				cancelButtonColor: "#EF4444",
				confirmButtonText: "ลงชื่อออก",
				cancelButtonText: "ยกเลิก",
				showLoaderOnConfirm: true,
			}).then((result) => {
				if (result.isConfirmed) {
					this.checkOut();
				}
			});
		},
	},
	apollo: {
		me: {
			query: gql`
				query Me {
					me {
						fullName
						role
					}
				}
			`,
		},
		status: {
			query: gql`
				query meStatus {
					status: meStatus {
						_id
						location
						date
						checkIn
						checkOut
						updatedAt
					}
				}
			`,
		},
	},
};
</script>
