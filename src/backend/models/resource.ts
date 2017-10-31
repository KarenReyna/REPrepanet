import { Schema, model, Document, Model } from 'mongoose';

interface IResourceDocument extends Document {
    _id: string,
    name: string,
    description: string,
    url: string,
    image: string, // CHECK
    tags: string[],
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
}

interface IResource extends IResourceDocument {}
interface IResourceModel extends Model<IResource> {}

var ResourceSchema = new Schema({
    _id: String,
    name: String,
    description: String,
    url: String,
    image: String,
    tags: Array<String>(),
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

var Resource: IResourceModel = model<IResource, IResourceModel>('Resource', ResourceSchema);

export { Resource, IResource, IResourceModel, IResourceDocument };