var healthchoice = "dairy-free"
var apiKey = "7b96ce73245fd63d266ec31879968a08"
var recipes = `https://api.edamam.com/api/recipes/v2?type=public&health=${healthchoice}&app_id=cfd01724&app_key=7b96ce73245fd63d266ec31879968a08%20%09`

fetch(recipes, {
    headers: {
        'X-Api-Key': apiKey,
    }
})

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })


// TESTING API NINJAS EXERCISE API
var APIKey = "el9fiYScbudO77M6OCsIXA==qu4fJ4psSnQw7h6M";
var urlMuscles = "https://api.api-ninjas.com/v1/exercises?muscle="


fetch(urlMuscles + "biceps", {
    headers: {
        'X-Api-Key': APIKey,
        // 'contentType': 'application/json',
        // 'cache': 'reload'
    }
})
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

    })

//Account creation page functions
var signUpBtn = document.getElementById("sign-up-btn");
var loginBtn = document.getElementById('loginBtn');

function storeUserInfo() {
    var signUpName = document.getElementById("sign-up-name").value;
    var dobInput = document.getElementById('dob').value;
    // capture the DOB and email from html

    // Here, we are grabbing the previous data from localStorage, if there is no data in localStorage, then this var will be an empty object
    var userData = JSON.parse(localStorage.getItem(loggedInUser)) || {};

    // Setting the keys in the object using dot notation
    userData.name = signUpName || '';
    userData.dob = dobInput || '';

    // var arrayofObjects = [{}, {}]

    localStorage.setItem(loggedInUser, JSON.stringify(userData));
};

function login() {
    // We should have an initial form where the user types in their name and our app will look in local storage for a key with that name
    var loginName = document.getElementById('login-name').value;
    loggedInUser = loginName;

    var foundUser = JSON.parse(localStorage.getItem(loggedInUser)) || false;

    if(foundUser) {
        var nameInput = document.getElementById('sign-up-name');
        var dobInput = document.getElementById('dob');
        nameInput.value = foundUser.name;
        dobInput.value = foundUser.dob;
    } else {
        alert('User not found!');
    }
};

loginBtn.addEventListener('click', login);

signUpBtn.addEventListener('click', storeUserInfo);
