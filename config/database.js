/**
 * Created by chotoxautinh on 11/12/16.
 */
var MongoClient = require('mongodb').MongoClient;
var Promise = require('bluebird');

module.exports = function (app) {
    return Promise.all([
        connectMongo(app),
        connectPostgres(app)
    ]).then(function (results) {
        return {
            mongo: results[0],
            postgres: results[1]
        }
    })
}

function connectMongo(app) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(`mongodb://${app.setting.db.mongo.host}/${app.setting.db.mongo.name}`, function (err, dbConnection) {
            if (err)
                return reject(err);
            resolve(dbConnection);
        });
    })
}

function connectPostgres(app) {
    return Promise.resolve().then(function () {
        // Dùng Sequelize;
        return {}
    })
}
