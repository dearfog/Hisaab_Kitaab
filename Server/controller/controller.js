var conrollerCtrl = function () {}
var mongoose = require("mongoose")
  , Admin = mongoose.mongo.Admin;
 // mongoose.connect("mongodb://127.0.0.1/lacadenelle13008fr");
conrollerCtrl.prototype.db = function (req,res,next) {
  var creat = mongoose.createConnection("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false });
  creat.on('open', function() {
      new Admin(creat.db).listDatabases(function(err, result) {
          res.send(result.databases).end();
          next();
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
        next();
      mongoose.connection.close();
    });
 });
}
conrollerCtrl.prototype.get = function (req,res,next) {
  mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false });
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
     next();
     mongoose.connection.close();
   })
}


conrollerCtrl.prototype.getById = function (req,res,next) {
 mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
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
     next();
     mongoose.connection.close();
   })
}


conrollerCtrl.prototype.post = function (req,res,next) {
 mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
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
     next();
       mongoose.connection.close();
   })
}


conrollerCtrl.prototype.put = function (req,res,next) {
 mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
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
    next();
    mongoose.connection.close();
  });
}


conrollerCtrl.prototype.delete = function (req,res,next) {
 mongoose.connect("mongodb://"+req.params.ip+"/"+req.params.db+"",{ keepAlive: false })
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
           next();
           mongoose.connection.close();
       });
}


module.exports = new conrollerCtrl();
