import React, { useEffect } from 'react'

export default function LogoutPage() {

  useEffect(() => {

    // sessionId sil
    localStorage.removeItem("sessionId")
    // anasayfaya yönlendir
    window.location.href = "/"

  }, [])


  return (
    
    <>

        <p>İşleminiz yapılıyor...</p>
    </>
  )
}
