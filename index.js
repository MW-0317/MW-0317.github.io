function openTab(event, name){
    var tabcontent = document.getElementsByClassName("tabcontent")
    for (var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    document.getElementById(name).style.display = 'block';
}