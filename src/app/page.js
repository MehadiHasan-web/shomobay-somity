import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
         <h2>Home</h2>
   
        <Link href="/login" >  Login </Link>
        <Link href="/user-profile" > User Profile </Link>

    </div>
  )
}
