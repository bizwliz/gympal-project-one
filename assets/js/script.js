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

var selectedMuscleGroup = "Muscle Group";
var selectedDifficultyLevel = "Difficulty Level";

// fetching api data function based on user selection
function fetchMuscleGroupInformation() {
    var muscleGroup = selectedMuscleGroup.toLowerCase();
    var difficultyLevel = selectedDifficultyLevel.toLowerCase();

    var APIKey = "el9fiYScbudO77M6OCsIXA==qu4fJ4psSnQw7h6M";
    var urlMuscles = "https://api.api-ninjas.com/v1/exercises?muscle=" + muscleGroup + "&difficulty=" + difficultyLevel;

    fetch(urlMuscles, {
        headers: {
            'X-Api-Key': APIKey,
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // save the API data into local storage
        localStorage.setItem("exercise", JSON.stringify(data));
    })
}

// function to update the selected muscle group
function updateSelectedMuscleGroup(muscleGroup) {
    selectedMuscleGroup = muscleGroup;
    document.getElementById("selected-muscle-group").textContent = selectedMuscleGroup;
    fetchMuscleGroupInformation();
}

// function to update the selected difficulty level
function updateSelectedDifficultyLevel(difficultyLevel) {
    selectedDifficultyLevel = difficultyLevel;
    document.getElementById("selected-difficulty").textContent = selectedDifficultyLevel;
    fetchMuscleGroupInformation();
}

// add event listeners to each dropdown menu item
var muscleGroupItems = document.querySelectorAll("#dropdown-menu-muscle .dropdown-item");
var difficultyItems = document.querySelectorAll("#dropdown-menu-difficulty .dropdown-item");

muscleGroupItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var selectedMuscle = item.getAttribute("data-muscle");
        updateSelectedMuscleGroup(selectedMuscle);
    });
});

difficultyItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var selectedDifficulty = item.getAttribute("data-difficulty");
        updateSelectedDifficultyLevel(selectedDifficulty);
    });
});

// function to show modal
function showModal() {
    errorModal.style.display = "block";
}

// function to hide modal
function hideModal() {
    errorModal.style.display = "none";
}

//Account creation page functions
// Account creation page functions
var signUpBtn = document.getElementById("sign-up-btn");
var errorModal = document.getElementById("error-modal");

//TO-DO: store each user input as its own object in local storage key: UserEntryDatabase
function storeUserInfo() {
    var signUpName = document.getElementById("sign-up-name").value;
    var signUpEmail = document.getElementById("sign-up-email").value;
    var signUpDob = document.getElementById("sign-up-dob").value;
    var userObject = {
        name: signUpName,
        dob: signUpDob,
        email: signUpEmail
    }

    // Check if all input fields have valid information
    if (signUpName && signUpEmail && signUpDob) {
        localStorage.setItem("userObj", JSON.stringify(userObject));
        // localStorage.setItem("Dob", signUpDob);
        // localStorage.setItem("Name", signUpName);

        console.log("Name: " + signUpName);
        console.log("Email: " + signUpEmail);
        console.log("Date of Birth: " + signUpDob);

        // Navigate to the next page (page 3) when all fields are filled
        window.location.href = "./page5.html";
    } else {
        showModal(); // Show the modal if fields are not filled
    }
}

signUpBtn.addEventListener('click', storeUserInfo);
var modalCloseBtn = document.querySelector(".modal-close");
modalCloseBtn.addEventListener("click", hideModal);

