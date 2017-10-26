import { Schema, Document, Model, model } from 'mongoose';

interface ICategoryDocument extends Document {
    _id : Schema.Types.ObjectId,
    name: string,
    description: string,
}

interface ICategory extends ICategoryDocument {}
interface ICategoryModel extends Model<ICategory> {}

var CategorySchema = new Schema({
    _id : Schema.Types.ObjectId,
    name: String,
    description: String,
});

var Category: ICategoryModel = model<ICategory, ICategoryModel>('Category', CategorySchema);
export { Category, ICategory, ICategoryModel, ICategoryDocument };