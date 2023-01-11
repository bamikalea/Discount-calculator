const sliderEl = document.getElementById("quantity")
const resultEl = document.getElementById("results")

let unitPrice = 12
let quantity = sliderEl.value 
let totalPrice = unitPrice * quantity 
let discount = quantity/100

renderPage()

function renderPage(){
    document.getElementById("input-value").innerHTML = quantity
    resultEl.innerHTML = resultHtml(unitPrice, totalPrice, discount)
}

sliderEl.addEventListener('input', function(){  
    quantity = sliderEl.value 
    totalPrice = (unitPrice * quantity).toFixed(2)
    discount = quantity/100
    unitPrice = (12 * (1 - discount)).toFixed(2)
    renderPage()
})

function  resultHtml(unitPrice, totalPrice, discount){
    return ` 
        <div class="unit-price">
            <p>Unit price</p>
            <h4 id="unit-price">${unitPrice}</h4>
        </div>
        <div class="total">
            <p>Total</p>
            <h4 id="total">${totalPrice}</h4>
        </div>
        <div class="discount">
            <p>Your discount</p>
            <h4 id="discount">${(discount * 100).toFixed(0)}%</h4>
        </div>`
}