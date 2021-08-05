<template>
	<div class="flex-1 p-10 bg-gray-100">
		<h1 class="text-5xl font-bold mb-10">Dashboard Admin</h1>
		<div class="bg-white rounded-xl w-full min-h-screen p-5">
			<div class="flex p-5 bg-gray-100 mb-5 rounded-xl gap-4">
				<div class="flex-1 flex items-center border-r-2">
					<font-awesome-icon
						icon="user"
						class="text-blue-400 text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p>บุคลากร</p>
						<p class="text-4xl font-extrabold">
							{{
								todayCheckedIns.length +
								todayNotCheckedIn.length
							}}
						</p>
						<p>คน</p>
					</div>
				</div>
				<div class="flex-1 flex items-center border-r-2">
					<font-awesome-icon
						icon="sign-in-alt"
						class="text-green-400 text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p>ลงชื่อเข้า</p>
						<p class="text-4xl font-extrabold">
							{{ todayCheckedIns.length }}
						</p>
						<p>คน</p>
					</div>
				</div>
				<div class="flex-1 flex items-center">
					<font-awesome-icon
						icon="sign-out-alt"
						class="text-red-400 text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p>ลงชื่อออก</p>
						<p class="text-4xl font-extrabold">
							{{ todayCheckedOuts.length }}
						</p>
						<p>คน</p>
					</div>
				</div>
			</div>
			<button class="bg-green-500 " @click="downloadReport()">Download Report ประจำวันนี้</button>
			<div class="grid grid-cols-2 gap-4 xl:mb-auto">
				<p v-if="$apollo.queries.todayCheckedIns.loading">Loading</p>
				<div v-else class="checkin p-4 border-2 rounded-lg">
					<h1 class="text-4xl mb-3">รายชื่อผู้ลงชื่อเข้า</h1>
					<hr class="mb-3" />
					<p v-if="todayCheckedIns.length == 0">ไม่มีข้อมูล</p>
					<div>
						<div
							v-for="checkin in todayCheckedIns"
							:key="checkin.user.fullName"
							class="flex"
						>
							<div
								class="
									w-28
									font-bold
									text-green-500 text-left
									font-roboto-mono
								"
							>
								<font-awesome-icon icon="sign-in-alt" />
								{{
									$moment
										.unix(checkin.checkIn)
										.format("HH:mm:ss")
								}}
							</div>
							<div class="w-1/2">{{ checkin.user.fullName }}</div>
						</div>
						<p class="text-sm text-gray-400 text-right">
							ทั้งหมด {{ todayCheckedIns.length }} คน
						</p>
					</div>
				</div>
				<p v-if="$apollo.queries.todayCheckedOuts.loading">Loading</p>
				<div v-else class="checkout p-4 border-2 rounded-lg xl:mb-auto">
					<h1 class="text-4xl mb-3">รายชื่อผู้ลงชื่อออก</h1>
					<hr class="mb-3" />
					<p v-if="todayCheckedOuts.length == 0">
						{{ todayCheckedOuts }}
					</p>
					<div>
						<div
							v-for="checkout in todayCheckedOuts"
							:key="checkout.user.fullName"
							class="flex flex-inline"
						>
							<div
								class="
									w-28
									text-red-500
									font-bold
									text-left
									font-roboto-mono
								"
							>
								<font-awesome-icon icon="sign-out-alt" />
								{{
									$moment
										.unix(checkout.checkOut)
										.format("HH:mm:ss")
								}}
							</div>

							<div class="w-1/2">
								{{ checkout.user.fullName }}
							</div>
						</div>
						<p class="text-sm text-gray-400 text-right">
							ทั้งหมด {{ todayCheckedOuts.length }} คน
						</p>
					</div>
				</div>
				<p v-if="$apollo.queries.todayNotCheckedIn.loading">Loading</p>
				<div
					v-else
					class="notcheckin p-4 border-2 rounded-lg xl:mb-auto"
				>
					<h1 class="text-4xl mb-3">รายชื่อผู้ยังไม่ได้ลงชื่อเข้า</h1>
					<hr class="mb-3" />
					<p v-if="todayNotCheckedIn.length == 0">
						{{ todayNotCheckedIn }}
					</p>
					<ul class="grid grid-cols-3">
						<li
							v-for="usernocheckin in todayNotCheckedIn"
							:key="usernocheckin.fullName"
						>
							{{ usernocheckin.fullName }}
						</li>
					</ul>
					<p class="text-sm text-gray-400 text-right">
						ทั้งหมด {{ todayNotCheckedIn.length }} คน
					</p>
				</div>
				<p v-if="$apollo.queries.todayNotCheckedOut.loading">Loading</p>
				<div
					v-else
					class="notcheckout p-4 border-2 rounded-lg xl:mb-auto"
				>
					<h1 class="text-4xl mb-3">รายชื่อผู้ยังไม่ได้ลงชื่อออก</h1>
					<hr class="mb-3" />
					<p v-if="todayNotCheckedOut.length == 0">
						{{ todayNotCheckedOut }}
					</p>
					<ul class="grid grid-cols-3">
						<li
							v-for="usernocheckout in todayNotCheckedOut"
							:key="usernocheckout.fullName"
						>
							{{ usernocheckout.fullName }}
						</li>
					</ul>
					<p class="text-sm text-gray-400 text-right">
						ทั้งหมด {{ todayNotCheckedOut.length }} คน
					</p>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gql from "graphql-tag";
