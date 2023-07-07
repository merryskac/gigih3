const checkEmail = (email)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const seestatus = ()=>{
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if(!email || !pass){
    console.log("halo")
    document.getElementById("status").innerHTML = "Email dan pass masih kosong";
    return
  }
  if(!checkEmail(email)){
    document.getElementById("status").innerHTML = "Email tidak valid";
    return
  }
  if(pass.length <6){
    document.getElementById("status").innerHTML = "Password harus lebih dari 6 karakter";
    return
  }

  document.getElementById("status").innerHTML = "Email dan password valid!";
}
