import React from "react";
import { getCourses, Course } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    getCourses().then((_courses: Course[]) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course: Course) => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoursesPage;
