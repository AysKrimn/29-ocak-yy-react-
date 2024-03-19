/*
BU COMPONENT SADECE PERSONEL EKLEME YAPAR
*/ 

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreatePersonelModal(props) {
  
  // personel.jsx den gelen propsları al
  // object destruacting
  const { users, setUsers } = props

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // input stateleri
  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [role, setRole] = useState("")

  // fonksiyonlar:
  const create_new_personel = (event) => {

        // sayfanın yenidenbaslamasını önle
        event.preventDefault()

        // hata verdir
        if (!name || !lastname || !role) {

            alert("Lütfen inputları boş bırakma.")
            return
        }

        // yeni bir obje oluştur
        //  id: 23, name: "ömer", lastname: "ocak", role: "front-end"
        const model = {

            id: Date.now(),
            name: name,
            lastname: lastname,
            role: role
        }

        // state güncelleme
        setUsers([...users,  model])

        // modalı kapat
        handleClose(true)

  }

  return (
    <>


      <Button className='ms-auto' variant="success" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Personel Ekle</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

                <form onSubmit={create_new_personel}>
                        <div className='mb-3'>

                            <input className='form-control' type="text" placeholder='Personel Adı' 
                             onChange={(event) => setName(event.target.value)}
                            />
                        </div>


                        <div className='mb-3'>

                                <input className='form-control' type="text" placeholder='Personel SoyAdı' 
                                onChange={(event) => setLastName(event.target.value)}
                                />
                        </div>

                        <div className='mb-3'>
                                <input className='form-control' type="text" placeholder='Personel Role'
                                onChange={(event) => setRole(event.target.value)}
                                />
                        </div>
                        
     
        
        <Modal.Footer>
    
          <Button type='submit' variant="success">
            Ekle
          </Button>

        </Modal.Footer>

        </form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default CreatePersonelModal;