package controllers

import (
	"net/http"
	"programming-academy/server/db"
	"programming-academy/server/models"
	"strconv"

	"github.com/labstack/echo"
)

// CreateUser - create new user
func CreateUser(c echo.Context) error {
	u := new(models.User)
	if err := c.Bind(u); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	if res := db.DBCon.Create(u); res.Error != nil {
		return c.JSON(http.StatusBadRequest, res.Error)
	}
	return c.JSON(http.StatusCreated, u)
}

// GetUser - Find user by id
func GetUser(c echo.Context) error {
	u := new(models.User)
	find := &models.User{}
	id, _ := strconv.ParseUint(c.Param(":id"), 10, 64)
	find.ID = uint(id)
	if res := db.DBCon.Find(&u, &find); res.Error == nil {
		return c.JSON(http.StatusFound, u)
	}
	return c.JSON(http.StatusNotFound, nil)
}

// GetUsersList - Find all users
func GetUsersList(c echo.Context) error {
	users := []models.User{}
	if res := db.DBCon.Find(&users); res.Error == nil {
		return c.JSON(http.StatusFound, users)
	}
	return c.JSON(http.StatusNotFound, nil)
}
