const auth = firebase.auth();
function signUp (){
    var email  =  document.getElementById("newUser");
    var password  =  document.getElementById("newPass");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("Sign In");

}
        function signIn(){
            var email  =  document.getElementById("user");
            var password  =  document.getElementById("pass");
        
            const promise = auth.signInWithEmailAndPassword(email.value,password.value);
            promise.catch(e => alert(e.message));
            alert("Sign In" + email.value );
          
        }

            // function signUp() {
            //     var name  = document.getElementById("signupBut");
            //     localStorage.setItem('textvalue',name);
            //     return false;
            // }
            