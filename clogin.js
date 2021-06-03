function c_continue(){
    first_name=document.getElementById("c_first").value;
    localStorage.setItem("first_name",first_name);

    last_name=document.getElementById("c_last").value;
    localStorage.setItem("last_name",last_name);

    phone=document.getElementById("c_phone").value;
    localStorage.setItem("phone_number",phone);

    get_city=document.getElementById("c_city").value;
    city=get_city.toLowerCase();
    localStorage.setItem("city",city);

    get_state=document.getElementById("c_state").value;
    state=get_state.toLowerCase();
    localStorage.setItem("state",state);

    window.location="cchat.html";
}