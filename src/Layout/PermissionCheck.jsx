import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import { UserProvider } from '../Context/UserContext'
import { Outlet } from 'react-router-dom'

export default function PermissionCheck() {

  const { user } = useContext(UserProvider)
  const [nextPage, setNextPage] = useState({ role: "pending"})

  
  useEffect(() => {

        if (user === null) {

            setNextPage({role: "unknown"})
        }


        if (user?.user_type === "user") {

            setNextPage({role: "no_permission"})
        }

        if (user?.user_type === "admin") {

            setNextPage({role: "admin"})
        }

  }, [])


  // kullanıcı bilgileri kontrol ediliyor
  if (nextPage.role === "pending") {

        return <Loader></Loader>
  }

  if (nextPage.role === "unknown") {

        return <p>Lütfen bu sayfayı görebilmek için oturum açın.</p>
  }


  if (nextPage.role === "no_permission") {

        return <p>Bu sayfayı görmek için yeterli yetkiye sahip değilsin.</p>
  }

  return (
  
        <>
        
                <Outlet></Outlet>
        </>
  )
}
