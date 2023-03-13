const mudarTema = document.querySelector("#change-theme");

function ToogleDark(){
    document.body.classList.toggle("dark")
}
mudarTema.addEventListener("change", function(){
    ToogleDark()
});