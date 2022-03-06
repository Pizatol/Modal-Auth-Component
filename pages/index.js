import Head from "next/head";
import Image from "next/image";
import css from "../styles/Home.module.scss";

import { ModalContext } from "../context/Context";
import { useContext } from "react";
import Link from "next/link";

import Modal from "../components/Modal";



export default function Home() {
  const [toggleModal, setToggleModal] = useContext(ModalContext);

  const toggleFunc = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className={css.container}>
      <Head>
        <title>La Modale et l'Auth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>


    <Link href="/privateRoad">
        <a>Route privée</a>
    </Link>

    <Link href="/sign/signUp">
      <a> Sign Up </a>
    </Link>
    <Link href="/sign/signIn">
      <a>Sign In</a>
    </Link>


        <button className={css.button} onClick={() => toggleFunc()}>
          Toggle
        </button>

        {toggleModal ? <Modal /> : ""}
      </section>
    </div>
  );
}
