import React from "react";
import { getCourses } from "../api/courseApi";

type Course = {
  id: number;
  title: string;
  authorId: number;
  category: string;
};

type CoursesPageProps = {
};

type CoursesPageState = {
  courses: Course[];
};

class CoursesPage extends React.Component<CoursesPageProps, CoursesPageState> {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses()
      .then((courses: Course[]) => {
        this.setState({ courses: courses });
      });
  }

  render() {
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
            { this.state.courses.map( (course: Course) => {
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
}

export default CoursesPage;
