
import './App.css'
import { Footer } from './assets/components/Footer'
import Header from './assets/components/Header'
import Home from './assets/Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feature from './assets/Pages/Feature'
import Price from './assets/Pages/Price'
import Contact from './assets/Pages/Contact'
import Review from './assets/Pages/Review'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/feature' element={<Feature/>}/>
          <Route path='/price' element={<Price/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/review' element={<Review/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      
    </>
  )
}

export default App
