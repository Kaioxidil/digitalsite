const btnComprar = document.getElementById('btnComprar');
        const numeroWhatsApp = '44997249833'; // Replace with your WhatsApp number
      
        btnComprar.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default form submission
      
          const nome = document.getElementById('nome').value;
          const email = document.getElementById('email').value;
          const telefone = document.getElementById('telefone').value;
          const rua = document.getElementById('rua').value;
          const bairro = document.getElementById('bairro').value;
          const numero = document.getElementById('numero').value;
          const cidade = document.getElementById('cidade').value;
          const plano = document.getElementById('plano').value;
          const mensagem = document.getElementById('mensagem').value;
      
          const mensagemWhatsApp = `Olá, gostaria de contratar o plano ${plano} para a cidade ${cidade}. 
          Meus dados são:
          Nome: ${nome}
          Email: ${email}
          Telefone: ${telefone}
          Endereço:
          Rua: ${rua}
          Bairro: ${bairro}
          Número: ${numero}
          Mensagem: ${mensagem}`;
      
          const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
          window.open(url, '_blank');
        });