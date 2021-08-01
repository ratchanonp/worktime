<template>
	<div class="font-prompt min-h-screen flex">
		<!-- Mobile -->

		<!-- Sidebar -->
		<div class="w-72 h-screen sticky top-0">
			<SidebarAdmin />
		</div>

		<!-- Content -->
		<Nuxt />
	</div>
</template>

<script>
export default {
	middleware: ["isAuth", "isAdmin"],
};
</script>
