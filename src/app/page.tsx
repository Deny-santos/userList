'use client'

import { useUserContext } from "@/contexts/ContextProvider"

import { useRouter } from "next/navigation"

export default function Home() {

    const { token, user } = useUserContext()

    const router = useRouter()

    if (!token)  router.push("/login")

  return (
    <main>home</main>
  )
}
