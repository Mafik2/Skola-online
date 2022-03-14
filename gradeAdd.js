window.onload = () => {

    let addGradeBtn = document.getElementById('addGradeBtn');
    addGradeBtn.addEventListener("click", write);

    let splt = window.location.search.split("=")[1]
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')

    function write() {
        let grade = document.getElementById('inputGrade');
        let weight = document.getElementById('inputWeight');
        let description = document.getElementById('inputDescription');
        const userData = {
            grade: grade.value,
            weight: weight.value,
            description: description.value
        }

        fetch("http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/" + splt + "/Grades",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                location.href = 'index.html'
            });
    }
}