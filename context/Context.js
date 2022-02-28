
import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = (props) => {
	
	const [toggleModal, setToggleModal] = useState(false)

	return (
		<ModalContext.Provider value={[toggleModal, setToggleModal]} >
			{props.children}
		</ModalContext.Provider>
	)

}

