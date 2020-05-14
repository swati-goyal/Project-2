if (!localStorage.getItem('username'))
    localStorage.setItem('username', "");

document.addEventListener('DOMContentLoaded', () => {
    const signIn = document.querySelector('#myBtn')

    if (localStorage.getItem('username').length > 0) {
        document.querySelector('.navbar-text').innerHTML = `Logged in user: ` + localStorage.getItem('username');
        signIn.disabled = true;
    } else {
        $(document).ready(function () {
            signIn.disabled = false;
            $('#myBtn').click(function () {
                $("#exampleModalCenter").modal();
                $('#save').on('click', function () {
                    $('.navbar-text').text(`Logged in user: ` + $('#username').val());
                    localStorage.setItem('username', $('#username').val());
                    signIn.disabled = true;
                });
            });
        });
    }
});