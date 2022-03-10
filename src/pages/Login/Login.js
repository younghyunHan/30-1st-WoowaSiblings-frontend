import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import './Login.scss';

function Login() {
  const [values, setValues] = useState({ id: '', password: '' });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const goToMain = () => {
    fetch('http://10.58.7.45:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: values.id,
        password: values.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.ACCESS_TOKEN) {
          localStorage.setItem('token', data.ACCESS_TOKEN);
          navigate('/item-list');
        } else if (data.message === 'INVALID_USER') {
          alert('id와 password를 확인해주세요!!');
        }
      });
  };

  return (
    <div className="login">
      <h2 className="title">회원 로그인</h2>
      <div className="loginBox">
        <form>
          <input
            onChange={handleChange}
            name="id"
            className="inputText"
            placeholder="아이디"
          />
          <input
            onChange={handleChange}
            name="password"
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
        <Link to="/sign">
          <h3 className="signup">회원가입</h3>
        </Link>
      </div>
    </div>
  );
}

export default Login;
