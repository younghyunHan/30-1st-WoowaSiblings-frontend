import './Nav.scss';

function Nav() {
  return (
    <nav className="Nav">
      <div className="topBar" />
      <div className="navWarp">
        <div className="userMenu">
          <ul className="userMenuText">
            <li>
              <a href="/">로그인</a>
            </li>
            <span className="txtBar" />
            <li>
              <a href="/sign">회원가입</a>
            </li>
            <span className="txtBar" />
            <li>
              <a href="/mypage">마이페이지</a>
            </li>
            <span className="txtBar" />
            <li>
              <a href="/cart">장바구니</a>
            </li>
            <a className="cartNumber" href="#">
              0
            </a>
          </ul>
        </div>

        <div className="middle">
          <a href="/main">
            <img className="logo" alt="배민문방구" src="images/welogo.png" />
          </a>
          <form className="search">
            <div className="searchBox">
              <input placeholder="검색어를 입력해주세요." />
              <img className="searchImg" alt="검색" src="images/search.png" />
            </div>
          </form>
        </div>

        <div className="cate">
          <ul>
            <li>
              <a href="/all">전체</a>
            </li>
            <li>
              <a href="/goods_service">삼십기스</a>
            </li>
            <li>
              <a href="/goods_things">30기의 물건</a>
            </li>
            <li>
              <a href="/goods_mentors">멘톳쓰</a>
            </li>
            <li>
              <a href="/goods_eat">삼십세끼</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
