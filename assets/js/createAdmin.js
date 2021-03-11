function createAdmin() {
    const form = document.getElementById("create_admin");
    const inputs = form.getElementsByTagName("input");

    fetch("https://enigmatic-meadow-17195.herokuapp.com/addadmin/", {
    method: "POST",
    body: JSON.stringify({
        adm_name: inputs[0].value,
        adm_surname: inputs[1].value,
        adm_email: inputs[2].value,
        adm_pass: inputs[3].value,
    }),
    headers: {
        "Content-Type": "Application/json; charset=UTF-8",
    }
   })
    .then((response) => response.json())
    .then((json) => {
        alert(json.msg);
        console.log(json);
        document.getElementById("create_admin").reset();

    });

}