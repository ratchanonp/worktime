<template>
  <div class="flex-1 p-5 md:p-10 bg-gray-100">
    <h1 class="text-4xl md:text-5xl font-bold mb-3 md:mb-10">
      <font-awesome-icon icon="briefcase" /> ลงเวลาปฎิบัติราชการ
    </h1>
    <div class="bg-white rounded-xl min-w-full p-5">
      <UserInfo fullname="นายวิสนุ ปานมาศ" position="ผู้อำนวยการ" />

      <div class="regis p-5 mb-3 rounded-xl bg-gray-50">
        <div class="flex flex-col md:flex-row">
          <p class="text-4xl font-bold mb-3 md:w-1/2">ลงเวลาปฎิบัติราชการ</p>

          <p class="text-lg md:text-2xl text-gray-500 mb-3 text-left md:text-right md:w-1/2">
            <font-awesome-icon icon="calendar-alt" /> วันจันทร์ ที่ 26 กรกฎาคม
            2564
          </p>
        </div>

        <div class="grid xl:grid-cols-2 md:grid-cols-1 gap-4">
          <div
            class="
              flex flex-row
              md:flex-col
              bg-green-400
              p-5
              rounded-xl
              text-center text-white text-3xl
              md:text-6xl
            "
          >
            <font-awesome-icon
              class="md:mx-auto md:mb-10 mr-5"
              icon="sign-in-alt"
            />
            <p class="font-bold">ลงชื่อเข้า</p>
          </div>
          <div
            class="
              flex flex-row
              md:flex-col
              bg-red-400
              p-5
              rounded-xl
              text-center text-white text-3xl
              md:text-6xl
            "
          >
            <font-awesome-icon
              class="md:mx-auto md:mb-10 mr-5"
              icon="sign-out-alt"
            />
            <p class="font-bold">ลงชื่อออก</p>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  layout: 'user',
  head() {
    return {
      title: 'ลงเวลาปฎิบัติราชการ',
    }
  },
}
</script>
