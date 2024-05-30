package main

import (
	"github.com/gin-gonic/gin"

	"gin_react_template/config"
)

func main() {
	engine := gin.Default()

	config.SetRouting(engine)
	config.InitDB()
	engine.Run(":8080")
}
