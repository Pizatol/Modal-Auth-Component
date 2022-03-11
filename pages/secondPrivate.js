
import React, {useContext} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ModalContext } from '../context/Context';



export default function secondPrivate() {


	const router = useRouter()

	const { currentUser } = useContext(ModalContext);
 

  return (

	<>

		{currentUser ? (


	 <div>


	 <h1>Hello there !</h1>

	 </div>
		)  : "please sign in !"}

		<div>
			<Link href='/'>
				<a>Home</a>
			</Link>
		</div>


	</>
  )
}
