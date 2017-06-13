package models

// Course - course model
type Course struct {
	Model

	Name        string `gorm:"size:255" json:"name" form:"name" query:"name"`
	Description string `gorm:"size:255" json:"description" form:"description" query:"description"`
	Author      User
	Lessons     []Lesson `gorm:"many2many:course_lessons;" json:"lessons"`
}

// Image - upload images model
type Image struct {
	Model

	Name string `gorm:"size:255" json:"name" form:"name" query:"name"`
}
