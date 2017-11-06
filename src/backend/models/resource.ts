import { Schema, model, Document, Model } from 'mongoose';
import { ICategory, Category } from './category';
import { ITag } from './tag';
import { IUpdate } from '.'

// instance methods
interface IResource extends IResourceDocument { }

// class methods
interface IResourceModel extends Model<IResource> { }

// object attributes
interface IResourceDocument extends Document {
    title: string,
    image: string,
    url: string,
    description: string,
    tags: Array<ITag>,
    category: ICategory,
    updated_by: Array<IUpdate>,
    type: string
}

// database attributes (should be the same as IResourceModel)
var ResourceSchema = new Schema({
    title: { type: String, maxlength: 100, required: true },
    image: { type: String, maxlength: 1000, required: true },
    url: { type: String, maxlength: 1000, required: true },
    description: { type: String, maxlength: 20000, required: true },
    tags: { type: Array<ITag>(), default: [] },
    category: { type: Category, required: true },
    updated_by: { type: Array<IUpdate>(), default: [] },
    type: { type: String, required: true, default: "web", maxlength: 50 }
});

var Resource: IResourceModel = model<IResource, IResourceModel>('Resource', ResourceSchema);

export { Resource, IResource, IResourceModel, IResourceDocument };