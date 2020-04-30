const fs = require('fs');
let source = '/Users/anyw/gitdemo/test';
let index = '--';
// let cs = function(source){
//     fs.readdir(source, (err, files) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             for(let i of files){
//                 console.log(index + i);
//                 fs.stat(source + '/' + i, (err, stats) => {
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         if(stats.isDirectory()){
//                             index += '--';
//                             cs(source + '/' + i);
//                             index = index.slice(0, -2);
//                         }
//                     }
//                 });
//             }
//         }
//     })
// }
// cs(source);
let cssy = function(source){
    try{
        let files = fs.readdirSync(source);
        for(let i of files){
            console.log(index + i);
            let stats = fs.statSync(source + '/' + i);
            if(stats.isDirectory()){
                index += '--';
                cssy(source + '/' + i);
                index = index.slice(0, -2);
            }
        }      

    }
    catch(err){
        console.log(err);
    }
}
cssy(source);