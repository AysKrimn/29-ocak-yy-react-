import React, { useState } from 'react'

export default function Counter() {

  const [counter, setCounter] = useState(0)

  return (


    <div>

         <div className="mb-3">
            <p>Aşağıdaki butonları kullanarak sayacı güncelle</p>
            <button disabled className='btn btn-primary'>{`Sayaç: ${counter}`}</button>
         </div>

          <div className='sayac-buttons'>

          <button onClick={() => setCounter(counter + 1)}> + 1</button>
          <button onClick={() => setCounter(counter - 1)}> - 1</button>
          <button onClick={() => setCounter(0)}> Reset</button>

          </div>
   

    </div>


  )
}
