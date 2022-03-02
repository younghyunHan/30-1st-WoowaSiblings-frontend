import './Login.scss';

function Login() {
  return (
    <div className="Login">
      <h2 className="title">회원 로그인</h2>
      <div className="loginBox">
        <form>
          <input className="inputText" placeholder="아이디" />
          <input className="inputText" placeholder="비밀번호" type="password" />
          <div className="check">
            <input className="inputCheck" type="checkbox" id="c_box" />
            <label for="c_box"></label>
            <label for="c_box" className="checkText">
              아이디 저장
            </label>
          </div>
        </form>
        <button className="loginBtn">로그인</button>
      </div>
    </div>
  );
}

export default Login;
