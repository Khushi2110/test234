function validateSalesInquiryForm()
{
    var name = document.getElementById("txtName").value.trim();
    var email = document.getElementById("txtEmail").value.trim();
    var mobileNo = document.getElementById("txtNumber").value.trim();
    var address1 = document.getElementById("txtAdrs1").value.trim();
    var country = document.getElementById("txtCountry").value.trim();
    var city = document.getElementById("txtCity").value.trim();
    var organisation = document.getElementById("txtOrg").value.trim();
    var contactNo = document.getElementById("txtCntctNo").value.trim();
    var faxNo = document.getElementById("txtFax").value.trim();
    var address2 = document.getElementById("txtAdrs2").value.trim();
    var state = document.getElementById("selectYourState").value.trim();
    var pinCode = document.getElementById("txtPinCode").value.trim();

    var hasError=false;

    var validLetters = /^[A-Za-z]+[ A-Za-z]*$/;
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pinMatch = /^[0-9]{6}$/;
    var numberMatch = /^[0-9]{3,4}-?[0-9]{7}$/;
    var validMobNo = /^[7-9]{1}[0-9]{9}$/;

    if(name=="")
    {
        alert("Name cannot be empty. Please enter name.");
        hasError = true;
        
    }
    else if(!(name.match(validLetters)))
    {
        alert("Name must contain only alphabets. Please enter a valid Name.");
        hasError = true;
    }
    else if(organisation=="")
    {
        alert("Organization cannot be empty. Please enter organisation name.");
        hasError = true;
    }
    else if(!(organisation.match(validLetters)))
    {
        alert("Organization must contain only alphabets. Please enter a valid Organisation.");
        hasError = true;
    }
    else if(email=="")
    {
        alert("Email address cannot be empty. Please enter email address.");
        hasError = true;
    }
    else if(!(email.match(validEmail)))
    {
        alert("Please enter a valid Email in format 'example@gmail.com'.");
        hasError = true;
    }
    else if(contactNo=="")
    {
        alert("Contact Number cannot be empty. Please enter contact number.");
        hasError = true;
    }
    else if(!(contactNo.match(numberMatch)))
    {
        alert("Please enter a valid Contact Number in the format '0821-2777777'.");
        hasError = true;
    }
    else if(mobileNo=="")
    {
        alert("Mobile Number cannot be empty. Please enter mobile number.");
        hasError = true;
    }
    else if(!(mobileNo.match(validMobNo)))
    {
        alert("Please enter a valid 10 digit Mobile number.");
        hasError = true;
    }
    else if(faxNo=="")
    {
        alert("Fax Number cannot be empty. Please enter fax number.");
        hasError = true;
    }
    else if(!(faxNo.match(numberMatch)))
    {
        alert("Please enter a valid Fax Number in the format '0821-2777777'.");
        hasError = true;
    }
    else if(address1=="")
    {
        alert("Address1 cannot be empty. Please enter address line 1");
        hasError=true;
    }
    else if(address2=="")
    {
        alert("Address2 cannot be empty. Please enter address line 2");
        hasError=true;
    }
    else if(country=="")
    {
        alert("Country cannot be empty. Please enter your country.");
        hasError=true;
    }
    else if(!(country.match(validLetters)))
    {
        alert("Country must contain only alphabets. Please enter a valid Country.");
        hasError = true;
    }
    // else if(state=="")
    // {
    //     alert("State cannot be empty. Please enter your state.");
    //     hasError=true;
    // }
    // else if(!(state.match(validLetters)))
    // {
    //     alert("State must contain only alphabets.Please enter a valid State.");
    //     hasError = true;
    // }
    else if(state=="Default")
    {
        alert("Please select your state");
        hasError = true;
    }
    else if(city=="")
    {
        alert("City cannot be empty. Please enter your city.");
        hasError=true;
    }
    else if(!(city.match(validLetters)))
    {
        alert("City must contain only alphabets. Please enter a valid City.");
        hasError = true;
    }
    else if(pinCode=="")
    {
        alert("PinCode cannot be empty. Please enter your pincode.");
        hasError=true;
    }
    else if(!(pinCode.match(pinMatch)))
    {
        alert("Please enter a valid 6 digit PinCode.");
        hasError = true;
    }

    if(hasError==true)
    {
        return false;
    }
    else
    {
        alert("Form Submitted Successfully");
        return false;

    }
}