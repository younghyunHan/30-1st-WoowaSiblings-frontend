import React, { useState } from 'react';
import './SelectItem.scss';

function SelectItem({ content, onChange }) {
  const [quantityNum, setQuantityNum] = useState(0);

  const handleQuantityInput = e => {
    setQuantityNum(Number(e.target.value)); // value는 string
  };

  return (
    content !== null && (
      <div className="selectItem">
        <div className="itemName">{content[0].name}</div>
        <div className="countPrice">
          <input
            type="number"
            min={content[0].min}
            max={content[0].stock}
            value={quantityNum}
            onChange={handleQuantityInput}
            className="numberInput"
            onClick={onChange}
          />
          <div className="itemPrice">
            {content[0].discount_rate
              ? `${(
                  quantityNum * content[0].discount_price
                ).toLocaleString()}원`
              : `${(quantityNum * content[0].price).toLocaleString()}원`}
          </div>
        </div>
      </div>
    )
  );
}

export default SelectItem;
