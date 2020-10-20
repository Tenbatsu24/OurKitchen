const pg = require('pg');

class Client {
    constructor() {
        this.uri = 'postgres://vvtdybgk:fymlE859cjrgfJZeBvV-yHEMSFysaavs@dumbo.db.elephantsql.com:5432/vvtdybgk';
    }

    getTime(funcCallback) {
        this.getConnection((connection) => {
            connection.query('SELECT now() AS "theTime"', function (err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                funcCallback({time: `${result.rows[0].theTime}`})
                connection.end();
            });
        });
    }

    getConnection(clientCallback) {
        let client = new pg.Client(this.uri);
        client.connect(function(err) {
            if (err) throw err;
        });
        clientCallback(client);
    }
}

module.exports = new Client();
