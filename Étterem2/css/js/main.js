
function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input-food']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}

function showSumPrice(price=0, amountNumber=1){
    amountNumber=amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if(amountNumber > 10){
        alert("Maximum 10 terméket vásárolhat!");
    }else if(amountNumber < 1){
        alert("Legalább 1 terméket kell vásárolnia!");
    }else{
        let amountInput = document.querySelector("input[name='amount-input-food']");
        let nameOfFood = document.querySelector("input[name='top-input-food']");
        price = getPriceByName(nameOfFood.value);
        let amount=parseInt(amountInput.value)* price;
        showAmount.innerHTML = amount;
    }
}

function getPriceByName(name)
{
    var price = 0;
    var f = $.getJSON("http://localhost:3000/food", function(database){
            $.each(database, function(key, value){
                if(value.name === name)
                {
                    alert(value.name + " " + value.price);
                    price = parseInt(value.price);
                    alert(price);
                }
            });
    });
    $.when(f);
    alert("lofasz");
    return price;
}