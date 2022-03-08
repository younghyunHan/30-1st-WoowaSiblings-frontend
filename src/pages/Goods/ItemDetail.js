import { useState, useEffect } from 'react';
import SelectItem from './SelectItem';
import SelectItemData from './SelectItemData';
import './ItemDetail.scss';

function ItemDetail() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data/selectItemData.json')
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    item !== null && (
      <div className="itemDetail">
        <div className="itemDetailContents" key={item[0].id}>
          <img
            className="itemDetailImage"
            src="https://images.unsplash.com/photo-1644221876015-b8bbd9e1f89f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="상세이미지"
          />
          <div className="itemInfoBox">
            <h3 className="itemDetailTitle">{item[0].name}</h3>
            <div className="itemDetailList">
              <div className="itemPrice">
                <div className="itemPriceOne">정가 </div>
                <span className="itemPriceTwo">{item[0].price}원</span>
              </div>
              <div className="disCountPrice">
                <div className="itemDiscountPriceOne">할인가</div>
                <span className="itemDiscountPriceTwo">
                  {item[0].discount_price ? `${item[0].discount_price}원` : ''}
                </span>
              </div>
              <div className="itemDelivery">
                <div className="itemDeliveryOne">배송정보</div>
                <span className="itemDeliveryTwo">
                  배송이 힘들어요... 찾으러 오세요
                </span>
              </div>
            </div>
            <SelectItem content={item} />
            <div className="totalAmount">
              <div className="totalAmountOne">총 합계금액</div>
              <div className="totalPrice">
                <strong>3000원</strong>
              </div>
            </div>
            <div className="btnChoiceBox">
              <button type="button" className="btnAddCart">
                장바구니
              </button>
              <button type="button" className="btnAddOrder">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ItemDetail;
