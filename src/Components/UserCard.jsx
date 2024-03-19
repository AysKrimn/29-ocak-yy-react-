import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const showFlag = (bayrakAdi) => {

        bayrakAdi = bayrakAdi.toLowerCase()
        
        return ( 
            
            // <img src={`https://flagsapi.com/${bayrakAdi}/shiny/32.png`}  /> 
            <img className='flag' src={`https://flagcdn.com/32x24/${bayrakAdi}.png`} />
         
         )
}

export default function UserCard(props) {

  const { user } = props

  const [showContainer, setShowContainer] = useState("contact-container")

  const show_or_hide = (event) => {

        const button = event.target

        if (showContainer === "contact-container") {

            setShowContainer("contact-container visible")
            event.target.innerText = "İletişim Bilgilerini Gizle"
        } else {

            setShowContainer("contact-container")
            event.target.innerText = "İletişim Bilgilerini Göster"
        }

  }


  const formatDate = (hedefTarih) => {

        const tarih = new Date(hedefTarih)

        return tarih.toLocaleDateString("TR", {

            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })

  }





  const showCinsiyet = (gender) => {

        let cinsiyet = ""

        if (gender === "male") {

                cinsiyet = "Erkek"
        } else {

                cinsiyet = "Kadın"
        }


        return cinsiyet
  }


  return (
   
        <>
        
        <Card className='mb-4'>
   
                <Card.Body>

                    <div className='d-flex align-items-center p-4'>


                            {/* avatar, isim container */}
                            <div className='person-container'>

                                    <div className='avatar-container'>
                                        <Card.Title>{user.name.first} {user.name.last} </Card.Title>
                                        <img src={user.picture.large} alt={`${user.name.first} fotosu`} />

                                        <p className='mt-3'>Cinsiyet: {showCinsiyet(user.gender)}</p>
                                    </div>
                            </div>
                      

                            {/* genel bilgiler container */}
                            <div className='person-info-container'>
                                    <Card.Text>

                                            <b>Ülke:</b> {showFlag(user.nat)} {user.location.country} <br></br>
                                            <b>Şehir:</b> {user.location.city}  <br></br>
                                            <b>Posta Kodu:</b> {user.location.postcode}

                                            <hr></hr>
                                            <b>Doğum Tarihi:</b> {formatDate(user.registered.date)}
                                    </Card.Text>
                            </div>
                
                    </div>

                    <hr />
                    {/* iletişim bilgileri alanı */}
                    <div className={showContainer}>

                        <p>
                            <b>Telefon:</b> {user.cell} <br />
                            <b>E-mail:</b> {user.email}
                        </p>

                    </div>

                    <div className='mt-3'>

                            <Button onClick={show_or_hide} variant="primary">İletişim Bilgilerini Göster</Button>
                    </div>
                        
                       
                </Card.Body>
        </Card>
        
        </>
  )
}
