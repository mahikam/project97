function p_continue(){
    first_name=document.getElementById("p_first").value;
    localStorage.setItem("first_name",first_name);

    last_name=document.getElementById("p_last").value;
    localStorage.setItem("last_name",last_name);

    phone=document.getElementById("p_phone").value;
    localStorage.setItem("phone_number",phone);

    get_city=document.getElementById("p_city").value;
    city=get_city.toLowerCase();
    localStorage.setItem("city",city);

    get_state=document.getElementById("p_state").value;
    state=get_state.toLowerCase();
    localStorage.setItem("state",state);

    window.location="pchat.html";
}