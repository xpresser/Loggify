import { Field } from "formik";
import React from "react";
import { TextInput } from "../../generic/TextInput/TextInput";

const TextInputWrapper = ({ form, field, ...rest }) => {
  const errorMessage = form.errors[field.name];
  const isTouched = form.touched[field.name];

  return (
    <TextInput
      isTouched={isTouched}
      errorMessage={errorMessage}
      {...field}
      {...rest}
    />
  );
};

const TextInputField = ({ name, ...rest }) => {
  return <Field name={name} component={TextInputWrapper} {...rest} />;
};

export { TextInputField };
