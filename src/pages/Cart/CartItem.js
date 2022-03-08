import React, { useState, useEffect } from 'react';

function CartItem({ item }) {
  const {
    id,
    name,
    quantity,
    price,
    time,
    thumbnail_image,
    total_price,
    items,
  } = item;
  // TODO 체크박스
  // const checkHandler = ({ target }) => {
  //   setbChecked(!bChecked);
  //   checkedItemHandler(id, target.checked);
  // };

  // const handleQuantityInput = e => {
  //   setCountNumber(Number(e.target.value));
  // };

  // const allCheckHandler = () => setbChecked(isAllChecked);
  // useEffect(() => allCheckHandler(), [isAllChecked]);

  console.log(price);
  return (
    <tr>
      <td>
        <input className="inputCheck" type="checkbox" />
      </td>
      <td>
        <div className="cartList">
          <img alt={name} width={40} src={thumbnail_image} />
          <h3>{name}</h3>
        </div>
      </td>
      <td>
        {quantity}개<br />
        {/* TODO 옵션선택
        <input min="1" value={quantity} type="number" className="countNumber" />
        <button className="countNumberBtn">변경</button> */}
      </td>
      <td>{price}원</td>
      <td rowSpan={items.length} className="tdLast">
        <p>기본 배송비</p>
        <p>0원</p>
        <p>택배-선결제</p>
      </td>
    </tr>
  );
}

export default CartItem;
