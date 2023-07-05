document.querySelector('#eastern').addEventListener('click', function () {
    const team = document.querySelector('#team-select1').value;
    fetch(`/api/result/sportsdata/${team}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.querySelector('#western').addEventListener('click', function () {
    const team = document.querySelector('#team-select2').value;
    fetch(`/api/result/sportsdata/${team}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
