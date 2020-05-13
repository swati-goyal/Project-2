document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#sign-in').onclick = function() {
        var username = prompt("Enter username: ", "Nothing");
        document.getElementById("demo").innerHTML = "Logged in as " + username;
    };
});