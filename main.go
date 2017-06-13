// @APIVersion 1.0.0
// @APITitle Programming Academy
// @APIDescription Web server and client for online learning center
// @Contact	feschenko.dmitryi@gmail.com
// @License MIT
package main

import (
	"fmt"
	server "programming-academy/server"
	"programming-academy/server/db"
	models "programming-academy/server/models"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var connectionString = "host=localhost123 user=postgres dbname=moonly sslmode=disable password=postgres"

func main() {
	var err error
	// init connection to the db
	db.DBCon, err = gorm.Open("postgres", connectionString)
	if err != nil {
		panic(fmt.Sprintf("Database connection error: %s", err.Error()))
	}
	// close connection after stopping
	defer db.DBCon.Close()

	// apply auto migrations to all required models
	db.DBCon.AutoMigrate(&models.User{}, &models.Lesson{}, &models.Course{})

	// run the web server
	server.RunServer()
}
