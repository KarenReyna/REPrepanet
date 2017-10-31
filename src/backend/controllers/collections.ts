import { Collection } from '../models/collection';

export class CollectionController {
    public createCollection(req: any, res: any) {
        if (req.body.name && 
            req.body.description) {

            var collectionData = {
                name: req.body.name,
                description: req.body.description,
            }

            Collection.create(collectionData, function (err, collection ) {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.send({ error: err.message});
                } else {                 
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

    public editCollection(req: any, res: any) {
        var collectionID = req.body._id;
        var collectionName = req.body.name;
        var collectionDescription = req.body.description;

        Collection.findByIdAndUpdate(collectionID, { $set: {name: collectionName, description: collectionDescription}}, function(err, collection) {
            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.send({ error: err.message});
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.send(collection);
            }
        })
    }

    public deleteCollection(req: any, res: any) {
        var collectionID = req.body._id;

        Collection.findByIdAndRemove(collectionID, function(err, collection){
            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.send({ error: err.message});
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.send(collection);
            }
        })
    }

    public getCollections(req: any, res: any) {
        Collection.find().exec(function (error, collections) {
            if (error) {
                res.status(500).send(error);
                console.log(req);
            } else {
                if (collections == null) {
                    res.statusCode = 401;
                    res.setHeader("Content-Type", "application/json");
                    res.write("");
                    res.end();
                    return;
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.write(JSON.stringify(collections));
                    res.end();
                    return;
                }
            }
        });
    }
}