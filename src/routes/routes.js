import combineRoutes from 'koa-combine-routers'
import loginRouter from './loginRouter'
import publicRouter from '../routes/publicRouter'

const Router = combineRoutes(
  loginRouter,
  publicRouter
)

export default Router
