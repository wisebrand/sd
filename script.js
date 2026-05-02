const container = document.getElementById("container")
const signup = document.getElementById("signup")
const signin = document.getElementById("signin")

if (signup && container) {
    signup.addEventListener('click', function(){
        container.classList.add("right-panel-active");
    })
}

if (signin && container) {
    signin.addEventListener('click', function(){
        container.classList.remove("right-panel-active");
    })
}