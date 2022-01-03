import React from 'react';
import FormLoginSigin from '../../components/formLoginSigin/FormLoginSigin';
import './loginSigin.css';

const LoginSigin = () => {
    return (
        <>
            <header>
                <h1>Nav</h1>
            </header>
            <main className='main-loginSigin'>
              <FormLoginSigin title="Sigin"> 
                  <p>Login Sigin</p>
              </FormLoginSigin>
            </main>
        </>
    );
}

export default LoginSigin;