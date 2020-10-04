import React from "react";
import { Link } from "react-router-dom";
import { RedirectQuestion } from "../RedirectQuestion.styled";
import { RedirectLink } from "../RedirectLink.styled";

const SignupRedirect = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <RedirectQuestion>Already have an account?</RedirectQuestion>
      <Link to={{ pathname: `/login` }}>
        <RedirectLink style={{ fontWeight: "bold" }}>Login</RedirectLink>
      </Link>
    </div>
  );
};

export { SignupRedirect };
