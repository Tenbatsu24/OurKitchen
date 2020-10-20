const MongoClient = require('mongodb').MongoClient;

class Client {
    constructor() {
        this.uri = 'mongodb+srv://admin_vaish_24:LgX8rNNO7U8Bab0x@cluster0.bfu3h.mongodb.net/OurKitchen?retryWrites=true&w=majority';
    }

    getTime(funcCallback) {
        this.getConnection((client) => {
            let db = client.db('OurKitchen');
            db.collection('recipe').find().toArray(function(err, result) {
                if(err) {
                    throw err;
                }
                funcCallback(result);
                client.close();
            });
        });
    }

    getConnection(clientCallback) {
        MongoClient.connect(this.uri, function(err, client) {
            if (err) {
                throw err;
            }
            clientCallback(client);
        });
    }
}

module.exports = new Client();
