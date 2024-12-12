// @ts-nocheck
const nodemailer = require('nodemailer');
// 把刚刚获取到的QQ号数组复制到这里
const qqNumbers = ['18518128121', '673119871', '1043885862'];

// 直接修改原数组并添加后缀@qq.com
qqNumbers.forEach((item, index) => {
    qqNumbers[index] = item + '@qq.com';
});

console.log(qqNumbers);

let transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465,
    secureConnection: true,
    auth: {
      //你的QQ邮箱的账号
      user: '',
      // 你的smtp授权码
      pass: '',
    }
});

// 使用 join 方法来创建以英文逗号分隔的收件人列表
let mailOpt = {
    from: '"你的名字" <111111111@qq.com>', // 你的qq邮箱
    to: qqNumbers.join(','), // 使用 join 方法创建收件人列表
    subject: "邮件主题",
    text: "邮件内容",
};

transporter.sendMail(mailOpt, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('邮件已发送成功,邮件id: %s', info.messageId);
});