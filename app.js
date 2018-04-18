
$(document).ready(function () {

    $(".btn-primary").click(function () {

        let firstNameValue = $("#firstName").val();
        let lastNameValue = $("#lastName").val();
        let emailValue = $("#email").val();

        if(firstNameValue !== "" && lastNameValue !== "" && emailValue !== "") {

            let markup = "<tr><td><input type = 'checkbox' class = 'form-control' name = 'checkID'></td><td>" + firstNameValue + "</td><td>" + lastNameValue + "</td><td>" + emailValue + "</td></tr>";

            $("table  tbody").append(markup);

            $(".form-group :input").val("");

            $(".alert-success").show();

        } else {

            $(".alert-primary").show();
        }
    });

    // Find and remove selected table rows

    $(".btn-danger").click(function(){
        $("table tbody").find('input[name="checkID"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();

                $(".alert-danger").show();

            } else {

                $(".alert-warning").show();
            }

        });
    });


});