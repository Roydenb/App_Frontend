fetch("http://127.0.0.1:5000/list")
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(user => {
        document.getElementById('user-content').innerHTML += `
        <tr>
            <td data-label="Name">${ user.name }</td>
            <td data-label="Surname">${ user.surname }</td>
            <td data-label="Email">${ user.email }</td>
            <td data-label="Mobile">${ user.contact }</td>
        </tr>
        `    
    });
    
})
