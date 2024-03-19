import React, { useContext, useEffect, useState } from 'react'
import SiteNav from '../Components/SiteNavbar'
import { Outlet } from 'react-router-dom'
import Loader from '../Components/Loader'
import { UserProvider } from '../Context/UserContext'



export default function MainLayout() {
    
    const [nextPage, setNextPage] = useState(false)
    const { setUser } = useContext(UserProvider)
    
    useEffect(() => {

        const get_user_data = async () => {
            
            const sessionId = localStorage.getItem("sessionId")


            const request = await fetch("/fakedb.json")
            const response = await request.json()
            
            const user = response.find(user => user.sessionId === sessionId)

            // eğer user varsa setter ile güncelle
            if (user) {

                setUser(user)
            }

            // loaderi kaldır
            setNextPage(true)
            console.log("SAYFA YÜKLENDİ GELEN USERLER:", response)
            console.log("login yapan user:", user)
        
        }

        get_user_data()

    }, [])
    
return (

        // navbar
    <>
        <SiteNav></SiteNav> 
        

   
        <main className='container mt-5'>


                {
                    nextPage === false 
                    
                    ? 
                    
                    <Loader></Loader>
                    
                    : 
                    
       
                      <Outlet></Outlet>

     
      

                }
             

        </main>

        {/*footer       */}
         
     </>
  )
}
