import './Nav.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [cartNumber, setCartNumber] = useState(0);

  const USER_MENU_LIST = [
    {
      id: 1,
      userMenu: '로그인',
      movePath: '/',
    },
    {
      id: 2,
      userMenu: '회원가입',
      movePath: '/sign',
    },
    {
      id: 3,
      userMenu: '장바구니',
      movePath: '/cart',
    },
  ];
  return (
    <nav className="nav">
      <div className="topBar" />
      <div className="navWarp">
        <div className="userMenu">
          <ul className="userMenuText">
            {USER_MENU_LIST.map(data => {
              return (
                <>
                  <li>
                    <Link to={data.movePath}>{data.userMenu}</Link>
                  </li>
                  <span className="txtBar" />
                </>
              );
            })}
            <Link to={'/cart'} className="cartNumber">
              {cartNumber}
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
