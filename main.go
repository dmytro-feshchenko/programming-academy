// @APIVersion 1.0.0
// @APITitle Programming Academy
// @APIDescription Web server and client for online learning center
// @Contact	feschenko.dmitryi@gmail.com
// @License MIT
package main

import (
	"fmt"
	"net/http"
	"os"

	routers "programming-academy/server/routers"

	"github.com/gorilla/handlers"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func hello(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(res, "hello, world 2")
}

// Run - run the web server
func Run() {
	r := routers.InitRouters()
	err := http.ListenAndServe(":"+os.Getenv("PORT"), handlers.LoggingHandler(os.Stdout, r))
	if err != nil {
		panic(err)
	}
	fmt.Println("Server started. Port: " + os.Getenv("PORT"))
}

func main() {
	// connection := os.Getenv("DATABASE_URL")
	db, err := gorm.Open("postgres", "host=localhost user=postgres dbname=brainly sslmode=disable password=postgres")
	if err != nil {
		fmt.Println("Database connection error" + err.Error())
	}
	defer db.Close()
	Run()
}

// NotImplemented - simple handler for not implemented api methods
var NotImplemented = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Not Implemented"))
})
