
var School = require("../School")
//
exports.createStudent = function (req, res) {
    // taking the information of the student thatt comes from the client side 
    const studentData = req.body
    // taking the id of that specific teacher 
    const teacherId = req.params.id
    //save the information of the student into the data base 
    School.StudentModel.create(studentData)
        .then((data) => {
            console.log("student added")
            // after saving the data of the student 
            // use the id of the teacher and update the array of student in the teacher schema with the id that the mongoose generated 
            // when we save the data of the student    
            return School.TeacherModel.findByIdAndUpdate(teacherId, {
                $push: {
                    Students: data,
                }
            })

        })
        // if there is an error
        .catch((err) => {
            console.log(err)
        })
};