import { Collection } from '../models/collection';

export class CollectionController {
    public createCollection(req: any, res: any) {
        console.log("Creating collection...")
        console.log(req.body.name);
        console.log(req.body.description);
        if (req.body.name && 
            req.body.description) {

            var collectionData = {
                name: req.body.name,
                description: req.body.description,
            }

            console.log(collectionData);
            Collection.create(collectionData, function (err, collection ) {
                console.log("collection : " , collection);
                console.log("err : " , err);
                if (err) {
                    console.log("error");
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.send({ error: err.message});
                } else {
                    console.log("user");
                    req.session.collectionId = collection._id;                    
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.send(collection);
                }
            });
        } else {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.send({ error: 'All fields required.'});
        }
    }
}