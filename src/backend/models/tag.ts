import { Schema, Document, Model, model } from 'mongoose';

interface ITagDocument extends Document {
    _id : Schema.Types.ObjectId,
    name: string,
}

interface ITag extends ITagDocument {}
interface ITagModel extends Model<ITag> {}

var TagSchema = new Schema({ 
    _id : Schema.Types.ObjectId,
    name: { type: String, unique: true }
});

var Tag: ITagModel = model<ITag, ITagModel>('Tag', TagSchema);
export { Tag, ITag, ITagModel, ITagDocument };