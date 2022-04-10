import React from "react";
import styled from "@emotion/styled";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { ReactComponent as MainTitle } from "../assets/mainTitle.svg";
import { ReactComponent as MainImg } from "../assets/reportSumSafe.svg";

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <MainTitle style={{
          marginTop: '10%',
          marginBottom: '15%'
        }}/>
        <MainImg />
        <PopUpWrapper>
          <FreeBetaWrapper>
            베타 서비스
            <FreeBetaStrong>무료!</FreeBetaStrong>
          </FreeBetaWrapper>
          <Link to="/main">
            <TriggerBtn>우리 집 안전도 분석 받기</TriggerBtn>
          </Link>
        </PopUpWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  padding: 1.250em 2em 10.188em 2.000em;
`;

const MainCopy = styled.div`
  font-weight: 900;
  font-size: 1.875em;
  line-height: 3.438em;
  color: #4c4c4c;
`;
const MainCopyStrong = styled.span`
  color: #ff5a56;
`;
const MainIntro = styled.p`
  font-weight: 700;
  font-size: 1.063em;
  line-height: 1.875em;
  color: #636363;
  margin: 2.813em 0 3.375em 0;
`;

const PopUpWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20.125em;
  height: 5.688em;
  position: fixed;
  top: 77vh;
`;
const FreeBetaWrapper = styled.div`
  background: rgba(0, 0, 0, 0.61);
  width: 12.563em;
  height: 2.188em;
  border-radius: 0.563em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 0.838em;
  line-height: 1.250em;
`;
const FreeBetaStrong = styled.span`
  color: #ffde30;
  margin-left: 0.219em;
`;
const TriggerBtn = styled.button`
  text-decoration: none;
  background-color: #5087ff;
  border: none;
  border-radius: 0.813em;
  width: 20.125em;
  height: 3.000em;
  color: white;
  font-weight: 700;
  font-size: 1.063em;
  line-height: 2.188em;
`;
