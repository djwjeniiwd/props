import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import styles from '../assets/Icon.module.scss'
import Logo from '../assets/logoGreen.svg'
import { ReactComponent as GreenIcon } from '../assets/iconGreen.svg'

const ReportFailed = () => {
  return(
    <>
      <button className={styles.buttonLogo}
        style={{marginTop: '1.688em', marginLeft: '1.625em', float: 'left'}}
        type='button'
        onClick={() => window.location.replace('/main')}>
          <Link to='/main'> <img src={Logo} alt='propsLogo'/> </Link>
      </button>
      <div style={{clear: 'both'}}/>
      <GreenIcon style={{marginTop: '4.375em'}}/>
      <div style={{marginTop: '0.625em', fontWeight: '700', fontSize: '1.68em', color: '#43C368'}}>직원 확인이 필요합니다.</div>
      <div style={{marginTop: '1.438em', fontWeight: '700', fontSize: '0.95em', color: '#767676'}}>전문가가 직접 분석해드려요.</div>
      <form>
        <input className={styles.searchBar}
          style={{
            marginTop: '5.000em',
            width: '80%',
            top: '-1.875em',
            paddingRight: '2.813em'
          }}
          type='text' placeholder='E-mail'/>
        <div style={{marginTop: '1.375em', fontWeight: '600', fontSize: '0.93em', lineHeight: '1.8em', color: '#868686'}}>
          <div>해당 주소지의 경우</div>
          <div>AI로는 판단이 어려워</div>
          <div>전문가의 분석이 필요합니다.</div>
          <div style={{marginTop: '0.938em'}}>이메일 주소를 적어주시면</div>
          <div>전문가가 직접 분석해서 보내드려요.</div>
        </div>
        <div style={{marginTop: '2.250em', fontWeight: '700', fontSize: '0.8em', color: '#A4A4A4'}}>업무시간 기준 최대 세시간 소요</div>
        <input className={styles.submitButton} type='submit' style={{marginTop: '0.375em', width: '13.438em', height: '2.500em'}} value='전송하기'/>
      </form>
    </>
  )
}

export default ReportFailed
