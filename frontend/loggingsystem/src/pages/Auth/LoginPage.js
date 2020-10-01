import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Formik, Form } from "formik";
import { AuthTitle } from "../../components/generic/AuthTitle/AuthTitle.styled";
import { LoginValidationSchema } from "../../validations/schemas/login";
import { TextInputField } from "../../components/generic/TextInputField/TextInputField";
import { LoginRedirect } from "../../components/generic/redirects/login/LoginRedirect";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/slices/auth";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Card>
      <AuthTitle>Login</AuthTitle>
      <Card.Body>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values) => {
            await dispatch(login(values));
            history.push("/");

            console.log("submitted");
          }}
          validationSchema={LoginValidationSchema}
        >
          {({ isValid }) => {
            return (
              <Form>
                {error && <Alert variant="danger">{error?.message}</Alert>}
                <TextInputField name="username" label="Username" />
                <TextInputField
                  name="password"
                  type="password"
                  label="Password"
                />
                <LoginRedirect />
                <Button disabled={!isValid || isLoading} type="submit">
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
