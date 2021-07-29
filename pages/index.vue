<template>
  <div class="flex h-screen font-prompt bg-green-100">
    <div class="content m-auto">
      <div class="title mb-20 text-center">
        <img class="mx-auto" src="logo.png" alt="">
        <h1 class="text-7xl font-bold">ระบบลงเวลาปฏิบัติราชการ</h1>
        <h2 class="text-5xl">โรงเรียนสินปุญคุณวิชญ์</h2>
      </div>
      <div class="bg-white p-5 rounded w-1/2 mx-auto">

      <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'เข้าสู่ระบบ',
    }
  },
}
</script>
