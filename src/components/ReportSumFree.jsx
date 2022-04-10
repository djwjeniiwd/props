import React from 'react'

import styles from '../assets/Icon.module.scss'
import { ReactComponent as StatusBar } from '../assets/statusBarFree.svg'
import { ReactComponent as Icon } from '../assets/iconSafe.svg'

const ReportSumFree = () => {
  return(
    <div>
      <StatusBar/>
      <div style={{display: 'flex', marginBottom: '1.250em'}}>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>양호</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '2.7'}}>주의</div>
        <div style={{fontWeight: '600', color: '#BDBDBD', flex: '1'}}>위험</div>
      </div>
      <Icon/>
      <div className={styles.titleSafe}>몇 가지 주의가 필요해요</div>
      <div style={{marginTop: '1.250em', marginBottom: '1.875em', fontWeight: '600', fontSize: '0.95em', color: 'gray'}}>아래 항목을 확인해주세요</div>
    </div>
  )
}

export default ReportSumFree
