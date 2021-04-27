import { getValue, setValue, getHValue, delValue } from '@/config/RedisConfig'

setValue('zzz', '11121')
getValue('zzz').then(res => {
  console.log(res)
})

setValue('json', {
  a: 1,
  b: 2,
  c: [1, 2, 3],
  d: {
    'test': 0,
    "testObj": { a: 0, b: [1, 2, 3] },
    "array": [0, 21]
  }
})
getHValue('json').then(res => {
  console.log('json: ', res)
})

delValue('zzz')
