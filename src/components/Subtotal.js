/* eslint-disable no-extend-native */
import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../Reducer'
import { useHistory } from 'react-router'
const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    // Array.prototype.sum = function (prop) {
    //     var total = 0
    //     for (var i = 0, _len = this.length; i < _len; i++) {
    //         total += this[i][prop]
    //     }
    //     return total
    // }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift" >
                            <input type="checkbox" />
                            This order contains a gift </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} />
            <button onClick={e => history.push("./payment")}>Proceed To Buy</button>
        </div >
    )
}
export default Subtotal
