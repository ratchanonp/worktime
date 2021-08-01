/* eslint-disable no-console */

<template>
	<div class="flex-1 p-5 md:p-10 bg-gray-100">
		<h1 class="text-4xl md:text-5xl font-bold mb-3 md:mb-10">
			<font-awesome-icon icon="sign-in-alt" /> ยืนยันการลงชื่อเข้า
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
				@submit.prevent="onSubmit"

			>
				<p class="text-4xl text-center mb-10">ยืนยันการลงชื่อเข้า</p>
				<label for="location" class="text-xl mb-4">สถานที่ทำงาน</label>
				<div class="grid grid-cols-2 gap-4 mb-10 w-full">
					<div
						class="
							flex flex-inline
							p-3
							border-2 border-gray-200
							shadow-lg
							rounded-lg
						"
					>
						<input
							id="home"
							v-model="location"
							value="home"
							class="w-6 h-6 appearance-none text-green-600"
							type="radio"
							name="location"
							required
						/>
						<label
							for="home"
							class="ml-3 cursor-pointer checked:text-green-500"
						>
							บ้าน
						</label>
					</div>
					<div
						class="
							flex flex-inline
							p-3
							border-2 border-gray-200
							shadow-lg
							rounded-lg
						"
					>
						<input
							id="school"
							v-model="location"
							value="school"
							class="w-6 h-6 appearance-none text-green-600"
							type="radio"
							name="location"
							required
						/>
						<label
							for="school"
							class="ml-3 cursor-pointer checked:text-green-500"
						>
							โรงเรียน
						</label>
					</div>
				</div>
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
						<font-awesome-icon icon="sign-in-alt" /> ลงชื่อเข้า
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
import userCheckIn from "../../gql/userCheckIn.gql";
export default {
	layout: "user",
	data() {
		return {
			location: "",
		};
	},
	methods: {
		async onSubmit() {
			const { location } = this;
			try {
				const res = await this.$apollo.mutate({
					mutation: userCheckIn,
					variables: location,
				});
				// eslint-disable-next-line no-console
				console.log(res);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		}
	},
};
</script>
