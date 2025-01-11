function sendEmail() {
    const form = document.getElementById('contactForm');
    if (form.checkValidity()) {
        var data = {
            service_id: 'service_dor6xx9',
            template_id: 'template_8gk2kci',
            user_id: '3R_XdgO-IPnpLws-T',
            template_params: {
                message: document.getElementById('name').value + " has requested a free barrel threading quote",
                caliber: document.getElementById('caliber').value,
                threadPitch: document.getElementById('thread pitch').value,
                customerMessage: document.getElementById('message').value,
                phone: document.getElementById('phone').value,
                from_name: document.getElementById('email').value,
                reply_to: document.getElementById('email').value
            }
        };
            
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).then(function(response) {
            clearModal();
            $("#submitBanner").show();
            setTimeout(function() {
                $("#submitBanner").hide();
            }, 3000);
        }, function(error) {
            clearModal();
        });
    }
    form.classList.add('was-validated')
}

function clearModal()
{
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('caliber').value = "";
    document.getElementById('thread pitch').value = "";
    document.getElementById('message').value = "";

    const modalElement = document.getElementById('contactModal');
    const modal = bootstrap.Modal.getInstance(modalElement); 
    modal.hide();
}

function onCaliberChange()
{
    thread_pitch_msg = ""
    var caliber = document.getElementById("caliber").value;
    var items;
    if (caliber === "rimfire") 
    {
        items = ["1/2x28", "7/16x28"];
        thread_pitch_msg = "This caliber has a required minimum muzzle diameter of .560\""
    } 
    else if (caliber === ".20to.24") 
    {
        items = ["1/2x28", "7/16x28"];
        thread_pitch_msg = "This caliber has a required minimum muzzle diameter of .560\""
    }
    else if (caliber === ".243to.358") 
    {
        items = ["5/8x24", "1/2x28"];
        thread_pitch_msg = "This caliber has a required minimum muzzle diameter of .685\""
    }
    else if (caliber === ".375to.458") 
    {
        items = ["3/4x24", "5/8x24"];
        thread_pitch_msg = "This caliber has a required minimum muzzle diameter of .810\""
    }
    else 
    {
        items = ["1/2x28", "7/16x28", "5/8x24", "3/4x24"];
        thread_pitch_msg = ""
    }
    var str = ""
    for (var item of items) {
        str += "<option>" + item + "</option>"
    }
    document.getElementById("thread pitch").innerHTML = str;
    document.getElementById("thread_pitch_msg").innerHTML = thread_pitch_msg;
}

function clearNewsletterModal()
{
    document.getElementById('newsletterEmail').value = "";

    const modalElement = document.getElementById('newsletterModal');
    const modal = bootstrap.Modal.getInstance(modalElement); 
    modal.hide();
}