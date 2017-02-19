package models

// Lesson - lesson model
type Lesson struct {
	Model
	Name        string `gorm:"size: 255" json:"name" form:"name" query:"name"`
	Description string `gorm:"size:255" json:"description" form:"description" query:"description"`
	Order       int    `json:"order" form:"order" query:"order"` // order in course
	Published   bool   `sql:"DEFAULT:false"`                     // is this lesson is published
	Visible     bool   `sql:"DEFAULT:false"`                     // is this lesson is visible
	Private     bool   `sql:"DEFAULT:false"`                     // is this lesson is private
	// Type  *LessonType // each lesson has type
}

// LessonType - lesson types model
type LessonType struct {
	Model
	Name string
}
