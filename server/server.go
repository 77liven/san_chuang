package main

import (
	"flag"
	"net/http"
	"os"
	"path/filepath"
	"runtime"
	"strings"

	"github.com/gin-gonic/gin"
)

var baseDir string // 改为变量，便于动态设置

func init() {
	// 根据操作系统设置默认 baseDir
	if runtime.GOOS == "windows" {
		baseDir = `D:\Code` // Windows 默认路径
	} else { // Linux 或其他系统
		baseDir = "/usr/local/san_chaung" // Linux 默认路径
	}
}

func main() {
	// 定义命令行参数 --baseDir
	baseDirFlag := flag.String("baseDir", baseDir, "Set the base directory for file downloads")
	flag.Parse()

	// 使用命令行参数覆盖默认值
	baseDir = *baseDirFlag

	// 确保目录存在
	if _, err := os.Stat(baseDir); os.IsNotExist(err) {
		os.MkdirAll(baseDir, 0755)
	}

	// 初始化 Gin 路由
	r := gin.Default()

	// 配置路由
	r.GET("/download/*filepath", downloadHandler)

	r.GET("/323", _323test)

	// 启动服务器
	r.Run(":8080") // 默认监听 8080 端口
}

func _323test(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"323": "666",
	})
}

func downloadHandler(c *gin.Context) {
	// 获取请求路径中的文件路径参数
	filePath := c.Param("filepath")
	// 去除前缀斜杠
	filePath = strings.TrimPrefix(filePath, "/")

	// 拼接完整文件路径，使用 filepath.Join 确保跨平台兼容
	fullPath := filepath.Join(baseDir, filepath.FromSlash(filePath))

	// 检查文件是否存在
	if _, err := os.Stat(fullPath); os.IsNotExist(err) {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "File not found",
		})
		return
	}

	// 检查是否为目录
	fileInfo, err := os.Stat(fullPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Internal server error",
		})
		return
	}

	if fileInfo.IsDir() {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Cannot download a directory",
		})
		return
	}

	// 设置文件下载头
	c.Header("Content-Description", "File Transfer")
	c.Header("Content-Transfer-Encoding", "binary")
	c.Header("Content-Disposition", "attachment; filename="+urlEncodeFileName(filepath.Base(fullPath)))
	c.Header("Content-Type", "application/octet-stream")
	c.File(fullPath)
}

func urlEncodeFileName(fileName string) string {
	// 建议使用 net/url 包处理
	return fileName // 简化实现，实际应使用 url.PathEscape
}
