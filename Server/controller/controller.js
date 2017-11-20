var conrollerCtrl = function () {}
var mongoose = require("mongoose")
  , Admin = mongoose.mongo.Admin;
var express = require('express');
var passport = require('passport');
var User = require('../models/user');
  
 mongoose.connect("mongodb://127.0.0.1/Hisasb_Kitaab");
conrollerCtrl.prototype.db = function (req,res,next) {
  var creat = mongoose.createConnection("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false });
  creat.on('open', function() {
      new Admin(creat.db).listDatabases(function(err, result) {
          res.send(result.databases).end();
          // next();
      });
  });

}
conrollerCtrl.prototype.collection = function (req,res,next) {
 const connection =  mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false });
  mongoose.connection.on('open', function () {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      if (err) {
        console.log(err);
      }
      res.send(names).end();
        // next();
      // mongoose.connection.close();
    });
 });
}
conrollerCtrl.prototype.get = function (req,res,next) {
  // mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false });
   try {
     Schema=mongoose.Schema;
     var CollectionSchema = new Schema(Schema.Types.Mixed, {strict: false});
     var Collection =  mongoose.model(req.params.collection,CollectionSchema);
   }
   catch (e) {
      var Collection =  mongoose.model(req.params.collection);
   }
   Collection.find(function (err,doc) {
     if (err) console.log(err);
     res.send(doc).end();
    //  next();
    //  mongoose.connection.close();
   })
}


conrollerCtrl.prototype.getById = function (req,res,next) {
  //  mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
     try {
       Schema=mongoose.Schema;
       var CollectionSchema = new Schema(Schema.Types.Mixed, {strict: false});
       var Collection =  mongoose.model(req.params.collection,CollectionSchema);
     }
     catch (e) {
        var Collection =  mongoose.model(req.params.collection);
     }
     Collection.findById(req.params.id,function (err,doc) {
       if (err) console.log(err);
       res.send(doc).end();
      //  next();
      //  mongoose.connection.close();
     })
  }

  conrollerCtrl.prototype.populate = function (req,res,next) {
    //  mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
       try {
         Schema=mongoose.Schema;
         var CollectionSchema = new Schema(Schema.Types.Mixed, {strict: false});
         var Collection =  mongoose.model(req.params.collection,CollectionSchema);
       }
       catch (e) {
          var Collection =  mongoose.model(req.params.collection);
       }
       var t = [
        {Categoria: 'example', Servico: 'name1'},
        {Categoria: 'example', Servico: 'name2'},
        {Categoria: 'example', Servico: 'name3'},
        {Categoria: 'example2', Servico: 'name4'},
        {Categoria: 'example2', Servico: 'name5'},
        {Categoria: 'example2', Servico: 'name6'},
        {Categoria: 'example3', Servico: 'name7'},
        {Categoria: 'example3', Servico: 'name8'},
        {Categoria: 'example3', Servico: 'name9'}
   ];
  console.log(t[0]);   
      //  Collection.findById(req.params.id)
      //            .exec(function (err,r) {
      //    if (err) console.log(err);
      //       if (r) {
      //         var t = r.toJSON();
      //         try {
      //           Schema=mongoose.Schema;
      //           var PopulateSchema = new Schema(Schema.Types.Mixed, {strict: false});
      //           var Population =  mongoose.model(req.params.populate,PopulateSchema);
      //         }
      //         catch (e) {
      //            var Population =  mongoose.model(req.params.populate);
      //         }
      //         var ar = {};
      //         for (var kay in t) {
      //           if (kay == req.params.populate) {
      //              console.log(kay); 
      //              console.log(t[kay]);
      //              Population.findById(t[kay],function (err,d) {
      //                            ar[kay]= d;
      //                        })
      //           }
      //           else{
      //             ar[kay]= t[kay];
      //           }
      //         }
      //         res.send(ar).end();
      //       }
      //   })
    }
      

conrollerCtrl.prototype.post = function (req,res,next) {
//  mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
   try {
     Schema=mongoose.Schema;
     var CollectionSchema = new Schema(Schema.Types.Mixed, {strict: false});
     var Collection =  mongoose.model(req.params.collection,CollectionSchema);
   }
   catch (e) {
      var Collection =  mongoose.model(req.params.collection);
   }
   var col = new Collection(req.body);
   col.save(function (err,doc) {
     if (err) console.log(err);
     res.send(doc).end();
    //  next();
      //  mongoose.connection.close();
   })
}


conrollerCtrl.prototype.put = function (req,res,next) {
//  mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
  try {
    Schema=mongoose.Schema;
    var CollectionSchema = new Schema(Schema.Types.Mixed, {strict: false});
    var Collection =  mongoose.model(req.params.collection,CollectionSchema);
  }
  catch (e) {
     var Collection =  mongoose.model(req.params.collection);
  }
  Collection.findByIdAndUpdate({_id:req.params.id},req.body, {new: true},function (er, dt) {
    if (er) {
        console.log('error occured..' + er);
    }
    res.send(dt).end();
    // next();
    // mongoose.connection.close();
  });
}


conrollerCtrl.prototype.delete = function (req,res,next) {
//  mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
   try {
     Schema=mongoose.Schema;
     var CollectionSchema = new Schema(Schema.Types.Mixed, {strict: false});
     var Collection =  mongoose.model(req.params.collection,CollectionSchema);
   } catch (e) {
      var Collection =  mongoose.model(req.params.collection);
   }
   Collection.findByIdAndRemove({_id:req.params.id},function (er, dt) {
           if (er) {
               console.log('error occured..' + er);
           }
           else {
               return res.send(dt).end();
           }
          //  next();
          //  mongoose.connection.close();
       });
}

conrollerCtrl.prototype.register = function(req, res) {
 var u = {
   fname : req.body.fname,
   lname : req.body.lname,
   username : req.body.username
 }
  User.register(new User(u), req.body.password, function(err, user) {
      if (err) {
          return res.send(err);
      }
      return res.send(user);
  });
} 

conrollerCtrl.prototype.login = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    if (req.user) {
        res.send(req.user);
    } else {
        res.send("O_o! Wrong")
    }
  });
}

module.exports = new conrollerCtrl();
