import { useState, useEffect } from 'react';
import './ItemList.scss';

function ItemList() {
  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    fetch('/data/mainData.json')
      .then(res => res.json())
      .then(data => {
        setMainList(data);
      });
  }, []);

  return (
    <div className="itemList">
      <div className="itemListMainWrap">
        <div className="itemListContent">
          <ul className="itemListCotentGallery">
            {mainList.map(content => {
              return (
                <li key={content.id} className="listGallery">
                  <div className="galleryItem">
                    <div className="itemPhotoBox">
                      <a href="#" className="itemPageMove">
                        <img
                          className="mainImage"
                          src={content.image}
                          alt="goodsItem"
                        />
                      </a>
                    </div>

                    <div className="itemDiscountRate">
                      {content.discountRate}
                    </div>
                    <div className="itemTitleBox">
                      <a href="#" className="itemTitleBoxName">
                        <span>{content.itemName}</span>
                      </a>
                    </div>
                    <div className="itemMoneyBox">
                      <span className="originalPrice">49,000원</span>
                      <span className="discountPrice">29,000원</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
