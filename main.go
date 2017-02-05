//go:generate swagger generate spec
package main

import (
	"net/http"
)

// Server - structure for creating server
type Server struct {
	host string
	port string
}

// Run - run the web server
func (s *Server) Run() {
	http.ListenAndServe(":"+s.port, nil)
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
