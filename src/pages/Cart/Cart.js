import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { API } from '../../config';
import './Cart.scss';

function Cart() {
  // TODO: 체크박스;
  const [items, setItems] = useState([]);
  // const [checkedItems, setCheckedItems] = useState(new Set());
  // const [isAllChecked, setIsAllChecked] = useState(false);
  // const [bChecked, setbChecked] = useState(false);
  // const ref = useRef();

  useEffect(() => {
    fetch(`${API.CART}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setItems(data.results);
      });
  }, []);
  //  TODO 체크박스
  // const changeItemOptionSubmit = id => {
  //   const changeItem = items.map(items => {
  //     if (items.id === id) {
  //       if (count > 0)
  //         return { ...items, count: count, bChecked: true };
  //       else return { ...items, count: count };
  //     } else return items;
  //   });
  //   setItems(changeItem);

  //   fetch(`${BASE_URL}cart/${item .cart_id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({
  //       cart_id: Cart.id,
  //       quantity: item.quantity,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if (res.result.message === 'SUCCESS') {
  //         fetch(`${BASE_URL}cart`, {
  //           method: 'GET',
  //           headers: {
  //             Authorization: localsStorage.getItem('token'),
  //           },
  //         })
  //           .then(res => res.json())
  //           .then(res => setItems({ ...items, qty: res.count }));
  //       }
  //     });

  //   onClose();
  // };
  // const allCheckedHandler = isChecked => {
  //   if (isChecked) {
  //     setCheckedItems(new Set(items.map(({ id }) => id)));
  //     setIsAllChecked(true);
  //   } else if (!isChecked) {
  //     checkedItems.clear();
  //     setCheckedItems(setCheckedItems);
  //     setIsAllChecked(false);
  //   }
  // };

  // const checkedItemHandler = (id, isChecked) => {
  //   if (isChecked) {
  //     checkedItems.add(id);
  //     setCheckedItems(checkedItems);
  //   } else if (!isChecked && checkedItems.has(id)) {
  //     checkedItems.delete(id);
  //     setCheckedItems(checkedItems);
  //   }
  // };

  //reduce 메서드 사용해서 리팩토링 진행예정
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += Number(items[i].total_price);
  }

  function success() {
    alert('주문 성공');
  }

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
          {items.map(item => {
            return <CartItem item={item} key={item.id} items={items} />;
          })}
        </tbody>
      </table>
      <div className="goToShopBox">
        <Link to="/item-list" className="goToShop">
          &lt; 쇼핑 계속하기
        </Link>
      </div>
      <div className="totalPriceBox">
        <div className="totalPriceList">
          <ul>
            <li>
              총 <strong className="totalCount">{items.length}</strong>
              개의 상품금액
            </li>
            <li>
              <strong className="totalGoodsPrice">
                {Number(totalPrice).toLocaleString()}
                {/* {totalPrice.toLocaleString('ko-KR')} */}
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
                0{/* {totaDeliveryCharge.toLocaleString('ko-KR')} */}
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
                {Number(totalPrice).toLocaleString()}
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
          <button onClick={() => success()} className="goodsOrder">
            전체 상품 주문
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
