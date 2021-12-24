import { ChangeEvent, FormEvent, useState } from "react";
import { Course } from "../api/courseApi";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { useNavigate } from "react-router-dom";

const ManageCoursePage = () => {
  const newCourse: Course = {
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  };

  const [course, setCourse] = useState(newCourse);
  const navigate = useNavigate();

  function handleInputChange({ target }: ChangeEvent<HTMLInputElement>) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }

  function handleSelectChange({ target }: ChangeEvent<HTMLSelectElement>) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    courseApi.saveCourse(course)
      .then(() => navigate("/courses"));
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
