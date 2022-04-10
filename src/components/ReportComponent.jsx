import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import styles from '../assets/Icon.module.scss'
import ReportSum from './ReportSum'
import ReportDetail from './ReportDetail'
import Previous from '../assets/previous.svg'
import NextWarn from '../assets/nextWarn.svg'

const Report = (props) => {
  const [ reportState, setReportState ] = useState()
  const [ tabState, setTabState ] = useState(0)
  const [ address, setAddress ] = useState()
  const [ data, setData ] = useState()

  useEffect(() => {
    setReportState(props.state)
    setAddress(props.address)
    setData(props.data)
  }, [props])

  const contents = {
    0: <ReportSum state={reportState} data={data}/>,
    1: <ReportDetail state={reportState} address={address} data={data}/>
  }

  return (
    <>
      <Link to='/search'>
        <div style={{ display: 'flex' }}>
          <img src={Previous} alt='Previous button'
            style={{ marginLeft: '2.000em', marginTop: '2.188em', flex: '1' }}
          />
          <div style={{ flex: '100' }}></div>
        </div>
      </Link>
      <div style={{fontWeight: '600', marginBottom: '0.375em'}}>리포트</div>

      <ul className={`${
        reportState === 'Safe' ? styles.reportTabSafe :
        reportState === 'Caution' ? styles.reportTabCaution :
        reportState === 'Danger' ? styles.reportTabDanger : ''
      }`}>
        <li className={`${tabState === 0? styles.active: ''}`} onClick={() => setTabState(0)}>요약 리포트</li>
        <li className={`${tabState === 1? styles.active: ''}`} onClick={() => setTabState(1)}>세부 리포트</li>
      </ul>

      <div className='contentArea'>
        {contents[tabState]}
      </div>

      {tabState === 0 &&
        <>
          <div className={styles.summaryDetails} style={{marginTop: '3.750em'}}>
            <div style={{marginLeft: '1.250em'}} onClick={() => setTabState(1)}>더 자세히 알고싶어요! <img className={styles.summaryNext} src={NextWarn} alt='Next button'/> </div>
          </div>
          <div className={styles.summaryMents} style={{marginTop: '1.875em'}}>
            <div>해당 리포트는 AI가 부동산 공부(公簿)의 사실관계를 나열한 것으로</div>
            <div>법률자문을 포함하고 있지 않습니다.</div>
          </div>
        </>
      }
    </>
  )
}

export default Report
