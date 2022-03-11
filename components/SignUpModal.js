import css from "../styles/SignUpModal.module.scss";

import { ModalContext } from "../context/Context";
import { useContext, useState, useRef } from "react";

export default function SignUpModal() {
    const { modalState, toggleModals, signUp } = useContext(ModalContext);

    const [validation, setValidation] = useState("");

    const closeModal = () => {
        setValidation("");
        toggleModals("close");
    };

    const formRef = useRef();

    // REGROUPEMENT DES INPUTS EN UN SEUL USEREF
    const inputs = useRef([]);
    const addInput = (e) => {
        if (e && !inputs.current.includes(e)) {
            inputs.current.push(e);
        }
    };

    // VALIDATION FORMULAIRE
    const validForm = async (e) => {
        e.preventDefault();
        console.log(inputs);
        if (
            (inputs.current[1].value.length || inputs.current[2].value.length) <
            6
        ) {
            setValidation(" 6 caracters minimum");
            return;
        } else if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation(" passwords do not match");
            return;
        }

        // AUTEHNTIFICATION
        try {
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            );

            formRef.current.reset();
            setValidation("");
        } catch (err) {
            if (err.code === "auth/invalid-email") {
                setValidation("Email format invalid");
                console.dir(err);
            }
            if (err.code === "auth/email-already-in-use") {
                setValidation("Email already used");
                console.dir(err);
            }
        }
    };

    return (
        <>
            {modalState.signUpModal && (
                <div className={css.globalContainer}>
                    <div className={css.overlay} onClick={closeModal}></div>
                    <div className={css.cardContainer}>
                        <div className={css.upCard}>
                            <h1>Sign Up !</h1>
                        </div>
                        <div className={css.modCard}>
                            <form ref={formRef} onSubmit={validForm}>
                                <div className={css.formItem}>
                                    <label htmlFor="SignUpEmail">Email</label>
                                    <input
                                        ref={addInput}
                                        type="email"
                                        id="SignUpEmail"
                                        required
                                    />
                                </div>
                                <div className={css.formItem}>
                                    <label htmlFor="SignUpPwd">Password</label>
                                    <input
                                        ref={addInput}
                                        type="password"
                                        id="SignUpPwd"
                                        required
                                    />
                                </div>
                                <div className={css.formItem}>
                                    <label htmlFor="RepeatPwd">
                                        Repeat password
                                    </label>
                                    <input
                                        ref={addInput}
                                        type="password"
                                        id="RepeatPwd"
                                        required
                                    />
                                </div>
                                <div className={css.validation}>
                                   
                                    {validation}{" "}
                                </div>
                                <button
                                    onClick={() => closeModal}
                                    className={css.btnSubmit}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className={css.downCard}></div>
                    </div>
                </div>
            )}
        </>
    );
}
