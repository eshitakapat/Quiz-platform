"use client"

import { useRouter } from "next/navigation"

export default function GuidelinesButton() {

  const router = useRouter()

  return (
    <div className="relative inline-block">

      <div className="bg-black rounded-md absolute top-1 left-1 w-full h-full"></div>

      <button
        onClick={() => router.push("/quizPlatform")}
        className="bg-[#2C88FF] text-[#E5E5E5] text-2xl font-semibold tracking-tighter border-black border-3 rounded-md relative cursor-pointer py-2 px-5"
      >
        Continue
      </button>

    </div>
  )
}