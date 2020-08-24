import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { IReg } from '../types/interfaces';

import { Alert } from 'antd';

import ServicesApi from '../services/servicesAPI';

const AuthPage: React.FC<IReg> = () => {
  const [error, setError] = useState<boolean>(false);

  const { register, handleSubmit, watch, errors } = useForm<IReg>();

  const password = useRef({});
  password.current = watch('password', '');

  const errorAlerClose = () => {
    setError(false);
  };


  const onSubmit = (data: any) => {
    const api = new ServicesApi();
    const { email, password } = data;
    const result = {
      user: {
        email: email,
        password: password,
      },
    };
    api
      .login(result)
      .then((data) => console.log(data))
      .catch(() => setError(true));
  };

  return (
    <div className='reg-page'>
      {error && (
        <Alert
          message='Ошибка авторизации'
          description='Не правильно введённый пароль или email'
          type='error'
          closable
          onClose={errorAlerClose}
        />
      )}
      <div className='form'>
        <form
          action='/lslsd'
          className='register-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset>
            <legend>Sign In</legend>
          
            <input
              placeholder='Email'
              type='text'
              name='email'
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <span className='no-valid'>No valid email</span>}
            <input
              name='password'
              type='password'
              placeholder='Password'
              ref={register({
                required: 'Enter your password',
                minLength: 8,
                maxLength: 40,
              })}
            />
            {errors.password && (
              <span className='no-valid'>
                Password must have at least from 8 to 40 characters
              </span>
            )}
            <button className='submit-btn'>login</button>
            <p className='message'>
              Already registered? <a href='/'>Sign Up</a>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
