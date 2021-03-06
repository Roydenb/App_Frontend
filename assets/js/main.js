let Users;
fetch("https://enigmatic-meadow-17195.herokuapp.com/userdata/")
.then((response)=> response.json())
.then((data)=>{
    Users = data;
})

function userLogin(){
    let loginForm = document.getElementById("ulogin");
    let inputs = loginForm.getElementsByTagName('input');

    let email = inputs[0].value;
    let mobile = inputs[1].value;

    console.log(Users,email,mobile);

    let loggedIn = Users[0].filter(User => {
        return user.email == email && user.mobile == mobile;
    })
    console.log(loggedIn)

    if (loggedIn.lenght >= 1) {
        alert('YOU SUCCESFULLY LOGGED IN');
        window.location.href='/logged_in.html'
    } else{
        alert('INVALID LOGIN DETAILS');
    }
    loginForm.reset();
}