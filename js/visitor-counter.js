function visitorCounter() {
    fetch('https://xnf22wg2z6.execute-api.us-east-1.amazonaws.com/visitorCounter')
        .then(response => response.text())
        .then((body) => {
            document.getElementById('visitor-counter').innerHTML = body
        })
}