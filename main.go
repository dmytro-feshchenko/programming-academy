//go:generate swagger generate spec
package main

import (
	"fmt"
	"net/http"
	"os"
)

// Server - structure for creating server
type Server struct {
	host string
	port string
}

func hello(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(res, "hello, world")
}

// Run - run the web server
func (s *Server) Run() {
	http.HandleFunc("/", hello)
	fmt.Println("listening...")
	err := http.ListenAndServe(":"+os.Getenv("PORT"), nil)
	if err != nil {
		panic(err)
	}
	// http.ListenAndServe(":"+os.Getenv("PORT"), nil)
}

func init() {

}

// @APIVersion 1.0.0
// @APITitle Programming Academy
// @APIDescription Web server and client for online learning center
// @Contact	feschenko.dmitryi@gmail.com
// @License MIT
func main() {
	s := Server{host: "localhost", port: "8081"}
	s.Run()
}
