import svgCaptcha from 'svg-captcha'
import { getValue, setValue } from '@/config/RedisConfig'

class PublicController {
  constructor() { }
  async getCaptcha (ctx) {
    const body = ctx.request.query
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38
    })
    // 设置图片验证码有效时间为3分钟
    setValue(body.sid, newCaptcha.text, 200)
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}
export default new PublicController()
