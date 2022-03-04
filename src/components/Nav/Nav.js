import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <div className="topBar" />
      <div className="navWarp">
        <div className="userMenu">
          <ul className="userMenuText">
            <li>
              <Link Link to="/">
                로그인
              </Link>
            </li>
            <span className="txtBar" />
            <li>
              <Link to="/sign">회원가입</Link>
            </li>
            <span className="txtBar" />
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
            <span className="txtBar" />
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            <Link to="/cart" className="cartNumber">
              0
            </Link>
          </ul>
        </div>

        <div className="middle">
          <Link to="/main">
            <img className="logo" alt="배민문방구" src="images/welogo.png" />
          </Link>
          <form className="search">
            <div className="searchBox">
              <input placeholder="검색어를 입력해주세요." />
              <img className="searchImg" alt="검색" src="images/search.png" />
            </div>
          </form>
        </div>

        <div className="category">
          <ul>
            <li>
              <Link to="/main">전체</Link>
            </li>
            <li>
              <Link to="/goods_service">삼십기스</Link>
            </li>
            <li>
              <Link to="/goods_things">30기의 물건</Link>
            </li>
            <li>
              <Link to="/goods_mentors">멘톳쓰</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
