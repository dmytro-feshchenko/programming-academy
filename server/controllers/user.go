package controllers

import (
	"fmt"
	"net/http"
	"programming-academy/server/db"
	"programming-academy/server/models"
	utils "programming-academy/server/utils"
	"strconv"

	"github.com/labstack/echo"
)

// CreateUser - create new user
func CreateUser(c echo.Context) error {
	u := new(models.User)
	if err := c.Bind(u); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	// encrypt password
	password, err := utils.EncryptPassword(c.FormValue("password"))

	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	u.Password = password

	fmt.Println(password)

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
		return c.JSON(http.StatusOK, u)
	}
	return c.JSON(http.StatusNotFound, nil)
}

// GetUsersList - Find users
func GetUsersList(c echo.Context) error {
	users := []models.User{}
	page, _ := strconv.ParseInt(c.QueryParam("page"), 10, 60)
	perPage, _ := strconv.ParseInt(c.QueryParam("per-page"), 10, 60)
	sortKey := c.QueryParam("sort")

	query := db.DBCon

	if perPage != 0 {
		if page < 1 {
			page = 1
		}
		query = query.Limit(perPage).Offset((page - 1) * perPage)
	}

	if sortKey != "" {
		sortOrder := "asc"

		if []rune(sortKey)[0] == rune('-') {
			sortOrder = "desc"
			sortKey = sortKey[1:len(sortKey)]
		}
		query = query.Order(sortKey + " " + sortOrder)
	}

	if res := query.Find(&users); res.Error == nil {
		if perPage != 0 {
			var totalCount int
			query.Limit(-1).Find(&[]models.User{}).Count(&totalCount)
			xPaginationCount := strconv.Itoa(totalCount)
			xPaginationPage := strconv.Itoa(int(page))
			xPaginationLimit := strconv.Itoa(int(perPage))
			c.Response().Header().Add("X-Pagination-Count", xPaginationCount)
			c.Response().Header().Add("X-Pagination-Page", xPaginationPage)
			c.Response().Header().Add("X-Pagination-Limit", xPaginationLimit)
		}
		return c.JSON(http.StatusOK, users)
	}

	return c.JSON(http.StatusOK, []models.User{})
}
