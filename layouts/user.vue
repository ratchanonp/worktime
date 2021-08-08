<template>
	<div class="font-prompt drawer drawer-mobile text-base-content">
		<input id="sidebar-drawer" type="checkbox" class="drawer-toggle" />

		<!-- Content -->
		<div class="drawer-content">
			<!-- Navbar -->
			<div class="navbar bg-white px-5 py-2.5 w-full text-green-500 lg:hidden">
				<div class="flex-1 flex xl:hidden navbar-start items-center">
					<font-awesome-icon icon="briefcase" class="text-5xl" />
					<h1 class="text-3xl mx-2 font-bold leading-4 tracking-wider">
						<span class="lowercase">work</span><span class="uppercase text-neutral">time</span>
						<br><small class="text-xs font-thin text-gray-500">user</small>
					</h1>
				</div>
				<div class="flex-1 navbar-end xl:hidden">
					<label
						for="sidebar-drawer"
						class="btn btn-sqaure btn-ghost"
					>
						<font-awesome-icon
							icon="bars"
							class="text-4xl cursor-pointer"
						/>
					</label>
				</div>
			</div>
			<!-- Page Content -->
			<Nuxt class="p-5" />
		</div>

		<!-- Sidebar -->
		<div class="drawer-side">
			<label for="sidebar-drawer" class="drawer-overlay"></label>
			<Sidebar class="border-r" />
		</div>
	</div>
</template>

<script>
export default {
	middleware: ["isAuth"],
};
</script>
