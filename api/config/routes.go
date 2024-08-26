package config

import (
	"github.com/gin-gonic/gin"

	"gin_api/controllers"
)

func SetRouting(e *gin.Engine) {
	indices := e.Group("/api")
	{
		indices.GET("/", controllers.Index)
	}
}
