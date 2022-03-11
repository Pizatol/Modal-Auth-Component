
import React, {useContext} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ModalContext } from '../context/Context';




export default function PrivateRoad() {

  const router = useRouter()

  const { currentUser } = useContext(ModalContext);

 

  console.log("USER", currentUser);

  return (
    <>

    {currentUser ?(

      <div>

    <h1>Ceci est la page privée de test</h1>

      

      <Link href='/secondPrivate'>
        <a>Second Private Page</a>
      </Link>
    
      </div>

    ) : "Hi, please sign in !"}

    <Link href='/'>
      <a>Home</a>
    </Link>
    
    </>
  )
}
