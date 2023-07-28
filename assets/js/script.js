var healthchoice="dairy-free"
var apiKey="7b96ce73245fd63d266ec31879968a08"
var recipes=`https://api.edamam.com/api/recipes/v2?type=public&health=${healthchoice}&app_id=cfd01724&app_key=7b96ce73245fd63d266ec31879968a08%20%09`

fetch(recipes, { headers: {
    'X-Api-Key': apiKey,}})

    .then(function (response){
    return response.json();
})
    .then(function (data){
        console.log(data);
})