import React from "react";
import { Link } from "react-router-dom";
import { getCourses, Course } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    getCourses().then((_courses: Course[]) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
