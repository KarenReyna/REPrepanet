import { Resource } from '../models/resource';
import * as response from '../helpers/response';


export class ResourceController {
  public createResource(req: any, res: any) {
    console.log("Creating resource...")
    console.log(req.body);

    if (req.body.name 
        && req.body.description
        && req.body.url
        //&& req.body.imageurl
        //&& req.body.tags
        ) {

        let imageurl = req.body.imageurl || "";
        let tags = req.body.tags || [];
        var mongoose = require('mongoose');
        var resourceData = {
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            imageurl: imageurl,
            tags: tags,
            category: new mongoose.Types.ObjectId(req.body.category)
        }

        Resource.create(resourceData, function (err, resource) {
          if (err) {
            response.customError(res, 500, "Error");
          } else {
            response.success(res, resource);
          }
        });
    } else {
        response.customError(res, 400, 'All fields required.');
    }
  }

  public getResources(req: any, res: any) {
    Resource.find().populate('category').exec(function (error, resources) {
      if (error) {
          res.status(500).send(error);
          console.log(req);
      } else {
          console.log(resources);
          if (resources == null) {
              res.statusCode = 401;
              res.setHeader("Content-Type", "application/json");
              res.write("");
              res.end();
              return;
          } else {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.write(JSON.stringify(resources));
              res.end();
              return;
          }
      }
  });
  }
}