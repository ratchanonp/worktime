<template>
  <div class="flex-1 p-10 bg-gray-100">
    <h1 class="text-5xl font-bold mb-10">Dashboard</h1>
    <div class="bg-white rounded-xl w-full p-5 grid grid-cols-2 gap-4">
      <UserInfo fullname="นายวิสนุ ปานมาศ" position="ผู้อำนวยการ" class="mb-auto"/>
      <div class="today-status p-5 rounded-xl bg-gray-50">
        <p class="text-4xl font-bold mb-3">สถานะวันนี้</p>
        <History
          class="bg-white"
          location="บ้าน"
          weekDay="จันทร์"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
      </div>
      <div class="col-span-2 p-5 rounded-xl bg-gray-50">
        <p class="text-4xl font-bold mb-3">สถิติ</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'user',
  head() {
    return {
      title: 'Dashboard',
    }
  },
}
</script>
