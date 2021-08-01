export const state = () => ({
	status: {
		isCheckIn: false,
		isCheckOut: false,
	},
});

export const mutations = {
	checkIn(state) {
		state.status.isCheckIn = true;
	},
	checkOut(state) {
		state.status.isCheckOut = true;
	},
};
