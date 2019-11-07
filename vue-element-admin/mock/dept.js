import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    "peoples|10-30":10,
    deptName: '@title(5,10)'
  }))
}

export default [
  {
    url: '/dept/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          deptList:List
        }
      }
    }
  }
]

