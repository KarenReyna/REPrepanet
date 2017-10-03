import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    idCustomized: string,
    name: string,
    email: string,
    password: string,
    passwordConf: string,
    privileges: string[],
}

var UserSchema = new Schema({
    idCustomized: String,
    name: String,
    email: String,
    password: String,
    passwordConf: String,
    privileges: Array<String>()
});

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

var User = model<IUser>('User', UserSchema);

export { User, IUser };