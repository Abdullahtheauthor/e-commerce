let cards = [
    { title: "nike1467", description: "desc 1", price: 20, id:1 },
    { title: "shirt2", description: "nike", price: 30, id:2  },
    { title: "shirt3", description: "desc 3", price: 60, id:3  },
    { title: "nike", description: "desc 4", price: 100 , id:4 },
    { title: "shirt5", description: "nike", price: 100, id:5 },
    { title: "shirt6", description: "desc 6", price: 104 , id:6 }
];
// let cards = [
//     { "title": "nike1467", "description": "desc 1", "price": 20, "id":1 },
//     { "title": "shirt2", "description": "nike", "price": 30, "id":2  },
//     { "title": "shirt3", "description": "desc 3", "price": 60, "id":3  },
//     { "title": "nike", "description": "desc 4", "price": 100 , "id":4 },
//     { "title": "shirt5", "description": "nike", "price": 100, "id":5 },
//     { "title": "shirt6", "description": "desc 6", "price": 104 , "id":6 }
// ];

let users = [
    { username: "abdullah", password: "what2" },
    { username: "ahmed", password: "Goforit" },
    { username: "wael", password: "9to9men 3" },
    { username: "tamer", password: "childrenofmen" },
    { username: "sef", password: "diamond" },
    { username: "ashraf", password: "Crazy8" }
];

let carts =[];



function addForm() {
    document.getElementById("root").innerHTML = `
        <div class="parent_form">
            <form class="form">
                <h1>Login Form</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="email" required>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" required>
                <label>
                    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                </label>
          
                <button type="button" class="loginButton" id="login" onclick="login_fun()">Login</button>
                <button type="button" class="cancelbtn">Cancel</button>
            </form>
        </div>
    `;
}

login_fun = function() {
    let username = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    let isAuthenticated = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            isAuthenticated = true;
            // document.getElementById("root").innerHTML = "<h1>You are successfully logged in</h1>"; // admin form
            adminFormFunction();
            
            break;
        }
    }

    if (!isAuthenticated) {
        alert("Invalid credentials");
    }
};

function adminFormFunction(){
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.innerHTML =`    <div>
    <div class="parent_form">
        <form class="form">
            <h1>Admin Form</h1>
            <p>Please fill in this form to add a product.</p>
            <hr>
            <label><b>Title</b></label>
            <input type="text" placeholder="Enter title of the product" id="title" required>
            <label description><b>description</b></label>
            <input type="text" placeholder="Enter description" id="description" required>

            <label Price><b>Price</b></label>
            <input type="number" placeholder="Enter Price of the item" id="price" required>



            <button type="button" class="Add" id="add_product" onclick="add_item()">ADD</button>
            <button type="button" class="cancelbtn">Cancel</button>
        </form>
    </div>
</div>`
    document.getElementById("login_a").innerHTML ="Logout"; 
    document.getElementById('login_a').id = 'logout_a'
    document.getElementById("signup_a").innerHTML ="Profile"; 
    document.getElementById('signup_a').id = 'profile_a'


}

function add_item(){
    let title = document.getElementById("title").value;
    let description =document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let product = {"title": title, "description": description, "price": price};
    cards.push(product);
    // displayCards();
    document.getElementById("title").value =" ";
    document.getElementById("description").value =" ";
    document.getElementById("price").value =" ";
    


}


// Sign UP

function signupForm(){
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.innerHTML = `   <div class="parent_form">
        <form class="form">
            <h1>SignUp Form</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" id="signup_email" required>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="signup_psw" required>
            <label>
                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
            </label>
            <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
            <button type="button" class="loginButton" id="signup" onclick="signUp_fun()">SignUp</button>
            <button type="button" class="cancelbtn">Cancel</button>

            <span id="form_output"></span>
        </form>
    </div>
`
    document.getElementById("login_a").innerHTML ="Logout"; 
    document.getElementById("signup_a").innerHTML ="Profile"; 
}

function signUp_fun(){
    let username = document.getElementById("signup_email").value;
    let password = document.getElementById("signup_psw").value;
    let userExisted = checkUserExistence(username);
    let valid = emailPassValidation(username, password);
    if (!userExisted){
        document.getElementById("form_output").innerHTML = 'user already existed! Choose another name, please';
        return;
    }
    else {
        userObj ={
            "username" : username,
            "password" : password
        }
    
        if (valid){
        users.push(userObj);
        adminFormFunction();
        }

    }

}
function checkUserExistence(user){
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === user ) {
            // document.getElementById("root").innerHTML = "<h1>You are successfully logged in</h1>"; // admin form
            return false
        }
        return true;
    }
}

function emailPassValidation(email, pass){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valid = false;
    if(!email.match(mailformat))
    {
    alert("You have entered an invalid email address!" + ' '+ email);    //The pop up alert for an invalid email address
    
     return valid;
    }

 
    //check empty password field  
    if(pass == "") {  
       document.getElementById("form_output").innerHTML = "**Fill the password please!";  
       return valid;  
    }  
     
   //minimum password length validation  
    if(pass.length < 8) {  
       document.getElementById("form_output").innerHTML = "**Password length must be atleast 8 characters";  
       return valid;  
    }  
    
  //maximum length of password validation  
    if(pass.length > 15) {  
       document.getElementById("form_output").innerHTML = "**Password length must not exceed 15 characters";  
       return valid;  
    }
    valid = true;
    return valid;

 
}








function displayCards() {

    const root = document.getElementById("root");
    root.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        root.innerHTML += `
            <div class="card">
                <img src="./images/shirt.webp">
                <h1>${cards[i].title}</h1>
                <div class="price">
                    <span>${cards[i].description}</span>
                    <p>${cards[i].price}</p>
                    <button onclick="cartSaveItem(${cards[i].id})">Add to cart</button>
                </div>
            </div>
        `;
    }

}

function search() {
    let input = document.getElementById('search_input').value;
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].title.includes(input) || cards[i].description.includes(input)) {
            document.getElementById("root").innerHTML += `
                <div class="card">
                    <img src="./images/shirt.webp">
                    <h1>${cards[i].title}</h1>
                    <div class="price">
                        <span>${cards[i].description}</span>
                        <p>${cards[i].price}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            `;
        }
    }
}

function priceFilter() {
    let low_range = document.getElementById('price_input_lower').value;
    let top_range = document.getElementById('price_input_higher').value;
    document.getElementById("root").innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].price >= low_range && cards[i].price <= top_range) {
            document.getElementById("root").innerHTML += `
                <div class="card">
                    <img src="./images/shirt.webp">
                    <h1>${cards[i].title}</h1>
                    <div class="price">
                        <span>${cards[i].description}</span>
                        <p>${cards[i].price}</p>
                        <button onclick="cartSaveItem(${cards[i].id})">Add to cart</button>
                    </div>
                </div>
            `;
        }
    }
}

cartSaveItem = (card_id) =>{
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].id === card_id){
            let card_obj = {"title": cards[i].title , "description": cards[i].description, "price": cards[i].price, "id": cards[i].id};
            carts.push(card_obj);
                }
    }
}


// Load cards on initial page load
window.onload = function () {
    displayCards();
};

// Adding the event listener to the price button
document.getElementById('price_button').addEventListener('click', priceFilter);
// document.getElementById('login').addEventListener('click', login_fun);
