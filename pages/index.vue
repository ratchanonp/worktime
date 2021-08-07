<template>
	<div class="flex min-h-screen font-prompt mx-auto justify-center">
			<div class="flex flex-col my-auto">
				<div class="title mb-10">
					<img class="w-32 h-32" src="logo.png" alt="" />
					<h1 class="text-2xl md:text-4xl font-bold text-black">
						ระบบลงเวลาปฏิบัติราชการ
					</h1>
					<h2 class="text-1xl md:text-2xl text-primary">
						โรงเรียนสินปุญคุณวิชญ์
					</h2>
				</div>
				<div class="bg-white p-5 w-1/2 rounded-xl shadow-xl w-full mb-5">
					<LoginForm />
				</div>
				<small class="text-white"
					>&copy; Ratchanon Panmas</small
				>
			</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "เข้าสู่ระบบ",
		};
	},
};
</script>
