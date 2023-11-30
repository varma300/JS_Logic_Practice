function form_submit(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let phone = document.getElementById('number').value;
    let mail = document.getElementById('email').value;

    document.getElementById('nh').innerHTML = 'Name';
    document.getElementById('pH').innerHTML = 'Phone Number';
    document.getElementById('eh').innerHTML = 'email'
    
    document.getElementById('nm').innerHTML = `${name}`;
    document.getElementById('ph').innerHTML = `${phone}`;
    document.getElementById('ml').innerHTML = `${mail}` ;
};

document.getElementById('form').addEventListener('submit',form_submit);
