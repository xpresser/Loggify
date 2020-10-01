import React from "react";
import { Link } from "react-router-dom";
import { RedirectQuestion } from "../RedirectQuestion.styled";
import { RedirectLink } from "../RedirectLink.styled";

const LoginRedirect = () => {
  return (
    <div>
      <RedirectQuestion>Don't have an account?</RedirectQuestion>
      <Link to={{ pathname: `/signup` }}>
        <RedirectLink>Register</RedirectLink>
      </Link>
    </div>
  );
};

export { LoginRedirect };
