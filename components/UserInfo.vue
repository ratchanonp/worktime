<template>
	<div class="user flex flex-col md:flex-row mb-3 shadow p-5 rounded-xl text-base-content">
		<font-awesome-icon
			class="md:mr-5 text-gray-300 mx-auto"
			size="5x"
			icon="user-circle"
		/>

		<div class="md:w-full">
			<h1
				class="
					text-2xl
					text-black
					md:text-4xl
					font-bold
					md:mb-3
					text-center
					md:text-left
					text-base-content
				"
			>
				{{ fullname }}
			</h1>
			<p class="text-md text-gray-400 text-center md:text-left">
				<font-awesome-icon icon="briefcase" /> {{ position }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		fullname: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
	},
};
</script>
