import React from 'react'

import styles from '../assets/Icon.module.scss'
import { ReactComponent as StatusBar } from '../assets/statusBarDanger.svg'
import { ReactComponent as Icon } from '../assets/iconDanger.svg'

const ReportSumDanger = () => {
  return(
    <div>
      <StatusBar/>
      <div style={{display: 'flex', marginBottom: '1.250em'}}>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>양호</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '2.7'}}>주의</div>
        <div style={{fontWeight: '600', color: '#FF5A56', flex: '1'}}>위험</div>
      </div>
      <Icon/>
      <div className={styles.titleDanger}>주의가 필요한 집으로 보여요</div>
      <div style={{marginTop: '1.250em,', marginBottom: '1.875em', fontWeight: '600', fontSize: '0.95em', color: 'gray'}}>아래 항목을 확인해주세요</div>
    </div>
  )
}

export default ReportSumDanger
