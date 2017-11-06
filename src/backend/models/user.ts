import { Schema, model, Document, Model } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

// instance methods
interface IUser extends IUserDocument {
  comparePassword(password: string): boolean;
}

// class methods
interface IUserModel extends Model<IUser> {
  authenticate(email, password, callback)
}

// object attributes
interface IUserDocument extends Document {
  name: string,
  email: string,
  password: string,
  isAdmin: boolean,
}

// database attributes (should be the same as IUserDocument)
var UserSchema = new Schema({
  name: { type: String, maxlength: 200, required: true },
  email: { type: String, maxlength: 100, required: true },
  password: { type: String, maxlength: 1000, required: true },
  isAdmin: { type: Boolean, default: false, required: true }
});

// authenticate input against database
UserSchema.statics.authenticate = (email, password, callback) => {
  return User.findOne({ email: email }).exec(function (err, user) {
    if (err) {
      return callback(err)
    } else if (!user) {
      var err: any = new Error('User not found.');
      err.status = 401;
      return callback(err);
    }
    if (user.comparePassword(password) === true) {
      return callback(null, user);
    }
    return callback();
  });
}

UserSchema.methods.comparePassword = (password): boolean => {
  if (bcrypt.compareSync(password, this.password)) return true;
  return false;
}

// hashing a password before saving it to the database
UserSchema.pre('save', (next) => {
  return bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

var User: IUserModel = model<IUser, IUserModel>('User', UserSchema);

export { User, IUser, IUserModel, IUserDocument };