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
        let tags = req.body.tags || "";

        var resourceData = {
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            imageurl: imageurl,
            tags: tags.split(",")
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
}