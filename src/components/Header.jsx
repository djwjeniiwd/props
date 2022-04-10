import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Modal from 'react-modal'

import styles from '../assets/Header.module.scss'
import logoStyles from '../assets/Icon.module.scss'
import Logo from '../assets/logo.svg'
import { GrClose } from 'react-icons/gr'
import { ReactComponent as MenuIcon } from '../assets/menuIcon.svg'

const Header = () => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const overlayMargin = (window.innerHeight>812 ? ((window.innerHeight - 812) / 2) : '0em')

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <button className={logoStyles.buttonLogo} type='button'
         onClick={() => window.location.replace('/search')}>
          <Link to='/search'> <img src={Logo} alt='propsLogo'/> </Link>
        </button>
        {/* <MenuIcon onClick={() => setModalIsOpen(true)}/> */}
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
          style= {{
            overlay: {
              position: 'fixed',
              width: '23.438em',
              height: '50.750em',
              margin: '0 auto',
              marginTop: overlayMargin,
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
              width: '23.438em',
              height: '16.563em',
              marginTop: '-2.500em',
              marginLeft: '-2.500em',
              borderRadius: '0 0 0 0',
              padding: '0'
            }
          }}
        >
          <>
            <button className={logoStyles.buttonLogo} type='button'
              style={{
                margin: '1.563em',
                paddingTop: '0.156em',
                float: 'left',
                marginBottom: '1.563em'
              }}
            >
              <Link to='/main'>
                <img src={Logo} alt='propsLogo'/> 
              </Link>
            </button>
            <GrClose style={{ position: 'absolute', top:'2.000em', right: '2.000em' }}
              onClick={() => { setModalIsOpen(false) }}></GrClose>
          </>
          <div className={logoStyles.menuBox} >로그인 / 회원가입</div>
          <div className={logoStyles.menuBox} >열람했던 매물 다시 보기</div>
          <div className={logoStyles.menuBox} >부동산 정보 보기</div>
        </Modal>
      </div>
    </header>
  )
}

export default Header
