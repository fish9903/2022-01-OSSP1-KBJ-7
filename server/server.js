const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000; // server port
app.listen(port, () => {
    console.log(`Server On: ${port}`);
})

// Food database
const db = require('./config/db');

app.get('/api/foodList', (req, res) => {
    // db에서 food 목록 가져오고 front로 전송
    
    // example
    // 0: {id: 1, name: 'food2', meat: 1, milk: 0, ... , make: 1.~}
    // 1: {id: 2, name: 'food3', meat: 0, milk: 1, ... , make: 1.~}
    // 2: {id: 3, name: 'food1', meat: 0, milk: 0, ... , make: 1/~}

    db.query("select * from food", (err, data) => {
        if(!err) {
            res.send(data);

        } else {
            console.log(err);
            res.send(err);
        }
    })
})

app.get('/api/userCart/:id', (req, res) => {
    const id = req.params.id;

    // db에서 user_item table을 가져오고 front로 전송
   
    // user의 id를 이용해서 DB의 user_item table에서 데이터를 가져온다.
    db.query(`select * from user_item where userid='${id}'`, (err, data) => {
        if(!err) {
            res.send(data);

        } else {
            console.log(err);
            res.send(err);
        }
    })
})

app.get(`/api/foodnameList`, (req, res) => {

    db.query(`select column_name from information_schema.columns where table_schema = 'new_schema' and table_name = 'user_item'`, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
            res.send(err);
        }
    })
})

app.post('/api/useritem', (req, res) => {
    const user_id = userid;
    const food_name = foodname;
    const cart_index = cartindex;

    const sqlupdate = "UPDATE user_item set ? = ? where userid = ?;"

    /*//db.query(`update user_item set LIKE'%${food_id}' = 1 where userid = '${user_id}'`, (err, data) => {
    db.query(`update user_item set 콩고기볶음_1 = 0 where userid = 'kaka5'`, (err, result) => {
        res.send(result);
    })*/

    const sqlInsert = "INSERT INTO `user_item` (`콩고기볶음_1`,`곤약떡볶이_2`) VALUES (0,0);"

    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })

})
//현재 음식의 장바구니 추가 상태를 알기 위한 것
/*app.get('/api/useritem', (req, res) => {
    const user_id = req.params.user_id;
    const food_id = req.params.food_id;
    const food_name = req.params.food_name;

    //select ${food} from user_item where userid = '${id}'
    //db.query(`select ${food_name}_${food_id} from user_item where userid = '${user_id}'`, (err, data) => {
    db.query(`select * from user_item where userid = 'kaka5'`, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
            res.send(err);
        }
    })

})*/

// id 목록을 가져오기 위한 것
/*app.get('/api/userid', (req, res) => {
    const id = req.params.id;

    db.query(`select * from user where userid='${id}'`, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
            res.send(err);
        }
    })
})
*/