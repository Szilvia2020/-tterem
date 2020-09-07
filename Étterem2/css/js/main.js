
var price = 0;

function calcAmount(){
    //let price = 1000;
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
        // price = 
        getPriceByName(nameOfFood.value);
        let amount=parseInt(amountInput.value)* price;
        showAmount.innerHTML = amount;
    }
}

function  getPriceByName(name)
{
    // var response = $.getJSON('http://localhost:3000/food');
    // alert(response);
    // if (response.ok) { 
    //     let json =  response.json();
    //     alert(json);
    //   } else {
    //     alert("HTTP-Error: " + response.status);
    //   }

    //var price = 0;
    var jqxhr = $.getJSON("http://localhost:3000/food", function(database){
            $.each(database, function(key, value){
                if(value.name === name)
                {
                    price = parseInt(value.price);
                    alert("p1: "+price);
                }
            });
    }).done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "complete" );
      });

    //    jqxhr.complete(function() {
    //     alert( "second complete: " + price );
    //   });
    alert("p2: "+price);
   
    //alert(price);
   // return price;
}