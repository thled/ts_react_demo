import { ChangeEvent } from "react";
import { Course } from "../api/courseApi";
import SelectInput from "./common/SelectInput";
import TextInput from "./common/TextInput";

type CourseFormProps = {
  course: Course;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function CourseForm(props: CourseFormProps) {
  return (
    <form>

      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onInputChange}
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
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category}
        onChange={props.onInputChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;

