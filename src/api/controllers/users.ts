import { User } from '../models/user';

export class UserController {
    public getUser(req: any, res: any) {
        User.findById(req.session.userId)
            .exec(function (error, user) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    if (user === null) {
                        res.statusCode = 401;
                        res.setHeader("Content-Type", "application/json");
                        res.write("");
                        res.end();
                        return;
                    } else {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        res.write(JSON.stringify(user));
                        res.end();
                        return;
                    }
                }
            });
    }

     public getUsers(req: any, res: any) {
        User.find()
            .exec(function (error, users) {
                if (error) {
                    res.status(500).send(error);
                    console.log(req);
                } else {
                    if (users === null) {
                        res.statusCode = 401;
                        res.setHeader("Content-Type", "application/json");
                        res.write("");
                        res.end();
                        return;
                    } else {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        res.write(JSON.stringify(users));
                        res.end();
                        return;
                    }
                }
            });
    }

    public createUser(req: any, res: any) {
        console.log("Creating user...")
        if (req.body.password !== req.body.passwordConf) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ error: 'Passwords do not match.'}));
            res.end();
            return;
        }
        console.log(req.body);
        if (req.body.email &&
            req.body.name &&
            req.body.password &&
            req.body.passwordConf) {

            let priv = req.body.privileges || "";
            
            var userData = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                passwordConf: req.body.passwordConf,
                privileges: priv.split(",")
            }

            console.log(userData);
            User.create(userData, function (err, user) {
                console.log("user : " , user);
                console.log("err : " , err);
                if (err) {
                    console.log("error");
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.send({ error: err.message});
                    //res.end();
                    //return;
                } else {
                    console.log("user");
                    req.session.userId = user._id;                    
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.send(user);
                    //res.end();
                    //return;
                }
            });

        } else {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.send({ error: 'All fields required.'});
            //res.end();
            //return;
        }
    }

    public loginUser(req: any, res: any) {
        if (req.body.email &&
            req.body.password) {

                User.authenticate(req.body.email, req.body.password, function (error, user) {
                if (error || !user) {
                    res.statusCode = 401;
                    res.setHeader("Content-Type", "application/json");
                    res.write(JSON.stringify({ error: 'Wrong email or password.'}));
                    res.end();
                    return;
                } else {
                    req.session.userId = user._id;
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.write(JSON.stringify(user));
                    res.end();
                    return;
                }
            });
        } else {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ error: 'All fields required.'}));
            res.end();
            return;
        }
    }

    public logoutUser(req: any, res: any) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.write(JSON.stringify({ error: err.message}));
                    res.end();
                    return;
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.write("");
                    res.end();
                    return;
                }
            });
        }
    }
}