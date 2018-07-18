import Mock from 'mockjs'

const Lists = []

for (let i = 0; i < 10; i++) {
  Lists.push(Mock.mock({
    id: Mock.Random.guid(),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: '女'
  }))
}

export {
  Lists
}
