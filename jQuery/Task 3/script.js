$(document).ready(function() {
    $(".name-form").submit(function() {
        if($("#fname").val() == "" || $("#lname").val() == "") {
            alert("Please fill all the fields");
        }
        else {
            alert("Form submitted successfully");
        }
    });
});