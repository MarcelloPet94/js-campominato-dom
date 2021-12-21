// DOM
const widthGame = document.getElementById("widthGame");
const button = document.getElementById("a");

// LEVEL 
let easyLev = 100;
let mediumLev = 81;
let hardLev = 49;


/*
for(let index = 0; index <= cellBox.length; index++)
{    
    cellBox[index].addEventListener("click" , function()
    {
        this.classList.add("cellSelect");
    });   
}
*/

// genera un numero random e lo spara nell'array
function randomBomb()
{
    let mine = [];
    let count = 0;
    while(count < 16)
    {

        let generaRandom = Math.floor(Math.random() * 16 + 1);
        mine.push(generaRandom);
        count++;   
    }
    return mine;
}

let arrCtrl = randomBomb(); 
console.log(arrCtrl);

// verifica l'esistenza della mina
function checkMina(n)
{    
    for(let check = 0; check < arrCtrl.length; check++)
    {
        if(n == arrCtrl[check])
        {
            console.log("Esiste");
            return true;
        }
    }
    console.log("Non esiste");
    return false;
}

console.log(checkMina());

button.addEventListener('click' , function()
{    
    const level = document.getElementById("level").value;
    widthGame.innerHTML = '';

    if(level == 'easy')
    {
        widthGame.style.width = 1000 + "px";
        for(let i = 1; i <= easyLev; i++)
        {
            widthGame.innerHTML +=
            `
            <div class="cellBox">${i}</div>
            `
        }
        selectBox();

    }

    else if(level == 'medium')
    {
        widthGame.style.width = 900 + "px";
        for(let i = 1; i <= mediumLev; i++)
        {
            widthGame.innerHTML +=
            `
            <div class="cellBox">${i}</div>
            `
        }
        selectBox();
    }

    else
    {
        widthGame.style.width = 700 + "px";
        let i;
        for(i = 1; i <= hardLev; i++)
        {
            widthGame.innerHTML +=
            `
            <div class="cellBox">${i}</div>
            `
        }
        selectBox();
    }   
});

// seleziona box css
function selectBox()
{
    let cellBox = document.getElementsByClassName("cellBox");
    for(let index = 0; index < cellBox.length; index++)
    {    
        cellBox[index].addEventListener("click" , function()
        {
            this.classList.add("cellSelect");
            let numberDiv = parseInt(this.innerHTML);
            checkMina(numberDiv);
        });   
    }
}


