import { useState } from 'react';
import SelectItem from './SelectItem';
import './ItemDetail.scss';

function ItemDetail() {
  const [list, setList] = useState([]);

  const onClick = event => {
    setList(
      list.concat(event.target.options[event.target.selectedIndex].value)
    );
  };

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
              <div className="itemPriceOne">판매가격 </div>
              <span className="itemPriceTwo">3000원</span>
            </div>
            <div className="itemDelivery">
              <div className="itemDeliveryOne">배송정보 </div>
              <span className="itemDeliveryTwo">
                배송이 힘들어요... 찾으러 오세요
              </span>
            </div>
            <div className="itemOptionBox">
              <div className="itemOptionBoxOne">옵션</div>
              <select className="itemOptionBoxTwo" onChange={onClick}>
                <option>= 옵션 : 가격 =</option>
                <option value="독고배달이">독고배달이</option>
                <option value="냥이배달이">냥이배달이</option>
                <option value="메이배달이">메이배달이</option>
                <option value="왕배달이">왕배달이</option>
              </select>
            </div>
          </div>
          <div className="selectItemList">
            {list.map((content, index) => {
              return (
                <div key={index}>
                  <SelectItem content={content} />
                </div>
              );
            })}
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
