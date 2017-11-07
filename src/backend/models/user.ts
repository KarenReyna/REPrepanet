import { Schema, model, Document, Model } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

// instance methods
interface IUser extends IUserDocument { }

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
  email: { type: String, maxlength: 100, required: true, unique: true },
  password: { type: String, maxlength: 1000, required: true },
  isAdmin: { type: Boolean, default: false, required: true }
});

// authenticate input against database
UserSchema.statics.authenticate = async (email, password, callback) => {
  return await User.findOne({ email: email }).exec((err, user) => {
    if (!err && user && !bcrypt.compareSync(password, user.password)) {
      err = new Error("Wrong email or password.");
      err.status = 401;
    } else if (!err && !user) {
      err = new Error("Wrong email or password.");
      err.status = 401;
    }
    if (err) {
      return callback(err);
    }
  });
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