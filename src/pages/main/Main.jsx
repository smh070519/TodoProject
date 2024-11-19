import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import BasicButton from '../../components/button/BasicButton';

const Main = () => {
  return (
    <S.Wrapper className='wrapper'>
      <S.ImageWrapper className='imageWrapper'>
        <img src={process.env.PUBLIC_URL + "/images/main/penguin.png"} />
      </S.ImageWrapper>
      <S.ButtonWeapper className='buttonWrapper'>
        <Link to={"/signIn"}>
          <BasicButton size={"full"} shap={"small"} variant={"black"} color={"white"}>로그인</BasicButton>
        </Link>
        <Link to={"/signUp"}>
          <BasicButton size={"full"} shap={"small"} variant={"black"} color={"white"}>회원가입</BasicButton>
        </Link>
      </S.ButtonWeapper>
    </S.Wrapper>
  );
};

export default Main;