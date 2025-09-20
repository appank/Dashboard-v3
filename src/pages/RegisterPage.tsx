import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm';

const RegisterPageContainer = styled.div`
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

const RegisterPage = ({ handleRegister, switchToLogin }: { handleRegister: () => void; switchToLogin?: () => void }) => {
  return (
    <RegisterPageContainer>
      <ImageSection>
        <img src="https://via.placeholder.com/800x800" alt="Register Visual" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
      </ImageSection>
      <FormSection>
        <RegisterForm handleRegister={handleRegister} switchToLogin={switchToLogin} />
      </FormSection>
    </RegisterPageContainer>
  );
};

export default RegisterPage;