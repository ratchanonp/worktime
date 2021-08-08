<template>
	<div class="flex-1 p-2 md:p-10">
		<h1 class="text-4xl font-medium md:text-5xl mb-3 md:mb-10 text-base-content border-primary border-b-8 pb-1 inline-block">
			<font-awesome-icon icon="tachometer-alt" /> Dashboard
		</h1>
		<div
			class="
				bg-white
				rounded-xl
				w-full
				grid grid-cols-1
				xl:grid-cols-2
				gap-4
			"
		>
			<div v-if="$apollo.queries.me.loading">Loading...</div>
			<UserInfo v-else :fullname="me.fullName" :position="me.role[0]" />
			<div class="today-status p-5 rounded-xl shadow">
				<p class="text-4xl font-medium mb-3">สถานะวันนี้</p>
				<div v-if="$apollo.queries.status.loading">Loading...</div>
				<History
					v-else
					:key="status.createdAt"
					:location="status.location"
					:date="status.date"
					:checkIn="status.checkIn"
					:checkOut="status.checkOut"
				/>
			</div>
			<div class="xl:col-span-2 p-5 rounded-xl shadow">
				<p class="text-4xl font-medium mb-3">สถิติ</p>
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
						createdAt
					}
				}
			`,
		},
	},
};
</script>
