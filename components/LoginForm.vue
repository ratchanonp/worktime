<template>
  <div class="font-light">
    <div class="input-group mb-2 flex-inline">
      <label for="email" class="text-md">Email</label>
      <input
        id="email"
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
        name="email"
        placeholder="email@sinpun.ac.th"
      />
    </div>
    <div class="input-group mb-5 flex-inline">
      <label for="password" class="text-md">รหัสผ่าน</label>
      <input
        id="password"
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
        name="password"
        placeholder="เลขประจำตัวประชาชน"
      />
    </div>
    <div class="flex">
      <button
        class="
          bg-green-500
          w-full
          hover:bg-green-600
          text-white
          px-2
          py-1
          rounded
          text-lg
        "
      >
        เข้าสู่ระบบ
      </button>
    </div>
  </div>
</template>
