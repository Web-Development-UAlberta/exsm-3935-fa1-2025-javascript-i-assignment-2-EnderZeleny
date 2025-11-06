/*
    Write a cashier program that takes three user inputs
        Total cost of goods
        Cash payment from the customer
        Discount codes (use a switch statement for this)
            Discount code input of 0 gives no discount
            Discount code input of 1 gives 10% off order
            Discount code input of 2 gives 15% off order
            Discount code input of 3 gives 25% off order
            Discount code input of 4 gives 35% off order
            Discount code input of 5 gives 40% off order
            Default statement should be used for error checking in case of invalid entries
    If the total of cash payment from the customer subtracted by the total cost of goods (after discount) is a negative amount, output the message “Insufficient Payment!”
    Otherwise, print out the amount of change that the customer should receive, after taking into account the discount code
*/
/*
Uh oh I have to do math

0 = 1.00
1 = 0.90
2 = 0.85
3 = 0.75
4 = 0.65
5 = 0.60

Multiplying the cost of goods by these numbers should give the correct value.
*/
async function main() {
/* Code Below Here */
let TotalCost = Number(await input("Input total cost of goods. "));
let CashPayment = Number(await input("Input payment recieved. "));
let DiscountCode = Number(await input("Input discount code. "));

let Discount = 1.00 //Variable scope
switch (DiscountCode) {
  case 0:
    Discount = 1.00;
  case 1:
    Discount = 0.9;
    break;
  case 2: 
    Discount = 0.85;
    break;
  case 3:
    Discount = 0.75;
    break;
  case 4:
    Discount = 0.65;
    break;
  case 5:
    Discount = 0.6;
    break;
  default:
    Discount = 1.00;
    output("Invalid Discount Code, no discount applied.")
    break;
}

let Price = TotalCost * Discount;
if (Price <= CashPayment) {
  output ("User should recieve $" + (Price - Cashpayment) + " as change. ");
} else {
  output ("Insufficient Payment! ");
}

/* Code Above Here */
}