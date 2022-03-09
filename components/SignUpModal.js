import React from "react";
import css from "../styles/SignUpModal.module.scss";

import { ModalContext } from "../context/Context";
import { useContext } from "react";

export default function SignUpModal() {
    const [toggleModal, setToggleModal] = useContext(ModalContext);

    const toggleFunc = () => {
        setToggleModal(!toggleModal);
    };

    return (
        <div className={css.globalContainer}>
            <div className={css.overlay} onClick={toggleFunc}></div>
            <div className={css.cardContainer}>
                <div className={css.upCard}>
                    <h1>Sign Up !</h1>
						  <button onClick={toggleFunc} className={css.btnClose}>
                        Close
                    </button>
                    
                </div>
                <div className={css.modCard}>
                    <form>
                        <div className={css.formItem}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className={css.formItem}>
                            <label htmlFor="pwd">Password</label>
                            <input type="password" id="pwd" required />
                        </div>
                        <div className={css.formItem}>
                            <label htmlFor="pwd">Repeat password</label>
                            <input type="password" id="pwd" required />
                        </div>
								<button className={css.btnSubmit}>Submit</button>
                    </form>
                </div>
                <div className={css.downCard}>

							

                   
                </div>
            </div>
        </div>
    );
}
