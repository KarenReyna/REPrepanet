import { Schema, Document, Model, model } from 'mongoose';

// instance methods
interface ITag extends ITagDocument { }

// class methods
interface ITagModel extends Model<ITag> {
    findOrCreateBatch(tags: any, callback?: (err, tags) => void);
}

// object attributes
interface ITagDocument extends Document {
    name: string,
    count: number
}

// database attributes (should be the same as ITagModel)
var TagSchema = new Schema({
    name: { type: String, maxlength: 100, unique: true, required: true },
    count: { type: Number, default: 1 }
});

TagSchema.statics.findOrCreateBatch = (tagsNames: Array<string>, callback?: (errs, tags) => void) => {
    var rawTags: any[] = [];
    var errs: any[] = [];
    tagsNames.forEach(tagName => {
        var query = Tag.where("name", tagName);
        query.findOne((err, tag) => {
            if (err) errs.push(err);
            if (tag) {
                tag.count += 1;
                return Tag.update({}, tag, (err, rawTag) => {
                    if (err) errs.push(err);
                    rawTags.push({ name: rawTag.name });
                });
            }
            return Tag.create({ name: tagName, count: 1 }, (err, rawTag) => {
                if (err) errs.push(err);
                rawTags.push({ name: rawTag.name });
            });
        });
    });
    if (callback) {
        callback(errs, rawTags);
    }
}

var Tag: ITagModel = model<ITag, ITagModel>('Tag', TagSchema);
export { Tag, ITag, ITagModel, ITagDocument };