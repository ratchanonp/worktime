<template>
	<li>
		<NuxtLink class="nav-link flex flex-row" :to="to">
			<div class="w-8 mr-2">
				<font-awesome-icon :icon="icon" class="text-xl" />
			</div>
			<div>
				<span class="nav-link-text">{{ title }}</span>
			</div>
		</NuxtLink>
	</li>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
	.nuxt-link-exact-active {
		color: #fff !important;
		background-color: #40BF6C !important;
	}
</style>
