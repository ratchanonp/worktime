<template>
	<div>
		<!-- Tailwind Sidebar -->
		<div class="sidebar bg-green-600 h-screen p-2 text-white">
			<div class="sidebar-wrapper">
				<div class="flex flex-row items-center title mb-10 px-4 py-2.5">
					<font-awesome-icon icon="briefcase" class="px-2 text-6xl" />
					<h1 class="text-3xl mx-2 font-bold text-white">Worktime</h1>
				</div>
				<ul class="nav">
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
					<li
						class="nav-item px-4 py-2.5 hover:bg-green-500 rounded"
						@click="onLogout"
					>
						<div class="flex flex-row">
							<div class="w-8 mr-2">
								<font-awesome-icon
									icon="sign-out-alt"
									class="text-xl"
								/>
							</div>
							<div>
								<span class="nav-link-text">ออกจากระบบ</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- /Tailwind Sidebar -->
	</div>
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
					to: "/user",
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
