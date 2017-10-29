import { Category } from '../models/category';

export class CategoryController {
  public createCategory(req: any, res: any) {
      console.log("Creating category...")
      console.log(req.body.name);
      console.log(req.body.description);
      if (req.body.name && 
          req.body.description) {
          
          var mongoose = require('mongoose');
          var categoryData = {
              name: req.body.name,
              description: req.body.description,
              _id: new mongoose.Types.ObjectId()
          }

          console.log(categoryData);
          Category.create(categoryData, function (err, category ) {
              console.log("category : " , category);
              console.log("err : " , err);
              if (err) {
                  console.log("error");
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.send({ error: err.message});
              } else {
                  console.log("user");
                  req.session.categoryId = category._id;                    
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.send(category);
              }
          });
      } else {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.send({ error: 'All fields required.'});
      }
  }

  public getCategories(req: any, res: any) {
    console.log("Entro a categories Server");
    Category.find().exec(function (error, categories) {
        if (error) {
            res.status(500).send(error);
            console.log(req);
        } else {
            console.log(categories);
            if (categories == null) {
                res.statusCode = 401;
                res.setHeader("Content-Type", "application/json");
                res.write("");
                res.end();
                return;
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.write(JSON.stringify(categories));
                res.end();
                return;
            }
        }
    });
  }
}