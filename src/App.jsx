import './App.css'
import { Route, Routes } from 'react-router-dom'

// SAYFALARIMIZ
import HomePage from './Pages/HomePage'
import Personellerimiz from './Pages/Personellerimiz'
import Counter from './Pages/Counter'
import NotFoundPage from './Pages/NotFoundPage'
import LoginPage from './Pages/LoginPage'
import LogoutPage from './Pages/LogoutPage'
import Admin from './Pages/Admin'


// lAyout
import MainLayout from './Layout/MainLayout'
import PermissionCheck from './Layout/PermissionCheck'






function App() {


  return (
    <>

        <Routes>

            {/* main layout componentinden miras al */}
            <Route element={<MainLayout></MainLayout>}>

                <Route path='/' element={ <HomePage></HomePage> }></Route>
                <Route path='/personeller' element={<Personellerimiz></Personellerimiz>}></Route>
                <Route path='/sayac-uygulamam' element={<Counter></Counter>}></Route>
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/logout' element={<LogoutPage></LogoutPage>}></Route>
                <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>

                {/* sadece adminin görebileceği sayfalar */}
                <Route element={<PermissionCheck></PermissionCheck>}>

                      <Route path='/admin' element={<Admin></Admin>}></Route>
                </Route>
              
            </Route>
       
        </Routes>


    </>
  )
}

export default App
