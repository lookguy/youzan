import fetch from 'js/fetch.js'
import url from 'js/api'
class Cart {
    static add() {
        fetch(url.addCart, { id, number: 1 })
    }
}

export default Cart 