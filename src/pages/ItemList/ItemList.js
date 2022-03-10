import { useState, useEffect } from 'react';
import './ItemList.scss';

function ItemList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.6.128:8000/products')
      .then(res => res.json())
      .then(data => {
        setList(data.results);
      });
  }, []);

  return (
    <div className="itemList">
      <div className="itemListContent">
        <ul className="itemListCotentGallery">
          {list.map(content => {
            return (
              <li key={content.id} className="listGallery">
                <div className="itemPhotoBox">
                  <a href="#" className="itemPageMove">
                    <img
                      className="listImage"
                      src={content.thumbnail_image}
                      alt="listItem"
                    />
                  </a>
                </div>
                {content.discount_rate && (
                  <div className="itemDiscountRate">
                    {content.discount_rate * 100}%
                  </div>
                )}
                <div className="itemTitleBox">
                  <a href="#" className="itemTitleBoxName">
                    <span>{content.name}</span>
                  </a>
                </div>
                <div className="itemMoneyBox">
                  <span
                    className={`originalPrice ${
                      content.discount_rate ? '' : 'priceBig'
                    }`}
                  >
                    {content.price}원
                  </span>
                  {content.discount_rate && (
                    <span className="discountPrice">
                      {content.discount_price}원
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
