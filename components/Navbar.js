

import css from '../styles/Navbar.module.scss'

import { ModalContext } from "../context/Context";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase/firebase-config";

export default function Navbar() {


const router = useRouter()

	const { toggleModals, currentUser } =
	useContext(ModalContext);

	const logOut = async () => {
		try {
			 await signOut(auth);
			 router.push("/");
		} catch (err) {
			 console.log(" we can't deconnect, please retry");
		}
		
  };
 

  return (


	 <>
	<div className={css.navContainer}>

	{currentUser ? "" : (

<>
	
<button className={css.btnConnection} onClick={() => toggleModals("signIn")}>Sign In</button>

<button className={css.btnConnection} onClick={() => toggleModals("signUp")}>Sign Up</button>
</>
	)}

<button className={css.btnLogOut} onClick={logOut}>Log Out</button>
	</div>

	 </>
  )
}
