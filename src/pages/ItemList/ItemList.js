import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ItemList.scss';

function ItemList() {
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.7.45:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => setList(data.results));
  }, [location.search]);

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
                    {Number(content.price).toLocaleString()}원
                  </span>
                  {content.discount_rate && (
                    <span className="discountPrice">
                      {Number(content.discount_price).toLocaleString()}원
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
