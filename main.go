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

func main() {
	// connection := os.Getenv("DATABASE_URL")
	var err error
	db.DBCon, err = gorm.Open("postgres", "host=localhost user=postgres dbname=brainly sslmode=disable password=postgres")
	if err != nil {
		fmt.Println("Database connection error" + err.Error())
	}
	defer db.DBCon.Close()

	// db.DBCon.DropTableIfExists(&models.User{})
	// db.DBCon.DropTableIfExists(&models.Lesson{})
	// db.DBCon.DropTableIfExists(&models.Course{})

	db.DBCon.AutoMigrate(&models.User{}, &models.Lesson{}, &models.Course{})

	// Run()
	server.RunServer()
}
