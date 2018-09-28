var mysql = require('mysql');
var fs = require('fs');
var ejs = require('ejs');
var express = require('express');
var bodyParser = require('body-parser');

//db 연결
var client = mysql.createConnection({
    user:'root',
    password:'root',
    database:'mysql'
});

//서버 생성
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))

//서버를 실행합니다.
app.listen(7777, function() {
    console.log('server running :7777')
})

//라우트를 수행합니다. 
app.get('/',function (req,response) {
    //파일 읽기
    fs.readFile('list.html', 'utf8', function(err,data) {
        client.query('select * from products', function(err,results) {
            //응답
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});
app.get('/delete/:id',function (req,response) {
    client.query('delete from products where id=?', [req.params.id], function () {
        //응답
        response.redirect('/');
    })
});
app.get('/insert',function (req,response) {
    //파일 일기
    fs.readFile('insert.html','utf8',function (err,data) {
        //응답
        response.send(data);
    })
});
app.post('/insert',function (req,response) {
    //변수 선언
    var body = req.body;

    //db 쿼리 실행
    client.query('insert into products (name, modelnumber, series) values (?,?,?)', [
        body.name, body.modelnumber, body.series
    ], function() {
        //응답
        resonse.redirect('/');
    })
});
app.get('/edit:id',function (req,response) {
    //파일 읽기
    fs.readFile('edit.html', 'utf8', function (err,data) {
        //db 쿼리 실행
        client.query('select * from products where id = ?', [
            req.params.id
        ], function (err,result) {
            //응답
            response.send(ejs.render(data, {
                data: result[0]
            }));
        });
    });
});
app.post('/edit:id',function (req,response) {
    //변수 선언
    var body = req.body;

    //db 쿼리 실행
    client.query('update products set name=?, modelnumber=?, series=? where id=?', [
        body.name,body.modelnumber, body.series, req.params.id
    ], function() {
        //응답
        response.redirect('/');
    });
});



