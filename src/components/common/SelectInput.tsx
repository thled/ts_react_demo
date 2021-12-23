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
}

function SelectInput(props: SelectInputProps) {
  return (
    <div className="form-group">
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
    </div>
  );
}

export default SelectInput;

