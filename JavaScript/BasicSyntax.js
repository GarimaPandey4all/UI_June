// window.addEventListener('load', function(){
//     //event binding
//     document.getElementById("btn").addEventListener('click', showName);
// })

// //event binding
// document.getElementById("btn").addEventListener('click', showName);

window.addEventListener('load', initEvents);

function initEvents()
{
    //eventbinding
    document.getElementById("btn").addEventListener('click', showName);
}

function showName()
{
    var userName = document.getElementById("box_1").value;
    //document.getElementById("result").innerHTML += userName;
    document.getElementById("result").innerHTML = userName;
}