"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1175962980@qq.com', // generated ethereal user
      pass: 'djgzwcrwswtghefj' // generated ethereal password
    }
  });

  // send mail with defined transport object
let obj = {
    from: '"Fred Foo 👻" <1175962980@qq.com>', // sender address
    to: "1175962980@qq.co·m", // list of receivers
    subject: "验证码是：", // Subject line
    text: "32saf4" // plain text body
    //html: "<b>Hello world?</b>" // html body
  };



  transporter.sendMail(obj);

