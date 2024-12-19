let detatils = document.querySelector("#myRow");
let gameId
let showedGames = document.querySelector("#ShowedGames")
let GamesDetails = document.querySelector("#Games-details");

detatils.addEventListener("click", function (e) {
    let anchorTag = e.target.closest('a'); 

    if (anchorTag) {

        gameId = anchorTag.getAttribute("value")
        console.log(gameId);
        showedGames.classList.replace("d-block", "d-none")
        GamesDetails.classList.replace("d-none", "d-block")
        DetailsData()

    }

})


function closeElem() {

    GamesDetails.classList.replace("d-block", "d-none")
    showedGames.classList.replace("d-none", "d-block")

}



async function DetailsData() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ab2c3e2e39msh8ffcbf7725e87cbp1fa038jsn19c606f6f1af',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };


    const response = await fetch(url, options);
    myData = await response.json();
    console.log(myData);
    showDetails()

}

function showDetails() {

    let temp = ""


        let { title, thumbnail, status, platform, genre, description, freetogame_profile_url } = myData


        temp += `
        <div class = "row">
       <div class="col-md-4">
                    <img src="${thumbnail}" class="" alt="">

                </div>
                <div class="col-md-6 text-white mx-4">
                    <h1>Title: ${title}</h1>
                    <h6>Category: <span class="border border-black  rounded-5  bg-info text-black  "><span class="m-2">
                                ${genre} </span></span> </h6>
                    <h6 class="mt-4">Platform: <span class="border border-black  rounded-5  bg-info text-black  "><span
                                class="m-2">
                                ${platform} </span></span> </h6>
                    <h6 class="mt-4">Status: <span class="border border-black  rounded-5  bg-info text-black  "><span
                                class="m-2">
                                ${status} </span></span> </h6>
                    <p>${description}</p>
                    <button class="btn btn-outline-warning text-white"><a href="${freetogame_profile_url}" target="_blank" class="text-decoration-none text-white">
                        Show Game
                    </a></button>

                </div>
                </div>
  
  `



    



    document.querySelector("#myRoww").innerHTML = temp
}
