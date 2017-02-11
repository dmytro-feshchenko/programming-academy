package controllers

import (
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var mySigningKey = []byte("secret")

// Get auth token
func GetAuthToken(w http.ResponseWriter, r *http.Request) {
	// create the new token for auth
	token := jwt.New(jwt.SigningMethodHS256)

	// create a map to store our claims
	claims := token.Claims.(jwt.MapClaims)

	// set token claims
	claims["admin"] = true
	claims["name"] = "Ado Kukic"
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()

	// sign the token with secret key
	tokenString, _ := token.SignedString(mySigningKey)
	w.Write([]byte(tokenString))
}
