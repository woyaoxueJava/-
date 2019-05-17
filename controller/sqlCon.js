const sql = require('../model/db.js');

// sql.query('SELECT * FROM user',(results) => {查
//     console.log(results);
// });

// sql.query(`INSERT INTO user (name,age,gender,hobby) VALUES ('hello',30,'female','hunter')`,(res) => {增
//     console.log(res);
// });

// let sqlStr = `DELETE FROM user WHERE id=8`删

// let sqlStr = `INSERT INTO user (name,age,gender,hobby) VALUES ('hello',30,'female','hunter')`增

// let sqlStr = `UPDATE user SET hobby='123' WHERE id=3`//新增
// sql.query(sqlStr, (res) => {
//     console.log(res);
// })

exports.updateUser = (req, res) => {
    let sqlStr = `UPDATE user SET hobby='123' WHERE id=3`;
    sql.query(sqlStr, (res) => {
        console.log(res);
    })
}