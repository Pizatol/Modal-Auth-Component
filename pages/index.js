import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { ModalContext } from "../context/Context";
import { useContext } from "react";

import Modal from "../components/Modal";

export default function Home() {
    const [toggleModal, setToggleModal] = useContext(ModalContext);

    const toggleFunc = () => {
        setToggleModal(!toggleModal);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <button onClick={() => toggleFunc()}>Toggle</button>

            {toggleModal ? <Modal /> : ""}
        </div>
    );
}
