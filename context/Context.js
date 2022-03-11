import { createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase/firebase-config";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const [isLogged, setIsLogged] = useState(false);


    const signUp = (email, pwd) =>
    // méthode de frebase pour signUp
        createUserWithEmailAndPassword(auth, email, pwd);

        // méthode de frebase pour signIn
        const signIn = (email, pwd) =>
        signInWithEmailAndPassword(auth, email, pwd);


        // !!! VOIT TOUS LES CHANGEMENTS DE CONNEXION ET MAINTIENT LA CONNECTION
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            
            // le loading data passe sur false une fois que les données sont arrivées, ça permet de temporiser pendant le chargement des données 
            setLoadingData(false);
        });
        return unsubscribe;
    }, []);

    //  MODAL

    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false,
    });

    const toggleModals = (modal) => {
        if (modal === "signIn") {
            setModalState({
                signUpModal: false,
                signInModal: true,
            });
        }
        if (modal === "signUp") {
            setModalState({
                signUpModal: true,
                signInModal: false,
            });
        }
        if (modal === "close") {
            setModalState({
                signUpModal: false,
                signInModal: false,
            });
        }
    };

    return (
        <ModalContext.Provider
            value={{ modalState, toggleModals, signUp, signIn ,currentUser }}
        >
        {/* le loading data permet de d'attendre que les données de firebase arrivent avant d'etre autorisé */}
            {!loadingData && props.children}
        </ModalContext.Provider>
    );
};
