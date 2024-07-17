let cards = [
    { title: "nike1467", description: "desc 1", price: 20 },
    { title: "shirt2", description: "nike", price: 30 },
    { title: "shirt3", description: "desc 3", price: 60 },
    { title: "nike", description: "desc 4", price: 100 },
    { title: "shirt5", description: "nike", price: 100 },
    { title: "shirt6", description: "desc 6", price: 104 }
];

let users = [
    { username: "abdullah", password: "what2" },
    { username: "ahmed", password: "Goforit" },
    { username: "wael", password: "9to9men 3" },
    { username: "tamer", password: "childrenofmen" },
    { username: "sef", password: "diamond" },
    { username: "ashraf", password: "Crazy8" }
];



function addForm() {
    document.getElementById("root").innerHTML = `
        <div class="parent_form">
            <form class="form">
                <h1>SignUp Form</h1>
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
            document.getElementById("root").innerHTML = "<h1>You are successfully logged in</h1>";
            break;
        }
    }

    if (!isAuthenticated) {
        alert("Invalid credentials");
    }
};

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
                    <button>Add to cart</button>
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
                        <button>Add to cart</button>
                    </div>
                </div>
            `;
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
