<template>
	<aside class="flex flex-col bg-white text-black w-72 min-h-screen">
		<div class="flex flex-row items-center px-5 md:px-5 py-2.5">
			<font-awesome-icon
				icon="briefcase"
				class="px-2 text-6xl text-primary-focus"
			/>
			<h1 class="text-3xl mx-2 font-bold leading-4">
				<span class="text-primary-focus lowercase">work</span><span class="uppercase text-neutral">time</span>
				<small class="text-xs font-thin text-gray-500">admin</small>
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
		</ul>
	</aside>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					id: "dashboard",
					title: "Dashboard",
					to: "/admin",
					icon: "tachometer-alt",
				},
				{
					id: "report",
					title: "รายงาน",
					to: "/admin/report",
					icon: "clipboard-list",
				},
				{
					id: "user-report",
					title: "รายงานรายบุคคล",
					to: "/admin/user-report",
					icon: "portrait",
				},
				{
					id: "user-manage",
					title: "จัดการผู้ใช้",
					to: "/admin/user",
					icon: "users-cog",
				},
				{
					id: "back-user",
					title: "กลับหน้าผู้ใช้งาน",
					to: "/user",
					icon: "chevron-left",
				},
			],
		};
	},
};
</script>
