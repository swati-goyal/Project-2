if (!localStorage.getItem('username'))
    localStorage.setItem('username', "");

document.addEventListener('DOMContentLoaded', () => {
    const signIn = document.querySelector('#myBtn');
    const logoutButton = document.querySelector('#logout')

    if (localStorage.getItem('username').length > 0) {
        document.querySelector('.navbar-text').innerHTML = `Welcome, ` + localStorage.getItem('username');
        signIn.disabled = true;
        logoutButton.disabled = false;
        clickedExit();
    } else {
        $(document).ready(function () {
            signIn.disabled = false;
            logoutButton.disabled = true;
            clickedSignIn();
        });
    }

    function clickedSignIn() {
        $('#myBtn').click(function () {
            $("#exampleModalCenter").modal();
            $('#save').on('click', function () {
                $('.navbar-text').text(`Welcome, ` + $('#username').val());
                localStorage.setItem('username', $('#username').val());
                signIn.disabled = true;
                logoutButton.disabled = false;
                clickedExit();
            });
        });
    };

    function clickedExit() {
        $('#logout').click(function () {
            $('.navbar-text').text("Logged out");
            localStorage.removeItem('username');
            //click on sign-in to join again!
            signIn.disabled = false;
            logoutButton.disabled = true;
            clickedSignIn();
        });
    }
});