import React from "react";
// eslint-disable-next-line no-unused-vars

import axios from "axios";
import styled from "@emotion/styled";
import Layout from "../components/Layout";

import styles from "../assets/Icon.module.scss";
import { ReactComponent as Icon } from "../assets/icon.svg";
import NaverLogoImg from "../assets/logoNaver.svg";
import KakaoLogoImg from "../assets/logoKakao.svg";

const Main = () => {
  const BACKEND_URL = String(process.env.REACT_APP_API_URL);
  const REDIRECT_URI = String(process.env.REACT_APP_LOGIN_REDIRECT_URL);
  const KAKAO_AUTH_URL = `${BACKEND_URL}/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;
  const NAVER_AUTH_URL = `${BACKEND_URL}/oauth2/authorization/naver?redirect_uri=${REDIRECT_URI}`;

  return (
    <Layout>
      <Wrapper>
        <div>
          <Icon className={styles.icon} />
          <div className={styles.intro}> 안전한 계약을 위한 첫걸음 </div>
        </div>
        <div>
          <LoginButtonContainer>
            {/* <LoginBtn
              id="naverIdLogin"
              provider={"Naver"}
              onClick={() => {
                window.location.href = NAVER_AUTH_URL;
              }}
            >
              <NaverLogo src={NaverLogoImg} alt="naverLogin" />
              <div>네이버로 시작하기</div>
            </LoginBtn> */}

            <LoginBtn
              provider={"Kakao"}
              style={{
                textDecorationColor: 'none',
                color: 'black'
              }}
              onClick={() => {
                window.location.href = KAKAO_AUTH_URL;
              }}
            >
              <KakaoLogo src={KakaoLogoImg} alt="kakaoLogin" />
              <div>카카오로 시작하기</div>
            </LoginBtn>
          </LoginButtonContainer>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Main;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 2.000em;
`;

const LoginButtonContainer = styled.div`
  height: 1
  ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 2.813em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.provider === "Kakao" ? "##191919" : "#ffffff")};
  line-height: 1.313em;
  font-size: 0.875em;
  font-weight: 500;
  background-color: ${(props) =>
    props.provider === "Kakao" ? "#fee500" : "#03C75A"};
  text-decoration: none;
  border-radius: 1.563em;
  border: none;
  position: relative;
`;

const NaverLogo = styled.img`
  width: 0.969em;
  height: 0.963em;
  position: absolute;
  left: 1.100em;
`;
const KakaoLogo = styled.img`
  width: 1.219em;
  height: 1.119em;
  position: absolute;
  left: 0.975em;
`;
