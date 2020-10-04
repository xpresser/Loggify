import React, { useState } from "react";
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
  const [show, setShow] = useState(true);

  return (
    <Card
      class="col-md-6 col-md-offset-3"
      style={{
        width: "30rem",
        margin: "0 auto",
        border: "none",
        borderRadius: "10px",
        fontSize: "very-small",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2)",
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
            window.location.href = "/login";
          }}
          validationSchema={SignupValidationSchema}
        >
          {({ isValid }) => {
            return (
              <Form>
                {error && (
                  <Alert
                    show={show}
                    variant={"danger"}
                    onClose={() => setShow(false)}
                    dismissible
                  >
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
                    width: "30%",
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
