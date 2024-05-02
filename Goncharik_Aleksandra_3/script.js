document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registration-form");
    var clearButton = document.getElementById("clear-button");

    clearButton.addEventListener("click", function() {
        form.reset();
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var topic = document.getElementById("topic").value;
        var language = document.getElementById("language").value;
        var login = document.getElementById("login").value;
        var password = document.getElementById("password").value;

        if (validate(name, topic, login, password)) {
            alert("Добро пожаловать, " + name + "! Вы успешно зарегистрированы на нашем сайте.")
        } else {
            alert("Пожалуйста, введите корректные данные.")
        }
    });

    function validate(name, topic, login, password) {
        var valid = true;

        if (name.length < 7) {
            document.getElementById("name").style.backgroundColor = "brown";
            valid = false;
        } else {
            document.getElementById("name").style.backgroundColor = "";
        }

        if (topic.length < 10 || topic.length > 20) {
            document.getElementById("topic").style.backgroundColor = "brown";
            valid = false;
        } else {
            document.getElementById("topic").style.backgroundColor = "";
        }

        if (login.length < 5) {
            document.getElementById("login").style.backgroundColor = "brown";
            valid = false;
        } else {
            document.getElementById("login").style.backgroundColor = "";
        }

        if (password.length <= 10) {
            document.getElementById("password").style.backgroundColor = "brown";
            valid = false;
        } else {
            document.getElementById("password").style.backgroundColor = "";
        }

        return valid;
    }
});
