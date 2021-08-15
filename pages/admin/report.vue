<template>
	<div class="flex-1">
		<h1
			class="
				text-4xl
				font-medium
				md:text-5xl
				mb-3
				md:mb-10
				text-base-content
				border-primary border-b-8
				pb-1
				inline-block
			"
		>
			<font-awesome-icon icon="clipboard-list" /> รายงาน
		</h1>
		<div class="bg-white rounded-xl w-full min-h-screen">
			<!-- Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<!-- Today Report Card -->
				<div class="card lg:card-side shadow">
					<div class="card-body">
						<h2 class="card-title text-2xl">
							รายงาน
							<span class="badge badge-primary badge-md">{{
								$moment(Date.now()).format("ll")
							}}</span>
						</h2>
						<p>รายงานการลงเวลาปฏิบัติราชการ</p>
						<div class="card-actions">
							<button
								class="btn btn-sm btn-primary"
								@click="getTodayExcel"
							>
								<font-awesome-icon
									icon="file-excel"
									class="mr-1"
								/>Excel
							</button>
							<button class="btn btn-sm btn-accent">
								<font-awesome-icon
									icon="file-pdf"
									class="mr-1"
								/>PDF
							</button>
						</div>
					</div>
				</div>
				<!-- End Today Report Card -->
				<!-- Date Report Card -->
				<div class="card lg:card-side shadow">
					<div class="card-body">
						<h2 class="card-title text-2xl">
							รายงาน
							<span class="badge badge-content badge-md"
								>อยู่ระหว่างการพัฒนา</span
							>
						</h2>
						<p>รายงานการลงเวลาปฏิบัติราชการ</p>
						<div class="card-actions">
							<button class="btn btn-sm btn-neutral btn-disabled">
								<font-awesome-icon
									icon="calendar-alt"
									class="mr-1"
								/>
								เลือกวันที่
							</button>
						</div>
					</div>
				</div>
				<!-- End Date Report Card -->
			</div>
		</div>
	</div>
</template>

<script>
import xlsx from "json-as-xlsx";
import moment from "moment";
// eslint-disable-next-line import/no-named-as-default
import gql from "graphql-tag";

export default {
	layout: "admin",
	data() {
		return {
			reportData: [],
			leaveData: [],
			startDate: "",
			endDate: "",
		};
	},
	head() {
		return {
			title: "รายงาน",
		};
	},
	methods: {
		async getTodayExcel() {
			const currentTime = new Date();
			const currentDate = currentTime.toISOString().slice(0, 10);
			const unix = moment.utc(currentDate).unix();

			this.startDate = unix.toString();
			this.endDate = unix.toString();

			await this.fetchData();
			await this.getExcel();
		},
		async fetchData() {
			await this.$apollo
				.query({
					query: gql`
						query reportData(
							$startDate: String!
							$endDate: String!
						) {
							reportData: worktimeByDates(
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
					this.reportData = data.reportData;
				});
		},
		async getExcel() {
			const data = [
				{
					sheet: "รายงาน",
					columns: [
						{
							label: "ชื่อ-สกุล",
							value: (row) => row.user.fullName,
						},
						{
							label: "เวลามา",
							value: (row) =>
								moment.unix(row.checkIn).format("HH:mm:ss"),
						},
						{
							label: "เวลากลับ",
							value: (row) =>
								row.checkOut
									? moment
										.unix(row.checkOut)
										.format("HH:mm:ss")
									: "ไม่ได้ลงชื่อออก",
						},
						{
							label: "สถานที่ปฏิบัติราชการ",
							value: (row) => row.location,
						},
						{ label: "หมายเหตุ", value: "" },
					],
					content: this.reportData,
				},
			];
			const settings = {
				fileName: `รายงานประจำวันที่ ${moment
					.unix(this.startDate)
					.format("LL")}`,
				type: "buffer",
				bookType: "xlsx",
			};
			await xlsx(data, settings);
		},
	},
};
</script>
