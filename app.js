
function getShops() {
     let request = new XMLHttpRequest();
     request.open('GET', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
     request.addEventListener('load', function () {
         // responseText is a property of the request object
         // (that name was chosen for us)
         let shops = JSON.parse(request.responseText);
         console.log(shops);
         let parent = document.querySelector('#shops');
 
         for (let i = 0; i < shops.length; i++) {
             let element = document.createElement('li');
             let shopCount = document.querySelector('#cofSho').innerHTML = "Coffee Shops" + ' ' + '(' + shops.length + ')';
             element.textContent = shops[i].name + '--' + shops[i].rating + "stars" + "--" + shops[i].price;
 
             // append to parent
             parent.appendChild(element);
         }
     });
     request.send();
 }


function addShop(){
    let coffeeShop = {
        name: document.querySelector("#shopName").value,
        rating: document.querySelector('#shopRating').value,
        price: document.querySelector('#shopPrice').value,
    }

    let request = new XMLHttpRequest();
    request.open('POST', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.send(JSON.stringify(coffeeShop));
}


window.addEventListener ('load', function () {
    console.log('go time');
      getShops();
    
    let submitBtn1 = document.querySelector('#addAPI1');
      submitBtn1.addEventListener('click', function () {
      addShop();
     });

    // let submitBtn2 = document.querySelector('addAPI2');
    //  submitBtn.addEventListener('click', function () {
        //  addNewStuff();
     });
