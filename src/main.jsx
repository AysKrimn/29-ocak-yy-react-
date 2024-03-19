import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// BOOTSRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// REACT ROUTER
import { BrowserRouter } from 'react-router-dom'


// User Context
import UserContext from './Context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>

    <UserContext>
        <App />
    </UserContext>

</BrowserRouter>

)
