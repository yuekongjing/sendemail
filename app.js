// @ts-nocheck
const nodemailer = require('nodemailer');
// 把刚刚获取到的QQ号数组复制到这里
const qqNumbers = ['1851812821', '630739871'];

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
      user: '630739871@qq.com',
      // 你的smtp授权码
      pass: 'jphgqimltabwbfaj',
    }
});

// 使用 join 方法来创建以英文逗号分隔的收件人列表
let mailOpt = {
    from: '"周刊" <630739871@qq.com>', // 发件人邮箱格式修正
    to: qqNumbers.join(','), // 使用 join 方法创建收件人列表
    subject: "月赛GitHub项目汇总笔记-小刊",
    text: "月赛中GitHub项目汇总笔记:https://www.mubu.com/doc/-L6GIRuzUf",
};

transporter.sendMail(mailOpt, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('邮件已发送成功,邮件id: %s', info.messageId);
});