<template>
	<aside class="flex flex-col bg-white text-black w-72 min-h-screen">
		<div class="flex flex-row items-center px-5 md:px-5 py-2.5">
			<font-awesome-icon
				icon="briefcase"
				class="px-2 text-6xl text-primary-focus"
			/>
			<h1 class="text-3xl mx-2 font-bold leading-4">
				<span class="text-primary-focus lowercase">work</span><span class="uppercase text-neutral">time</span>
				<br><small class="text-xs font-thin text-gray-500">user</small>
			</h1>
		</div>
		<ul class="menu p-5 overflex-y-auto compact">
			<NavItem
				v-for="item in items"
				:key="item.id"
				:title="item.title"
				:to="item.to"
				:icon="item.icon"
			/>
			<NavItem
				v-if="isAdmin"
				title="สำหรับผู้ดูแลระบบ"
				to="/admin"
				icon="user-shield"
			/>
			<li @click="onLogout">
				<a class="flex">
					<div class="w-8 mr-2">
						<font-awesome-icon
							icon="sign-out-alt"
							class="text-xl"
						/>
					</div>
					ออกจากระบบ
				</a>
			</li>
		</ul>
	</aside>
</template>
<script>
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";

export default {
	data() {
		return {
			items: [
				{
					id: "dashboard",
					title: "Dashboard",
					to: "/user/",
					icon: "tachometer-alt",
				},
				{
					id: "register",
					title: "ลงเวลาปฎิบัติราชการ",
					to: "/user/register",
					icon: "briefcase",
				},
				{
					id: "history",
					title: "ประวัติการลงเวลา",
					to: "/user/history",
					icon: "history",
				},
			],
			isAdmin: false,
		};
	},
	created() {
		this.checkAdmin();
	},
	methods: {
		async checkAdmin() {
			const token = this.$apolloHelpers.getToken();
			const decode = await jwt_decode(token);
			if (decode.role.includes("ADMIN")) {
				this.isAdmin = true;
			}
			// console.log(decode);
		},
		async onLogout() {
			await this.$apolloHelpers.onLogout();
			this.$router.push("/");
		},
	},
};
</script>
