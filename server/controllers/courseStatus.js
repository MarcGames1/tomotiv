import courseStatus from "../models/courseStatus"
import CourseStatus from "../models/courseStatus"

export const update = async (req, res) =>{
    const {courseId, userId} = req.params
    const courseStatus = courseStatus.findOne({  courseId: courseId });
    console.log('status updated')
    console.log(req.body)
    return res.status(200).json({success})
}

// /:courseId/:userId/