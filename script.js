//i am setting focus on first text field

$('#name').focus();

//when user chooses option Other from Job Role section, make text field in HTML and hide it via jquery

$('#other-title').hide();

//adding event handler on specific (Other) select value

$('#title').change(function() {
    let show = $(this).val() == 'other';
    $('#other-title').toggle(show);
});

//hide Select theme option from select

$("#design option:first").attr('selected', 'selected').hide();


//”T-Shirt Info” section 

//adding option Please select a T-shirt theme to select 
function Tshirt() {

    let $cornflowerblue = $('#color option[value="cornflowerblue"]');
    let $darkslategrey = $('#color option[value="darkslategrey"]');
    let $gold = $('#color option[value="gold"]');
    let $tomato = $('#color option[value="tomato"]');
    let $steelblue = $('#color option[value="steelblue"]');
    let $dimgrey = $('#color option[value="dimgrey"]');

    $cornflowerblue.hide();
    $darkslategrey.hide();
    $gold.hide();
    $tomato.hide();
    $steelblue.hide();
    $dimgrey.hide();
}
//calling function 
Tshirt();

//setting listener on Design select element
$('#design').change(function() {

    //dynamically remove all elements from select and add elements that are matching
    if ($(this).val() == 'js puns') {
        //removing
        $('#color option[value!=0]').remove()
            //addin options
        $('#color').append(new Option('Cornflower Blue (JS Puns shirt only)', 'cornflowerblue'));
        $('#color').append(new Option('Dark Slate Grey (JS Puns shirt only)', 'darkslategrey'));
        $('#color').append(new Option('Gold (JS Puns shirt only)', 'gold'));

    } else if ($(this).val() == 'heart js') {
        //removing
        $('#color option[value!=0]').remove();
        //adding options
        $('#color').append(new Option('Tomato (I &#9829; JS shirt only)', 'tomato'));
        $('#color').append(new Option('Steel Blue (I &#9829; JS shirt only)', 'steelblue'));
        $('#color').append(new Option('Dim Grey (I &#9829; JS shirt only)', 'steelblue'));
    }
});
//---------------------------------------------------------------------

//”Register for Activities” section 

//creating total cost element and appending to DOM

let $totalCostLabel = $("<span id='totalCost'>Total cost: $</span>");
$('.activities').append($totalCostLabel);

let $totalActivityCost = 0;

//setting listener for checkboxes

$('.activities').change(function(event) {

    const $target = $(event.target);

    //data-cost getting value
    let $dataCost = parseInt($target.attr('data-cost').slice(-3));
    console.log($dataCost);

    //time and date getting value
    let $dateAndTime = $target.attr('data-day-and-time');
    console.log($dateAndTime);



    if ($target.is(':checked')) {

        $totalActivityCost = $totalActivityCost + $dataCost;
        $('#totalCost').html("Total cost $" + $totalActivityCost);


    } else {

        $totalActivityCost = $totalActivityCost - $dataCost;
        $('#totalCost').html("Total cos $" + $totalActivityCost);

    }

    $('[type="checkbox"]').each(function() {
        const $test = $(this);
        if ($dateAndTime === $test.attr('data-day-and-time') && $target !== $test) {
            if ($target.is(':checked')) {
                console.log('im working 1')
                $test.attr('disabled', true);
                $target.attr("disabled", false);
            } else {
                console.log('im working 2');
                $target.attr("disabled", false);
                $test.attr('disabled', false);
            }

        }


    });

});

//-----------------------------------------------------------------

//Payment Section

$('#payment option[value="Credit Card"]').insertBefore('#payment option[value="select method"]').attr('selected', true);
$('#payment option[value="select method"]').hide();

function showPayment() {

    let creditCard = $('#credit-card').show();
    let paypal = $('#paypal').hide();
    let bitcoin = $('#bitcoin').hide();


    $('#payment').change(function() {

        let click = $(this).val();

        if (click == 'Credit Card') {
            creditCard.show();
            paypal.hide();
            bitcoin.hide();
        } else if (click == 'Bitcoin') {
            bitcoin.show();
            paypal.hide();
            creditCard.hide();
        } else if (click == 'PayPal') {
            paypal.show();
            creditCard.hide();
            bitcoin.hide();
        }
    });

}
showPayment();

