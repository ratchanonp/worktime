const xlsx = require("json-as-xlsx");
const moment = require("moment");

const excel = {
	async create(reportCheckData, reportLeaveData, date) {
		const sheets = [
			// Sheet 1 รายงานเข้า - ออก
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
								? moment.unix(row.checkOut).format("HH:mm:ss")
								: "ไม่ได้ลงชื่อออก",
					},
					{
						label: "สถานที่ปฏิบัติราชการ",
						value: (row) => row.location,
					},
					{ label: "หมายเหตุ", value: "" },
				],
				content: this.reportCheckData,
			},
			// Sheet 2 รายงานลา
			// {
			// 	sheet: "รายงานลา",
			// 	columns: [
			// 		{
			// 			label: "ชื่อ-สกุล",
			// 			value: (row) => row.user.fullName,
			// 		},
			// 		{
			// 			label: "การลา",
			// 			value: (row) => row.reason,
			// 		},
			// 		{ label: "หมายเหตุ", value: "" },
			// 	],
			// 	content: this.reportLeaveData,
			// },
		];

		// Excel Settings
		const settings = {
			fileName: `รายงานประจำวันที่ ${moment
				.unix(this.date)
				.format("LL")}`,
			type: "buffer",
			bookType: "xlsx",
		};

		await xlsx(sheets, settings);
	},
};

export default excel;
