import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    idCustomized: string,
    userName: string,
    userEmail: string,
    userPassword: string,
    userPrivileges: string[],
}

var UserSchema = new Schema({
    idCustomized: String,
    userName: String,
    userEmail: String,
    userPassword: String,
    userPrivileges: Array<String>()
});

var User = model<IUser>('User', UserSchema);

export { User, IUser };