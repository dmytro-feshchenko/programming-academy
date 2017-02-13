package server

import (
	"net/http"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	"programming-academy/server/controllers"
)

// RunServer - run the web server
func RunServer() {
	e := echo.New()

	// middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// configure CORS
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.DELETE,
			echo.PATCH, echo.POST},
	}))

	// unauthenticated routes
	e.GET("/", func(c echo.Context) error {
		return c.File("client/dist/index.html")
	})

	e.GET("/unicorn", func(c echo.Context) error {
		return c.File("client/dist/admin.html")
	})

	e.Static("/", "client/dist")

	e.POST("/api/v1/login", controllers.Login)

	// Route => handler
	e.GET("/api/v1/status", func(c echo.Context) error {
		return c.JSON(http.StatusOK, 200)
	})

	// Restricted group
	r := e.Group("")
	// jwt token auth middleware
	r.Use(middleware.JWT([]byte("secret")))

	// Route => handler
	r.POST("/api/v1/users", controllers.CreateUser)
	r.GET("/api/v1/users", controllers.GetUsersList)
	r.GET("/api/v1/users/:id", controllers.GetUser)

	// run the web server
	e.Logger.Fatal(e.Start(":" + os.Getenv("PORT")))
}