import moment from "moment";
import xlsx from "json-as-xlsx";

// Moment Config
moment().format();
moment.locale("th");

export default {
	layout: "admin",
	data() {
		return {
			todayCheckedIns: [],
			todayCheckedOuts: [],
			todayNotCheckedIn: [],
			todayNotCheckedOut: [],
			todayAll: [],
			startDate: "",
			endDate: "",
		};
	},
	head() {
		return {
			title: "Dashboard",
		};
	},
	apollo: {
		todayCheckedIns: {
			query: gql`
				query todayCheckedIns {
					todayCheckedIns: todayCheckedIns {
						_id
						checkIn
						checkOut
						date
						location
						user {
							fullName
						}
					}
				}
			`,
		},
		todayCheckedOuts: {
			query: gql`
				query todayCheckedOuts {
					todayCheckedOuts: todayCheckedOuts {
						_id
						checkIn
						checkOut
						date
						location
						user {
							fullName
						}
					}
				}
			`,
		},
		todayNotCheckedIn: {
			query: gql`
				query todayNotCheckedIn {
					todayNotCheckedIn: todayNotCheckedIn {
						_id
						fullName
					}
				}
			`,
		},
		todayNotCheckedOut: {
			query: gql`
				query todayNotCheckedOut {
					todayNotCheckedOut: todayNotCheckedOut {
						_id
						fullName
					}
				}
			`,
		},
	},
	methods: {
		async downloadReport() {
			
			// eslint-disable-next-line new-cap
			const currentTime = new Date();
			const currentDate = currentTime.toISOString().slice(0, 10);
			const unix = moment.utc(currentDate).unix();

			this.startDate = unix.toString();
			this.endDate = unix.toString();

			await this.$apollo
				.query({
					query: gql`
						query todayAll($startDate: String!, $endDate: String!) {
							todayAll: worktimeByDates(
								duration: {
									startDate: $startDate
									endDate: $endDate
								}
							) {
								_id
								date
								location
								checkIn
								checkOut
								user {
									fullName
								}
							}
						}
					`,
					variables: {
						startDate: this.startDate,
						endDate: this.endDate,
					},
				})
				.then(({ data }) => {
					this.todayAll = data.todayAll;
				});
			const data = [
				{
					sheet: "รายงาน",
					columns: [
						{ label: "ชื่อ-สกุล", value: (row) => row.user.fullName },
						{ label: "เวลามา", value: (row) => moment.unix(row.checkIn).format("HH:mm:ss")},
						{ label: "เวลากลับ", value: (row) => row.checkOut ? moment.unix(row.checkOut).format("HH:mm:ss"): "ไม่ได้ลงชื่อออก" },
						{ label: "สถานที่ปฏิบัติราชการ", value: (row) => row.location },
					],
					content: this.todayAll,
				},
			];
			const settings = {
				fileName: `รายงานประจำวันที่ ${moment.unix(this.startDate).format("LL")}`,
				type: "buffer",
				bookType: "xlsx",
			};
			await xlsx(data, settings);
		},
	},
};
</script>
