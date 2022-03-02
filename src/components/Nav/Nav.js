import './Nav.scss';

function Nav() {
  return (
    <nav className="Nav">
      <div className="topBar" />
      <div className="navWarp">
        <div className="top">
          <ul className="top-header">
            <li>
              <a href="#">로그인</a>
            </li>
            <span className="txt_bar" />
            <li>
              <a href="#">회원가입</a>
            </li>
            <span className="txt_bar" />
            <li>
              <a href="#">마이페이지</a>
            </li>
            <span className="txt_bar" />
            <li>
              <a href="#">장바구니</a>
            </li>
            <a className="cartNumber" href="#">
              0
            </a>
          </ul>
        </div>

        <div className="middle">
          <a href="#">
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
              <a href="#">전체</a>
            </li>
            <li>
              <a href="#">삼십기스</a>
            </li>
            <li>
              <a href="#">30기의 물건</a>
            </li>
            <li>
              <a href="#">멘톳쓰</a>
            </li>
            <li>
              <a href="#">삼십세끼</a>
            </li>
          </ul>
        </div>
        <div className="bottomLine"></div>
      </div>
    </nav>
  );
}

export default Nav;
