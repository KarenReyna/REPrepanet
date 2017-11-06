import { Schema, Document, Model, model } from 'mongoose';
import { IUpdate } from '.'

interface ICategoryDocument extends Document {
    name: string,
    description: string,
    updated_by: Array<IUpdate>,    
}

interface ICategory extends ICategoryDocument { }
interface ICategoryModel extends Model<ICategory> { }

var CategorySchema = new Schema({
    name: { type: String, maxlength: 200, required: true },
    description: { type: String, maxlength: 20000, default: "" },
    updated_by: { type: Array<IUpdate>(), default: [] },    
});

var Category: ICategoryModel = model<ICategory, ICategoryModel>('Category', CategorySchema);
export { Category, ICategory, ICategoryModel, ICategoryDocument };