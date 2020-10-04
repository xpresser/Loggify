import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Formik, Form } from "formik";
import { AuthTitle } from "src/components/generic/AuthTitle/AuthTitle.styled";
import { LoginValidationSchema } from "src/validations/schemas/login";
import { TextInputField } from "src/components/generic/TextInputField/TextInputField";
import { LoginRedirect } from "src/components/generic/redirects/login/LoginRedirect";
import { useSelector, useDispatch } from "react-redux";
import { login } from "src/store/slices/auth";

const LoginPage = () => {
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  return (
    <Card
      className={"col-md-6 col-md-offset-3"}
      style={{
        width: "35rem",
        margin: "0 auto",
        marginTop: "3rem",
        border: "none",
        borderRadius: "10px",
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <AuthTitle style={{ textAlign: "center" }}>Login</AuthTitle>
      <Card.Body>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => {
            dispatch(login(values));
          }}
          validationSchema={LoginValidationSchema}
        >
          {({ isValid }) => {
            return (
              <Form>
                {error && (
                  <Alert variant="danger" dismissible>
                    {error}
                  </Alert>
                )}
                <TextInputField name="username" label="Username" />
                <TextInputField
                  name="password"
                  type="password"
                  label="Password"
                />
                <LoginRedirect />
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
