package main

import (
	"github.com/gin-gonic/gin"
	"gin_react_template/config"
	"gin_react_template/database"
)

func main() {
	engine := gin.Default()

	config.SetHeader(engine)
	config.SetRouting(engine)
	database.InitDB()
	engine.Run(":8080")
}
