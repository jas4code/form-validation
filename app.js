$(document).ready(function() {
    $( "#date" ).datepicker();
    
    $('form').submit(function() {
        if ($("input#first_name").val() == "" ){
            alert("First name can't be blank")
        }
        else if ($("input#last_name").val() == "" ){
            alert("Last name can't be blank")
        }
        else if ($("input#date").val() == "" ){
            alert("Date can't be blank")
        }
        else {
            alert ("Success, " + $("input#first_name").val() + " " + $("input#last_name").val() + "! Your vaccination is reserved on " + $("input#date").val() + ".")
        }

        return false;
    })
})