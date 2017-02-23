class Student {
  constructor(first_name, last_name){
    this.first_name = first_name
    this.last_name = last_name
    this.courses = []
  }
}

Student.prototype.name = function() {
  return `${this.first_name} ${this.last_name}`
}

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)){
    this.courses.push(course)
  }
}
