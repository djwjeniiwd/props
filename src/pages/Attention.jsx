import { React } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Layout from '../components/LayoutNoHeader'
import styles from '../assets/Icon.module.scss'
import Logo from '../assets/logoOrange.svg'
import { ReactComponent as AttentionBar } from '../assets/attentionBar.svg'
import { ReactComponent as WarningIcon } from '../assets/warningIcon.svg'
import { ReactComponent as AttentionReport } from '../assets/attentionReport.svg'

const Attention = () => {
  return (
    <Layout>
      <div style={{background: 'linear-gradient(white, rgba(255,243,224,0.47))'}}>

      <button className={styles.buttonLogo}
        style={{marginTop: '1.688em', marginLeft: '1.625em', float: 'left'}}
        type='button'
        onClick={() => window.location.replace('/main')}>
          <Link to='/main'> <img src={Logo} alt='propsLogo'/> </Link>
      </button>

      <AttentionBar style={{ marginTop: '1.500em' }}/>
      {/** Attention Bar Text: 평범 주의 위험 */}
      <div style={{ marginTop: '0.313em', display: 'flex'}}>
        <div style={{flex: '1', color: '#BDBDBD', fontWeight: '600'}}>평범</div>
        <div style={{flex: '2.3', color: '#EA9950', fontWeight: '600'}}>주의</div>
        <div style={{flex: '1', color: '#BDBDBD', fontWeight: '600'}}>위험</div>
      </div>

      {/** Summary of Main contents */}
      <div className={styles.box} style={{position: 'relative', marginTop: '2.875em', padding: '0.625em', height: '11.250em', zIndex: '1'}}>
        <div style={{margin: '0.625em', fontSize: '1.1em', fontWeight: '600'}}>주요사항 요약</div>
        <div style={{marginTop: '0.625em'}}>
          <WarningIcon style={{float: 'left', marginRight: '0.500em'}}/>
          <div style={{height: '2.813em', lineHeight: '2.813em', fontSize: '0.9em', fontWeight: '600'}}>
            신축 건물이라 아직 등기부가 없어요!</div>
        </div>
        <div style={{marginTop: '0.781em'}}>
          <WarningIcon style={{float: 'left', marginRight: '0.500em'}}/>
          <div style={{height: '2.813em', lineHeight: '1.406em', fontSize: '0.9em', fontWeight: '600'}}>
            계약시 소유자와 임대인이 동일한지 꼭  확인해주세요.</div>
        </div>
      </div>

      </div>
      <div style={{backgroundColor: 'rgba(255,243,224,0.47)', zIndex: '-1'}}>

      <div style={{position: 'relative', height: '2.188em', zIndex: '-1'}}/>

      {/** Report of Detailed diagnosis */}
      <div className={styles.box} style={{height: '88.125em', padding: '1.250em'}}>
        <div style={{marginLeft: '0.625em', fontSize: '1.1em', fontWeight: '600'}}>세부 진단 리포트</div>
        <div style={{margin: '0.938em', textAlign: 'center', fontSize: '1.1em', fontWeight: '600'}}>
          신축이라 &nbsp;
          <span style={{background: 'linear-gradient(to top, #F8D892 60%, transparent 50%)'}}>
            아직 등기부가 없어요!</span>
        </div>
        <AttentionReport style={{display: 'block', margin: '0 auto', marginTop: '1.875em'}}/>
        <>
          <div
            style={{marginTop: '1.875em', height: '1.938em', lineHeight: '1.938em', backgroundColor: '#F3F3F3', borderRadius: '0.938em', textAlign: 'center', fontSize: '0.9em', fontWeight: '600'}}>
              신축이라 아직 등기부등본이 없어요!
          </div>
          <div style={{marginTop: '0.938em', marginLeft: '0.625em', marginRight: '0.625em', fontSize: '0.85em', fontWeight: '500', textAlign: 'justify'}}>
            <div>미등기 상태의 매물입니다.</div>
            <div style={{marginTop: '0.625em'}}>따라서 분양 계약서, 키불출 확인서와 같은 서류를 통해 소유자를 확인해야 해요!</div>
            <div style={{marginTop: '0.625em'}}>계약 시 소유자(집주인)와 임대인이 같은지도 꼭 확인해주세요.</div>
          </div>
        </>

        <>
          <div
            style={{marginTop: '1.875em', height: '1.938em', lineHeight: '1.938em', backgroundColor: '#F3F3F3', borderRadius: '0.938em', textAlign: 'center', fontSize: '0.9em', fontWeight: '600'}}>
              특약사항을 꼭 걸어주세요!
          </div>
          <div style={{marginTop: '0.938em', marginLeft: '0.625em', marginRight: '0.625em', fontSize: '0.85em', fontWeight: '500', textAlign: 'justify'}}>
            <div>'전세보증금 잔금 전 또는 보증금을 받는 즉시 집주인이 분양 잔금을 완납하지 않으면 전세  계약을 해지한다' 라는 내용의 특약사항을 넣으시길 추천드려요.</div>
          </div>
        </>

        <>
          <div
            style={{marginTop: '1.875em', height: '1.938em', lineHeight: '1.938em', backgroundColor: '#F3F3F3', borderRadius: '0.938em', textAlign: 'center', fontSize: '0.9em', fontWeight: '600'}}>
              임대인 신분증을 꼭 확인해주세요
          </div>
          <div style={{marginTop: '0.938em', marginLeft: '0.625em', marginRight: '0.625em', fontSize: '0.85em', fontWeight: '500', textAlign: 'justify'}}>
            <div>공급 계약서나 분양 계약서상 소유자와 현재  임대인이 같은 사람인지를 꼭 확인해야 합니다.</div>
            <div style={{marginTop: '0.625em'}}>계좌 송금 역시 반드시 집주인 명의 계좌인지 확인하신 후 송금하세요!</div>
          </div>
        </>

        <>
          <div
            style={{marginTop: '1.875em', height: '1.938em', lineHeight: '1.938em', backgroundColor: '#F3F3F3', borderRadius: '0.938em', textAlign: 'center', fontSize: '0.9em', fontWeight: '600'}}>
              가압류, 가처분이 없는지 확인하세요
          </div>
          <div style={{marginTop: '0.938em', marginLeft: '0.625em', marginRight: '0.625em', fontSize: '0.85em', fontWeight: '500', textAlign: 'justify'}}>
            <div>전세보증금을 돌려받을 때 문제가 없도록 분양계약서에 가압류, 가처분이 걸린게 없는지 확인해야 합니다.</div>
            <div style={{marginTop: '0.625em'}}>이는 시행사, 시공사에 연락하시면 알아보실 수 있습니다.</div>
          </div>
        </>

        <>
          <div
            style={{marginTop: '1.875em', height: '1.938em', lineHeight: '1.938em', backgroundColor: '#F3F3F3', borderRadius: '0.938em', textAlign: 'center', fontSize: '0.9em', fontWeight: '600'}}>
              확정일자 발급과 전입신고 잊지마세요!
          </div>
          <div style={{marginTop: '0.938em', marginLeft: '0.625em', marginRight: '0.625em', fontSize: '0.85em', fontWeight: '500', textAlign: 'justify'}}>
            <div>미등기아파트라도 확정일자를 받을 수 있어요!</div>
            <div style={{marginTop: '0.625em'}}>확정일자를 받지 않으면 새로운 집주인이 나타났을때 임대차 계약이 존속되지 않을 수 있기 때문에 무조건 확정일자와 전입신고를 하심을 추천드립니다.</div>
          </div>
        </>

        <>
          <div
            style={{marginTop: '1.875em', height: '1.938em', lineHeight: '1.938em', backgroundColor: '#F3F3F3', borderRadius: '0.938em', textAlign: 'center', fontSize: '0.9em', fontWeight: '600'}}>
              전문가와 함께 거래해야해요
          </div>
          <div style={{marginTop: '0.938em', marginLeft: '0.625em', marginRight: '0.625em', fontSize: '0.85em', fontWeight: '500', textAlign: 'justify'}}>
            <div>해당 집의 경우 아직 등기가 되지 않은 집이기 때문에 안전을 위해 공인중개사와 계약하시길 추천드립니다.</div>
            <div style={{marginTop: '0.625em'}}>공인중개사나 법률전문가분께 해당 상황에 대한 정확한 설명을 들으신 후 안전하게 계약하시길 바랍니다.</div>
          </div>
        </>
      </div>
      <div style={{height: '5.000em'}}/>

      </div>
    </Layout>
  )
}

export default Attention;
