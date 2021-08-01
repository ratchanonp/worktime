<template>
	<div class="flex-1 p-5 md:p-10 bg-gray-100">
		<h1 class="text-4xl md:text-5xl font-bold mb-3 md:mb-10">
			<font-awesome-icon icon="sign-out-alt" /> ยืนยันการลงชื่อออก
		</h1>
		<div class="bg-white rounded-xl min-w-full p-5">
			<form
				class="
					flex flex-col
					w-1/2
					border-2
					p-5
					rounded-xl
					shadow-xl
					mx-auto
				"
				action=""
			>
				<p class="text-4xl text-center mb-10">ยืนยันการลงชื่อออก</p>
				<div class="flex justify-center">
					<button
						class="
							w-1/4
							mx-2
							bg-green-500
							py-2
							text-white text-xl
							rounded-md
							hover:bg-green-600
						"
						type="submit"
					>
						<font-awesome-icon icon="sign-out-alt" /> ลงชื่อออก
					</button>
					<NuxtLink
						to="/user/register"
						class="
							text-center
							w-1/4
							mx-2
							bg-red-500
							py-2
							text-white text-xl
							rounded-md
							hover:bg-red-600
						"
					>
						<font-awesome-icon icon="ban" /> ยกเลิก
					</NuxtLink>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	layout: "user",
	
};
</script>
