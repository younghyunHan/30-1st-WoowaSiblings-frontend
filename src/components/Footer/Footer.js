import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerWrap">
        <div className="brandLogo">
          <img
            className="logoImage"
            src="/images/logofooter.png"
            alt="footer이미지"
          />
        </div>
        <div className="footerContent">
          <ul className="footerInfo">
            <a href="#" className="footerInfoList">
              공지사항
            </a>
            <a href="#" className="footerInfoList">
              1:1문의
            </a>
            <a href="#" className="footerInfoList">
              이용약관
            </a>
            <a href="#" className="footerInfoList">
              개인정보처리방침
            </a>
            <a href="#" className="footerInfoList">
              판매처 안내
            </a>
          </ul>
          <div className="footerData">
            <div className="footerDataList">
              상호: (주)우아한남매들 | 대표 : siblings | 사업자등록번호 :
              000-00-0000 통신판매업신고번호 : 2999-서울선릉-1002
            </div>
            <div className="footerDataList">
              팩스번호: 050-123-3412 | 메일 : 123@siblings.com | 삼십 문방구 :
              @siblings_store
            </div>
            <div className="footerDataList">
              주소 : 서울특별시 선릉 테헤란로 427
            </div>
            <p className="footerDataList">
              © Woowa Siblings Corp. All right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
