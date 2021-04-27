import Koa from 'koa'
import JWT from 'koa-jwt'
import Path from 'path'
import Router from './routes/routes'
import KoaHelmet from 'koa-helmet'
import KoaStatic from 'koa-static'
import KoaBody from 'koa-body'
import JsonUtil from 'koa-json'
import Cors from '@koa/cors'
import Compose from 'koa-compose'
import Compress from 'koa-compress'
import config from './config/index'
import errorHandle from './common/ErrorHandle'

const app = new Koa()

const isDevMode = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? false : true

// 定义公共路径，不需要 jwt 鉴权
const jwt = JWT({ secret: config.JWT_SECRET }).unless({ path: [/^\/public/, /\login/] })

// 使用 koa-componse 集成中间件
const middleware = Compose([
  KoaBody(),
  KoaStatic(Path.join(__dirname, '../public')),
  Cors(),
  JsonUtil({ pretty: false, param: 'pretty' }),
  KoaHelmet(),
  errorHandle,
  jwt
])

if (!isDevMode) {
  app.use(Compress())
}

app.use(middleware)
app.use(Router())

app.listen(3000)
