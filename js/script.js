var listSessionUser =[]
var listAlbum=[]
var listKomentar=[]
var currpage = 0
var sizepage = 6
var listpaginated=[]

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
    
    var tableheadAlbum = document.getElementsByClassName("tableDataAlbum")[0]
    var headtable = tableheadAlbum.children[0].outerHTML

    var tableheadKomentar = document.getElementsByClassName("tableDataKomentar")[0]
    var headkomentar = tableheadAlbum.children[0].outerHTML

    if (listSessionUser.length==1) {
        thisNav = `<li class="nav-item ">
        <a class="nav-link active" href="#beranda" onclick="show('beranda','tentang','hubungi-kami','masuk','list-user','list-album','list-comment'); ">Beranda
            </a>
        </li>
        <li class="nav-item ">
            <a class="nav-link" href="#tentang" onclick="show('tentang','beranda','hubungi-kami','masuk','list-user','list-album','list-comment'); ">Tentang</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami" onclick="show('hubungi-kami','tentang','beranda','masuk','list-user','list-album','list-comment'); ">Hubungi Kami</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-user" onclick="show('list-user','tentang','beranda','masuk','hubungi-kami','list-album','list-comment');">List User</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-album" onclick="show('list-album','tentang','beranda','masuk','hubungi-kami','list-user','list-comment'); ">List Album</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-comment" onclick="show('list-comment','tentang','beranda','masuk','hubungi-kami','list-user','list-album'); ">List Komentar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#logout" onclick="Logout();window.alert('Anda telah logout!')">Logout</a>
        </li>
        `
        
        headtable =
        `<tr>
            <th style="width : 20px" scope="col">No</th>
            <th scope="col">Judul Album</th>
          </tr>`
    }
    else {
        thisNav =`<li class="nav-item ">
        <a class="nav-link active" href="#beranda" onclick="show('beranda','hubungi-kami','tentang','masuk','daftar','list-album','list-comment');">Beranda
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#tentang" onclick="show('tentang','hubungi-kami','beranda','masuk','daftar','list-album','list-comment');">Tentang</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami" onclick="show('hubungi-kami','tentang','beranda','masuk','daftar','list-album','list-comment');" >Hubungi Kami</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-album" onclick="show('list-album','tentang','beranda','masuk','hubungi-kami','list-user','list-comment'); ">List Album</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#list-comment" onclick="show('list-comment','tentang','beranda','masuk','hubungi-kami','list-user','list-album'); ">List Komentar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#masuk" onclick="show('masuk','hubungi-kami','tentang','beranda','daftar','list-album','list-comment');">Masuk</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#daftar" onclick="show('daftar','hubungi-kami','tentang','beranda','masuk','list-album','list-comment');">Daftar</a>
        </li>`
        headtable =
        `<tr>
            <th style="width : 20px" scope="col">No</th>
            <th scope="col">Judul Album</th>
            <th scope="col">Pemilik</th>
          </tr>`
    }
    headkomentar =
        `<tr>
            <th style="width : 20px" scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
          </tr>`
    navActive.innerHTML = thisNav
    tableheadAlbum.innerHTML = headtable
    tableheadKomentar.innerHTML = headkomentar

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
    showDataKomentar()
}
function show(shown,hidden1,hidden2,hidden3,hidden4,hidden5,hidden6) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden1).style.display='none';
    document.getElementById(hidden2).style.display='none';
    document.getElementById(hidden3).style.display='none';
    document.getElementById(hidden4).style.display='none';
    document.getElementById(hidden5).style.display='none';
    document.getElementById(hidden6).style.display='none';
}

var getAll = function (attr) {
    return document.querySelectorAll(attr)
}

var get = function (attr) {
    return document.querySelector(attr)
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
            show('beranda','masuk','hubungi-kami','tentang','daftar','list-album','list-comment')
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
    show('beranda','masuk','hubungi-kami','tentang','daftar','list-album','list-comment')
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
    var lowercase = search.toLowerCase();
    var tr = tableDataAlbum.children[0].children[0].outerHTML
    if (search==""){
        showDataAlbum()
    }
    else {
        if (listSessionUser.length==1){
            listAlbum.forEach((data,index)=>{
                var text = data.title
                if (text.includes(lowercase) && data.userId==listAlbum[0].userId){ 
                    tr += `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${data.title}</td>
                    </tr>`
                }
            })
        }
        else {
            listAlbum.forEach((data,index)=>{
                var text = data.title
                if (text.includes(lowercase) && data.userId==listAlbum[0].userId){ 
                    tr +=  `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${data.title}</td>
                    <td>${data.name}</td>
                    </tr>`
                }
            })
        }
        tableDataAlbum.innerHTML = tr
    }
    
}

