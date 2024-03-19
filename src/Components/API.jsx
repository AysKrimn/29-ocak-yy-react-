import React, { useContext, useEffect, useState } from 'react'
import UserCard, { showFlag } from './UserCard'

import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import UserContext, { UserProvider } from '../Context/UserContext';

export default function API() {

// user
const { user } = useContext(UserProvider)
// states
const [users, setUsers] = useState([])
const [flags, setFlags] = useState([])
const [ulke, setUlke] = useState("")
const [loader, setLoader] = useState(false)
const [devreDisi, setDevreDisi] = useState(false)
const [inputValue, setInputValue] = useState(100)



// arrow function
const make_api_request = async () => {

        console.log("ÜLKE STATEI:", ulke)
        // loaderi aktif et
        setLoader(true)
        // butonu devre dışı bırak
        setDevreDisi(true)

        let endpoint = `https://randomuser.me/api/?results=${inputValue}`

        if (ulke) {

            endpoint = `https://randomuser.me/api/?results=${inputValue}&nat=${ulke}`
        }

        const request =  await fetch(`${endpoint}`)
        const response = await request.json()
        
        // loaderi kaldır
        setLoader(false)

        // butonu aktif hale getir
        setDevreDisi(false)

        console.log("APIDAN GELEN VERİ:", response)
        // state güncelle
        setUsers(response.results)
}

// useEffect (component hazır oldugunda / yüklendiğinde)
useEffect(() => {

        // fonksiyonu çağır
        make_api_request()

        // bayrak isimlerini al
        const get_flag_names = async () => {

            const request = await fetch("https://flagcdn.com/en/codes.json")
            const response = await request.json()
            const sadece_keyler = Object.entries(response)

            // state güncelle
            setFlags(sadece_keyler)
            console.log("FLAG NAMES:", sadece_keyler)
        }

        // çalıştır
        get_flag_names()
}, [])



const updateValue = (event) => {

    const input = event.target 

    if (input.value < 1) {

        alert("En az 1 seçebilirsiniz.")
        return
    }
    // state güncelle
    setInputValue(input.value)

}



  

return (

        <>


            {
                loader === true 
                ?
                        <Alert variant="info">
                            Yükleniyor...
                        </Alert>
                :
                    null
            }
           

            { user?.user_type === "admin" 
            
            ?            
          
            <div className='mb-3 d-flex align-items-center'>

                <button disabled={devreDisi} onClick={make_api_request} className='btn btn-primary'>{`Rastgele ${inputValue} Kullanıcı Çek`}</button>
                
                <div className='ms-auto'>
                        <input placeholder='Rastgele Kullanıcı Sayısı' type="number" className='form-control' 
                         onChange={updateValue} value={inputValue}                        
                        />
                        <input className='form-control mt-2' list="browsers" name="browser" id="browser"></input>
                        <datalist id="browsers" className='mt-2' onChange={(event) => setUlke(event.target.value)} >
                            
                             {flags.map(flag => {
    
                               
                                const [ key, value ] = flag
                       

                                return ( 

                                    <option value={value}> </option>
                                )

                            })}

                        </datalist>

                  


                </div>
              
            
            </div>

            : null

            }

            {users.map(user => {


                  return  <UserCard user = {user} ></UserCard>

            })}
               
                
        
        </>
  )
}
