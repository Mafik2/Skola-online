function user(data, clientCard) {

    let splt = window.location.search.split("=")[1]
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
                <a href="detailStudent.html?id=${data[i].id}" class="btn btn-outline-info d-block" id="detailBtn">Detail</a>
            </div>
           <div class="m-1">
                <a href="updateStudent.html?id=${data[i].id}" class="btn btn-outline-primary d-block" id="updateBtn">Update</a>
            </div>
            <div class="m-1">
                  <a href="addGrade.html?id=${data[i].id}" class="btn btn-success">Add grade</a>
            </div>
            
        <div>
        </div>
        </div>
    </div>
  
  </ul>
</div>
`;
        clientCard.appendChild(card)

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