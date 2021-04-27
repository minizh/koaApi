import User from './User'

const user = {
  name: 'zzz',
  age: 30,
  email: 'zzz@163.com'
}

// 增
const insertMethod = async () => {
  const data = new User(user)
  const result = await data.save()
  console.log(result)
}

// 查
const findMethod = async () => {
  const result = await User.find()
  console.log(result)
}

// 改
const updateMethod = async () => {
  const result = await User.updateOne({ name: 'zh1' }, { email: 'update@126.com' })
  console.log(result)
}
// 删
const deleteMethod = async () => {
  const result = await User.deleteOne({ name: 'zh2' })
  console.log(result)
}

deleteMethod()
