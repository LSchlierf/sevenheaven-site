import React from 'react';
// import { isBrowser, isTablet, } from 'react-device-detect'
import './ContactPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import PageFooter from '../Components/PageFooter';
import Socials from '../Components/Socials';

const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function ContactPage() {
  function sendMail() {

  }

  function submit() {
    console.log('submitted')
    const mailInput = document.getElementById('contactMail')
    const mesgInput = document.getElementById('contactMsg')
    const mail = mailInput.value
    const mesg = mesgInput.value
    if (mesg.length === 0) {
      alert('Bitte gib eine Nachricht ein.')
      return
    }
    if (!mailRegex.test(mail)) {
      alert('Bitte überprüfe Deine Mail-Adresse.')
    }
    mailInput.value = ''
    mesgInput.value = ''
    console.log({mail: mail, mesg: mesg})
  }

  function checkMail() {
    const mailInput = document.getElementById('contactMail')
    const mail = mailInput.value
    const valid = mailRegex.test(mail)
    if(valid) {
      mailInput.classList.remove('invalid')
    } else {
      mailInput.classList.add('invalid')
    }
  }

  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src='bg/0.jpg' alt='background' />
      </div>
      <div className='subPageContent'>
        <Header text='Kontakt' fontSize='8vw' paddingBottom='0' />
        <form className='contactForm' onSubmit={(event) => {event.preventDefault(); submit()}}>
          <input type='text' placeholder='Deine Mail-Adresse...' id='contactMail' onInput={checkMail}/>
          <div style={{ height: '20px' }} />
          <textarea type='text' placeholder='Deine Nachricht an uns...' id='contactMsg' />
          <div style={{ height: '20px' }} />
          <div className='contactSubmitWrapper'>
            <input type='button' onClick={submit} value='Senden' id='contactSubmit' />
          </div>
        </form>
        <div style={{ height: '30px' }} />
        <div className='otherContact'>
          Du erreichst uns auch über andere Kanäle.
        </div>
        <Socials />
        <PageFooter />
      </div>
    </>
  )
}

export default ContactPage