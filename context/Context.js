import { createContext, useState } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"

import {auth} from '../firebase/firebase-config'

export const ModalContext = createContext();

export const ModalProvider = (props) => {

  
  const [currentUser, setCurrentUser] = useState()
  const [loadingData, setLoadingData] = useState(true)

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)



  //  MODAL

    const [modalState, setModalState] = useState({
        signUpModal: false,
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
        <ModalContext.Provider value={{modalState, toggleModals, signUp}}>
            {props.children}
        </ModalContext.Provider>
    );
};
