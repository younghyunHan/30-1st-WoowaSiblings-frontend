import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './Sign.scss';

function Sign() {
  const [values, setValues] = useState({ id: '', password: '' });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const goToLogin = () => {
    fetch(`${API.SIGNUP}`, {
      method: 'POST',
      body: JSON.stringify({
        username: values.id,
        password: values.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          navigate('/');
        } else if (data.message === 'INVALID_USER') {
          alert('이미 존재하는 유저입니다.');
        }
      });
  };

  return (
    <div className="sign">
      <h2 className="title">회원 가입</h2>
      <div className="signBox">
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
        </form>
        <button onClick={goToLogin} className="signBtn">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Sign;
