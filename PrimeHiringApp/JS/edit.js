let developers = localStorage.getItem("developers");
developers = JSON.parse(developers);
const params = new URLSearchParams(window.location.search);
let developerIndex = parseInt(params.get('id'));
console.log(developerIndex,developers )
let developer =  developers[developerIndex];
console.log(developer);


document.getElementById("name").value=developer.name;
document.getElementById("email").value=developer.email;
document.getElementById("number").value=developer.number;
document.getElementById("location").value=developer.location;
document.getElementById("image").value=developer.image;
document.getElementById("price").value=developer.price;
document.getElementById("technology").value=developer.technology;
document.getElementById("description").value=developer.description;
document.getElementById("experience").value=developer.experience;
document.getElementById("linkedin").value=developer.linkedin;
document.getElementById("native-language").value=developer.nativeLanguage;



document.getElementById("postBtn").addEventListener("click", function(e){

    e.preventDefault();

    developer.name = document.getElementById("name").value;
    developer.email = document.getElementById("email").value;
    developer.number = document.getElementById("number").value;
    developer.location = document.getElementById("location").value;
    developer.image = document.getElementById("image").value;
    developer.price = document.getElementById("price").value;
    developer.technology = document.getElementById("technology").value;
    developer.description = document.getElementById("description").value;
    developer.linkedin = document.getElementById("linkedin").value;
    developer.nativeLanguage = document.getElementById("native-language").value;

    localStorage.setItem("developers", JSON.stringify(developers));
    
    alert("Profile " + developer.name + " is updated!");
    window.location.href="devop_List.html";
});