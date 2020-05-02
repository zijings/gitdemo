const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.listen(3000, () => {
    console.log("severce start");
});

app.get('/user/login', (req, res) => {
    console.log('访问成功！');
    res.send('{err: 0, login: ok}')
})