import React from 'react';
import styled from 'styled-components';

const Form = ({ handleLogin }: { handleLogin: () => void }) => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="" />
            <div className="forgot">
              <a rel="noopener noreferrer" href="/#">Forgot Password ?</a>
            </div>
          </div>
          <div className="sign" onClick={handleLogin}>Sign in</div>
        </form>
        <div className="social-message">
          <div className="line" />
          <p className="message">Login with social accounts</p>
          <div className="line" />
        </div>
        <div className="social-icons">
          <button aria-label="Log in with Google" className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.466 0-9.9-4.438-9.9-9.9s4.434-9.9 9.9-9.9c3.108 0 5.202 1.328 6.388 2.582l4.33-4.166c-2.8-2.582-6.4-4.166-10.718-4.166-8.842 0-16 7.158-16 16s7.158 16 16 16c9.234 0 15.365-6.492 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button aria-label="Log in with Twitter" className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M27.996 10.116c-0.817 0.363-1.696 0.608-2.623 0.72 0.94-0.564 1.66-1.456 2-2.527-0.88 0.522-1.856 0.9-2.904 1.11-0.83-0.885-2.012-1.438-3.313-1.438-2.506 0-4.537 2.032-4.537 4.537 0 0.355 0.04 0.702 0.117 1.036-3.77-0.19-7.112-1.994-9.35-4.74-0.39 0.67-0.614 1.45-0.614 2.283 0 1.573 0.8 2.96 2.016 3.774-0.743-0.023-1.44-0.228-2.05-0.566 0 0.018 0 0.037 0 0.056 0 2.196 1.564 4.028 3.64 4.44-0.38 0.103-0.78 0.158-1.195 0.158-0.292 0-0.576-0.028-0.85-0.08 0.576 1.798 2.25 3.108 4.23 3.145-1.55 1.215-3.51 1.94-5.63 1.94-0.366 0-0.726-0.022-1.08-0.063 2.008 1.286 4.39 2.036 6.96 2.036 8.35 0 12.92-6.924 12.92-12.92 0-0.197-0.004-0.393-0.012-0.588 0.888-0.64 1.658-1.44 2.268-2.35z"></path>
            </svg>
          </button>
          <button aria-label="Log in with GitHub" className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.836 0-16 7.163-16 16 0 7.07 4.584 13.068 10.94 15.18 0.8 0.146 1.092-0.347 1.092-0.77 0-0.38-0.014-1.38-0.022-2.7-4.45 0.964-5.39-2.14-5.39-2.14-0.728-1.85-1.778-2.34-1.778-2.34-1.452-0.993 0.11-0.973 0.11-0.973 1.605 0.113 2.45 1.647 2.45 1.647 1.427 2.446 3.743 1.74 4.656 1.33 0.145-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.778-7.29-7.907 0-1.747 0.625-3.174 1.644-4.295-0.164-0.404-0.712-2.030 0.156-4.234 0 0 1.344-0.43 4.4 1.64 1.276-0.355 2.644-0.53 4.004-0.536 1.36 0.006 2.728 0.18 4.004 0.536 3.056-2.07 4.4-1.64 4.4-1.64 0.87 2.204 0.32 3.83 0.156 4.234 1.02 1.12 1.644 2.548 1.644 4.295 0 6.145-3.74 7.5-7.304 7.89 0.574 0.494 1.088 1.47 1.088 2.962 0 2.14-0.020 3.864-0.020 4.39 0 0.426 0.288 0.922 1.098 0.768 6.356-2.112 10.934-8.11 10.934-15.178 0-8.837-7.164-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="signup">
          Don't have an account?
          <a rel="noopener noreferrer" href="/#" className="">Sign up</a>
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 320px;
    background-color: transparent;
    padding: 0;
    color: var(--primary-text);
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  .form {
    margin-top: 1.5rem;
  }

  .input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .input-group label {
    display: block;
    color: var(--secondary-text);
    margin-bottom: 4px;
  }

  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid var(--border-color);
    outline: 0;
    background-color: var(--secondary-bg);
    padding: 0.75rem 1rem;
    color: var(--primary-text);
  }

  .input-group input:focus {
    border-color: var(--accent-color);
  }

  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--secondary-text);
    margin: 8px 0 14px 0;
  }

  .forgot a,
  .signup a {
    color: var(--accent-color);
    text-decoration: none;
    font-size: 14px;
  }

  .forgot a:hover,
  .signup a:hover {
    text-decoration: underline var(--accent-color);
  }

  .sign {
    display: block;
    width: 100%;
    background-color: var(--accent-color);
    padding: 0.75rem;
    text-align: center;
    color: var(--primary-bg);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
  }

  .social-message {
    display: flex;
    align-items: center;
    padding-top: 1rem;
  }

  .line {
    height: 1px;
    flex: 1 1 0%;
    background-color: var(--border-color);
  }

  .social-message .message {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--secondary-text);
  }

  .social-icons {
    display: flex;
    justify-content: center;
  }

  .social-icons .icon {
    border-radius: 0.125rem;
    padding: 0.75rem;
    border: none;
    background-color: transparent;
    margin-left: 8px;
    cursor: pointer;
  }

  .social-icons .icon svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: var(--primary-text);
  }

  .signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--secondary-text);
  }
`;

export default Form;
