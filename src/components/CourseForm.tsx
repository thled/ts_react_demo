import { ChangeEvent } from "react";
import { Course } from "../api/courseApi";

type CourseFormProps = {
   course: Course; 
   onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
   onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function CourseForm(props: CourseFormProps) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            type="text"
            id="title"
            onChange={props.onInputChange}
            name="title"
            className="form-control"
            value={props.course.title}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onSelectChange}
            className="form-control"
            value={props.course.authorId || ""}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            onChange={props.onInputChange}
            name="category"
            className="form-control"
            value={props.course.category}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;

