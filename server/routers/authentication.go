package routers

import (
	"programming-academy/server/controllers"

	"github.com/gorilla/mux"
)

// SetAuthenticationRoutes - set auth routes for the route
func SetAuthenticationRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/token-auth", controllers.GetAuthToken).Methods("POST")
	// router.Handle("/refresh-token-auth", negroni.New(
	//     negroni.HandlerFunc()
	//   )
	// )
	return router
}
