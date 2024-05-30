package config

import (
	"github.com/gin-gonic/gin"

	"gin_react_template/app/controllers"
)

func SetRouting(e *gin.Engine) {
	indices := e.Group("/")
	{
		indices.GET("/", controllers.Index)
	}
}