'use client';

<<<<<<< Updated upstream
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function HomePage() {
  useEffect(() => {
    redirect('/calculadora')
  }, [])

  return <><h1>Loading</h1></>
=======
import { redirect } from "next/navigation";


export default function ProfilePage() {
  redirect('/calculadora')

  return (
    <>
    </>
  )
>>>>>>> Stashed changes
}
