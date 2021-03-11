let Users;
fetch("https://enigmatic-meadow-17195.herokuapp.com/userdata/")
.then((response)=> response.json())
.then((data)=>{
    users = data;
    console.log(users)
})

function userLogin(){
    let login = document.getElementById("ulogin");
    let inputs = login.getElementsByTagName('input');

    let input_email = inputs[0].value;
    let user_mobile = inputs[1].value;

    console.log(input_email,user_mobile);

    let loggedIn = users.filter(user => {
        return user.email == input_email && user.contact == user_mobile;
    })
    console.log(loggedIn)

    if (loggedIn.length > 0) {
        alert('YOU SUCCESFULLY LOGGED IN');
        window.location.href='./logged_in.html'
    } else{
        alert('INVALID LOGIN DETAILS');
    }
    loginForm.reset();
}