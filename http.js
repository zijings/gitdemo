const https = require('https');
const fs = require('fs');

https.get('https://www.iqiyi.com/', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];
    
    let error;
    if(statusCode !== 200){
        error = new Error('Requst Failed.\n' + `Status Code: ${statusCode}`);
    }
    else if (!/^text\/html/.test(contentType)){
        error = new Error('Invalid content-type.\n' + `Expected text/html but received: ${contentType}`);
    }
    
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        fs.writeFile('data.txt', rawData, (err) => {
            console.log(err);
        })
    })
}).on('error', (e) =>{
    console.log(e);
})