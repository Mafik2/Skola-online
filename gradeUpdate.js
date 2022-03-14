window.onload = () => {

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    const grade = urlParams.get('grade')

    fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + id, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {

            let gradesUpdate = document.createElement("div")
            for (let i = 0; i < data.grades.length; i++) {
                if(data.grades[i].id === grade) {

                let gr = document.createElement("div")
                gr.innerHTML = `
                    <nav class="navbar navbar-light">
    <div class="container-fluid">
        <h1 class="title">Update grade</h1>
    </div>
</nav>
<div class="m-5">
    <div class=" m-2">
        <label for="inputGrade">Grade</label>
        <input type="text" name="grade" class="form-control" id="inputGrade" value="${data.grades[i].grade}">
    </div>
    <div class=" m-2">
        <label for="inputWeight">Weight</label>
        <input type="text" name="weight" class="form-control" id="inputWeight" value="${data.grades[i].weight}">
    </div>
    <div class=" m-2">
        <label for="inputDescription">Description</label>
        <input type="text" name="description" class="form-control" id="inputDescription" value="${data.grades[i].description}">
    </div>
    <div class=" m-2">
        <button class="btn btn-primary" id="UpdateGradeBtn">Update grade</button>
    </div>
</div>
`;
                   gradesUpdate.appendChild(gr)

                let out = document.getElementById('gradeUpdate');
                out.appendChild(gradesUpdate);

                let updateGradeBtn = document.getElementById('UpdateGradeBtn');
                updateGradeBtn.addEventListener('click', write);
                }
            }

            function write() {
                let gradeEl = document.getElementById('inputGrade');
                let weight = document.getElementById('inputWeight');
                let description = document.getElementById('inputDescription');
                const userData = {
                    grade: gradeEl.value,
                    weight: weight.value,
                    description: description.value
                }

                fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + id + '/Grades/' + grade, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData),
                })
                    .then(response => {
                        if(response.status === 200) location.href = 'detailStudent.html?id='+id
                    })
            }

        })
}