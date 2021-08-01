<template>
	<div class="relative font-prompt min-h-screen lg:flex">
		<!-- Mobile -->
		<div class="sidebar bg-green-600 lg:hidden">
			<div
				class="
					flex flex-row
					items-center
					justify-between
					title
					px-4
					py-1
					text-white
				"
			>
				<font-awesome-icon icon="briefcase" class="px-2 text-5xl" />
				<h1 class="text-2xl mx-2 font-bold">Worktime</h1>
				<font-awesome-icon
					v-if="!isShow"
					icon="bars"
					class="px-2 text-5xl"
					@click="showSidebar()"
				/>
				
				<font-awesome-icon
					v-else
					icon="times" 
					class="px-2 text-5xl"
					@click="showSidebar()"
				/>
			</div>
		</div>

		<!-- Sidebar -->
		<Sidebar
			:class="{ '-translate-x-full z-50': !isShow }"
			class="
				w-72
				h-screen
				absolute
				top-0
				sidebar
				bg-green-600
				h-screen
				p-2
				text-white
				inset-y-0
				left-0
				transform
				lg:relative lg:translate-x-0
				transition
				duration-200
				ease-in-out
			"
		/>

		<!-- Content -->
		<Nuxt />
	</div>
</template>

<script>
export default {
	middleware: ["isAuth"],
	data() {
		return {
			isShow: false,
		};
	},
	methods: {
		showSidebar() {
			this.isShow = !this.isShow;
			console.log(this.isShow);
		},
	},
};
</script>
