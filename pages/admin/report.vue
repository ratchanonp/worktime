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
import moment from "moment";

import checkData from "./report/fetchCheck";
import excel from "./report/excel";

export default {
	layout: "admin",
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

			const startDate = unix.toString();
			const endDate = unix.toString();

			const reportCheckData = await checkData.fetch(startDate, endDate);
			const reportLeaveData = [];

			await excel.create(reportCheckData, reportLeaveData, startDate, endDate);
		},
	},
};
</script>
