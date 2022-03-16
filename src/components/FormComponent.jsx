import {
  Container,
  Header,
  Form,
  FormGroup,
  Input,
  Error,
  Button,
  Label,
} from "./FormStyle";
import { useState } from "react";

const FormComponent = () => {
  const [focused, setFocused] = useState("false");
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formInputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 6-16 characters and shouldn't include any special characters",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      focused: "false",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "This field should be a valid email address",
      required: true,
      focused: "false",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters, and must include at least  1 letter, 1 number and 1 special character",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      focused: "false",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords should match",
      pattern: formValues.password,
      required: true,
      focused: "false",
    },
  ];

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setFocused("true");
  };

  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Header>Sign Up</Header>
        {formInputs.map((input) => (
          <FormGroup key={input.id}>
            <Label>{input.label}</Label>
            <Input
              {...input}
              value={formValues[input.name]}
              onChange={handleChange}
              onBlur={handleFocus}
            />
            <Error>{input.errorMessage}</Error>
          </FormGroup>
        ))}

        <Button type="submit">submit</Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
