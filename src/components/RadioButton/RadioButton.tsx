interface Props {
  id: any;
  name: string;
  checked: boolean;
  onChange: any;
  label: string;
  value: any;
}

function RadioButton({ id, name, value, checked, onChange, label }: Props) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="custom-radio"
      />
      <label
        htmlFor={id}
        className="ms-2 md:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
