import { ChangeEvent } from "react";

type TextInputProps = {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

function TextInput(props: TextInputProps) {
  let wrapperClass = 'form-group';
  if (hasError(props.error)) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          type="text"
          id={props.id}
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {hasError(props.error) && (
        <div className="alert alert-danger">{props.error}</div>
      )}
    </div>
  );
}

TextInput.defaultProps = {
  error: ''
};

function hasError(error: string) {
  return error.length > 0;
}

export default TextInput;
