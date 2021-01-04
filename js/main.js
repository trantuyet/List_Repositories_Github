let request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/trandau2k2/repos', true)

request.onload = function () {
    let data = JSON.parse(this.response);

    let statusHTML = '';
    $.each(data, function (i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.html_url + '</td>';
        statusHTML += '<td>' + status.language + '</td>';
        statusHTML += '<td>' + status.description + '</td>';
        statusHTML += '</tr>';
    });
    $('tbody').html(statusHTML);
}

request.send();