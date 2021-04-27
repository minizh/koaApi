class aApi {
  constructor() { }
  a (ctx) {
    ctx.body = {
      "message": 'hellow form a module  babel0'
    }
  }
}
export default new aApi()