// validation

let nameError = ("<span id='wrongName'>Wrong name input</span>");
let emailError = ("<span id='wrongEmail'>Wrong email input</span>");
let checkBoxError = ("<span id='wrongCheckbox'>You must check at least one checkbox</span>");
let creditCardError = ("<span id='wrongCreditCard'>Please enter your credit card information again</span>");

const nameWrong = $('#name');
const emailWrong = $('#mail');
const checkBoxWrong = $('.activities legend:eq(0)');
const creditCardWrong = $(' legend:eq(3)');

nameWrong.before(nameError);
emailWrong.before(emailError);
checkBoxWrong.before(checkBoxError);
creditCardWrong.before(creditCardError);

$('#wrongName').css('color', 'red').hide();
$('#wrongEmail').css('color', 'red').hide();
$('#wrongCheckbox').css('color', 'red').hide();
$('#wrongCreditCard').css('color', 'red').hide();



function isNameValid() {
    let pattern = /[a-z]+/i;
    let name = $('#name').val();
    if (!pattern.test(name)) {
        $('#wrongName').css('color', 'red').show();
        return false;
    } else {
        $('#wrongName').css('color', 'red').hide();
        return true;
    }
}

function isEmailValid() {
    let pattern = /^[^@]+@[^@.]+\.[a-z]+$/i;
    let email = $('#mail').val();
    if (!pattern.test(email)) {
        $('#wrongEmail').css('color', 'red').show();
        return false;
    } else {
        $('#wrongEmail').css('color', 'red').hide();
        return true;
    }
}

function isCheckBoxChecked() {
    if ($('input[type=checkbox]').is(':checked')) {
        $('#wrongCheckbox').css('color', 'red').hide();
        return true;
    } else {
        $('#wrongCheckbox').css('color', 'red').show();
        return false;
    }
}


function creditCardSelected() {
    let creditCardpattern = /^\d{13,16}$/;
    let creditCard = $('#cc-num').val();
    if (!creditCardpattern.test(creditCard) && creditCard === '') {
        $('#wrongCreditCard').css('color', 'red').show();
        return false;
    } else {
        $('#wrongCreditCard').css('color', 'red').hide();
        return true;
    }
}

function zipCode() {
    let zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    let zipCodee = $('#zip').val();
    if (!zipCodePattern.test(zipCodee) && zipCodee === '') {
        return false;
    } else {
        return true;

    }
}

function CV() {

    let cvvPatern = /^\d{3}$/;
    let cvvv = $('#cvv').val();
    if (!cvvPatern.test(cvvv) && cvvv === '') {
        return false;
    } else {
        return true;

    }
}

$('form').on('submit', function(e) {

    let creditCard = $("#payment option[value='Credit Card'").val();

    if (!isNameValid()) {
        e.preventDefault();
    }
    if (!isEmailValid()) {
        e.preventDefault();
    }
    if (!isCheckBoxChecked()) {
        e.preventDefault();

    } else if ($("#payment option[value='Credit Card'").is(':selected')) {
        if (!creditCardSelected()) {
            e.preventDefault();
            $('.col-6 input:eq(0)').css('borderColor', 'red');
        } else {
            $('.col-6 input:eq(0)').css('borderColor', '');
        }
        if (!zipCode()) {
            $('.col-3 input:eq(0)').css('borderColor', 'red');
            e.preventDefault();
        } else {
            $('.col-3 input:eq(0)').css('borderColor', '');
        }
        if (!CV()) {
            e.preventDefault();
            $('.col-3 input:eq(1)').css('borderColor', 'red');
        } else {
            $('.col-3 input:eq(1)').css('borderColor', '');
        }

    } else if ($("#payment option [value='Bitcoin'").is(':selected')) {
        if (!isNameValid()) {
            e.preventDefault();
        }
        if (!isEmailValid()) {
            e.preventDefault();
        }
        if (!isCheckBoxChecked()) {
            e.preventDefault();
        } else {

        }
    } else if ($("#payment option [value='PayPal'").is(':selected')) {
        if (!isNameValid()) {
            e.preventDefault();
        }
        if (!isEmailValid()) {
            e.preventDefault();
        }
        if (!isCheckBoxChecked()) {
            e.preventDefault();
        } else {}
    }
});