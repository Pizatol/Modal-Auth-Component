import { createContext, useState } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"


export const ModalContext = createContext();

export const ModalProvider = (props) => {
   
    const [modalState, setModalState] = useState({
        signUpModal: true,
        signInModal: false
      })
    
      const toggleModals = modal => {
        if(modal === "signIn") {
          setModalState({
            signUpModal: false,
            signInModal: true
          })
        }
        if(modal === "signUp") {
          setModalState({
            signUpModal: true,
            signInModal: false
          })
        }
        if(modal === "close") {
          setModalState({
            signUpModal: false,
            signInModal: false
          })
        }
      }


    return (
        <ModalContext.Provider value={{modalState, toggleModals}}>
            {props.children}
        </ModalContext.Provider>
    );
};
