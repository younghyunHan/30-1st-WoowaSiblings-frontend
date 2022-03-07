import { useState } from 'react';
import SelectItem from './SelectItem';
import './ItemDetail.scss';

function ItemDetail() {
  const [list, setList] = useState([]);

  return (
    <div className="itemDetail">
      <div className="itemDetailContents">
        <img
          className="itemDetailImage"
          src="https://images.unsplash.com/photo-1644221876015-b8bbd9e1f89f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="상세이미지"
        />
        <div className="itemInfoBox">
          <h3 className="itemDetailTitle">배달이 친구들</h3>
          <div className="itemDetailList">
            <div className="itemPrice">
              <div className="itemPriceOne">정가 </div>
              {/* <span
                className={`itemPriceTwo ${
                  content.discount_price ? itemPriceThree : ''
                }`}
              >
                `${content.price.toLocaleString('ko-KR')}원`
              </span> */}
            </div>
            <div className="disCountPrice">
              <div className="itemDiscountPriceOne">할인가</div>
              <span className="itemDiscountPriceTwo">
                {/* {content.discount_price ? `${content.discount_price.toLocaleString('ko-KR')}원` : ''} */}
              </span>
            </div>
            <div className="itemDelivery">
              <div className="itemDeliveryOne">배송정보</div>
              <span className="itemDeliveryTwo">
                배송이 힘들어요... 찾으러 오세요
              </span>
            </div>
          </div>
          <div className="selectItem">
            <SelectItem />
          </div>
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
  );
}

export default ItemDetail;
