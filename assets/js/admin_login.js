// FOR THE MOVEMENT OF THE SLIDES OF THE CARDS
// FROM LEFT TO RIGHT
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () =>
// container.classList.add('right-panel-active'));

// signInButton.addEventListener('click', () =>
// container.classList.remove('right-panel-active'));

let admins = [];

// **************************************************************************
// LOGIN FUNCTION FOR THE ADMIN
// let Admin;


fetch("http://127.0.0.1:5000/admindata/")
.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    admins = data;
})

function adminLogin(){
    let loginForm = document.getElementById("alogin");
    let inputs = loginForm.getElementsByTagName('input');

    let input_adm_name = inputs[0].value;
    let input_adm_pass = inputs[1].value;

    console.log(input_adm_name,input_adm_pass, admins);


    let loggedIn = admins.filter(admin => {
        return admin.adm_email == input_adm_name && admin.adm_pass == input_adm_pass;
    })
    console.log(loggedIn)

    if (loggedIn.length > 0) {
        alert('YOU SUCCESFULLY LOGGED IN');
        window.location.href='./admin_log_reg.html'
    } else{
        alert('INVALID LOGIN DETAILS');
    }
    loginForm.reset();
}