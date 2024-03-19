function validarEmail(email) {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    try {
      return regex.test(email);
    } catch (error) {
      alert("erro verifique o console para saber mais")
      console.log(erro)
      return false;
    }
  }
  
  function validarSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    try {
      return regex.test(senha);
    } catch (error) {
      alert("erro verifique o console para saber mais")
      console.log(erro)
      return false;
    }
  }
  //valida email
  document.getElementById("email").addEventListener("change", () => {
    const valor = document.getElementById("email").value;
    const valido = validarEmail(valor);
  
    if (!valido) {
      document.getElementById("email").setCustomValidity("E-mail inválido");
    } else {
      document.getElementById("email").setCustomValidity("");
    }
  });
  
  //valida senha
  document.getElementById("senha").addEventListener("change", () => {
    const valor = document.getElementById("senha").value;
    const valido = validarSenha(valor);
  
    if (!valido) {
      document.getElementById("senha").setCustomValidity(`
      Sua senha deve conter:
      * Pelo menos uma letra minúscula.
      * Pelo menos uma letra maiúscula.
      * Pelo menos um dígito numérico.
      * Pelo menos um caractere especial.
      * Pelo menos 6 caractés
    `);
        } else {
      document.getElementById("senha").setCustomValidity("");
    }
  })
  
  //confirmar se as senhas são iguais
    document.getElementById("confirnsenha").addEventListener("change", () => {
        const confirmarsenha = document.getElementById("confirnsenha").value
        const igual = senhasiguais(confirmarsenha)
    })
    

    function senhasiguais(senha){
        const valor = document.getElementById("senha").value
        const igual = document.getElementById("confirnsenha").value
        if(valor === igual){
            document.getElementById("confirnsenha").setCustomValidity("")
        }else{
            document.getElementById("confirnsenha").setCustomValidity("suas senhas não condizem")
        }
    }