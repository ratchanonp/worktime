<template>
	<div class="flex-1 p-10 bg-gray-100">
		<h1 class="text-5xl font-bold mb-10">Dashboard</h1>
		<div class="bg-white rounded-xl w-full p-5 grid grid-cols-2 gap-4">
			<div v-if="$apollo.queries.me.loading">Loading...</div>
			<UserInfo
				v-else
				:fullname="me.fullName"
				:position="me.role[0]"
				class="mb-auto"
			/>
			<div class="today-status p-5 rounded-xl bg-gray-50">
				<p class="text-4xl font-bold mb-3">สถานะวันนี้</p>
				<p
					v-if="!status"
					class="
						text-4xl
						bg-white
						border-2
						p-5
						rounded-xl
						text-red-500 text-center
						font-bold
					"
				>
					ยังไม่ได้บันทึก
				</p>
				<History
					v-else			
					class="bg-white"
					:location="status.location"
					:date="status.date"
					:checkIn="status.checkIn"
					:checkOut="status.checkOut"
				/>
			</div>
			<div class="col-span-2 p-5 rounded-xl bg-gray-50">
				<p class="text-4xl font-bold mb-3">สถิติ</p>
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
			status: {},
		};
	},
	head() {
		return {
			title: "Dashboard",
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
		status: {
			query: gql`
				query meStatus {
					status: meStatus {
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
