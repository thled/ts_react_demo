import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../api/courseApi";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    setCourses(courseStore.getCourses());
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
