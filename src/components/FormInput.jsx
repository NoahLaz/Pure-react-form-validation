import { useState } from "react";
import { Input } from "./FormStyle";

const FormInput = ({ input, formValues, handleChange }) => {
  const [focused, setFocused] = useState("false");
  return (
    <Input
      {...input}
      value={formValues[input.name]}
      onChange={handleChange}
      onBlur={() => setFocused("true")}
      data-focused={focused}
    />
  );
};

export default FormInput;
