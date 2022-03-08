import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectItem.scss';

function SelectItem({ content }) {
  console.log(content);

  const [count, setCount] = useState(0);
  // const oldPrice = items.result.old_price;
  // const resultPrice = oldPrice * count;
  // const { name, price, thumbnail_image_url, quantity, option } = item;
  // const [quantityNum, setQuantityNum] = useState(quantity);
  const navigate = useNavigate();

  // const handleCount = event => {
  //   if (event > maxCount) {
  //     setCount(maxCount);
  //   } else if (event < minCount) {
  //     setCount(minCount);
  //   } else setCount(event);
  // };

  // const onIncreaseCount = () => {
  //   if (count < maxCount) setCount(count + 1);
  //   else if (count > maxCount) setCount(maxCount);
  // };

  // const onDecreaseCount = () => {
  //   if (count > minCount) setCount(count - 1);
  //   else if (count === 0) alert('최소 1개 이상 구매하셔아 합니다');
  // };

  const handleQuantityInput = e => {
    // setQuantityNum(Number(e.target.value)); // value는 string
  };

  return (
    content !== null && (
      <div className="selectItem">
        <div className="itemName">{content[0].name}</div>
        <div className="countPrice">
          <input
            type="number"
            min="1"
            max="120"
            // value={quantityNum}
            // onChange={handleQuantityInput}
            className="numberInput"
          />
          <div className="itemPrice">{content[0].price}.to</div>
        </div>
      </div>
    )
  );
}

export default SelectItem;
