import React, { useEffect, useState } from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import { BsFillCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import './ContactPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import PageFooter from '../Components/PageFooter';
import Socials from '../Components/Socials';
import BackToMainPage from '../Components/BackToMainPage'
import { IconContext } from 'react-icons/lib';
import constants from './Constants.json'
import { useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line
const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function ContactPage() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.state?.location) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      navigate(location.pathname, { replace: true, state: { retLocation: location.state.location } })
    }
    // eslint-disable-next-line
  }, [])

  function handleServerReply(reply) {
    if (!reply || reply['status'] !== 'success') {
      setForm(errorTemplate)
      return
    }
    setForm(successTemplate)
  }

  function sendMail(data) {
    fetch('/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(handleServerReply)
      .catch((_) => setForm(errorTemplate))
  }

  function submit() {
    const mailInput = document.getElementById('contactMail')
    const mesgInput = document.getElementById('contactMsg')
    const mail = mailInput.value
    const mesg = mesgInput.value
    if (mesg.length === 0) {
      alert('Bitte gib eine Nachricht ein.')
      return
    }
    if (!mailRegex.test(mail)) {
      setForm(formTemplateInvalid)
      alert('Bitte überprüfe Deine Mail-Adresse.')
      return
    }
    mailInput.value = ''
    mesgInput.value = ''
    setForm(waitingTemplate)
    sendMail({ mail: mail, mesg: mesg })
  }

  function checkMail() {
    const mailInput = document.getElementById('contactMail')
    const mail = mailInput.value
    const valid = mailRegex.test(mail)
    if (valid) {
      setForm(formTemplateValid)
    } else {
      setForm(formTemplateInvalid)
    }
  }

  function mailFinished() {
    checkMail()
  }

  function formTemplate(mailInputField) {
    return (
      <form className='contactForm' onSubmit={(event) => { event.preventDefault(); submit() }}>
        <div className='contactMailWrapper'>
          {mailInputField}
        </div>
        <div style={{ height: '20px' }} />
        <textarea type='text' placeholder='Deine Nachricht an uns...' id='contactMsg' />
        <div style={{ height: '20px' }} />
        <div className='contactSubmitWrapper'>
          <input type='button' onClick={submit} value='Senden' id='contactSubmit' />
        </div>
      </form>
    )
  }

  const formTemplateDefault = formTemplate(
    <input type='email' placeholder='Deine Mail-Adresse...' id='contactMail' onBlur={mailFinished} />
  )

  const formTemplateValid = formTemplate(
    <>
      <input type='email' placeholder='Deine Mail-Adresse...' id='contactMail' onBlur={mailFinished} onInput={checkMail} />
      <div className='contactMailIconWrapper'>
        <IconContext.Provider value={{ size: 30, color: 'green' }}>
          <BsFillCheckCircleFill />
        </IconContext.Provider>
      </div>
    </>
  )

  const formTemplateInvalid = formTemplate(
    <>
      <input type='email' placeholder='Deine Mail-Adresse...' id='contactMail' onBlur={mailFinished} onInput={checkMail} />
      <div className='contactMailIconWrapper'>
        <IconContext.Provider value={{ size: 30, color: 'red' }}>
          <BsFillXCircleFill />
        </IconContext.Provider>
      </div>
    </>
  )

  function waitingCircles() {
    //creates array containing 8 divs as loading circle
    return Array.from({length: 8}, (_, i) => <div className='loadingCircleWrapper' key={i}><div className='loadingCircle' /></div>)
  }

  const waitingTemplate = (
    <div className='contactForm'>
      <div className='contactFeedback'>
        <div className='loadingAnimation'>
          {waitingCircles()}
        </div>
      </div>
    </div>
  )

  function feedbackTemplate(text) {
    return (
      <div className='contactForm'>
        <div className='contactFeedback'>
          <div className='feedbackText'>
            {text}
          </div>
        </div>
      </div>
    )
  }

  const successTemplate = feedbackTemplate(
    <>
      Vielen Dank für deine Nachricht!
      <br /><br />
      Wir melden uns so schnell wie möglich.
    </>
  )

  const errorTemplate = feedbackTemplate(
    <>
      Das hat leider nicht geklappt.
      <br /><br />
      Versuch es doch später nochmal, oder probiere einen unserer anderen Kanäle.
    </>
  )

  const [form, setForm] = useState(formTemplateDefault)

  const isDesktop = isBrowser || isTablet
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src={constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <Header text='Kontakt' fontSize={isDesktop ? '300%' : '200%'} paddingBottom='0' />
        {form}
        <div style={{ height: '30px' }} />
        <div className='otherContact'>
          Du erreichst uns auch über andere Kanäle.
        </div>
        <Socials />
        <BackToMainPage retLocation={location.state?.retLocation} />
        <div style={{ paddingBottom: '30px' }} />
        <PageFooter />
      </div>
    </>
  )
}

export default ContactPage