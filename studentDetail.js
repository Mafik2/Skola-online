window.onload = () => {

    let splt = window.location.search.split("=")[1]
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    //const grade = urlParams.get('grade')

    fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + id, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            let names = document.createElement('div');
            names.innerHTML = `
<div class="d-flex justify-content-between mb-5">
    <div class="container-fluid">
        <h1 class="title">${data.firstName} ${data.lastName} </h1>
    </div>
    <div class="m-2">
        <a>email: ${data.email} </a>
    </div>
    <div class="m-2">
        <button class="btn btn-danger" id="deleteBtn">Delete</button>
    </div>
    <div class="m-1">
</div>
</div>
`;

            let grades = document.createElement("div")
            for (let i = 0; i < data.grades.length; i++) {
                let gr = document.createElement("div")
                gr.innerHTML = `
<div class=" m-2">
  <ul class="list-group list-group-flush">
     <div class="list-group-item d-flex justify-content-between">
       <div>
       <h4>${data.grades[i].grade}</h4>
        </div>
       <div class="d-flex justify-content-between">
       <div class="m-1">
                       <a href="updateGrade.html?id=${id}&grade=${data.grades[i].id}" class="btn btn-outline-primary d-block" id="updateGradeBtn">Update</a>

        </div>
        <div class="m-1">
                 <button class="btn btn-outline-danger" id="deleteGradeBtn">Delete</button>
        </div>
            </div>
     
    </div>
  </ul>
</div>
<hr>`;
                grades.appendChild(gr)

                let deleteGradeBtn = gr.querySelector("#deleteGradeBtn")
                deleteGradeBtn.addEventListener('click', () => {
                    fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + splt + '/Grades/' + data.grades[i].id, {
                        method: 'DELETE'
                    }).then((response) => window.location.reload());
                })
            }
            names.appendChild(grades)

            console.log("name: " + data.firstName)
            let dataiteOut = document.getElementById('detailCard');
            dataiteOut.appendChild(names);

            let deleteBtn = names.querySelector("#deleteBtn")
            deleteBtn.addEventListener('click', () => {
                fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + splt, {
                    method: 'DELETE'
                }).then((response) => window.location.href = "index.html");
            })

        })
}

