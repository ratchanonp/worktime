<template>
	<form v-if="!isAuthenticated" class="font-light" @submit.prevent="onSubmit">
		<div class="input-group mb-2 flex-inline">
			<label for="email" class="text-md text-neutral">Email</label>
			<input
				id="username"
				v-model="user.username"
				class="
					border-2 border-grey-500
					px-2
					py-1
					w-full
					rounded
					focus:outline-none
					focus:ring-2
					focus:ring-green-600
					focus:border-transparent
				"
				type="email"
				placeholder="email@sinpun.ac.th"
			/>
		</div>
		<div class="input-group mb-5 flex-inline">
			<label for="password" class="text-md text-neutral">รหัสผ่าน</label>
			<input
				id="password"
				v-model="user.password"
				class="
					border-2 border-grey-500
					px-2
					py-1
					w-full
					rounded
					focus:outline-none
					focus:ring-2
					focus:ring-green-600
					focus:border-transparent
				"
				type="password"
				placeholder="เลขประจำตัวประชาชน"
			/>
		</div>
		<div class="flex">
			<button
				type="submit"
				:class="{ loading : loggingIn}"
				class="
					w-full
					hover:bg-primary-focus
					text-white
					px-3
					py-1.5
					rounded
					text-lg
					btn
					btn-primary
				"
			>
				{{ loggingIn ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ" }}
			</button>
		</div>
	</form>
</template>

<script>
import userLogin from "../gql/userLogin.gql";
export default {
	data() {
		return {
			isAuthenticated: false,
			loggingIn: false,
			user: {
				username: "",
				password: "",
			},
		};
	},
	created() {
		this.authCheck();
	},
	methods: {
		authCheck() {
			const hasToken = !!this.$apolloHelpers.getToken();
			if(hasToken) {
				this.$router.push({ name: "user" });
				this.isAuthenticated = true;
			}
		},
		async onSubmit() {
			this.loggingIn = true;
			const user = this.user;
			try {
				const res = await this.$apollo
					.mutate({
						mutation: userLogin,
						variables: user,
					})
					.then(({ data }) => data);
				this.isAuthenticated = true;

				await this.$apolloHelpers.onLogin(res.login, undefined, {
					expires: 1,
				});
				this.$router.push({ name: "user" });
				// eslint-disable-next-line no-console
				console.log(res);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
				this.isAuthenticated = false;
				this.loggingIn = false;
				this.$swal({
					title: "เกิดข้อผิดพลาด",
					text: e.message,
					icon: "error",
				});
			}
		},
	},
	
};
</script>
