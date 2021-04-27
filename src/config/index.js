// 定义数据库连接地址：mongodb://用户名:密码@服务IP:Port/数据库名
const DB_URL = 'mongodb://test:123456@127.0.0.1:27017/testdb'

const REDIS = {
  host: '127.0.0.1',
  port: '15001',
  password: '123456',
}

const JWT_SECRET = '*15DSds124&lijsaSJjdsIAS0ssSD**1!$DAS12KMmjksdl'

export default {
  DB_URL,
  REDIS,
  JWT_SECRET
}
