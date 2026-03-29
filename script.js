function goToDashboard() {
    var role = document.getElementById("role").value;

    if(role === "student") {
        window.location.href = "student_dashboard.html";
    } 
    else if(role === "teacher") {
        window.location.href = "teacher_dashboard.html";
    }
}

function doubtSubmitted() {
    alert("Your doubt has been submitted!");
}

function updateLocation() {
    var now = new Date();
    document.getElementById("time").innerHTML =
        "Last Updated: " + now.toLocaleString();

    alert("Location Updated Successfully!");
}