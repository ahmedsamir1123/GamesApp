let myData = [];
let selectOption = document.querySelector("#selector");


async function loadData(type = 'mmorpg') {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`;
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
    show()

}
loadData()

function show() {

    let temp = ""

    myData.forEach((el) => {

        let { title, genre, platform, short_description, thumbnail, id } = el


        temp += `
        
    <div class="col-md-3 border border-black heightShow  ">
    <a href="#  " class="text-white text-decoration-none"  value="${id}" >
                        <img src="${thumbnail}" class="w-100" alt="">
                        <div class="d-flex justify-content-between">
                            <span>
                                ${title}
                            </span>
                            <span class="border border-black  rounded-5 bg-info">
                                <span class="m-2 ">
                                    Free
                                </span>
                            </span>
                        </div>
                        <div class="text-center descheight">
                            <p class="small">${short_description}</p>
                        </div>
                        <div class=" border border-black d-flex justify-content-between   ">


                            <span class="border border-black  rounded-5 m-2 small bg-dark"><span class="m-2">
                                    ${genre}
                                </span> </span>
                            <span class="border border-black  rounded-5 m-2 small bg-dark"> <span class="m-2">
                                    ${platform}
                                </span></span>

                        </div>
</a>
                    </div>
  
  `



    })



    document.querySelector("#myRow").innerHTML = temp
}



selectOption.addEventListener("click", function (e) {

    if (e.target && e.target.classList.contains("typelistt")) {
        let type = e.target.getAttribute("value");
        loadData(type)

    }

})




let headerHeight = document.querySelector(".headerHeight")
let navbarfixed = document.querySelector(".navbar-fixed")
function updateTextColorOnScroll() {

    // Check the vertical scroll position
    if (window.scrollY > headerHeight.offsetHeight) { // Example threshold for scroll position
        navbarfixed.style.position = "fixed";
        navbarfixed.style.top = 0;
        // navbarfixed.style.;
    } else {
        navbarfixed.style.position = "relative";

    }
}

// Run the function initially
updateTextColorOnScroll();

// Attach the function to the scroll event
window.onscroll = updateTextColorOnScroll;


