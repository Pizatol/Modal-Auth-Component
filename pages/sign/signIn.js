import React from "react";
import css from "../../styles/signUp.module.scss";
import Link from "next/link";
export default function SignIn() {
  return (
    <div className={css.globalContainer}>
      <h1>Page Sign In</h1>

      <form className={css.form} method="post" >
        <h1>Log In</h1>
        <div className={css.formEmail}>
          <label for="email"> </label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Enter you Email" 
          required />
        </div>
        <div className={css.formPwd}>
          <label for="pwd"></label>
          <input 
          type="password"
           name="pwd" 
           id="pwd" 
           placeholder="Enter your password"
           required />
        </div>
        <div className={css.btnSubmit}>
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
      <Link href="/">
        <a> Retour</a>
      </Link>
    </div>
  );
}
