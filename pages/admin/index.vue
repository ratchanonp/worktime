<template>
	<div class="flex-1">
		<!-- Title -->
		<h1
			class="
				text-4xl
				font-medium
				md:text-5xl
				mb-3
				md:mb-10
				text-base-content
				border-primary border-b-8
				inline-block
			"
		>
			<font-awesome-icon icon="tachometer-alt" /> Dashboard
		</h1>
		<!-- Content -->
		<div class="bg-white rounded-xl w-full min-h-screen">
			<!-- Stats -->
			<div class="stats w-full shadow mb-5 hidden md:flex">
				<!-- All Users -->
				<div class="stat">
					<font-awesome-icon
						icon="user"
						class="stat-figure text-secondary text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p class="stat-title">บุคลากร</p>
						<p class="stat-value text-secondary">
							{{
								todayCheckedIns.length +
								todayNotCheckedIn.length
							}}
						</p>
						<p class="stat-desc">คน</p>
					</div>
				</div>
				<!-- Sign in -->
				<div class="stat">
					<font-awesome-icon
						icon="sign-in-alt"
						class="stat-figure text-primary text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p class="stat-title">ลงชื่อเข้า</p>
						<p class="stat-value text-primary">
							{{ todayCheckedIns.length }}
						</p>
						<p class="stat-desc">คน</p>
					</div>
				</div>
				<!-- Sign Out -->
				<div class="stat">
					<font-awesome-icon
						icon="sign-out-alt"
						class="stat-figure text-accent text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p class="stat-title">ลงชื่อออก</p>
						<p class="stat-value text-accent">
							{{ todayCheckedOuts.length }}
						</p>
						<p class="stat-desc">คน</p>
					</div>
				</div>
			</div>
			<!-- End Stats -->
			<!-- Stats Mobile -->
			<div class="stats w-full shadow mb-5 grid-flow-row md:hidden">
				<!-- All Users -->
				<div class="stat">
					<font-awesome-icon
						icon="user"
						class="stat-figure text-secondary text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p class="stat-title">บุคลากร</p>
						<p class="stat-value text-secondary">
							{{
								todayCheckedIns.length +
								todayNotCheckedIn.length
							}}
						</p>
						<p class="stat-desc">คน</p>
					</div>
				</div>
				<!-- Sign in -->
				<div class="stat">
					<font-awesome-icon
						icon="sign-in-alt"
						class="stat-figure text-primary text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p class="stat-title">ลงชื่อเข้า</p>
						<p class="stat-value text-primary">
							{{ todayCheckedIns.length }}
						</p>
						<p class="stat-desc">คน</p>
					</div>
				</div>
				<!-- Sign Out -->
				<div class="stat">
					<font-awesome-icon
						icon="sign-out-alt"
						class="stat-figure text-accent text-6xl mr-5"
					/>
					<div class="flex flex-col">
						<p class="stat-title">ลงชื่อออก</p>
						<p class="stat-value text-accent">
							{{ todayCheckedOuts.length }}
						</p>
						<p class="stat-desc">คน</p>
					</div>
				</div>
			</div>
			<!-- End Stats Mobile -->
			<!-- Grid -->
			<div
				class="
					grid grid-cols-1
					md:grid-cols-2
					gap-4
					xl:mb-auto
					text-black
				"
			>
				<!-- Todays CheckedIn -->
				<!-- Loading State -->
				<p v-if="$apollo.queries.todayCheckedIns.loading">Loading</p>
				<!-- Display State -->
				<div v-else class="checkin p-4 shadow rounded-lg">
					<h2
						class="
							inline-block
							text-base-content text-xl
							mb-3
							border-primary border-b-4
							pb-1
						"
					>
						รายชื่อผู้ลงชื่อเข้า
					</h2>

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
									text-primary text-left
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
						<p class="text-xs text-gray-400 text-right">
							ทั้งหมด {{ todayCheckedIns.length }} คน
						</p>
					</div>
				</div>
				<!-- End Todays CheckedIn -->
				<!-- Today CheckedOut -->
				<!-- Loading State -->
				<p v-if="$apollo.queries.todayCheckedOuts.loading">Loading</p>
				<!-- Display State -->
				<div v-else class="checkout p-4 shadow rounded-lg xl:mb-auto">
					<h1
						class="
							inline-block
							text-base-content text-xl
							mb-3
							border-primary border-b-4
							pb-1
						"
					>
						รายชื่อผู้ลงชื่อออก
					</h1>
					<p v-if="todayCheckedOuts.length == 0">ไม่มีข้อมูล</p>
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
						<p class="text-xs text-gray-400 text-right">
							ทั้งหมด {{ todayCheckedOuts.length }} คน
						</p>
					</div>
				</div>
				<!-- End Today CheckedOut -->
				<!-- Today NotCheckedIn -->
				<!-- Loading State -->
				<p v-if="$apollo.queries.todayNotCheckedIn.loading">Loading</p>
				<!-- Display State -->
				<div v-else class="notcheckin p-4 shadow rounded-lg xl:mb-auto">
					<h1
						class="
							inline-block
							text-base-content text-xl
							mb-3
							border-primary border-b-4
							pb-1
						"
					>
						รายชื่อผู้ยังไม่ได้ลงชื่อเข้า
					</h1>

					<p v-if="todayNotCheckedIn.length == 0">
						{{ todayNotCheckedIn }}
					</p>
					<ul class="grid grid-cols-1 md:grid-cols-2">
						<li
							v-for="usernocheckin in todayNotCheckedIn"
							:key="usernocheckin.fullName"
						>
							{{ usernocheckin.fullName }}
						</li>
					</ul>
					<p class="text-xs text-gray-400 text-right">
						ทั้งหมด {{ todayNotCheckedIn.length }} คน
					</p>
				</div>
				<!-- End Today NotCheckedIn -->
				<!-- Today NotCheckedOut -->
				<!-- Loading State -->
				<p v-if="$apollo.queries.todayNotCheckedOut.loading">Loading</p>
				<div
					v-else
					class="notcheckout p-4 shadow rounded-lg xl:mb-auto"
				>
					<h1
						class="
							inline-block
							text-base-content text-xl
							mb-3
							border-primary border-b-4
							pb-1
						"
					>
						รายชื่อผู้ยังไม่ได้ลงชื่อออก
					</h1>

					<p v-if="todayNotCheckedOut.length == 0">ไม่มีข้อมูล</p>
					<ul class="grid grid-cols-2">
						<li
							v-for="usernocheckout in todayNotCheckedOut"
							:key="usernocheckout.fullName"
						>
							{{ usernocheckout.fullName }}
						</li>
					</ul>
					<p class="text-xs text-gray-400 text-right">
						ทั้งหมด {{ todayNotCheckedOut.length }} คน
					</p>
				</div>
				<!-- End Today NotCheckedOut -->
			</div>
			<!-- End Grid -->
		</div>
		<!-- End Content -->
	</div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import gql from "graphql-tag";
export default {
	layout: "admin",
	data() {
		return {
			todayCheckedIns: [],
			todayCheckedOuts: [],
			todayNotCheckedIn: [],
			todayNotCheckedOut: [],
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
};
</script>
