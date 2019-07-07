function control() {
    var login = document.loginform.login.value;
    var mdp = document.loginform.mdp.value;
    if (login =='')
    {
        alert("saisie login");
        return false;
    }
    if (mdp =='')
    {
        alert("saisie mdp");
        return false;
    }
    
    
}