const pageEntiere = document.querySelector('ul');
const div = document.querySelector('.image');
const btn = document.querySelector('.passage');
const btn2 = document.querySelector('.precedant');
let img = document.querySelector('img');
const numPage = document.querySelector('p');
let fleche = document.querySelector('#fleche');
let fleche2 = document.querySelector('#fleche2');
let body = document.querySelector('body');


let number = 0;
let page;
let numero = 1 ;
let createImage = document.createElement('img');
createImage.setAttribute('id', 'depart');
div.appendChild(createImage);


let modeLecture = document.querySelector('#modedelecture');
let imageDeBase = document.querySelector('#depart');
let chapselect = document.querySelector('.dropdown-content')
let chapitre = document.title;
chapitre = chapitre.toUpperCase();

let verticale = false;

modeLecture.addEventListener('click', () => {
    if (!verticale) {
        verticale = true;
        modeLecture.innerText = "Lecture horizontale";
    }
    else {
        verticale = false;
        modeLecture.innerText = "Lecture verticale";
    }
});


let AllChap = [];
function Chapitre(chapitre, numberPage) {
    this.chapitre = chapitre,
    this.numberPage = numberPage
    AllChap.push(this);
}

let chapitre1 = new Chapitre("CHAPITRE 1", 33);
let chapitre2 = new Chapitre("CHAPITRE 2", 20);
let chapitre3 = new Chapitre("CHAPITRE 3", 18);
let chapitre4 = new Chapitre("CHAPITRE 4", 19);
let chapitre5 = new Chapitre("CHAPITRE 5", 20);
let chapitre6 = new Chapitre("CHAPITRE 6", 20);
let chapitre7 = new Chapitre("CHAPITRE 7", 20);
let chapitre8 = new Chapitre("CHAPITRE 8", 20);
let chapitre9 = new Chapitre("CHAPITRE 9", 20);
let chapitre10 = new Chapitre("CHAPITRE 10", 20);
let chapitre11 = new Chapitre("CHAPITRE 11", 19);
let chapitre12 = new Chapitre("CHAPITRE 12", 19);
let chapitre13 = new Chapitre("CHAPITRE 13", 20);
let chapitre14 = new Chapitre("CHAPITRE 14", 20);
let chapitre15 = new Chapitre("CHAPITRE 15", 20);
let chapitre16 = new Chapitre("CHAPITRE 16", 20);
let chapitre17 = new Chapitre("CHAPITRE 17", 20);
let chapitre18 = new Chapitre("CHAPITRE 18", 20);
let chapitre19 = new Chapitre("CHAPITRE 19", 20);

modeLecture.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (verticale === true) {
        let num = 1;
        btn.remove();
        btn2.remove();
        numPage.innerHTML = " ";
        createImage.remove() ;
        i = 0;
        while (i < AllChap.length) {
            if (AllChap[i].chapitre === document.title) {
                x = 0;
                while (x < AllChap[i].numberPage) {
                    imageDeBase.src = " " ;
                    div.style.display = "flex";
                    div.style.flexDirection = "column";
                    let createImage = document.createElement('img');
                    createImage.src =  './IMG' + chapitre + '/' + x + '.jpg';
                    let numPage = document.createElement('p');
                    numPage.innerText = num;
                    num++;
                    div.appendChild(createImage);
                    div.appendChild(numPage);
                    x++
                }     
            }
            i++;
        }     
    }
})


modeLecture.addEventListener('click', () => {
    let num = 0;
    let numeroPage;
    if (verticale === false) {
        fleche.src = "./fleche.png";
        btn.appendChild(fleche);
        body.appendChild(btn);
    
        fleche2.src = "./fleche2.png";
        btn2.appendChild(fleche2);
        body.appendChild(btn2);
        numeroPage = 1;
        num = 0;
        numPage.innerText = numeroPage;
        div.innerHTML = " ";
        page = './IMG' + chapitre + '/' + num + '.jpg';
        createImage.src = page;
        div.appendChild(createImage);
    
   

        btn.addEventListener('click', () => {
            img.remove()
            num++;
            numeroPage++;
            numPage.innerText = numeroPage;
            page = './IMG' + chapitre + '/' + num + '.jpg';
            createImage.src = page;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            // createImage.classList.add("anim"); 
            // setTimeout(() => {
            //     createImage.classList.remove("anim");
            // }, 2000)
        
            i = 0;
         while (i < AllChap.length) {
            if (AllChap[i].chapitre === document.title) {
                if(AllChap[i].numberPage < numeroPage){

                    num--;
                    numeroPage--;
                    numPage.innerText = numeroPage;
                    img.remove();
                    page = './IMG' + chapitre + '/' + num + '.jpg';
                    createImage.src = page;
                }       
            }
            i++;
         }
        
        })   
        btn2.addEventListener('click', () => {
        
        if(num <= 0){
            num++;
            numeroPage++;
            numPage.innerText = numeroPage;
            img.remove();
            page = './IMG' + chapitre + '/' + num + '.jpg';
            createImage.src = page;
        }
            num--;
            numeroPage--;
            numPage.innerText = numeroPage;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            img.remove();
            page = './IMG' + chapitre + '/' + num + '.jpg';
            createImage.src = page; 
            // createImage.classList.add("anim"); 
            // setTimeout(() => {
            //     createImage.classList.remove("anim");
            // }, 1000)
        })
        
    }
})


btn.addEventListener('click', () => {
    img.remove();
    number++;
    numero++;
    numPage.innerText = numero;
    page = './IMG' + chapitre + '/' + number + '.jpg';
    createImage.src = page;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // createImage.classList.add("anim"); 
    // setTimeout(() => {
    //     createImage.classList.remove("anim");
    // }, 2000)

    i = 0;
 while (i < AllChap.length) {
    if (AllChap[i].chapitre === document.title) {
        if(AllChap[i].numberPage < numero){
            number--;
            numero--;
            numPage.innerText = numero;
            img.remove();
            page = './IMG' + chapitre + '/' + number + '.jpg';
            createImage.src = page;
        }
    }
    i++;
 }
})

btn2.addEventListener('click', () => {

if(number <= 0){
    number++;
    numero++;
    numPage.innerText = numero;
    img.remove();
    page = './IMG' + chapitre + '/' + number + '.jpg';
    createImage.src = page;
}
    number--;
    numero--;
    numPage.innerText = numero;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    img.remove();
    page = './IMG' + chapitre + '/' + number + '.jpg';
    createImage.src = page; 
    // createImage.classList.add("anim"); 
    // setTimeout(() => {
    //     createImage.classList.remove("anim");
    // }, 1000)
})