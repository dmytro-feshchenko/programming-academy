package controllers

import (
	"net/http"
	"programming-academy/server/db"
	"programming-academy/server/models"
	"strconv"

	"github.com/labstack/echo"
)

// CreateCourse - create new course
func CreateCourse(c echo.Context) error {
	course := new(models.Course)

	if err := c.Bind(course); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	if res := db.DBCon.Create(course); res.Error != nil {
		return c.JSON(http.StatusInternalServerError, res.Error)
	}

	return c.JSON(http.StatusCreated, course)
}

// GetCourse - get course model by id
func GetCourse(c echo.Context) error {
	u := new(models.Course)
	find := &models.Course{}
	id, _ := strconv.ParseUint(c.Param(":id"), 10, 64)
	find.ID = uint(id)
	if res := db.DBCon.Find(&u, &find); res.Error == nil {
		return c.JSON(http.StatusOK, u)
	}
	return c.JSON(http.StatusNotFound, nil)
}

// GetCoursesList - get courses list
func GetCoursesList(c echo.Context) error {
	courses := []models.Course{}
	if res := db.DBCon.Find(&courses); res.Error != nil {
		return c.JSON(http.StatusInternalServerError, res.Error)
	}
	return c.JSON(http.StatusOK, courses)
}

// UpdateCourse - update single course
func UpdateCourse(c echo.Context) error {
	course := &models.Course{}
	find := &models.Course{}
	id, _ := strconv.ParseInt(c.Param(":id"), 10, 60)
	find.ID = uint(id)
	if res := db.DBCon.Find(&course, &find); res.Error != nil {
		return c.JSON(http.StatusNotFound, nil)
	}
	if err := c.Bind(course); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	// update course info
	if res := db.DBCon.Save(course); res.Error != nil {
		return c.JSON(http.StatusInternalServerError, res.Error)
	}
	return c.JSON(http.StatusOK, &course)
}

// DeleteCourse - delete course by id
func DeleteCourse(c echo.Context) error {
	course := &models.Course{}
	find := &models.Course{}
	id, _ := strconv.ParseInt(c.Param(":id"), 10, 60)
	find.ID = uint(id)
	if res := db.DBCon.Find(&course, &find); res.Error != nil {
		return c.JSON(http.StatusInternalServerError, nil)
	}
	if res := db.DBCon.Delete(&course); res.Error != nil {
		return c.JSON(http.StatusInternalServerError, res.Error)
	}
	return c.JSON(http.StatusOK, true)
}
