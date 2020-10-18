var listSessionUser =[]
console.log("yang login = ", listSessionUser)
var navActive = document.getElementsByClassName("navActive")[0]
var thisNav = navActive.children.outerHTML
var listUser =[]
var status

function nav() {
    if (listSessionUser.length==1) {
        thisNav = `<li class="nav-item ">
        <a class="nav-link active" href="#beranda" onclick="show('beranda','tentang','hubungi-kami','masuk','list-user'); ">Beranda
            </a>
        </li>
        <li class="nav-item ">
            <a class="nav-link" href="#tentang" onclick="show('tentang','beranda','hubungi-kami','masuk','list-user'); ">Tentang</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami" onclick="show('hubungi-kami','tentang','beranda','masuk','list-user'); ">Hubungi Kami</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-user" onclick="show('list-user','tentang','beranda','masuk','hubungi-kami');showData(); ">List User</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#logout" onclick="Logout();nav();window.alert('Anda telah logout!')">Logout</a>
        </li>
        `
    }
    else {
        thisNav =`<li class="nav-item ">
        <a class="nav-link active" href="#beranda" onclick="show('beranda','hubungi-kami','tentang','masuk','daftar');">Beranda
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#tentang" onclick="show('tentang','hubungi-kami','beranda','masuk','daftar');">Tentang</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami" onclick="show('hubungi-kami','tentang','beranda','masuk','daftar');" >Hubungi Kami</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#masuk" onclick="show('masuk','hubungi-kami','tentang','beranda','daftar');">Masuk</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#daftar" onclick="show('daftar','hubungi-kami','tentang','beranda','masuk');">Daftar</a>
        </li>`
    }
    navActive.innerHTML = thisNav

    var btnContainer = document.getElementById("navBar");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("nav-item");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.children[0].className += " active";
    });
    } 
}


function show(shown,hidden1,hidden2,hidden3,hidden4) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden1).style.display='none';
    document.getElementById(hidden2).style.display='none';
    document.getElementById(hidden3).style.display='none';
    document.getElementById(hidden4).style.display='none';
}


function Register(){
    //console.log(document.getElementById("email").value);
    var email = document.getElementById("email-daftar").value

    //console.log(document.getElementById("name").value);
    var name = document.getElementById("name-daftar").value

    //console.log(document.getElementById("password").value);
    var password = document.getElementById("password-daftar").value
    var passwordRepeat = document.getElementById("passwordRepeat-daftar").value
    if (password == passwordRepeat){
        var obj={
            "email" : email,
            "name" : name,
            "password" : password,
        }
        listUser.unshift(obj)
        window.alert('Berhasil Daftar! Silahkan Login!'); 
        show('masuk','hubungi-kami','tentang','beranda','daftar');
    }
    else {
        window.alert('Password tidak sama!'); 
    }
    

}

function Login(){
    //console.log(document.getElementById("email").value);
    var email = document.getElementById("email-login").value

    //console.log(document.getElementById("password").value);
    var password = document.getElementById("password-login").value
    
    for (i= 0; i< listUser.length; i++){
        if((listUser[i].email==email) && (listUser[i].password==password)){
            listSessionUser.unshift(listUser[i])
            nav()
            window.alert('Berhasil Login!')
            show('beranda','masuk','hubungi-kami','tentang','daftar')
        } else {
            window.alert('Password atau Email Tidak Sesuai')
        }
    }
    console.log("yang login = ",listSessionUser) 
    
}


function Logout(){
    listSessionUser.shift()
    show('beranda','masuk','hubungi-kami','tentang','daftar')
}


function editData(index){
    var editemail = prompt("Email", listUser[index].email);
    var editname = prompt("Nama", listUser[index].name);
    var editpassword = prompt("Email", listUser[index].password);
    var r = confirm("Apakah anda yakin akan mengedit data ini?");
    if (r == true) {
        listUser[index].email=editemail
        listUser[index].name=editname
        listUser[index].password=editpassword
        window.alert("Data telah diedit")
        showData()
    } else {
        window.alert("Data gagal diedit")
    } 
}

function deleteData(index){
    var r = confirm("Apakah anda yakin akan menghapus data ini?");
    if (r == true) {
        listUser.splice(index,1)
        window.alert("Data telah terhapus")
        showData()
    } else {
        window.alert("Data gagal dihapus")
    } 
    
}



function showData() {
    //tampil data boy
    var tableData = document.getElementsByClassName("tableData")[0]
    var editIcon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>`
    var deleteIcon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
  </svg>`
    var tr = tableData.children[0].children[0].outerHTML
    for (index = 0; index < listUser.length; index++) {
        var user = listUser[index]
        console.warn(user);
        tr += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${user.email}</td>
                    <td>${user.name}</td>
                    <td>${user.password}</td>
                    <td>
                        <button class='btn btn-warning sizefix' onclick='editData(${index})'>${editIcon}</button>
                        <button class='btn btn-danger sizefix' onclick='deleteData(${index})'>${deleteIcon}</button>
                        </td>
                </tr>`
    }
    // DOM manipulation
    tableData.innerHTML = tr
}