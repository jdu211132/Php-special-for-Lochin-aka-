import cars from './cars.json' assert {type: 'json'};


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2500); // Change image every 2.5 seconds
}

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";



let container = document.querySelector(".left-bar");

for (let i=0; i < cars.length; i++) {
    let user = `
    <div class = "left">

        <div class"add">
            <div class = "images"> <img src ="./Img/${cars[i].Img}"></div>
            <div class="text">
                ${cars[i].Name}
                ${cars[i].Model}
                ${cars[i].Year}<br>
                ${cars[i].Price}<br>
                ${cars[i].Exterior_Color}<br>
                ${cars[i].Interior_Color}
            </div><br><br><br><br>
        <div class = "Button">
            <button data-id = "${cars[i].id}" class = "btn1">MORE</button>
        </div>
    </div>
    </div>
    `;

    container.innerHTML += user;
}

const preview = document.querySelector('.container-preview');

document.querySelectorAll('.btn1').forEach(item => {
    item.addEventListener('click', addToCard);
});

function addToCard(event) {
    let id = event.target.dataset.id;

    for(let i = 0; i < cars.length; i++){
        if (id == cars[i].id){
            let card = document.createElement('div');
            card.innerHTML +=  ` 
            <div class= "cartt">
                
                <div class"add">
                    <img  class = "foto" src="./Img/${cars[i].Img}">
                    <img  class = "foto" src="./Img/${cars[i].Img}">
                    <img  class = "foto" src="./Img/${cars[i].Img}">
                    <img  class = "foto" src="./Img/${cars[i].Img2}">
                    <img  class = "foto" src="./Img/${cars[i].Img3}">
                 <div class="text2">
                    ${cars[i].Name}
                    ${cars[i].Model}
                    ${cars[i].Year}<br>
                    ${cars[i].Exterior_Color}<br>
                    ${cars[i].Interior_Color}<br>
                        <span class="cena">${cars[i].Price}</span>
                   </div>
                
                <div class = "Button2">
                    <button data-id = "${cars[i].id}" class = "remove">REMOVE</button>
                </div>
                <div class = "Button2">
                    <button data-id = "${cars[i].id}" class = "buy">BUY</button>
                </div>
            </div>    
         </div>

                `;

            preview.append(card); 

            let remove = document.querySelectorAll('.remove');
            remove = remove[remove.length - 1];
            remove.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.parentNode.remove();
                showTotal()
            });
            break;
            
        }
        
    }
    showTotal()
}