import { ChangeEvent } from "react";

type Option = {
  value: string;
  label: string;
};

type SelectInputProps = {
  id: string;
  label: string,
  name: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void,
  options: Option[],
  error: string;
}

function SelectInput(props: SelectInputProps) {
  let wrapperClass = 'form-group';
  if (hasError(props.error)) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        >
          {props.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {hasError(props.error) && (
        <div className="alert alert-danger">{props.error}</div>
      )}
    </div>
  );
}

function hasError(error: string) {
  return error.length > 0;
}

export default SelectInput;

