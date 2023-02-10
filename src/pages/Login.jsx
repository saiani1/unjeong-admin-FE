import React, { useState, useRef, useNavigate, useContext } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'react-hot-toast';

import AuthContext from '../store/auth-context';
import styles from './login.module.scss';
import { login } from '../store/api/admin';

const cx = classNames.bind(styles);

function Login() {
  const idRef = useRef();
  const pwRef = useRef();
  const authCtx = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    loginId: '',
    password: '',
  });

  const inputChangeHandler = e => {
    const id = idRef.current.value;
    const pw = pwRef.current.value;

    if (e.target.id === 'id') setLoginData({ ...loginData, loginId: id });
    else setLoginData({ ...loginData, password: pw });
  };

  const submitHandler = e => {
    e.preventDefault();

    if (loginData.loginId === '' || loginData.password === '')
      toast.error('아이디 또는 패스워드를 입력해주세요.');
    if (loginData.loginId !== '' && loginData.password !== '') {
      login(loginData)
        .then(res => {
          authCtx.login(JSON.stringify(res.headers.authorization));
          toast.success('로그인 되었습니다.');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <form className={cx('wrap')} onSubmit={submitHandler}>
      <h1 className={cx('tit')}>
        <span>운정사주타로</span>
        <strong>ADMIN PAGE</strong>
      </h1>
      <div className={cx('id-wrap', 'input-wrap')}>
        <label htmlFor='id'>아이디</label>
        <input
          type='text'
          id='id'
          ref={idRef}
          value={loginData.loginId}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={cx('password-wrap', 'input-wrap')}>
        <label htmlFor='password'>패스워드</label>
        <input
          type='password'
          id='password'
          ref={pwRef}
          value={loginData.loginPassword}
          onChange={inputChangeHandler}
        />
      </div>
      <button type='submit'>로그인</button>
    </form>
  );
}

export default Login;
