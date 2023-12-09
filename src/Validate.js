
function Validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pswd').value;
  
    if (name === "") {
      alert("Enter your name!");
      return false;
    }
    if (email === "" || (!Validateemail(email))) {
      alert("Enter a valid email!");
      return false;
    }
    if (password.length<6 ) {
      alert("Enter the password!");
      return false; // Added 'false' to explicitly return a boolean value
    }
    
   
    return true;
    
  }

  function Validateemail(email){
    var re = /^\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  export default Validate;
  