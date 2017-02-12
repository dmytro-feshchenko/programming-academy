package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

// User - model for user
type User struct {
	gorm.Model

	FirstName string `json:"first_name" gorm:"size:255" form:"first_name" query:"first_name"`
	LastName  string `json:"last_name" gorm:"size:255" form:"last_name" query:"last_name"`
	Password  string `json:"password,omitempty"`

	Birthday        time.Time  `json:"birthday" form:"birthday" query:"birthday"`
	CreditCard      CreditCard `json:"credit_card"` // One-To-One relationship
	Email           string     `json:"email" form:"email" query:"email"`
	IsEmailVerified bool       `sql:"DEFAULT:false"`
	IsSubscribed    bool       `sql:"DEFAULT:true"`
	// Email      []Email    `json:"emails"`      // One-To-Many relationship
}

// Email - email for user
type Email struct {
	gorm.Model
	UserID     uint   `json:"user_id",gorm:"index"` // foreign key (belongs to)
	Email      string `json:"email",gorm:"type:varchar(254);unique_index"`
	Subscribed bool   `json:"subscribed"`
}

// CreditCard - credit card info
type CreditCard struct {
	gorm.Model
	UserID uint   `json:"user_id"`
	Number string `json:"number"`
}
