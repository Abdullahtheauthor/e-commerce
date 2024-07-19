// document.getElementById('btn_avg').addEventListener('click', function(){
//     let input1= Number(document.getElementById('num1_1').value);
//     let input2= Number(document.getElementById('num2_1').value);
//     let input3= Number(document.getElementById('num3_1').value);
//     let avg = (input1 + input2 + input3)/3;

//     document.getElementById('res_1').innerHTML= avg;

//     console.log();
// })

// document.getElementById('btn_sum').addEventListener('click', function(){
//     let input1= Number(document.getElementById('num1_2').value);
//     let input2= Number(document.getElementById('num2_2').value);

//     let sum = input1 + input2 ;

//     document.getElementById('sum_2').innerHTML= sum;

//     console.log();
// })

// document.getElementById('btn_time').addEventListener('click', function(){
//     let input1= Number(document.getElementById('num1_3').value);
//     let input2= Number(document.getElementById('num2_3').value);

//     let time = (input2 / input1) + " seconds" ;

//     document.getElementById('time_3').innerHTML= time;

//     console.log();
// })

// document.getElementById('btn_convert').addEventListener('click', function(){
//     let input1= Number(document.getElementById('num1_4').value);


//     let cm = (input1 / 100) + " Cm" ;
//     let km = (input1 / 1000) + " Km" ;

//     document.getElementById('lenght_cm').innerHTML= cm;
//     document.getElementById('lenght_km').innerHTML= km;

//     console.log();
// })

// document.getElementById('btn_swap').addEventListener('click', function(){
//     let input1= document.getElementById('num1_5').value;
//     let input2= document.getElementById('num2_5').value;

//     let swapped_value = input2 + input1 ;

//     document.getElementById('h1_swap').innerHTML= swapped_value;

//     console.log();
// })


// let x = 2;
// let y = 3;
// let temp = 3;
// y=x;
// x= temp;
// console.log(`valiue of x = ${x} and value of y = ${y}` );


let cards= [
    {title : "nike1467", description: "desc 1", Price: 20},
    {title : "shirt2", description: "nike", Price: 30},
    {title : "shirt3", description: "desc 3", Price: 60},
    {title : "nike", description: "desc 4", Price: 100},
    {title : "shirt5", description: "nike", Price: 100},
    {title : "shirt6", description: "desc 6", Price: 104},
];


const render_products=(data) => {
for(let i=0 ; i < data.length ; i++){
document.getElementById("src_card").innerHTML += `
<div class="card">
<img src="./images/shirt.webp">
<h1>${data[i].title}</h1>

<div class="price">
    <span>
        ${data[i].description}
    </span>
    <p>
    ${data[i].Price}
    </p>
    <button>
        Add to cart
    </button>
</div>
</div>
`
}
}


document.getElementById('search_button').addEventListener('click', function(){


    document.getElementById("src_card").innerHTML =""
    let input =document.getElementById('search_input').value;
    console.log(input);
    for(let i=0 ; i < cards.length ; i++){
        if((cards[i].title.includes(input) ) || (cards[i].description.includes(input))){
            document.getElementById("src_card").innerHTML += `
            <div class="card">
            <img src="./images/shirt.webp">
            <h1>${cards[i].title}</h1>

            <div class="price">
                <span>
                    ${cards[i].description}
                </span>
                <p>
                ${cards[i].Price}
                </p>
                <button>
                    Add to cart
                </button>
            </div>
            </div>
            `
        }

    }

   
})

