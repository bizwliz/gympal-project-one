var healthchoice = "dairy-free"
var recipeApiKey = "7b96ce73245fd63d266ec31879968a08"
var recipes = `https://api.edamam.com/api/recipes/v2?type=public&health=${healthchoice}&app_id=cfd01724&app_key=7b96ce73245fd63d266ec31879968a08%20%09`
var APIKey = "el9fiYScbudO77M6OCsIXA==qu4fJ4psSnQw7h6M";
var urlMuscles = "https://api.api-ninjas.com/v1/exercises?muscle="
var selectedMuscleGroup = "Muscle Group";
var selectedDifficultyLevel = "Difficulty Level";
var modalCloseBtn = document.querySelector(".modal-close");
var signUpBtn = document.getElementById("sign-up-btn");
var errorModal = document.getElementById("error-modal");
var muscleGroupItems = document.querySelectorAll("#dropdown-menu-muscle .dropdown-item");
var difficultyItems = document.querySelectorAll("#dropdown-menu-difficulty .dropdown-item");
var yourRecipeEl = document.getElementById("your-recipe");
var ingredientListEl = document.getElementById("ingredient-list");
var recipeLinkEl = document.getElementById("recipe-link");
var recipeImgEl = document.getElementById("recipe-image");
var ingredients = [];
var recipeName = "";
var recipeUrl = "";
var recipeImgSrc = "";
var userArr = [];

//FETCHING RECIPE FOR USER
function setHealthChoice() {
    var test = JSON.parse(localStorage.getItem('userObj'));
    var index = test.length - 1;
    healthchoice = test[index].diet;
}

function getRecipe() {
    fetch(recipes, {
      headers: {
        'X-Api-Key': recipeApiKey,
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var dataLength = data.hits.length;
      var rand = Math.floor(Math.random() * dataLength);
      var numIng = data.hits[rand].recipe.ingredients.length;
      recipeUrl = data.hits[rand].recipe.url;
      recipeName = data.hits[rand].recipe.label;
      recipeImgSrc = data.hits[rand].recipe.image;
      for (let i = 0; i < numIng; i++) {
        ingredients.push(data.hits[rand].recipe.ingredients[i].text);
}
      console.log(ingredients);
      console.log(recipeUrl);
      console.log(recipeName);
      console.log(recipeImgSrc);
      displayRecipe();
});
}
function displayRecipe() {
    // Retrieve the container and recipe details elements
    var recipeContainer = document.getElementById("recipe-container");
    var recipeNameEl = document.getElementById("recipe-name");
    var ingredientListEl = document.getElementById("ingredient-list");
    var recipeLinkEl = document.getElementById("recipe-link");
    var recipeImgEl = document.getElementById("recipe-image");

    // Set the recipe details in the elements
    recipeNameEl.textContent = recipeName;
    recipeImgEl.src = recipeImgSrc;
    recipeLinkEl.innerHTML = "<a target='_blank' href='" + recipeUrl + "'>Recipe Link</a>";

    // Clear previous ingredients and add new ones
    ingredientListEl.innerHTML = "";
    for (let i = 0; i < ingredients.length; i++) {
        var li = document.createElement("li");
        li.textContent = ingredients[i];
        ingredientListEl.appendChild(li);
    }

    // Display the recipe container
    recipeContainer.style.display = "block";
}
    getRecipe();

// TESTING API NINJAS EXERCISE API
function fetchMuscleGroupInformation() {
    var muscleGroup = selectedMuscleGroup.toLowerCase();
    var difficultyLevel = selectedDifficultyLevel.toLowerCase();

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

function displayExerciseInfo() {
    // Retrieve workout data from local storage
    var workoutData = JSON.parse(localStorage.getItem("exercise"));

    if (!workoutData || workoutData.length === 0) {
        console.error("Workout data not available or empty.");
        return;
    }

    var slideshowContainer = document.querySelector(".slideshow-container");

    workoutData.forEach(function (exercise, index) {
        var slide = document.createElement("div");
        slide.classList.add("exercise-slide");

        slide.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>Difficulty: ${exercise.difficulty}</p>
            <p>Equipment: ${exercise.equipment}</p>
            <p>Muscle: ${exercise.muscle}</p>
            <p>Type: ${exercise.type}</p>
            <p>Instructions: ${exercise.instructions}</p>
        `;

        slideshowContainer.appendChild(slide);
    });

    showSlide(0);
}

// Function to change slides
var slideIndex = 0;

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(index) {
    var slides = document.getElementsByClassName("exercise-slide");
    var totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    for (var i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Event listener to wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    displayExerciseInfo();
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
        window.location.href = "./yourRecipe.html";
        getRecipe();
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