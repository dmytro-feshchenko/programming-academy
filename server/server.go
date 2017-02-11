package server

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func hello(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(res, "hello, world")
}

func Run() {
	// create new router
	r := mux.NewRouter()

	// default page
	r.Handle("/", hello)
}
