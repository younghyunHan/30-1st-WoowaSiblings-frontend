import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

function Login() {
  const [values, setValues] = useState({ id: '', password: '' });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const goToMain = () => {
    fetch('은지님 컴온', {
      method: 'POST',
      body: JSON.stringify({
        username: values.id,
        password: values.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          alert('아이디와 비밀번호가 일치하지 않습니다.');
        } else {
          navigate('/main');
        }
      });
  };

  return (
    <div className="Login">
      <h2 className="title">회원 로그인</h2>
      <div className="loginBox">
        <form>
          <input
            onChange={handleChange}
            name="id"
            value={values.id}
            className="inputText"
            placeholder="아이디"
          />
          <input
            onChange={handleChange}
            name="password"
            value={values.password}
            className="inputText"
            placeholder="비밀번호"
            type="password"
          />
          <div className="check">
            <input className="inputCheck" type="checkbox" id="c_box" />
            <label className="checkText" for="c_box" />
            <label className="clickText" for="c_box">
              아이디 저장
            </label>
          </div>
        </form>
        <button onClick={goToMain} className="loginBtn">
          로그인
        </button>

        <a href="/sign">
          <h3 className="signup">회원가입</h3>
        </a>
      </div>
    </div>
  );
}

export default Login;
