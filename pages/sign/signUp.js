import React, {useState} from "react";
import css from "../../styles/signUp.module.scss";
import Link from "next/link";

async function createUser(email, password){
  const response =  await fetch("/api/auth/signup", {
    method : "POST",
    body : JSON.stringify({email, password}),
    headers : {
      'Content-type' : "application/json"
    }
  })

  const data = await response.json()

  if(!response.ok) {
    throw new Error(data.message || "there is a problem")
  }

  return data
}

export default function SignUp() {

  const [dataInputEmail, setDataInputEmail] = useState("") 
  const [dataInputPwd, setDataInputPwd] = useState("")
  const [dataInputRepeatPwd, setDataInputRepeatPwd] = useState("")

  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = e => {
    e.preventDefault();
    console.log(dataInputEmail, dataInputPwd, dataInputRepeatPwd );
    setDataInputEmail('')
    setDataInputPwd('')
    setDataInputRepeatPwd('')
    
  }



  function submitHandler(e){
    e.preventDefault()

    if(isLogin) {

    } else {

    }

  }

 
  return (
    <>
      <div className={css.globalContainer}>
        <h1>Page Sign Up</h1>

        <form
        onSubmit={handleSubmit}
         className={css.form}>
          <h1>Log In</h1>
          <div className={css.formEmail}>
            
            <input
            onChange = {e => setDataInputEmail(e.target.value) }            
              type="text"
              name="email"
              id="email"
              placeholder="Enter you Email"
              value= {dataInputEmail}
              required
            />
          </div>
          <div className={css.formPwd}>
            
            <input
            onChange={e => setDataInputPwd(e.target.value)}
              type="password"
              name="pwd"
              id="pwd"
              value= {dataInputPwd}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={css.formPwd}>
          
            <input
            onChange={e => setDataInputRepeatPwd(e.target.value)}
              type="password"
              name="pwd"
              id="pwd"
              value={dataInputRepeatPwd}
              placeholder="Repeat password"
              required
            />
          </div>
          <div className={css.btnSubmit}>
            <button>Subscribe</button>
          </div>
        </form>

        <Link href="/">
          <a> Retour</a>
        </Link>
      </div>
    </>
  );
}