function paginationbutton(){
    const rowPerPage = 6
    const totalAlbums = listAlbum.length
    const totalButtonPage = Math.ceil(totalAlbums / rowPerPage)

    get('.page-container').innerHTML = `<a href="#first" class="page-no" onclick="pagination(1)">First</a>`
    for (let i = 1; i <= totalButtonPage; i++) {
        get('.page-container').innerHTML += `
            <a class="page-no" onclick="pagination(${i})">${i}</a>
        `
    }
    get('.page-container').innerHTML += `<a class="page-no" onclick="pagination(${totalButtonPage})">Last</a>`
}

function pagination(page){
    var tableDataAlbum = document.getElementsByClassName("tableDataAlbum")[0]
    var tr = tableDataAlbum.children[0].children[0].outerHTML
    const rowPerPage = 6
    let dat = ((page - 1) * 6)
    let no = dat + 1
    if (listSessionUser.length==1){
        var trisi = listAlbum.filter((album) =>{ 
            return album.userId == listSessionUser[0].id; 
        }).slice(dat, page * rowPerPage).map((album)=> { 
            return `<tr>
            <th scope="row">${no++}</th>
            <td>${album.title}</td>
            </tr>`
        }) 
    } else {
        var trisi = listAlbum.slice(dat, page * rowPerPage).map((album) => {
            return `
                    <tr>
                        <th scope="row">${no++}</th>
                        <td>${album.title}</td>
                        <td>${album.name}</td>
                    </tr>`
                })
    }
    
    // DOM manipulation
    tableDataAlbum.innerHTML = tr + trisi.join("")
}

function paginationbuttonKomentar(offset) {
    const rowPerPage = 10
    const totalComments = listKomentar.length
    const totalButtonPage = Math.ceil(totalComments / 3)
    const totalTempPage = offset+4
    
    const firstpage =() => get('.page-komentar').innerHTML = `<btn href="#first" class="btn btn-warning laspre" onclick="paginationKomentar(1)">First</btn>`
    const lastpage = () => get('.page-komentar').innerHTML += `<btn href="#last" class="btn btn-warning laspre" onclick="paginationKomentar(${totalButtonPage})">Last</btn>`
    const activepagi = (x) => getAll('.no')[x].classList.add("btn-primary")
    const tenbuttonpagi = (i) => get('.page-komentar').innerHTML += `<btn class="no btn btn-group-sm" onclick="paginationKomentar(${i})">${i}</btn>`
    if (offset>=6 && offset<=(totalButtonPage-5)) {
        console.log(totalTempPage)
        firstpage()
        for (let i=offset-5;i <= totalTempPage; i++ ){
            if (i==offset){
                tenbuttonpagi(i)
            
            }else {
                tenbuttonpagi(i)
            }
        }
        lastpage()
        activepagi(5)
    } else if (offset>(totalButtonPage-5)){
        let templagi = offset-(totalButtonPage-9)
        firstpage()
        for (let i = offset - templagi ; i <= totalButtonPage; i++) {
            tenbuttonpagi(i)
        }
        lastpage()
        activepagi(templagi)
    }
    else {
        firstpage()
        for (let i = 1; i <= rowPerPage; i++) {
            tenbuttonpagi(i)
        }
        lastpage()
        activepagi(offset-1)
    }
}

function paginationKomentar(page){
    let tableDataKomentar = document.getElementsByClassName("tableDataKomentar")[0]
    let tr = tableDataKomentar.children[0].children[0].outerHTML
    const rowPerPage = 3
    let dat = ((page - 1) * 3)
    let no = dat + 1
    var trisi = listKomentar.slice(dat, page * rowPerPage).map((komen) => {
        return `
                <tr>
                    <th scope="row">${no++}</th>
                    <td>${komen.name}</td>
                    <td>${komen.email}</td>
                    <td>${komen.body}</td>
                </tr>`
            })
    
    // DOM manipulation
    tableDataKomentar.innerHTML = tr + trisi.join("")
    paginationbuttonKomentar(page)
    
}

async function showDataAlbum() {
    //tampil data boy mantap jiwa
    
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
    pagination(1)
    paginationbutton()
}

async function showDataKomentar() {
    //tampil data boy mantap jiwa
    
    await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            listKomentar = data
        })
        .catch(err => console.warn("err: ", err))
        .finally(() => console.info("album : finally .."))

    paginationKomentar(1)
}

init()


