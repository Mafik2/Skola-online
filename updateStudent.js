window.onload = () => {

    let splt = window.location.search.split("=")[1]
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')

    fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + id, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(dataInfo => {
            console.log(dataInfo)
            let names = document.createElement('div');
            names.innerHTML = `
<nav class="navbar navbar-light">
    <div class="container-fluid">
        <h1 class="title">Update student  - ${dataInfo.firstName} ${dataInfo.lastName}</h1>
    </div>
</nav>
<div class="m-5">
    <div class=" m-2">
         <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"
               value="${dataInfo.email}">
    </div>
    <div class=" m-2">
        <label for="firstName">First Name</label>
        <input class="form-control" id="firstName" aria-describedby="firstNameHelp"
               value="${dataInfo.firstName}">
    </div>
    <div class=" m-2">
        <label for="lastName">Last Name</label>
        <input class="form-control" id="lastName" aria-describedby="lastNameHelp"
               value="${dataInfo.lastName}">
    </div>
    <div class="m-2">
            <button class="btn btn-primary" id="updateBtn">Update</button>
    </div>
</div>`;
            console.log("name: " + dataInfo.firstName)
            let dataInfoiteOut = document.getElementById('writeOut');
            dataInfoiteOut.appendChild(names);

            let updateBtn = document.getElementById('updateBtn');
            updateBtn.addEventListener('click', updatedataInfoite);
        })

    dataInfoiteOut.appendChild(names);

    function updatedataInfoite() {
        let email = document.getElementById('inputEmail');
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        const data = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value
        }

        fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + splt , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(dataInfo => {
                console.log(dataInfo)
                location.href = 'index.html'
            })
    }
}