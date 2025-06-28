'use client'
import { api } from "@/lib/api";
import { useAuth } from "@/stores/authContext";

export default function Home () {

    const user = useAuth(state => state.user)
    const login = useAuth(state => state.login)
    const loginn = useAuth(state => state.loginn)

    return (
      <>
        <p>Count: {user}</p>
        <button onClick={()=> login()}>Incrementer</button>
        <button onClick={()=> loginn()}>Decrementer</button>
      </>
    )
}