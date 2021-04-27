import mongoose from '../config/DBHelper'

// 连接 collections: model + schema
const Schema = mongoose.Schema

const UserScheam = new Schema({
  'username': { type: String },
  'password': { type: String },
})

const UserModel = mongoose.model('users', UserScheam)

export default UserModel
