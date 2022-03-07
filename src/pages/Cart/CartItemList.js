import React, { useState } from 'react';

function CartItemList({ id, name, count, price, cartItem, setCartItem }) {
  const [countNumber, setCountNumber] = useState(count);

  const handleQuantityInput = e => {
    setCountNumber(Number(e.target.value));
  };
  return (
    <tr key={id}>
      <td>
        <input className="inputCheck" type="checkbox" />
      </td>
      <td>
        <div className="cartList">
          <img alt="" width={40} src="{}" />
          <h3>{name}</h3>
        </div>
      </td>
      <td>
        {countNumber}개<br />
        <input
          min="1"
          value={countNumber}
          onChange={handleQuantityInput}
          type="number"
          className="countNumber"
        ></input>
      </td>
      <td>{(price * countNumber).toLocaleString('ko-KR')}원</td>
      {id === 1 && (
        <td rowSpan={cartItem.length} className="tdLast">
          <p>기본 배송비</p>
          <p>0원</p>
          <p>택배-선결제</p>
        </td>
      )}
    </tr>
  );
}

export default CartItemList;
