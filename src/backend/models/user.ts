import { Schema, model, Document, Model } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

interface IUserDocument extends Document {
    idCustomized: string,
    name: string,
    email: string,
    password: string,
    passwordConf: string,
    privileges: string[],
}

interface IUser extends IUserDocument {
  comparePassword(password: string): boolean;
}

interface IUserModel extends Model<IUser> {
  authenticate(email, password, callback) 
}

var UserSchema = new Schema({
    idCustomized: String,
    name: String,
    email: String,
    password: String,
    privileges: Array<String>()
});

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err: any = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      if (user.comparePassword(password) === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
}

UserSchema.methods.comparePassword = function (password): boolean {
  if (bcrypt.compareSync(password, this.password)) return true;
  return false;
}

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, null, null, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

var User: IUserModel = model<IUser, IUserModel>('User', UserSchema);

export { User, IUser, IUserModel, IUserDocument };