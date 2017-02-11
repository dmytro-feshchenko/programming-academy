package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

// User - model for user
type User struct {
	gorm.Model

	Birthday time.Time `json:"birthday"`
	Age      uint8     `json:"age"`
	Name     string    `json:"name",gorm:"size:150"`

	CreditCard CreditCard `json:"credit_card"` // One-To-One relationship
	Email      []Email    `json:"emails"`      // One-To-Many relationship
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
