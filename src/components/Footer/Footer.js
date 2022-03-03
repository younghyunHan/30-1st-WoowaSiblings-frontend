import { useState, useEffect } from 'react';
import footerInfoData from './FooterInfoData';
import footerDataList from './FooterDataList';
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
            {footerInfoData.map(info => {
              return (
                <a href="#" className="footerInfoList" key={info.id}>
                  {info.content}
                </a>
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
      </div>
    </footer>
  );
}

export default Footer;
