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
// Account creation page functions
var signUpBtn = document.getElementById("sign-up-btn");

function storeUserInfo() {
  var signUpName = document.getElementById("sign-up-name").value;
  var signUpEmail = document.getElementById("sign-up-email").value;
  var signUpDob = document.getElementById("sign-up-dob").value;

  localStorage.setItem("Email", signUpEmail);
  localStorage.setItem("Dob", signUpDob);
  localStorage.setItem("Name", signUpName);

  console.log("Name: " + signUpName); // Log the entered username to the console
  console.log("Email: " + signUpEmail);
  console.log("Date of Birth: " + signUpDob);
}

signUpBtn.addEventListener('click', storeUserInfo);
