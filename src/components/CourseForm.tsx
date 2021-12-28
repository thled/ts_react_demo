import { ChangeEvent, FormEvent } from "react";
import { Course } from "../api/courseApi";
import SelectInput from "./common/SelectInput";
import TextInput from "./common/TextInput";

export type FormErrors = {
  title: string;
  authorId: string;
  category: string;
};

type CourseFormProps = {
  errors: FormErrors;
  course: Course;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function CourseForm(props: CourseFormProps) {
  return (
    <form onSubmit={props.onSubmit}>

      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onInputChange}
        error={props.errors.title}
      />

      <SelectInput
        id="author"
        label="Author"
        name="authorId"
        value={props.course.authorId || ""}
        onChange={props.onSelectChange}
        options={[
          { value: "", label: "Select Author" },
          { value: "1", label: "Cory House" },
          { value: "2", label: "Scott Allen" },
        ]}
        error={props.errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        onChange={props.onInputChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;

