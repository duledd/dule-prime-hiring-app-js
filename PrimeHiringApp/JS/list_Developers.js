
function renderDevelopers() {
    let developers = localStorage.getItem("developers");
    developers = JSON.parse(developers);
    
    let developerContainer = document.querySelector(".developers");
    if(developers && developerContainer) {
      //console.log("add developers")
      developerContainer.innerHTML = '';
      Object.values(developers).map((developer, index) => {
        developerContainer.innerHTML += `
        <div class="grid-products" id="developer-${index}">
        <div class="card">
            <img src="${developer.image}" alt="#" style="width:100%">
            <h1>${developer.name}</h1>
            <div class="grid-data">
                <div class="location">
                    <span>Location:</span>
                    <span>${developer.location}</span>
                </div>
                <div class="price">
                    <span>Price per hour:</span>
                    <span>${developer.price},00 $</span>
                </div>
                <div class="technology">
                    <span>Prefered Technology:</span>
                    <span>${developer.technology}</span>
                </div>
                <div class="experience">
                    <span>Expiriance:</span>
                    <span>${developer.experience}</span>
                </div>
                <div class="phone-number">
                    <span>Phone number:</span>
                    <span>${developer.number}</span>
                </div>
                <div class="native-language">
                    <span>Native language:</span>
                    <span>${developer.nativeLanguage}</span>
                </div>
            </div>
            <p class="title">Email: ${developer.email}</p>
            <p>Description: ${developer.description}</p>
            <div class="icon" style="margin: 24px 0;">
                <a href="#"><i class="fa fa-dribbble"></i></a> 
                <a href="#"><i class="fa fa-twitter"></i></a>  
                <a href="${developer.linkedin}"><i class="fa fa-linkedin"></i></a>  
                <a href="#"><i class="fa fa-facebook"></i></a> 
            </div>
            <div class="edit-remove">
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
            </div>
            <p><button class="hire">Hire</button></p>
        `
        });
    }
}
  
renderDevelopers();


var btnsEdit = document.querySelectorAll('.edit');

btnsEdit.forEach(el=> {
    el.addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();
        var id = e.target.parentNode.parentNode.parentNode.id.split('-')[1];
        window.location.href="edit.html?id="+id;
    })
})



var btnsRemove = document.querySelectorAll('.remove');

btnsRemove.forEach(el=>{
  //console.log(el)
  el.addEventListener('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    removeItem(e.target.parentNode.parentNode.parentNode);
})})

function removeItem(poslednjiElement) {
  //console.log(poslednjiElement)
  var develepoerList = JSON.parse(localStorage.getItem('developers'));
  var index =parseInt(poslednjiElement.id.split('-')[1]);
  develepoerList.splice(index, 1);
  localStorage.removeItem('developers');
  developerListJson = JSON.stringify(develepoerList); 
  localStorage.setItem("developers", developerListJson);
  location.reload()
}


//HIRE DEVELOPER NOT FINISHED

//var btnsHire = document.querySelectorAll('.hire');

// btnsHire.forEach(el=>{
//     //console.log(el)
//     el.addEventListener('click', function(e){
//       e.stopPropagation();
//       e.preventDefault();
//       hireDeveloper(e.target.parentNode.parentNode.parentNode);
// })})

// function hireDeveloper(poslednjiElement) {
//     console.log(poslednjiElement)
//     var develepoerList = JSON.parse(localStorage.getItem('developers'));
//     var index =parseInt(poslednjiElement.id.split('-')[1]);
//     //develepoerList.splice(index, 1);
//     console.log(develepoerList)
//     var hire = develepoerList.filter(checkId);
//     function checkId() {
//         return develepoerList.id == index;
//     };

//     console.log(hire);

//     let developers = localStorage.getItem("hireDeveloper");
//     developers = JSON.parse(developers);
//     developerListJson = JSON.stringify(hire);
//     localStorage.setItem("hireDeveloper", developerListJson);
// }



