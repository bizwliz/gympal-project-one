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