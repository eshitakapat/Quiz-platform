"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const router = useRouter();


  return (
    <div>
      Welcome to the quiz platform!
      <button onClick={() => router.push('/quizGuidelines')}>Go to Guidelines</button>
    </div>
  )
}

export default page