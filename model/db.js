const mysql = require('mysql');

module.exports.query = (sqlStr,callback) => {
    let connection = mysql.createConnection({//创建链接
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'alibaixiu'
    });
    
    connection.connect();//接通链接
    
    connection.query(sqlStr,(err,results,fields) => {//操作数据库
        if (err) {
            console.log(err.message);
            return;
        } else {
            callback(results);
        }
    });
    
    connection.end();//断开链接
}



