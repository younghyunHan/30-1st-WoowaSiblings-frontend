import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectItem from './SelectItem/SelectItem';
import './Product.scss';

function Product() {
  const [item, setItem] = useState(null);
  const [amount, setAmount] = useState(0);
  const [goToBack, setGoToBack] = useState[0];
  // const params = useParams();

  useEffect(() => {
    fetch('/data/selectItemData.json')
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/products/${params.id}`)
  //     .then(res => res.json())
  //     .then(data => setItem(data));
  // }, []);

  useEffect(() => {
    fetch('/product/')
      .then(res => res.json())
      .then(data => setItem(data));
  }, [goToBasket()]);

  const goToBasket = () => {};

  const handleAmountValue = event => {
    setAmount(event.target.value);
    setGoToBack(event.target.value);
  };

  return (
    item !== null && (
      <div className="product">
        <div className="productContents" key={item[0].id}>
          <img
            className="productImage"
            src={item[0].thumbnail_image}
            alt="상세이미지"
          />
          <div className="productInfoBox">
            <h3 className="productTitle">{item[0].name}</h3>
            <div className="productList">
              <div className="productPrice">
                <div className="productPriceOne">정가</div>
                <span
                  className={`productPriceTwo ${
                    item[0].discount_rate ? 'productPriceThree' : ''
                  }`}
                >
                  {item[0].price.toLocaleString()}원
                </span>
              </div>
              <div className="disCountPrice">
                {item[0].discount_rate && (
                  <>
                    <div className="productDiscountPriceOne">할인가</div>
                    <span
                      className={`productDiscountPriceTwo ${
                        item[0].discount_rate ? 'productDiscountPriceThree' : ''
                      }`}
                    >
                      {item[0].discount_price
                        ? `${item[0].discount_price.toLocaleString()}원`
                        : ''}
                    </span>
                  </>
                )}
              </div>
              <div className="productDelivery">
                <div className="productDeliveryOne">배송정보</div>
                <span className="productDeliveryTwo">
                  배송이 힘들어요... 찾으러 오세요
                </span>
              </div>
            </div>
            <SelectItem content={item} onChange={handleAmountValue} />
            <div className="totalAmount">
              <div className="totalAmountOne">총 합계금액</div>
              <div className="totalPrice">
                <strong>
                  {item[0].discount_rate
                    ? `${(amount * item[0].discount_price).toLocaleString()}원`
                    : `${(amount * item[0].discount_price).toLocaleString()}원`}
                </strong>
              </div>
            </div>
            <div className="btnChoiceBox">
              <button type="button" className="btnAddCart" onClick={goToBasket}>
                장바구니
              </button>
              <button type="button" className="btnAddOrder">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Product;
