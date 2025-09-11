import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: var(--primary-bg);
  color: var(--primary-text);
`;

const ImageSection = styled.div`
  width: 50%;
  background-color: var(--secondary-bg);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;



const LoginPage = ({ handleLogin }: { handleLogin: () => void }) => {
  return (
    <LoginPageContainer>
      <ImageSection>
        <img src="https://via.placeholder.com/800x800" alt="Login Visual" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
      </ImageSection>
      <FormSection>
        <LoginForm handleLogin={handleLogin} />
      </FormSection>
    </LoginPageContainer>
  );
};

export default LoginPage;