import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Formik, Form } from "formik";
import { AuthTitle } from "../../components/generic/AuthTitle/AuthTitle.styled";
import { SignupValidationSchema } from "../../validations/schemas/register";
import { TextInputField } from "../../components/generic/TextInputField/TextInputField";

const RegisterPage = () => {
  return (
    <Card>
      <AuthTitle>Sign Up</AuthTitle>
      <Card.Body>
        <Formik
          initialValues={{
            fullName: "",
            username: "",
            password: "",
            email: "",
            userPostion: "",
          }}
          onSubmit={() => {
            console.log("submitted");
          }}
          validationSchema={SignupValidationSchema}
        >
          {({ isValid }) => {
            return (
              <Form>
                <TextInputField name="fullName" label="Full name" />
                <TextInputField name="username" label="Username" />
                <TextInputField
                  name="password"
                  type="password"
                  label="Password"
                />
                <TextInputField name="email" label="Email" />
                <TextInputField
                  name="userPostion"
                  label="Position in company"
                />
                <Button disabled={!isValid} type="submit">
                  Sign Up
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export { RegisterPage };
