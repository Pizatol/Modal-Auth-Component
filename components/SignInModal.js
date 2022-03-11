import css from "../styles/SignUpModal.module.scss";

import { ModalContext } from "../context/Context";
import { useContext, useState, useRef } from "react";

export default function SignUpModal() {
    const {modalState, toggleModals} = useContext(ModalContext);

    const [validation, setValidation] = useState("");

	 const closeModal = () => {
		setValidation("");
		toggleModals("close");
	 };

    const inputs = useRef([]);

    const addInput = (e) => {
        if (e && !inputs.current.includes(e)) inputs.current.push(e);
    };

    const validForm = (e) => {
        e.preventDefault();

        if (
            (inputs.current[1].value.length || inputs.current[2].value.length) <
            6
        ) {
            setValidation(" 6 caracters minimum");
            inputs.current[0].value = "";
            inputs.current[1].value = "";
            inputs.current[2].value = "";
            return;
        }
      
    };

    return (

		<>
		{modalState.signInModal && (


        <div className={css.globalContainer}>
            <div className={css.overlay} onClick={closeModal}></div>
            <div className={css.cardContainer}>
                <div className={css.upCard}>
                    <h1>Sign In !</h1>
                </div>
                <div className={css.modCard}>
                    <form onSubmit={validForm}>
                        <div className={css.formItem}>
                            <label htmlFor="email">Email</label>
                            <input
                                ref={addInput}
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        <div className={css.formItem}>
                            <label htmlFor="pwd">Password</label>
                            <input
                                ref={addInput}
                                type="password"
                                id="pwd"
                                required
                            />
                        </div>

                        <button className={css.btnSubmit}>Submit</button>
                    </form>
                    <span className={css.validation}> {validation} </span>
                </div>
                <div className={css.downCard}></div>
            </div>
        </div>



		)}
		</>
    );
}
