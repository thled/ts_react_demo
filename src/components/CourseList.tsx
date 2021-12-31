import { Link } from "react-router-dom";
import { Course } from "../api/courseApi";

type CourseListProps = {
  courses: Course[];
  deleteCourse: (course: Course) => void;
};

function CourseList(props: CourseListProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course: Course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/course/" + course.slug}>
                  {course.title}
                </Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteCourse(course)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CourseList;
