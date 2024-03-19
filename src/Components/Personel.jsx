import React, { useState } from 'react'


const db = [

    { id: 23, name: "ömer", lastname: "ocak", role: "front-end"},
    { id: 42, name: "hasan", lastname: "ışık", role: "back-end"}
]



// modal
import CreatePersonelModal from './CreatePersonelModal'

export default function Personel() {


  const [users, setUsers] = useState(db)


  // fonksiyonlar
  const deletePersonel = (userId) => {

        // userId hariç tüm verileri getir
        const onayla = window.confirm("Bu kişiyi silmek istediğinize emin misiniz?")

        if (onayla) {
            
            const removeSelected = users.filter(data => data.id !== userId)
            // state güncelle
            setUsers(removeSelected)

        }
  }


  return (
   
        <>
        
            <div className='d-flex'>
                    
                    <button disabled className='btn btn-primary'>{users.length}</button>
                    <CreatePersonelModal  users = {users} setUsers = {setUsers}></CreatePersonelModal>
           
            </div>
            <hr />
            <ul>

                {/* veriler li olarak gelecek */}
                {users.map(function(user) {

                   return (
                   
                        <li key={user.id} className='mb-4'>

                            #{user.id}  Adı: {user.name}  Soyadı: {user.lastname}  Role: {user.role} 

                            <span onClick={() => { deletePersonel(user.id) }} className='del'>X</span>                            
                        </li>
                   )


                })}

            </ul>
        
        </>
  )
}
