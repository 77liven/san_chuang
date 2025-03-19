仅做展示练习使用
绝大部分素材部署于aliyun http://47.104.210.167:8080/download/
因未备案 无法使用htps 无法正式上线 无法预览 仅可使用真机调试-打开调试才可正确过滤http获取资源
服务器稍后上传 



关于服务器

   	默认路径 win：D:\Code   linux：/usr/local/san_chaung 将对应资源放在如下目录可直接使用http://47.104.210.167:8080/download/＋资源名 进行访问

使用go build在win下跨平台编译 $env:

GOOS=windows GOARCH=amd64 go build -o server-windows-amd64 

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o server-linux-amd64 禁用cgo库避免跨平台运行报错



运行时 使用./server 或 ./server --baseDir /new/path D:\NewPath