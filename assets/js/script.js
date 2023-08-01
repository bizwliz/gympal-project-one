var healthchoice="dairy-free"
var apiKey="7b96ce73245fd63d266ec31879968a08"
var recipes=`https://api.edamam.com/api/recipes/v2?type=public&health=${healthchoice}&app_id=cfd01724&app_key=7b96ce73245fd63d266ec31879968a08%20%09`
var getstartedbBtn = document.getElementById("get-started-btn")

fetch(recipes, { headers: {
    'X-Api-Key': apiKey,}})

    .then(function (response){
    return response.json();
})
    .then(function (data){
        console.log(data);
})

var APIKey = "el9fiYScbudO77M6OCsIXA==qu4fJ4psSnQw7h6M";
var urlMuscles = "https://api.api-ninjas.com/v1/exercises?muscle="


fetch(urlMuscles + "biceps", {
    headers: {
        'X-Api-Key': APIKey,
    // 'contentType': 'application/json',
    // 'cache': 'reload'
    }
})
    .then(function (response){
    return response.json();
})

    .then(function (data){
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
// Account creation page functions
var signUpBtn = document.getElementById("sign-up-btn");
var errorModal = document.getElementById("error-modal");

function storeUserInfo() {
  var signUpName = document.getElementById("sign-up-name").value;
  var signUpEmail = document.getElementById("sign-up-email").value;
  var signUpDob = document.getElementById("sign-up-dob").value;

// Check if all input fields have valid information
  if (signUpName && signUpEmail && signUpDob) {
    localStorage.setItem("Email", signUpEmail);
    localStorage.setItem("Dob", signUpDob);
    localStorage.setItem("Name", signUpName);

    console.log("Name: " + signUpName); 
    console.log("Email: " + signUpEmail);
    console.log("Date of Birth: " + signUpDob);

    // Navigate to the next page (page 3) when all fields are filled
    window.location.href = "./page3.html"; 
} else {
    showModal(); // Show the modal if fields are not filled
  }
}

signUpBtn.addEventListener('click', storeUserInfo);
var modalCloseBtn = document.querySelector(".modal-close");
modalCloseBtn.addEventListener("click", hideModal);

