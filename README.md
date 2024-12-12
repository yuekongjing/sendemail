# sendemail
批量发送qq邮件给群聊里面的qq好友

**前置条件**
1.获取到自己qq邮箱的smtp授权码：https://jingyan.baidu.com/article/6079ad0eb14aaa28fe86db5a.html
2.Nodejs和vscode

**使用步骤：**
**一、获取群聊里面的qq**
1.打开浏览器，访问qq的群网址：https://qun.qq.com/member.html
2.登录你的QQ号，登录完之后，选择你要获取QQ号的群。
3.选择好之后，按下键盘上的 ” F12建 “，这时候正常的浏览器会自动打开，开发者工具，选择开发者工具上的Consle(控制台)。
4.然后把【获取群聊中的QQ号代码】代码粘贴在上面输入框中后，按下回车建，它就会自动给你获取这个群里的所有QQ号了。
5.复制你获取的所有qq号

**二、批量发送邮件**
你需要修改的参数值有：
1.qqNumbers
2.user
3.pass
4.mailOpt里面的from、subject、text

**三、运行**
node 批量发送邮件.js
