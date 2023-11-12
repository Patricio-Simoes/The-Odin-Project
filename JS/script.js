const foundationsBtnElement = document.getElementById("foundations");
const fullstackBtnElement = document.getElementById("fullstack-js");
const foundationProjects = document.getElementById("foundations-projects");
const fullstackProjects = document.getElementById("fullstack-projects");

function toggleProjects(opt){
    //? Displays foundations projects.
    if(opt == "foundations"){
        fullstackBtnElement.classList.remove("projects-btn-active");
        foundationsBtnElement.classList.add("projects-btn-active");
        fullstackProjects.classList.add("hidden");
        foundationProjects.classList.remove("hidden");
    }
    //? Displays fullstack projects.
    else{
        fullstackBtnElement.classList.add("projects-btn-active");
        foundationsBtnElement.classList.remove("projects-btn-active");
        fullstackProjects.classList.remove("hidden");
        foundationProjects.classList.add("hidden");
    }
}

//? The page loads 'The Foundations' projects by default.
toggleProjects('foundations');