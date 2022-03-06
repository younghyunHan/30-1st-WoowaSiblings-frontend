import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

function Cart() {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/CartItemList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCartItem(data);
      });
  }, []);

  console.log(cartItem.length);

  return (
    <div className="cart">
      <div className="orderTitleBox">
        <h2 className="orderTitle">장바구니</h2>
      </div>

      <table className="cartTable">
        <thead>
          <tr>
            <th>
              <input className="inputCheck" type="checkbox" id="c_box" />
              <label className="checkText" for="c_box" />
            </th>
            <th>상품/옵션 정보</th>
            <th>수량</th>
            <th>상품금액</th>
            <th>배송비</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map(el => {
            return (
              <tr key={el.id}>
                <td>
                  <input className="inputCheck" type="checkbox" id="c_c_box" />
                  <label className="checkText" for="c_c_box" />
                </td>
                <td>
                  <div className="cartList">
                    <img alt="" width={40} src="{el.thumbnail_image}"></img>
                    <h3>{el.name}</h3>
                  </div>
                </td>
                <td>{el.count}개</td>
                <td>{el.price * el.count}원</td>
                {el.id === 1 && (
                  <td rowSpan={cartItem.length} className="tdLast">
                    <p>기본 배송비</p>
                    <p>0원</p>
                    <p>택배-선결제</p>
                  </td>
                )}
              </tr>
            );
          })}
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
              <strong className="totalGoodsPrice">{}</strong>원
            </li>
          </ul>
          <span>
            <img alt="더하기" src="/images/cartSum.png" />
          </span>

          <ul>
            <li>배송비</li>
            <li>
              <strong className="totaDeliveryCharge">0</strong>원
            </li>
          </ul>

          <span>
            <img alt="더하기" src="/images/cartEqual.png" />
          </span>

          <ul>
            <li>합계</li>
            <li>
              <strong className="totalSettlePrice">219,300</strong>원
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
