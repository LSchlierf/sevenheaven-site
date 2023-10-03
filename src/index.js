import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import RepertoirePage from './Pages/RepertoirePage';
import GalleryPage from './Pages/GalleryPage';
import BandPage from './Pages/BandPage';
import ContactPage from './Pages/ContactPage';
import ImprintPage from './Pages/ImprintPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

window.addEventListener('scroll', updateScrolled)
window.addEventListener('resize', updateScrolled)

function updateScrolled() {
  const htmlElement = document.documentElement
  const screenScrolled = htmlElement.scrollTop / htmlElement.clientHeight
  htmlElement.style.setProperty("--scrolled", Math.min(screenScrolled, 0.5) * 2)
}

updateScrolled()
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'           element={<MainPage/>      }/>
      <Route path='/galerie'    element={<GalleryPage/>   }/>
      <Route path='/repertoire' element={<RepertoirePage/>}/>
      <Route path='/wir'        element={<BandPage/>      }/>
      <Route path='/kontakt'    element={<ContactPage/>   }/>
      <Route path='/impressum'  element={<ImprintPage/>   }/>
    </Routes>
  </BrowserRouter>
);

/*
Layers:

burger close          5
nav overlay           4
title bar             3
burger open           2
left right anfragen   1
Main content          0
bg img cycler        -3
bg img static        -5
*/


/*
TODO: 
- burger menü fixed                     [x]
- Abstände checken                      [x]luz<3pete
- zurück mit location                   [x]
- Icons                                 [x]
- Page footer kleiner                   [x]
- hintergrund bild scrollt hoch rot     [x]
- hintergrund bild scrollt hoch schwarz [x]
*/
