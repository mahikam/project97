function v_continue(){
    first_name=document.getElementById("v_first").value;
    localStorage.setItem("first_name",first_name);

    last_name=document.getElementById("v_last").value;
    localStorage.setItem("last_name",last_name);

    phone=document.getElementById("v_phone").value;
    localStorage.setItem("phone_number",phone);

    get_city=document.getElementById("v_city").value;
    city=get_city.toLowerCase();
    localStorage.setItem("city",city);

    get_state=document.getElementById("v_state").value;
    state=get_state.toLowerCase();
    localStorage.setItem("state",state);

    window.location="vroom.html";
}