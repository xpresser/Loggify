import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Formik, Form } from "formik";
import { login } from "../../store/slices/auth";
import { AuthTitle } from "../../components/generic/AuthTitle/AuthTitle.styled";
import { LoginValidationSchema } from "../../validations/schemas/login";
import { TextInputField } from "../../components/generic/TextInputField/TextInputField";

const LoginPage = () => {
  return (
    <Card>
      <AuthTitle>Login</AuthTitle>
      <Card.Body>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => {
            console.log("submitted");
          }}
          validationSchema={LoginValidationSchema}
        >
          {({ isValid }) => {
            return (
              <Form>
                <TextInputField name="username" label="Username" />
                <TextInputField
                  name="password"
                  type="password"
                  label="Password"
                />
                <Button disabled={!isValid} type="submit">
                  Login
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export { LoginPage };
