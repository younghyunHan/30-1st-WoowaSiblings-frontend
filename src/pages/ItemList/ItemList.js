import { useState, useEffect } from 'react';
import './ItemList.scss';

function ItemList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => {
        setList(data);
      });
  }, []);

  return (
    <div className="itemList">
      <div className="itemListWrap">
        <div className="itemListContent">
          <ul className="itemListCotentGallery">
            {list.map(content => {
              return (
                <li key={content.id} className="listGallery">
                  <div className="galleryItem">
                    <div className="itemPhotoBox">
                      <a href="#" className="itemPageMove">
                        <img
                          className="listImage"
                          src={content.image}
                          alt="listItem"
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
                      <span className="originalPrice">{content.itemPrice}</span>
                      <span className="discountPrice">
                        {content.itemDiscountPrice}
                      </span>
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
