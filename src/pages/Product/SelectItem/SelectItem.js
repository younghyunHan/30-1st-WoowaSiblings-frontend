import React, { useState } from 'react';
import './SelectItem.scss';

function SelectItem({ content, onChange }) {
  const [quantityNum, setQuantityNum] = useState(0);
  const min = 0;

  const handleQuantityInput = e => {
    setQuantityNum(Number(e.target.value)); // value는 string
  };

  return (
    content !== null && (
      <div className="selectItem">
        <div className="itemName">{content.name}</div>
        <div className="countPrice">
          <input
            type="number"
            min={min}
            max={content.stock}
            value={quantityNum}
            onChange={handleQuantityInput}
            className="numberInput"
            onClick={onChange}
          />
          <div className="itemPrice">
            {content.discount_rate
              ? `${(quantityNum * content.discount_price).toLocaleString()}원`
              : `${(quantityNum * content.price).toLocaleString()}원`}
          </div>
        </div>
      </div>
    )
  );
}

export default SelectItem;
