// initialize first class and economy class input fields
var firstClass = document.getElementById("first-class");
var economyClass = document.getElementById("economy-class");

// add click event to increase and decrease button using custom click listener function
addClickEvent("first-class-add", function(){
    increaseSeat(firstClass);
});
addClickEvent("first-class-remove", function(){
    decreaseSeat(firstClass);
});
addClickEvent("economy-class-add", function(){
    increaseSeat(economyClass);
});
addClickEvent("economy-class-remove", function(){
    decreaseSeat(economyClass);
});

// custom click listener function
function addClickEvent(id,clickHandler){
    document.getElementById(id).addEventListener("click",function(){
        clickHandler();
    })
}

// increase seat function
function increaseSeat(element){
    if (parseInt(element.value) >= 0) {
        element.value = parseInt(element.value) + 1;
        calculate();
    }
}

// decrease seat function
function decreaseSeat(element){
    if(parseInt(element.value) > 0){
        element.value = parseInt(element.value) - 1;
        calculate();
    }
}

// calculate function for calculate and reassign values
function calculate() {
    var subTotalElement = document.getElementById("subtotal");
    var vatElement = document.getElementById("vat");
    var totalElement = document.getElementById("total");
    var subtotal = (parseInt(firstClass.value) * 150) + (parseInt(economyClass.value) * 100);
    var vat = subtotal * 0.10;
    var total = subtotal + vat;
    subTotalElement.innerHTML = subtotal;
    vatElement.innerHTML = vat;
    totalElement.innerHTML = total;
}

// initialize modal
var modal = document.getElementById("modal");

// add click event to show modal
addClickEvent("booking", function() {
    document.getElementById("first-class-quantity").innerHTML = firstClass.value;
    document.getElementById("economy-class-quantity").innerHTML = economyClass.value;
    document.getElementById("confirmation-amount").innerHTML = document.getElementById("calculation").innerHTML;
    if(parseInt(firstClass.value) || parseInt(economyClass.value) > 0){
        modal.style.display = "block";
    }
});

// add click event to hide modal and reset values
addClickEvent("modal-btn", function() {
    modal.style.display = "none";
    firstClass.value = 0;
    economyClass.value = 0;
    calculate();
});