package routers

import (
	"github.com/gorilla/mux"
)

// InitRouters - initialize mux router
func InitRouters() *mux.Router {
	router := mux.NewRouter()
	router = SetLessonRoutes(router)
	router = SetStatusRoutes(router)
	router = SetAuthenticationRoutes(router)
	return router
}
