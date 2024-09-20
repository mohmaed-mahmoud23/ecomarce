import React, { useState, useEffect } from 'react'
import { BeatLoader } from 'react-spinners' // استيراد BeatLoader
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners';
import Projects from './Projects'
import { ScaleLoader } from 'react-spinners';

import Home from './Home'
import Navbar from './Navbar'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const App = () => {
    const [lod, setlod] = useState(true) // عشان اللودر يظهر في الب داية

    useEffect(() => {
        setTimeout(() => {
            setlod(false) // بعد 2 ثانية اللودر هيختفي
        }, 2000)
    }, [])

    return (
        <BrowserRouter>
            {lod ? (
                <div className='loader-container'>  {/* تأكد من وجود الـ div حول BeatLoader لتنسيقه */}
                    <ScaleLoader color={'white'} loading={lod} size={150} />

                </div>
            ) : (
                <>




                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Projects" element={<Projects />} />

                    </Routes>

                    <Footer />
                </>
            )}
        </BrowserRouter>
    )
}

export default App
