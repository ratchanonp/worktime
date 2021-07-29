<template>
  <div>
    <!-- Tailwind Sidebar -->
    <div class="sidebar bg-green-600 h-screen p-2 text-white">
      <div class="sidebar-wrapper">
        <div class="flex flex-row items-center title mb-10 px-4 py-2.5">
          <font-awesome-icon icon="briefcase" class="px-2 text-6xl" />
          <h1 class="text-3xl mx-2 font-bold text-white leading-4">
            Worktime <span class="text-xs font-normal">admin</span>
          </h1>
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
          to: '/admin',
          icon: 'tachometer-alt',
        },
        {
          id: 'report',
          title: 'รายงาน',
          to: '/admin/report',
          icon: 'clipboard-list',
        },
        {
          id: 'user-report',
          title: 'รายงานรายบุคคล',
          to: '/admin/user-report',
          icon: 'portrait',
        },
        {
          id: 'user-manage',
          title: 'จัดการผู้ใช้',
          to: '/admin/user',
          icon: 'users-cog',
        },
        {
          id: 'back-user',
          title: 'กลับหน้าผู้ใช้งาน',
          to: '/user',
          icon: 'chevron-left',
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
