import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './Pages/History'
import PageNotFound from './Pages/PageNotFound'
import ResumeGenerator from './Pages/ResumeGenerator'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Form from './pages/Form'
import { ToastContainer, toast } from 'react-toastify';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/history' element={<History />} />
        <Route path='/resumegenerator' element={<ResumeGenerator />} />
        <Route path='/form' element={<Form />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="colored"

      />



    </>
  )
}

export default App