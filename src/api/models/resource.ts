import { Schema, model, Document, Model } from 'mongoose';

interface IResourceDocument extends Document {
    name: string,
    description: string,
    url: string,
    image: string, // CHECK
    tags: string[],
}

interface IResource extends IResourceDocument {}
interface IResourceModel extends Model<IResource> {}

var ResourceSchema = new Schema({
    name: String,
    description: String,
    url: String,
    image: String,
    tags: Array<String>()
});

var Resource: IResourceModel = model<IResource, IResourceModel>('User', ResourceSchema);

export { Resource, IResource, IResourceModel, IResourceDocument };