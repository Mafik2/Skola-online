window.onload = () => {

    let splt = window.location.search.split("=")[1]
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')

    fetch('http://159.223.27.219/bd0b5881-e1bf-482a-8efb-99edc24e8976/students/' + id, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(data => {


        })
}