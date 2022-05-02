let images = document.querySelectorAll('.landing .photo img');
let smallImages = Array.from(document.querySelectorAll('.landing .small-photo img'))

let previous = document.querySelector('#previous')
let next = document.querySelector('#next')
let nextClick = document.querySelector('#next svg')
let count = 1;
next.addEventListener('click', function(){

    if (count == 4) {
        false
    } else {
        count++
        cheker()
    }
})

previous.addEventListener('click', function(){
    if (count == 1) {
        false
    } else {
        count--
        cheker()
    }
})

function cheker(){
    let z = Array.from(document.querySelectorAll('.landing .photo'));
    
    z.forEach(function(e){

        remove()

        e.children[count - 1].classList.add('active');
    })
}

smallImages.map(function(img){

    img.addEventListener('click', function(ele){

        removeClick()

        ele.target.classList.add("clicks")
        const x = ele.target.dataset.image        
        
        images.forEach(function(im){
            if (im.hasAttribute(x)) {
                remove()
                im.classList.add("active")
            }else {
                hidden()
            }
        })
    })
})

function remove() {
    images.forEach(im => im.classList.remove('active'))
}
function hidden() {
    images.forEach(im => im.classList.add('hidden'))
}
function removeClick() {
    smallImages.forEach(im => im.classList.remove('clicks'))
}
///////////////////////////////////////
let ul = document.querySelector('ul');
let svg = document.querySelector('ul svg');
let menu = document.getElementById('menu');
let over = document.querySelector('.over')

menu.onclick = function () {
    ul.classList.add('active')
    ul.classList.remove('add')
    over.style.display = 'inline'
}

svg.onclick = function () {
    ul.classList.remove('active')
    ul.classList.add('add')
    over.style.display = 'none'
}
over.onclick = function () {
    ul.classList.remove('active')
    ul.classList.add('add')
    over.style.display = 'none'
}

//////////////////////////////////////////////////
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let num = document.querySelector('.number span')


let n = num.innerHTML;

minus.addEventListener('click', function () {
    if (num.innerHTML > 0) {
        n--
        num.innerHTML = n
        
    }
})
plus.addEventListener('click', function () {
    n++
    num.innerHTML = n
})
////////////////////////////////////////////////////////
let appButton = document.querySelector('.container .two svg');
let select = document.querySelector('.container .select');
let cart = document.querySelector('.cart');
let addCardButton = document.querySelector('.click');
let numberCard = document.querySelector('.number span')
let prices = document.querySelector('#price')
let deleted = document.querySelector('.cart .ele p');

let spanApp = document.querySelector('.two span')
console.log(spanApp)

addCardButton.addEventListener('click', function(){
    spanApp.innerHTML = numberCard.textContent;
    spanApp.classList.remove('hidden')
    
    cart.innerHTML = `<div class="ele">
                <img src="images/image-product-4-thumbnail.jpg" alt="">
                <p>Fall Limited Edition Sneakers<span>$125.00 × ${numberCard.textContent} <span id="price">$${125 * numberCard.textContent}.00</span></span></p>
                <i data-remove = "deleted" class="fa fa-trash"></i>
              </div><button>Checkout</button>`
              this.classList.add('clicks')
            })
appButton.addEventListener('click', function(){
    select.classList.toggle('hidden')
    spanApp.classList.add('hidden')

})

console.log(deleted)
document.addEventListener('click', function(e){
    if (e.target.dataset.remove == 'deleted') {
        addCardButton.classList.remove('clicks')
        spanApp.innerHTML = 0;
        
        cart.innerHTML = `<p>Your cart is empty</p>`
    }
})
///////////////////////////////////////////
