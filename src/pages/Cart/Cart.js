import './Cart.scss';

function Cart() {
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
          <tr>
            <td>
              <input className="inputCheck" type="checkbox" id="c_c_box" />
              <label className="checkText" for="c_c_box" />
            </td>
            <td>
              <div className="cartList">
                <img
                  width={40}
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                ></img>
                <h3>을지로에서 만든 쟁반</h3>
              </div>
            </td>
            <td>1개</td>
            <td>90,000원</td>
            <td className="tdLast">
              기본 배송비
              <br /> 0원 <br />
              택배-선결제
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
