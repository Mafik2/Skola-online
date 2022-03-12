function user(data, clientCard) {
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
<div class=" m-4">
  <ul class="list-group list-group-flush">
     <div class="list-group-item d-flex justify-content-between">
        <div>
            <h3>${data[i].firstName} ${data[i].lastName}</h3>
        </div>
       <div>
            <h5>${data[i].email} </h5>
        </div>
        
       <div class="d-flex justify-content-center">
           <div class="m-1">
                <a href="updateStudent.html?id=${data[i].id}" class="btn btn-outline-primary d-block" id="updateBtn">Update</a>
            </div>
            <div class="m-1">
                  <button class="btn btn-danger" id="deleteBtn">Delete</button>
            </div>
        <div>
        </div>
        </div>
    </div>
  
  </ul>
</div>
`;
        let deleteBtn = card.querySelector("#deleteBtn")
        deleteBtn.addEventListener('click', deleteAction)
        clientCard.appendChild(card)

        function deleteAction() {
            fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students' + data[i].id, {
                method: 'DELETE'
            }).then(response => response.json())
                .then(dlt => {
                    console.log(dlt)
                    location.href = 'index.html'
                })
        }
    }
}

window.onload = () => {
    fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students', {
        method: 'GET'
    }).then((response) => response.json())
        .then((data) => {
            user(data, clientCard)
        })
}