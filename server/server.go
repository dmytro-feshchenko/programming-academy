package server

import "net/http"

// Server - structure for creating server
type Server struct {
	host string
	port string
}

// Run - run the web server
func (s *Server) Run() {
	http.ListenAndServe(":"+s.port, nil)
}
