<template>
  <div>
    <!-- Tailwind Sidebar -->
    <div class="sidebar bg-green-600 h-screen p-2 text-white">
      <div class="sidebar-wrapper">
        <div class="flex flex-row items-center title mb-10 px-4 py-2.5">
          <font-awesome-icon icon="briefcase" class="px-2 text-6xl" />
          <h1 class="text-3xl mx-2 font-bold text-white">Worktime</h1>
        </div>
        <ul class="nav">
          <NavItem
            v-for="item in items"
            :key="item.id"
            :title="item.title"
            :to="item.to"
            :icon="item.icon"
          />
        </ul>
      </div>
    </div>
    <!-- /Tailwind Sidebar -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          to: '/user',
          icon: 'tachometer-alt',
        },
        {
          id: 'register',
          title: 'ลงเวลาปฎิบัติราชการ',
          to: '/user/register',
          icon: 'briefcase',
        },
        {
          id: 'history',
          title: 'ประวัติการลงเวลา',
          to: '/user/history',
          icon: 'history',
        },
        {
          id: 'admin',
          title: 'สำหรับผู้ดูแลระบบ',
          to: '/admin',
          icon: 'user-shield',
        },
        {
          id: 'sign-out',
          title: 'ออกจากระบบ',
          to: '/',
          icon: 'sign-out-alt',
        },
      ],
    }
  },
}
</script>
