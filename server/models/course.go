package models

// Course - course model
type Course struct {
	Model

	Name        string   `gorm:"size:255" json:"name" form:"name" query:"name"`
	Description string   `gorm:"size:255" json:"description" form:"description" query:"description"`
	Lessons     []Lesson // each course has many lessons
}
