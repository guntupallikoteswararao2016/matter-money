const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require("./db");

const dbName = "userprofiles",
    collectionName = "information";

router.post("/", (req, res) => {
    const id = req.body.id;
    console.log(">>Login::id<<", id);


    db.initialize(dbName, 'users', function (dbCollection) {
        dbCollection.findOne({ id }, (error, result) => {
            if (error) throw error;
            console.log("userfound",result);
            if(result){
                const accessToken = generateAccessToken(id);
                console.log(">>genereate:Tocken<<", accessToken);
                res.send({"isLogin" : true, 'accessToken':accessToken});
            }else{
                
                res.send({"isLogin" : false});
            }

         });
      }, function (err) {
         throw (err);
      });
      
    // res.json({ accessToken: `Bearer ${accessToken}` })
});

function generateAccessToken(user) {
    return jwt.sign({ id: user }, process.env.ACCESS_TOKEN_SECRET);
}


/*router.get('/auth', authenticate, (req, res) => {
    const id = req.id;
    console.log(">req:id", id);
    db.initialize(dbName, 'profile', function (dbCollection) {
        dbCollection.find().toArray(function (err, result) {
            if (err) throw err;
            // res.json(result || []);
            console.log(res.send);

            // << return response to client >>
        });
    }, function (err) {
        throw (err);
    });
    // fetchdata(res);
});
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    console.log(">>>tocken verify", token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id) => {
        if (err) res.sendStatus(204);
        console.log(">>id", id);
        req.id = id;
        next();
    });
    // next();

    console.log("53");

}
*/
router.get('/posts', verifyToken, (req, res) => {  
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {

        db.initialize(dbName, 'profile', function (dbCollection) {
            dbCollection.find().toArray(function (err, result) {
                if (err) throw err;
                res.json(result || []);
                console.log("posts",result);
            });
        }, function (err) {
            throw (err);
        });
      }
    });
  });
  


function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log("authorization", bearerHeader)
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }

}
module.exports = router;
