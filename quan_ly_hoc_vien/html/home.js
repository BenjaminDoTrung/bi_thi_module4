function showList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/student",
        success: function (data){
            let content =  "<tr>\n" +
                "    <th>STT</th>\n" +
                "    <th>Name</th>\n" +
                "    <th>Date</th>\n" +
                "    <th>Email</th>\n" +
                "    <th>Address</th>\n" +
                "    <th>Phone</th>\n" +
                "    <th>Class</th>\n" +
                "    <th>Action</th>\n" +
                "    </tr>";
            if (data.length != null){
                for (let i = 0; i < data.length; i++) {
                    content +=
                        "    <tr>\n" +
                        "        <td>" + i +"</td>\n" +
                        "        <td>" + data[i].name +"</td>\n" +
                        "        <td>" + data[i].date+"</td>\n" +
                        "        <td>" + data[i].email +"</td>\n" +
                        "        <td>" + data[i].address +"</td>\n" +
                        "        <td>" + data[i].phone +"</td>\n" +
                        "        <td>" + data[i].category.name +"</td>\n" +
                        "        <td><button onclick=\"update(" + data[i].id +")\">chỉnh sửa</button>" + "|" +
                        "            <button onclick=\" xoa(" + data[i].id +")\">Xóa</button>" + "|" +
                        "            <button onclick=\" showStudent(" + data[i].id +")\">Xem chi tiết</button></td>\n" +
                        "    </tr>";
                }
                document.getElementById("list_s").innerHTML = content;
            }
        }
    })
}

function xoa(id_student) {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/student/delete/" + id_student,
            success: function (){
                alert("bạn đã xóa thành công");
                showList();
            }
        })
        // event.preventDefault();
}
function update(id_student){
    localStorage.setItem("id_student_update", id_student);
    window.location.href = "update.html";
}

function updateStudent() {
    let id_student = localStorage.getItem("id_student_update");
    show_Category();
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/student/update/" + id_student,
        success:function (data){
            document.getElementById("name_t").value = data.name;
            document.getElementById("date").value = data.date;
            document.getElementById("email").value = data.email;
            document.getElementById("address").value = data.address;
            document.getElementById("phone").value =data.phone;
            document.getElementById("class").value =data.category.id;
        }
    })
}

function updateCityNew() {
    let id = localStorage.getItem("id_student_update");
    let name = document.getElementById("name_t").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let category = null
    let id_category = document.getElementById("class").value;
    let student ={
        id: id,
        name: name,
        date: date,
        email: email,
        address: address,
        phone: phone,
        category: category
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/student/update/" + id_category,
        data: JSON.stringify(student),
        success: function (){
            alert("bạn đã Sửa thành công thành công");
            window.location.href = "home.html";
        }
    })
    event.preventDefault();
}

function createStudentNew() {
    let id = null;
    let name = document.getElementById("name_t").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let category = null
    let id_category = document.getElementById("class").value;
    let student ={
        id: id,
        name: name,
        date: date,
        email: email,
        address: address,
        phone: phone,
        category: category
    }

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/student/create/" + id_category,
        data: JSON.stringify(student),
        success: function (){
            alert("Bạn đã thêm thành công");
            window.location.href = "home.html";
        }
    })
    event.preventDefault();
}
function show_Category() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/category",
        success: function (data){
            let content = "";
            if (data.length != null){
                for (let i = 0; i < data.length; i++) {
                    content += "<option value=\"" + data[i].id +"\">" + data[i].name +"</option>"
                }
            }
            document.getElementById("class").innerHTML = content;
        }
    })

}

function showStudent(id_student) {
    localStorage.setItem("id_student_show", id_student);
    window.location.href = "chi_tiet.html";
}
function showTitleCity() {
    let idStudent = localStorage.getItem("id_student_show");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/student/update/" + idStudent,
        success: function (data){
            let content = "<h2>Thành phố</h2>\n" +
                "<br>\n" +
                "<p>Tên: " + data.name +"</p>\n" +
                "<br>\n" +
                "<p>date: " + data.date +"</p>\n" +
                "<br>\n" +
                "<p>Email: " + data.email +"</p>\n" +
                "<br>\n" +
                "<p>Address: " + data.address +"</p>\n" +
                "<br>\n" +
                "<p>Phone: " + data.phone +"</p>\n" +
                "<br>\n" +
                "<p>Class: " + data.category.name +"</p>\n" +
                "<button onclick='update(" + data.id +")'>chỉnh sửa</button>\n" +
                "<button onclick='xoa(" + data.id +")'>Xóa</button>" +
                "<a href='home.html'>Xem danh học sinh</button>";
            document.getElementById("student").innerHTML = content;
        }
    })
}
function search() {
    let name = document.getElementById("name").value;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/student/search/" + name,
        success: function (data) {
            let content =  "<tr>\n" +
                "    <th>STT</th>\n" +
                "    <th>Name</th>\n" +
                "    <th>Date</th>\n" +
                "    <th>Email</th>\n" +
                "    <th>Address</th>\n" +
                "    <th>Phone</th>\n" +
                "    <th>Class</th>\n" +
                "    <th>Action</th>\n" +
                "    </tr>";
            if (data.length != null){
                for (let i = 0; i < data.length; i++) {
                    content +=
                        "    <tr>\n" +
                        "        <td>" + i +"</td>\n" +
                        "        <td>" + data[i].name +"</td>\n" +
                        "        <td>" + data[i].date+"</td>\n" +
                        "        <td>" + data[i].email +"</td>\n" +
                        "        <td>" + data[i].address +"</td>\n" +
                        "        <td>" + data[i].phone +"</td>\n" +
                        "        <td>" + data[i].category.name +"</td>\n" +
                        "        <td><button onclick=\"update(" + data[i].id +")\">chỉnh sửa</button>" + "|" +
                        "            <button onclick=\" xoa(" + data[i].id +")\">Xóa</button>" + "|" +
                        "            <button onclick=\" showStudent(" + data[i].id +")\">Xem chi tiết</button></td>\n" +
                        "    </tr>";
                }
                document.getElementById("list_s").innerHTML = content;
            }
        }
    })
    event.preventDefault();
}