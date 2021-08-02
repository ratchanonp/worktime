<template>
	<div class="flex-1 p-5 md:p-10 bg-gray-100">
		<h1 class="text-4xl md:text-5xl font-bold mb-3 md:mb-10">
			<font-awesome-icon icon="history" /> ประวัติการลงเวลา
		</h1>
		<div class="bg-white rounded-xl w-full p-5">
			<div v-if="$apollo.queries.me.loading">Loading...</div>
			<UserInfo
				v-else
				:fullname="me.fullName"
				:position="me.role[0]"
				class="mb-auto"
			/>
			<!-- eslint-disable-next-line vue/attribute-hyphenation -->
			<!-- History -->
			<div v-if="$apollo.queries.history.loading">Loading...</div>
			<div v-else>
				<p class="text-2xl text-right my-2">
					ผลลัพธ์ {{ history.length }} รายการ
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
					<History
						v-for="worktime in history"
						:key="worktime._id"
						:location="worktime.location"
						:date="worktime.date"
						:checkIn="worktime.checkIn"
						:checkOut="worktime.checkOut"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gql from "graphql-tag";

export default {
	layout: "user",
	data() {
		return {
			me: {},
			history: [],
		};
	},
	head() {
		return {
			title: "ประวัติการลงเวลา",
		};
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
		history: {
			query: gql`
				query meWorktimes {
					history: meWorktimes {
						_id
						location
						date
						checkIn
						checkOut
					}
				}
			`,
		},
	},
};
</script>
