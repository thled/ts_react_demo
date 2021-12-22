import { ChangeEvent, useState } from "react";
import { Course } from "../api/courseApi";
import CourseForm from "./CourseForm";

const ManageCoursePage = () => {
  const newCourse: Course = {
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  };

  const [course, setCourse] = useState(newCourse);

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

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
      />
    </>
  );
}

export default ManageCoursePage;
