package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"gin_api/config"
)

func main() {
	engine := gin.Default()

	engine.GET("/1", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index1", gin.H{
			"title": "index1",
		})
	})

	config.SetRouting(engine)
	config.InitDB()
	engine.Run(":8080")
}
