function createUser() {
    const form = document.getElementById("create_user");
    const inputs = form.getElementsByTagName("input");

    fetch("https://enigmatic-meadow-17195.herokuapp.com/adduser/", {
    method: "POST",
    body: JSON.stringify({
        name: inputs[0].value,
        surname: inputs[1].value,
        email: inputs[2].value,
        contact: inputs[3].value,
    }),
    headers: {
        "Content-Type": "Application/json; charset=UTF-8",
    }
   })
    .then((response) => response.json())
    .then((json) => {
        alert(json.msg);
        console.log(json);
        document.getElementById("create_user").reset();

    });

}