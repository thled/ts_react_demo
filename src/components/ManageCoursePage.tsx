import { useState } from "react";
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

  function handleTitleChange(event: any) {
    const updatedCourse = { ...course, title: event.target.value }; 
    setCourse(updatedCourse);
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </>
  );
}

export default ManageCoursePage;
