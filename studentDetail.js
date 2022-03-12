function user(data, clientCard) {
    for (let i = 0; i < data[i].length; i++) {
        let card = document.createElement('div');
        card.innerHTML = `

<div>

</div>
`;

        window.onload = () => {
            fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students', {
                method: 'GET'
            }).then((response) => response.json())
                .then((data) => {
                    user(data, clientCard)
                })
        }
    }
}
