package main

import (
	"github.com/gin-gonic/gin"
	"gin_api/config"
	"gin_api/database"
)

func main() {
	engine := gin.Default()

	config.SetHeader(engine)
	config.SetRouting(engine)
	database.InitDB()
	engine.Run(":8080")
}
