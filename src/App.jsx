import './App.css'
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import UserForm from './pages/UserForm';
import History from './pages/History';
import PageNotFound from './pages/PageNotFound';
import ResumeGenerator from './pages/ResumeGenerator';
function App() {

  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
      <Route path='/history' element={<History/>}/>
        <Route path='/form' element={<UserForm/>}/>
          <Route path='/resume' element={<ResumeGenerator/>}/>
            <Route path='/*' element={<PageNotFound/>}/>
   </Routes>
      <Footer/>
    </>
  )
}

export default App
