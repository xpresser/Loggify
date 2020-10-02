import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Formik, Form } from "formik";
import { AuthTitle } from "../../components/generic/AuthTitle/AuthTitle.styled";
import { SignupValidationSchema } from "../../validations/schemas/register";
import { TextInputField } from "../../components/generic/TextInputField/TextInputField";
import { SignupRedirect } from "../../components/generic/redirects/register/SignupRedirect";
import { useDispatch, useSelector } from "react-redux";
import { register } from "src/store/slices/auth";

const RegisterPage = () => {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

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
            dispatch(register(values));
          }}
          validationSchema={SignupValidationSchema}
        >
          {({ isValid }) => {
            return (
              <Form>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                <TextInputField name="fullName" label="Full name" />
                <TextInputField name="username" label="Username" />
                <TextInputField
                  name="password"
                  type="password"
                  label="Password"
                />
                <TextInputField
                  name="passwordConfirm"
                  type="password"
                  label="Confirm Password"
                />
                <TextInputField name="email" label="Email" />
                <TextInputField
                  name="userPostion"
                  label="Position in company"
                />
                <SignupRedirect />
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
