import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  style: string;
  value: string;
  required?: boolean;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  style,
  value,
  required,
  name,
  onChange,
}) => {
  return (
    <input
      required={required}
      type={type}
      placeholder={placeholder}
      className={`text-black rounded-lg py-5 px-4 text-sm focus:outline-none ${style}`}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default InputField;
