import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CartItemList from './CartItemList';
import './Cart.scss';

function Cart() {
  const [cartItem, setCartItem] = useState([]);
  l;
  useEffect(() => {
    fetch('http://localhost:3000/data/CartItemList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        //스트링파이 안함 해야함
        setCartItem(data);
      });
  }, []);

  let totalPrice = 0;
  for (let i = 0; i < cartItem.length; i++) {
    totalPrice += cartItem[i].price * cartItem[i].count;
  }

  let totaDeliveryCharge = 2500;

  return (
    <div className="cart">
      <div className="orderTitleBox">
        <h2 className="orderTitle">장바구니</h2>
      </div>

      <table className="cartTable">
        <thead>
          <tr>
            <th>
              <input className="inputCheck" type="checkbox" />
            </th>
            <th>상품/옵션 정보</th>
            <th>수량</th>
            <th>상품금액</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((el, idx) => (
            <CartItemList
              id={el.id}
              key={el.id}
              name={el.name}
              price={el.price}
              count={el.count}
              image={el.thumbnail_image}
              cartItem={cartItem}
              setCartItem={setCartItem}
            />
          ))}
        </tbody>
      </table>
      <div className="goToShopBox">
        <Link to={'/item-list'} className="goToShop">
          &lt; 쇼핑 계속하기
        </Link>
      </div>
      <div className="totalPriceBox">
        <div className="totalPriceList">
          <ul>
            <li>
              총 <strong className="totalCount">{cartItem.length}</strong>
              개의 상품금액
            </li>
            <li>
              <strong className="totalGoodsPrice">
                {totalPrice.toLocaleString('ko-KR')}
              </strong>
              원
            </li>
          </ul>
          <span>
            <img alt="더하기" src="/images/cartSum.png" />
          </span>

          <ul>
            <li>배송비</li>
            <li>
              <strong className="totaDeliveryCharge">
                {totaDeliveryCharge.toLocaleString('ko-KR')}
              </strong>
              원
            </li>
          </ul>

          <span>
            <img alt="더하기" src="/images/cartEqual.png" />
          </span>

          <ul>
            <li>합계</li>
            <li>
              <strong className="totalSettlePrice">
                {(totalPrice + totaDeliveryCharge).toLocaleString('ko-KR')}
              </strong>
              원
            </li>
          </ul>
        </div>
      </div>

      <div className="btnOrderBox">
        <div className="choiceBox">
          <button className="goodsChoice">선택 상품 삭제</button>
          <button className="goodsChoice">선택 상품 찜</button>
        </div>
        <div className="orderBox">
          <button className="goodsOrder">선택 상품 주문</button>
          <button className="goodsOrder">전체 상품 주문</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
