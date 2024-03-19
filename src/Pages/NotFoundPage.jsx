import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (


    <div className='container mt-5'>

            <h2>Üzgünüz böyle bir sayfa yok. Yolunumu kayıp ettin?</h2>
            <p>
               Buradan  <Link to="/">AnaSayfa</Link> geri dönebilirsin.
            </p>
    </div>
  )
}
