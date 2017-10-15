import { Schema, Document, Model, model } from 'mongoose';

interface ICollectionDocument extends Document {
    name: string,
    description: string,
}

interface ICollection extends ICollectionDocument {}
interface ICollectionModel extends Model<ICollection> {}

var CollectionSchema = new Schema({
    name: String,
    description: String,
});

var Collection: ICollectionModel = model<ICollection, ICollectionModel>('Collection', CollectionSchema);
export { Collection, ICollection, ICollectionModel, ICollectionDocument };