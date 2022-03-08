import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import USER_MENU_LIST from './NavData';
import './Nav.scss';

function Nav() {
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className="navWraper">
      <nav className="nav">
        <div className="topBar" />
        <div className="navWarp">
          <div className="userMenu">
            <ul className="userMenuText">
              {USER_MENU_LIST.map((data, index) => {
                return (
                  <li key={data.id}>
                    <Link to={data.movePath}>{data.userMenu}</Link>
                    {!(index === USER_MENU_LIST.length - 1) && (
                      <div className="txtBar" />
                    )}
                  </li>
                );
              })}
            </ul>
            <Link to="/cart" className="cartNumber">
              {cartNumber}
            </Link>
          </div>

          <div className="middle">
            <Link to="/item-list">
              <img className="logo" alt="배민문방구" src="images/welogo.png" />
            </Link>
            {/* //검색기능 추가구현 */}
            {/* <form className="search">
              <div className="searchBox">
                <input placeholder="검색어를 입력해주세요." />
                <img className="searchImg" alt="검색" src="images/search.png" />
              </div>
            </form> */}
          </div>

          <div className="category">
            <ul>
              <li>
                <NavLink activeclassname="active" to="/item-list">
                  전체
                </NavLink>
              </li>
              <li>
                <NavLink to="/goods_service">삼십기쓰</NavLink>
              </li>
              <li>
                <NavLink to="/goods_things">삼십띵쓰</NavLink>
              </li>
              <li>
                <NavLink to="/goods_mentors">멘톳쓰</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
