var listSessionUser =[]
var listAlbum=[]
console.log("yang login = ", listSessionUser)
var navActive = document.getElementsByClassName("navActive")[0]
var thisNav = navActive.children.outerHTML
// var listUser =[{
//     "email" : "zauqi09@gmail.com",
//     "name" : "Fuad Zauqi Nur",
//     "password" : "123",
// }]
var listUser=[]
var status
const default_password = "123"

var init = function () {
    if (listSessionUser.length==1) {
        thisNav = `<li class="nav-item ">
        <a class="nav-link active" href="#beranda" onclick="show('beranda','tentang','hubungi-kami','masuk','list-user','list-album'); ">Beranda
            </a>
        </li>
        <li class="nav-item ">
            <a class="nav-link" href="#tentang" onclick="show('tentang','beranda','hubungi-kami','masuk','list-user','list-album'); ">Tentang</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami" onclick="show('hubungi-kami','tentang','beranda','masuk','list-user','list-album'); ">Hubungi Kami</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-user" onclick="show('list-user','tentang','beranda','masuk','hubungi-kami','list-album');">List User</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-album" onclick="show('list-album','tentang','beranda','masuk','hubungi-kami','list-user'); ">List Album</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#logout" onclick="Logout();window.alert('Anda telah logout!')">Logout</a>
        </li>
        `
    }
    else {
        thisNav =`<li class="nav-item ">
        <a class="nav-link active" href="#beranda" onclick="show('beranda','hubungi-kami','tentang','masuk','daftar','list-album');">Beranda
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#tentang" onclick="show('tentang','hubungi-kami','beranda','masuk','daftar','list-album');">Tentang</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami" onclick="show('hubungi-kami','tentang','beranda','masuk','daftar','list-album');" >Hubungi Kami</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-album" onclick="show('list-album','tentang','beranda','masuk','hubungi-kami','list-user'); ">List Album</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#masuk" onclick="show('masuk','hubungi-kami','tentang','beranda','daftar','list-album');">Masuk</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#daftar" onclick="show('daftar','hubungi-kami','tentang','beranda','masuk','list-album');">Daftar</a>
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
    showData()
    showDataAlbum()
}


function show(shown,hidden1,hidden2,hidden3,hidden4,hidden5) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden1).style.display='none';
    document.getElementById(hidden2).style.display='none';
    document.getElementById(hidden3).style.display='none';
    document.getElementById(hidden4).style.display='none';
    document.getElementById(hidden5).style.display='none';
}


function Register(){
    //console.log(document.getElementById("email").value);
    var email = document.getElementById("email-daftar").value

    //console.log(document.getElementById("name").value);
    var name = document.getElementById("name-daftar").value

    //console.log(document.getElementById("password").value);
    var password = document.getElementById("password-daftar").value
    var passwordRepeat = document.getElementById("passwordRepeat-daftar").value
    for (i= 0; i< listUser.length; i++){
        if (listUser[i].email!=email){
            if (password == passwordRepeat){
                var obj={
                    "email" : email,
                    "name" : name,
                    "password" : password,
                }
                listUser.unshift(obj)
                window.alert('Berhasil Daftar! Silahkan Login!'); 
                show('masuk','hubungi-kami','tentang','beranda','daftar');
                break
            }
            else {
                window.alert('Password tidak sama!'); 
                break
            }
        } else{
            window.alert('Email sudah digunakan!');
            break
        }
    }
    
    

}

function Login(){
    var email = document.getElementById("email-login").value
    var password = document.getElementById("password-login").value
    var statusLogin = listUser.find(user => (user.username == email && user.password == password))
    if (email && password ){
        if (statusLogin){
            listSessionUser.unshift(statusLogin)
            window.alert('Berhasil Login!')
            init()
            show('beranda','masuk','hubungi-kami','tentang','daftar','list-album')
        } else {
                window.alert('Password atau Email Tidak Sesuai')
        }
    } else {
        window.alert("Email dan Password tidak boleh kosong!")
    }
        
    console.log("yang login = ",listSessionUser) 
    
}


function Logout(){
    listSessionUser.shift()
    show('beranda','masuk','hubungi-kami','tentang','daftar','list-album')
    init()
}


function editData(index){
    var editemail = prompt("Email", listUser[index].email);
    var editname = prompt("Nama", listUser[index].name);
    var editpassword = prompt("Password", listUser[index].password);
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


async function showData() {
    //tampil data boy mantap jiwa
    var tableData = document.getElementsByClassName("tableData")[0]
    var editIcon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>`
    var deleteIcon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
  </svg>`
    var tr = tableData.children[0].children[0].outerHTML
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            listUser = data
        })
        .catch(err => console.warn("err: ", err))
        .finally(() => console.info("finally .."))

    listUser.forEach(usr => {
        usr.password = default_password
    });

    var trisi = listUser.map((user, index) => {
        return `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.name}</td>
                    <td>
                        <button class='btn btn-warning sizefix' onclick='editData(${index})'>${editIcon}</button>
                        <button class='btn btn-danger sizefix' onclick='deleteData(${index})'>${deleteIcon}</button>
                        </td>
                </tr>`
    })
    // DOM manipulation
    tableData.innerHTML = tr + trisi.join("")
}

function filter() {
    var tableDataAlbum = document.getElementsByClassName("tableDataAlbum")[0]
    var search = document.getElementById("search-filter").value
    var tr = tableDataAlbum.children[0].children[0].outerHTML
    if (search==""){

    }
    else {
        var trisi = listAlbum.filter((album) => album.title == search).map((album,index)=> { 
            return `<tr>
            <th scope="row">${index + 1}</th>
            <td>${album.title}</td>
            <td>${album.name}</td>
            </tr>`
        })
    }
    tableDataAlbum.innerHTML = tr + trisi.join("")
}

async function showDataAlbum() {
    //tampil data boy mantap jiwa
    
    var tableDataAlbum = document.getElementsByClassName("tableDataAlbum")[0]
    var tr = tableDataAlbum.children[0].children[0].outerHTML
    await fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            listAlbum = data
        })
        .catch(err => console.warn("err: ", err))
        .finally(() => console.info("album : finally .."))
    
    listAlbum.forEach(albm => {
        var user = listUser.find(user => (user.id == albm.userId))
        if (user){
            albm.name=user.name
        }
    })

    if (listSessionUser.length==1){
        var trisi = listAlbum.filter((album) =>{ 
            return album.userId == listSessionUser[0].id; 
        }).map((album,index)=> { 
            return `<tr>
            <th scope="row">${index + 1}</th>
            <td>${album.title}</td>
            <td>${album.name}</td>
            </tr>`
        }) 
    } else {
        var trisi = listAlbum.map((album, index) => {
            return `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${album.title}</td>
                        <td>${album.name}</td>
                    </tr>`
                })
    }
    
    // DOM manipulation
    tableDataAlbum.innerHTML = tr + trisi.join("")
}

init()


