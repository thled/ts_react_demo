import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Course } from "../api/courseApi";
import CourseForm, { FormErrors } from "./CourseForm";
import courseStore from "../stores/courseStore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { saveCourse } from "../actions/courseActions";

const ManageCoursePage = () => {
  const newCourse: Course = {
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  };

  const noErrors: FormErrors = {
    title: "",
    authorId: "",
    category: ""
  };

  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState(noErrors);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (typeof slug !== "string") {
      return;
    }
     const _course = courseStore.getCourseBySlug(slug);
     if (_course === undefined) return;
     setCourse(_course);
  }, [slug]);

  function formIsValid() {
    const _errors: FormErrors = { ...noErrors };

    let hasError = false;
    if (course.title.length < 1) {
      hasError = true;
      _errors.title = "Title is required.";
    }
    if (
      typeof course.authorId !== "string" ||
      course.authorId.length < 1
    ) {
      hasError = true;
      _errors.authorId = "Author is required.";
    }
    if (course.category.length < 1) {
      hasError = true;
      _errors.category = "Category is required.";
    }

    setErrors(_errors);

    return !hasError;
  }

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
    if (!formIsValid()) {
      return;
    }

    saveCourse(course)
      .then(() => {
        navigate("/courses");
        toast.success("Course saved.");
      });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
