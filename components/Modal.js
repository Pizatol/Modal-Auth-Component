
import { ModalContext } from "../context/Context";
import { useContext } from "react";
import css from '../styles/Modal.module.scss'

export default function Modal() {

	const [toggleModal, setToggleModal] = useContext(ModalContext);


    return (
        <div className={css.globalContainer}>
		  <div className={css.overlay}></div>
		  	<div className={css.cardContainer}>

			  <div className={css.upCard}>
				  <h1>Modal Title</h1>
				  <button>X</button>
			  </div>
			  <div className={css.modCard}>
				  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nobis.</p>
			  </div>
			  <div className={css.downCard}>
				  <button className={css.btnAction}>Action</button>
				  <button className={css.btnClose}>Close</button>
			  </div>

			  </div>
            
        </div>
    );
}
