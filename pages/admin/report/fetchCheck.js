const reportData = require("../../../gql/adminCheckReport.gql");

const checkData = {
	async fetch(startDate, endDate) {
		await this.$apollo
			.query({
				query: reportData,
				variables: {
					startDate,
					endDate,
				},
			})
			.then(({ data }) => {
				return data;
			});
	},
};

export default checkData;
