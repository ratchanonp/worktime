<template>
  <div class="flex-1 p-5 md:p-10 bg-gray-100">
    <h1 class="text-4xl md:text-5xl font-bold mb-3 md:mb-10">
      <font-awesome-icon icon="history" /> ประวัติการลงเวลา
    </h1>
    <div class="bg-white rounded-xl w-full p-5">
      <UserInfo fullname="นายวิสนุ ปานมาศ" position="ผู้อำนวยการ"/>
      <!-- eslint-disable-next-line vue/attribute-hyphenation -->
      <!-- History -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <History
          location="บ้าน"
          weekDay="จันทร์"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="อังคาร"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="พุธ"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="พฤหัสบดี"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="ศุกร์"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="จันทร์"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="อังคาร"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="พุธ"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="พฤหัสบดี"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="ศุกร์"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="จันทร์"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="อังคาร"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="พุธ"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="พฤหัสบดี"
          checkIn="08.30.00"
          checkOut="17.00.00"
        />
        <History
          location="บ้าน"
          weekDay="ศุกร์"
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
      title: 'ประวัติการลงเวลา',
    }
  },
}
</script>
