import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (

    <div className="d-flex align-items-center" style={{gap: "10px", justifyContent: "center"}}>
    
    <p className='m-0'>Yükleniyor lütfen bekleyiniz..</p>

    <Spinner animation="border" role="status" size='sm' variant='info'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>



    </div>

  );
}

export default Loader;