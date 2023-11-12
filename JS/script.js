const foundationsBtnElement = document.getElementById("foundations");
const fullstackBtnElement = document.getElementById("fullstack-js");
const foundationProjects = document.getElementById("foundations-projects");
const fullstackProjects = document.getElementById("fullstack-projects");

function toggleProjects(){
    //? Displays foundations projects.
    if(fullstackBtnElement.classList.contains("projects-btn-active")){
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