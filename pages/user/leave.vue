<template>
	<div class="flex-1 p-5 lg:p-10">
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
			<font-awesome-icon icon="power-off" /> ลาราชการ
		</h1>
		<!-- Content -->
		<div class="grid min-w-full">
			<p v-if="$apollo.queries.me.loading">Loading...</p>
			<UserInfo v-else :fullname="me.fullName" :position="me.role[0]" />
			<div class="leave flex flex-col p-5 shadow rounded-xl mb-5">
				<div class="flex flex-row mb-5">
					<p
						class="
							text-left
							inline-block
							text-lg
							md:text-4xl md:w-1/2
						"
					>
						ลาราชการ
					</p>
					<p
						class="
							text-right text-gray-500 text-lg
							md:text-2xl md:w-1/2
						"
					>
						<font-awesome-icon icon="calendar-alt" />
						{{ $moment(Date.now()).format("LL") }}
					</p>
				</div>
				<div class="flex">
					<div class="flex-1">
						<button class="btn btn-warning btn-block text-2xl">
							<font-awesome-icon icon="power-off" class="mr-2" />
							ลา
						</button>
					</div>
					<div class="divider divider-vertical"></div>
					<div class="flex-1">
						<p class="text-2xl">สถานะการลา</p>
					</div>
				</div>
			</div>
			<div class="leave-history p-5 rounded-xl shadow">
				<h2 class="text-4xl">ประวัติการลา</h2>
				<p class="text-center">
					<font-awesome-icon
						icon="times"
						size="5x"
						class="text-gray-300"
					/>
				</p>
				<p class="text-xl text-gray-300 text-center px-10">
					ไม่พบประวัติการลา
				</p>
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
		};
	},
	head() {
		return {
			title: "ลาราชการ",
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
	},
};
</script>
