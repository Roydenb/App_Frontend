fetch("http://127.0.0.1:5000/adminlist/")
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(admin => {
        document.getElementById('admin-content').innerHTML += `
        <tr>
            <td data-label="Name">${ admin.adm_name }</td>
            <td data-label="Surname">${ admin.adm_surname }</td>
            <td data-label="Email">${ admin.adm_email }</td>
            <td data-label="Mobile">${ admin.adm_pass }</td>
        </tr>
        `    
    });
    
})