<template>
  <div class="flex flex-col md:flex-row rounded-xl border-2 p-5">
    <!-- Date -->
    <div class="w-full md:w-1/2">
      <p v-if="weekDay == 'จันทร์'" class="text-4xl text-yellow-300 font-bold">
        {{ weekDay }}
      </p>
      <p
        v-else-if="weekDay == 'อังคาร'"
        class="text-4xl text-pink-300 font-bold"
      >
        {{ weekDay }}
      </p>
      <p v-else-if="weekDay == 'พุธ'" class="text-4xl text-green-300 font-bold">
        {{ weekDay }}
      </p>
      <p
        v-else-if="weekDay == 'พฤหัสบดี'"
        class="text-4xl text-yellow-600 font-bold"
      >
        {{ weekDay }}
      </p>
      <p
        v-else-if="weekDay == 'ศุกร์'"
        class="text-4xl text-blue-300 font-bold"
      >
        {{ weekDay }}
      </p>
      <p class="text-gray-500">26 กรกฎาคม 2564</p>
      <p class="text-gray-500 text-sm">{{ location }}</p>
    </div>
    <!-- CheckIn -->
    <div class="flex flex-col md:flex-row w-full md:w-1/2">
      <div
        class="
          w-1/2
          
          flex flex-row
          md:flex-col
          text-right
          align-middle
          text-xl
          md:text-3xl
        "
      >
        <p class="text-green-600 mr-3 md:mr-0 md:mb-3">
          <font-awesome-icon icon="sign-in-alt" />
        </p>
        <p class="text-gray-500">{{ checkIn }}</p>
      </div>
      <!-- CheckOut -->
      <div
        class="
          w-1/2
          
          flex flex-row
          md:flex-col
          text-right
          align-middle
          text-xl
          md:text-3xl
        "
      >
        <p class="text-red-600 mr-3 md:mr-0 md:mb-3">
          <font-awesome-icon icon="sign-out-alt" />
        </p>
        <p class="text-gray-500">{{ checkOut }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weekDay: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
  },
}
</script>
