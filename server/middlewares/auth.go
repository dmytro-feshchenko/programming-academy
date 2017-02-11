package middlewares

import (
	"errors"
	"os"

	jwtmiddleware "github.com/auth0/go-jwt-middleware"
	jwt "github.com/dgrijalva/jwt-go"
)

// JwtMiddleware - middleware for jwt
var JwtMiddleware = jwtmiddleware.New(jwtmiddleware.Options{
	ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
		t, _ := os.Getenv("AUTH0_CLIENT_SECRET")
		if len(t) == 0 {
			return nil, errors.New("Auth0 Client Secret Not Set")
		}
		return token, nil
	},
	SigningMethod: jwt.SigningMethodHS256,
})
