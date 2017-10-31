import { Tag } from '../models/Tag';
import * as response from '../helpers/response';

export class TagController {
    public getTags(req: any, res: any) {
      Tag.find(
        { "name": /req.body.substr/i }, 
        function(error, tags) { 
          if (error) {
            response.customError(res, 500, error);
            console.log(req);
          } else {
              if (tags === null) {
                  response.customError(res, 400, 'No tags found');
                  return;
              } else {
                  response.success(res, tags);
                  return;
              }
          }
        }
    );
    }

    public createTags(req: any, res: any) {
        console.log("Creating tags...")
        if (req.body.name) {
            var tagData = req.body.names;
            Tag.update(tagData, function (err, tags) {
              if (err) {
                response.customError(res, 400, err.message);
              } else {
                response.success(res, tags);
              }
            });
        } else {
            response.customError(res, 400, 'All fields required.');
        }
    }
}