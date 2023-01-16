import { Routes, Route } from 'react-router-dom'
import { Loading } from './pages/Loading/Loading'
import { Home } from './pages/Home/Home'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { Contact } from './pages/Contact/Contact'

export function Routers () {
    return (
        <Routes>
            <Route path='/' element={<Loading />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about-me' element={<AboutMe />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    )
}