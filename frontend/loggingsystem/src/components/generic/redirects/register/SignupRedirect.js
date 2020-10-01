import React from "react";
import { Link } from "react-router-dom";
import { RedirectQuestion } from "../RedirectQuestion.styled";
import { RedirectLink } from "../RedirectLink.styled";

const SignupRedirect = () => {
  return (
    <div>
      <RedirectQuestion>Already have an account?</RedirectQuestion>
      <Link to={{ pathname: `/login` }}>
        <RedirectLink>Login</RedirectLink>
      </Link>
    </div>
  );
};

export { SignupRedirect };
