import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import USER_MENU_LIST from './NavData';
import NavigateList from './NavigateList';
import './Nav.scss';

// function getLinkStyle({ isActive }) {
//   return {
//     textDecoration: isActive ? 'underline' : undefined,
//   };
// }
function Nav() {
  const navigate = useNavigate();
  const [cartNumber, setCartNumber] = useState(0);

  const handleNav = (id, en) => {
    const query = id === 1 ? 'products' : 'products?category=' + en;
    fetch(`http://10.58.6.128:8000/${query}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          navigate('/' + query);
        }
      });
  };

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
            <Link to="/products">
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
              {NavigateList.map(list => (
                <li key={list.id} onClick={() => handleNav(list.id, list.en)}>
                  {list.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
