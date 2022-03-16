import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1647340611542-8e1f1f8d8daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

export const Form = styled.form`
  padding: 35px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 30px;
  text-align: center;
  color: rebeccapurple;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: gray;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  color: darkgray;
  :invalid[foc="true"] ~ span {
    display: block;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 16px;
  margin-top: 5px;
  display: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: rebeccapurple;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
