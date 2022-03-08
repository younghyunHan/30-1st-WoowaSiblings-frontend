import { Link } from 'react-router-dom';
import footerInfoData from './FooterInfoData';
import footerDataList from './FooterDataList';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img className="logoImage" src="/images/logofooter.png" alt="logo" />
      <div className="footerContent">
        <ul className="footerInfo">
          {footerInfoData.map(info => {
            return (
              <Link to="/" className="footerInfoList" key={info.id}>
                {info.content}
              </Link>
            );
          })}
        </ul>
        <div className="footerData">
          {footerDataList.map(data => {
            return (
              <li className="footerDataList" key={data.id}>
                {data.content}
              </li>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
