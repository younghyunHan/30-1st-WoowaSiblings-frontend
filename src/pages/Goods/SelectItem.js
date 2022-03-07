import React, { useState } from 'react';
import './SelectItem.scss';

function SelectItem({ items }) {
  const [count, setCount] = useState(0);
  const maxCount = 10;
  const minCount = 0;
  // const oldPrice = items.result.old_price;
  // const resultPrice = oldPrice * count;

  const handleCount = event => {
    if (event > maxCount) {
      setCount(maxCount);
    } else if (event < minCount) {
      setCount(minCount);
    } else setCount(event);
  };

  const onIncreaseCount = () => {
    if (count < maxCount) setCount(count + 1);
    else if (count > maxCount) setCount(maxCount);
  };

  const onDecreaseCount = () => {
    if (count > minCount) setCount(count - 1);
    else if (count === 0) alert('최소 1개 이상 구매하셔아 합니다');
  };

  return (
    <form>
      <div className="selectItemArea">
        <div className="selectItemDisplayArea">
          {/* <span className="itemName">{items.result.title}</span> */}
          <div className="itemPrice">
            <span className="itemCount">
              <input
                className="itemCountOne"
                value={count}
                onChange={event => {
                  handleCount(event.target.value);
                }}
              />
              <span>
                <div className="buttonBox">
                  <input
                    className="upButton"
                    type="button"
                    onClick={() => onIncreaseCount()}
                    title="증가"
                    value="&#8896;"
                  />
                  <input
                    className="downButton"
                    type="button"
                    onClick={() => onDecreaseCount()}
                    title="감소"
                    value="&#8897;"
                  />
                </div>
              </span>
            </span>
            {/* <em>{resultPrice}원</em> */}
          </div>
          <div className="deleteButton">
            <button // onClick={() => { //   setIsShow(false); // }}
              type="button"
            >
              &#x2613;
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SelectItem;
