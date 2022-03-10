import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemList.scss';

function ItemList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://10.58.7.45:8000/products')
      .then(res => res.json())
      .then(data => {
        setList(data.results);
      });
  }, []);

  const handleClick = id => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="itemList">
      <div className="itemListContent">
        <ul className="itemListCotentGallery">
          {list.map(content => {
            return (
              <li
                key={content.id}
                className="listGallery"
                onClick={() => handleClick(content.id)}
              >
                <div className="itemPhotoBox">
                  <img
                    className="listImage"
                    src={content.thumbnail_image}
                    alt="listItem"
                  />
                </div>
                {content.discount_rate && (
                  <div className="itemDiscountRate">
                    {content.discount_rate * 100}%
                  </div>
                )}
                <div className="itemTitleBox">
                  <div className="itemTitleBoxName">
                    <span>{content.name}</span>
                  </div>
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
