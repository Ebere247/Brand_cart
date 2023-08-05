// Select all add Buttons by the Class Name
let allCartsBtn = document.getElementsByClassName("remove");
// Select all Quantities of every Product
let allQtys = document.getElementsByClassName("formControl");
// Select the Total price Tag
let totalPrice = document.getElementById("totalPrice");
// Loop through all the buttons
for (let i = 0; i < allCartsBtn.length; i++) {
    // Add Event Listener to each of the Buttons
    allCartsBtn[i].addEventListener("click", function() {
    let btnText = this.textContent;

    // Select the Parent of the Button
    let singleProd = allCartsBtn[i].closest(".singleCart");
    // select the Price of each of the single Product
    let price = singleProd.getElementsByClassName("price");

    // Extract the Price and Remove the dollar sign
    price = price[0].textContent.replace("$","");
    // Convert Price to Float Number
    price = parseFloat(price);
    // Extract the Price of the Total and Remove the dollar sign
    let totalPriceN = totalPrice.textContent.replace("$","");
    // Convert Total Price to Float Number
    totalPriceN = parseFloat(totalPriceN);

    if (btnText === "Add") {
        // Add the Product Price to the Total Price by Concatenting it
        totalPriceN = totalPriceN + price;
        this.textContent = "remove"
    } else {
        // Deduct the Product Price to the Total Price by Concatenting it
        totalPriceN = totalPriceN - price;
        this.textContent = "Add"
        }
        // Return the totalPrice to the HTML tag
        totalPrice.textContent = "$" + totalPriceN.toFixed(2);
    })

        // Add Event Listener to each of the Quantity Dropdown
        allQtys[i].addEventListener("change", function(e) {

        // Select the Parent of the Quantity
        let singleProd = allQtys[i].closest(".singleCart");
        // select the Price of each of the single Product
        let price = singleProd.getElementsByClassName("price");

        // Extract the Price and Remove the dollar sign
        price = price[0].textContent.replace("$","");
        // Convert Price to Integer
        price = parseFloat(price);

        // Get the Cart Button
        let singleCartBtn = singleProd.getElementsByClassName("remove");
        // Extract the text of single Quantity Dropdown
        let dropDownVal = this.textContent;
        dropDownVal = dropDownVal.replace("Qty: ","");
        dropDownVal = parseInt(dropDownVal);
        
        if (singleCartBtn[0].textContent !== "Add") {
            price = price * dropDownVal;
            // Extract the Price of the Total and Remove the dollar sign
            let totalPriceN = totalPrice.textContent.replace("$","");
    
            // Convert Total Price to Integer
            totalPriceN = parseFloat(totalPriceN);
            // Add the Product Price to the Total Price by Concatenting it
            totalPriceN = totalPriceN + price;
            // Return the totalPrice to the HTML tag
            totalPrice.textContent = "$" + totalPriceN.toFixed(2);
        }
        

    })

}

