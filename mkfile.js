const fs = require('fs');
fs.writeFile('./wai.txt','韩梅梅你好不好?',(err)=> {
    console.log(err);
})