<template>
	<div class="user flex flex-col md:flex-row mb-3 bg-gray-50 p-5 rounded-xl justify-center md:justify-start">
		<font-awesome-icon
			class="md:mr-5 text-gray-300 mx-auto"
			size="5x"
			icon="user-circle"
		/>

		<div class="flex-1 md:w-full flex flex-col">
			<h1
				class="
					text-2xl
					md:text-4xl
					font-bold
					md:mb-3
					text-center
					md:text-left
				"
			>
				{{ fullname }}
			</h1>
			<div class="flex items-baseline mx-auto md:m-0">
				<font-awesome-icon icon="briefcase" class="text-md text-gray-400 mr-2"/>
				<p class="text-md text-gray-400 md:text-left">
					{{ position }}
				</p>
			</div>
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
