import css from "../styles/SignUpModal.module.scss";

import { ModalContext } from "../context/Context";
import { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function SignInModal() {
    const router = useRouter();

    const { modalState, toggleModals, signIn } = useContext(ModalContext);

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

        // AUTEHNTIFICATION
        try {
            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            );
            // à tester
            // formRef.current.reset();
            console.log(cred);

            closeModal();
            router.push("/privateRoad");
        } catch (err) {
            setValidation("Email or password incorrect");
            console.dir(err);
        }
    };

    return (
        <>
            {modalState.signInModal && (
                <div className={css.globalContainer}>
                    <div className={css.overlay} onClick={closeModal}></div>
                    <div className={css.cardContainer}>
                        <div className={css.upCard}>
                            <h1>Sign Up !</h1>
                        </div>
                        <div className={css.modCard}>
                            <form ref={formRef} onSubmit={validForm}>
                                <div className={css.formItem}>
                                    <label htmlFor="SignInEmail">Email</label>
                                    <input
                                        ref={addInput}
                                        type="email"
                                        id="SignInEmail"
                                        required
                                    />
                                </div>
                                <div className={css.formItem}>
                                    <label htmlFor="SignInPwd">Password</label>
                                    <input
                                        ref={addInput}
                                        type="password"
                                        id="SignInPwd"
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
