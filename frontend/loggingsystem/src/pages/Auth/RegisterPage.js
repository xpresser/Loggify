import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Formik, Form } from "formik";
import { AuthTitle } from "src/components/generic/AuthTitle/AuthTitle.styled";
import { SignupValidationSchema } from "src/validations/schemas/register";
import { TextInputField } from "src/components/generic/TextInputField/TextInputField";
import { SignupRedirect } from "src/components/generic/redirects/register/SignupRedirect";
import { useDispatch, useSelector } from "react-redux";
import { register } from "src/store/slices/auth";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Card
      className={"col-md-6 col-md-offset-3"}
      style={{
        margin: "0 auto",
        marginTop: "3rem",
        border: "none",
        borderRadius: "10px",
        boxShadow:
          "0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2), 0 1rem 2rem 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <AuthTitle style={{ textAlign: "center" }}>Sign Up</AuthTitle>
      <Card.Body>
        <Formik
          initialValues={{
            fullName: "",
            username: "",
            password: "",
            email: "",
          }}
          onSubmit={(values) => {
            dispatch(register(values));
          }}
          validationSchema={SignupValidationSchema}
        >
          {({ isValid }) => {
            return (
              <Form>
                {error && (
                  <Alert variant={"danger"} dismissible>
                    {error}
                  </Alert>
                )}
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
                <SignupRedirect />
                <Button
                  disabled={!isValid || isLoading}
                  type="submit"
                  style={{
                    fontWeight: "bold",
                    width: "6rem",
                    display: "block",
                    margin: "0 auto",
                  }}
                >
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
