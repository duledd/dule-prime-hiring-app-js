
// VALIDATION NOT FINISHED

// const nameInput = document.getElementById('name');
// const errorElement = document.getElementById('error');

// function validation(e){
//     let messeges = [];
//     if(nameInput.value == '' || nameInput.value == null) {
//         messeges.push('Name is required!');
//     }

//     if (messeges.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messeges.join(', ');
//     }
// }

class Developer{
    constructor(name,
        email,
        number,
        location,
        image,
        price,
        technology,
        description,
        experience,
        linkedin,
        nativeLanguage){
        this.name = name;
        this.email = email;
        this.number = number;
        this.location = location;
        this.image = image;
        this.price = price;
        this.technology = technology;
        this.description = description;
        this.experience = experience;
        this.linkedin = linkedin;
        this.nativeLanguage = nativeLanguage;
    }
}

document.getElementById("postBtn").addEventListener("click", function(e){
    //validation()
    e.preventDefault();

    var developers = JSON.parse(localStorage.getItem("developers") || "[]");

    var newDeveloper = new Developer(
        document.getElementById("name").value, 
        document.getElementById("email").value,
        document.getElementById("number").value,
        document.getElementById("location").value,
        document.getElementById("image").value,
        document.getElementById("price").value, 
        document.getElementById("technology").value,
        document.getElementById("description").value,  
        document.getElementById("experience").value, 
        document.getElementById("linkedin").value,
        document.getElementById("native-language").value,
    );   
    //console.log(newDeveloper)

    developers.push(newDeveloper);
    localStorage.setItem("developers", JSON.stringify(developers));
    
    alert("New profile " + newDeveloper.name + " is now listed!");
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
});





