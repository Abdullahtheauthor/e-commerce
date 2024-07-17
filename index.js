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
    {title : "nike1467", description: "desc 1", price: 20},
    {title : "shirt2", description: "nike", price: 30},
    {title : "shirt3", description: "desc 3", price: 60},
    {title : "nike", description: "desc 4", price: 100},
    {title : "shirt5", description: "nike", price: 100},
    {title : "shirt6", description: "desc 6", price: 104},
];

for(let i=0 ; i < cards.length ; i++){
document.getElementById("root").innerHTML += `
<div class="card">
<img src="./images/shirt.webp">
<h1>${cards[i].title}</h1>

<div class="price">
    <span>
        ${cards[i].description}
    </span>
    <p>
    ${cards[i].price}
    </p>
    <button>
        Add to cart
    </button>
</div>
</div>
`
}

const home_function= () => {
    document.getElementById("root").innerHTML =""
    for(let i=0 ; i < cards.length ; i++){
        document.getElementById("root").innerHTML += `
        <div class="card">
        <img src="./images/shirt.webp">
        <h1>${cards[i].title}</h1>
        
        <div class="price">
            <span>
                ${cards[i].description}
            </span>
            <p>
            ${cards[i].price}
            </p>
            <button>
                Add to cart
            </button>
        </div>
        </div>
        `
        }
}
let users= [
    {username : "abdullah", password: "what2"},
    {username : "ahmed", password: "Goforit"},
    {username : "wael", password: "9to9men 3"},
    {username : "tamer", password: "childrenofmen"},
    {username : "sef", password: "diamond"},
    {username : "ashraf", password: "Crazy8"}
];


const login = (event) => {
    event.preventDefault();
    let username = document.getElementById("email");
    let password = document.getElementById("psw");
    for(let i=0 ; i < users.length ; i++){
        if (users[i].username === username && users[i].password === password)
        {   
            console.log(username + "  " + password); 
            // document.getElementById("root").innerHTML =""
            // document.getElementById("root").innerHTML += `
            // <h1> You are successfully loged in</h1>
            
            // `

        }
    }
    alert("Invalid credentials");

   
}

const addForm = () => {
    document.getElementById("root").innerHTML = `
 

    <div class="parent_form" >
        <form class="form">

            <h1> SignUp Form</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" id="email" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="psw" required>

            <label>
                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

            <button type="submit" class="loginButton" id="login" onclick="login()">Login</button>
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
          
    
        

        </form>
    </div>
   

`;
document.getElementById("loginForm").addEventListener("submit", login);


}




// document.getElementById('search_button').addEventListener('click', function(){

// Search button function
const search = () => {
    document.getElementById("root").innerHTML =""
    let input =document.getElementById('search_input').value;
    console.log(input);
    for(let i=0 ; i < cards.length ; i++){
        if((cards[i].title.includes(input) ) || (cards[i].description.includes(input))){
            document.getElementById("root").innerHTML += `
            <div class="card">
            <img src="./images/shirt.webp">
            <h1>${cards[i].title}</h1>

            <div class="price">
                <span>
                    ${cards[i].description}
                </span>
                <p>
                ${cards[i].price}
                </p>
                <button>
                    Add to cart
                </button>
            </div>
            </div>
            `
        }

    }
    }
   
// })



document.getElementById('price_button').addEventListener('click', function(){


    document.getElementById("root").innerHTML =""
    let low_range =document.getElementById('price_input_lower').value;
    let top_range =document.getElementById('price_input_higher').value;

    console.log(low_range);
    console.log(top);

    for(let i=0 ; i < cards.length ; i++){
        if((cards[i].price >= low_range ) & (cards[i].price <= top_range)){
            document.getElementById("root").innerHTML += `
            <div class="card">
            <img src="./images/shirt.webp">
            <h1>${cards[i].title}</h1>

            <div class="price">
                <span>
                    ${cards[i].description}
                </span>
                <p>
                ${cards[i].price}
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

