var modalCloseBtn = document.querySelector(".modal-close");
var signUpBtn = document.getElementById("sign-up-btn");
var errorModal = document.getElementById("error-modal");
var userArr = [];

//TESTING EDAMAM RECIPE API
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

// function to show modal
function showModal() {
    errorModal.style.display = "block";
}

// Function to hide modal
function hideModal() {
    errorModal.style.display = "none";
}


//Account creation page functions
//Store User input as an object inside userArr and local storage
function storeUserInfo() {
    var signUpName = document.getElementById("sign-up-name").value;
    var signUpEmail = document.getElementById("sign-up-email").value;
    var signUpDob = document.getElementById("sign-up-dob").value;
    var dietaryNeeds = []
    var userObject = {
        name: signUpName,
        dob: signUpDob,
        email: signUpEmail,
        diet: dietaryNeeds
    }

    // Check if all input fields have valid information
    if (signUpName && signUpEmail && signUpDob) {
        //loop through diet checklist to store dietary needs
        for (let i = 1; i < 13; i++) {
            var dietChoice = document.getElementById("diet" + [i]);
            if (dietChoice.checked) {
                dietaryNeeds.push(dietChoice.value);
            }

        }
        userArr.push(userObject);

        localStorage.setItem("userObj", JSON.stringify(userArr));

        // Navigate to the next page (page 3) when all fields are filled
        window.location.href = "./page5.html";
    }
    else {
        showModal(); // Show the modal if fields are not filled
    }
}
function getStorage() {
    var storage = localStorage.getItem('userObj');
    if (!storage) {
        userArr = [];
        return;
    }
    userArr = JSON.parse(storage);
}

getStorage();
signUpBtn.addEventListener('click', storeUserInfo);
modalCloseBtn.addEventListener("click", hideModal);

