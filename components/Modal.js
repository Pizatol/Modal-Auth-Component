
import { ModalContext } from "../context/Context";
import { useContext } from "react";
import css from '../styles/Modal.module.scss'
import Image from "next/image";

import close from "../public/close.svg"

export default function Modal() {

	const [toggleModal, setToggleModal] = useContext(ModalContext);

	const toggleFunc = () => {
		setToggleModal(!toggleModal)
	}

    return (
        <div className={css.globalContainer}>
		  <div 
		  className={css.overlay}
		  onClick={toggleFunc}
		  ></div>
		  	<div className={css.cardContainer}>

			  <div className={css.upCard}>
				  <h1>Modal Title</h1>
				  <button
				  onClick={toggleFunc}
				  >
						<Image
							src={close}
							width={40}
							height={40}
							alt="close button"
						/>
				  </button>
			  </div>
			  <div className={css.modCard}>
				  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nobis.</p>
			  </div>
			  <div className={css.downCard}>
				  <button className={css.btnAction}>Action</button>
				  <button
				  onClick={toggleFunc}
				   className={css.btnClose}>Close</button>
			  </div>

			  </div>
            
        </div>
    );
}
