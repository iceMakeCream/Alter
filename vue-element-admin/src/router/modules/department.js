/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const deptRouter = {
  path: '/dept',
  component: Layout,
  redirect: 'noRedirect',
  name: 'dept',
  meta: {
    title: '部门管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/dept/DeptList'),
      name: 'deptList',
      meta: { title: '部门列表', noCache: true }
    },
    {
      path: 'chart',
      component: () => import('@/views/dept/DeptChart'),
      name: 'deptchart',
      meta: { title: '部门图表', noCache: true }
    }
  ]
}

export default deptRouter
