let buyprice = document.querySelector(".buyprice");
let quantity = document.querySelector(".quantity");
let sellprice = document.querySelector(".sellprice");
let submit = document.querySelector(".submit");
let output = document.querySelector(".output");


function calculate()
{
    let cp = Number(buyprice.value);
    let quan = Number(quantity.value);
    let sp = Number(sellprice.value);
    

    if(cp>0 && quan>0 && sp>0)
    {
        if(cp<sp)
        {
            let profit = (sp-cp)*quan;
            let profitPerecent = ((sp-cp)/cp)*100;
            showOutput(`Huray ! You Have profit of ${profit} and the Profit Percentage are ${profitPerecent.toFixed(2)}% 😋`);
        }
        else if(cp>sp)
        {
            let loss = (cp-sp)*quan;
            let lossPerecent = ((cp-sp)/cp)*100;
            showOutput(`Ohh ! You have loss of ${loss} and the loss perecnetage are ${lossPerecent.toFixed(2)}% 😥`);
        }
        else
        {
            showOutput("You have no loss and no profit")
        }
    }
    else
    {
        showOutput("Invalid Input");
    }

}

function showOutput(msg) 
{
     output.innerText = msg;
}
submit.addEventListener('click',calculate);