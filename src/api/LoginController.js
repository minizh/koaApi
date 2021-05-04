
import jsonwebtoken from 'jsonwebtoken'
import config from '@/config/index'
import { checkCode } from '@/common/Util'
import UserModel from '@/model/user';

class LoginController {
  constructor() { }
  async login (ctx) {
    // 接收用户的数据
    // 验证图片验证码的时效性、正确性
    // 验证用户账号密码是否正确
    // 返回 Token
    const { body } = ctx.request
    const sid = body.sid
    const code = body.code
    // 校验验证码的时效性、正确性
    const codeValidate = await checkCode(sid, code)
    if (codeValidate) {
      // 校验登录用户名、密码的正确性
      let userValidate = false
      const user = await UserModel.findOne({ username: body.username })
      if (user.password === body.password) {
        userValidate = true
      }
      // MongoDB 查库
      if (userValidate) {
        // 验证通过返回 token
        // 过期时间设置为1天
        // Date.now() 获取当前时间戳
        const token = jsonwebtoken.sign({
          _id: 'zh',
          // exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24
        },
          config.JWT_SECRET,
          { expiresIn: '1d' }
        )
        ctx.body = {
          code: 200,
          token: token
        }
      } else {
        // 用户名、密码验证失败
        ctx.body = {
          code: 404,
          msg: '用户名或密码错误'
        }
      }
    } else {
      // 图片验证码校验失败
      ctx.body = {
        code: 401,
        msg: '图片验证码不正确，请检查！'
      }
    }
  }
}
export default new LoginController()
