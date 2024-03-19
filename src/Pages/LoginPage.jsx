import React, { useState } from 'react'

export default function LoginPage() {

  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [error, setError] = useState("")


  const make_api_request = async (event) => {
    
    // sayfanın yenilenmesini önle
    event.preventDefault()

    // event.target = form
    const request = await fetch(event.target.action)
    const response = await request.json()

    console.log("JSON VERİLERİM:", response)
 

    if (!usernameInput || !passwordInput) {

        setError("Lütfen inputları boş bırakmayınız.")
        return
    }

    if (usernameInput.length < 3) {

        setError("İsim 3 karakterden az olmamalı.")
        return
    }

    const user = response.find(user => user.username === usernameInput && user.password === passwordInput)
    // eğer user yoksa
    if (!user) {
       
        setError("Kullanıcı adı veya şifre hatalı")
    }

    // eğer kullanıcı varsa login yap ve anasayfaya gönder
    localStorage.setItem("sessionId", user.sessionId)
    // yönlendir
    window.location.href = "/"
  }

  return (
    
    <div className='w-50'>

        <form action="/fakedb.json" onSubmit={make_api_request}>
                
                <h3>Giriş Yap</h3>
                <hr />
                
                <ul className='text-danger'>

                    {
                        error ?  <li>{error}</li> : null
                    }
                  
                </ul>

                <div className='mb-3'>

                    <input type="text" placeholder='Kullanıcı Adı' className='form-control'
                        onChange={(event) => setUsernameInput(event.target.value)}
                    />
                </div>

                <div className='mb-3'>

                    <input type="password" placeholder='Şifre' className='form-control' 
                        onChange={(event) => setPasswordInput(event.target.value)}
                    />
                </div>


                <div className="mb-3">

                    <button type='submit' className='btn btn-success'>Oturum Aç</button>
                </div>

        </form>

    </div>
  )
}
