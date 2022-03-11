import React, { useContext } from "react";
import css from "../styles/privateRoad.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { ModalContext } from "../context/Context";
import Image from "next/image";
import cat from "../public/cat.gif"

export default function PrivateRoad() {
    const router = useRouter();

    const { currentUser } = useContext(ModalContext);

  

    return (
        <>
            {currentUser ? (
                <div className={css.privatePart}>
                    <Link href="/">
                        <button>Home</button>
                    </Link>
                    <h1>Ceci est la page privée de test</h1>
                    <div className={css.image}>

                    <Image
                      src={cat}
                      width={500}
                      height={500}

                    />
                    </div>
                </div>
            ) : (
                <div>
                    "Hi, please sign in !"
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            )}
        </>
    );
}
