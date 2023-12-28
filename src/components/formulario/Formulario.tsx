import React, { useState } from 'react';
import "./Formulario.css"

function Formulario () {

  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone, set_phone] = useState('');
  const [address, setaddress] = useState('');

  const handleSubmit = () => {
    // Aqui você faria a requisição para o PayPal com as informações do comprador
    // e seguiria o fluxo de pagamento conforme a documentação do PayPal.
    // Você precisará usar a API do PayPal para isso.
  };

  return (
    <>
    <form className='form' onSubmit={handleSubmit} action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" value={first_name} onChange={(e) => setfirst_name(e.target.value)} placeholder="First_name" />
      <input type="hidden" value={last_name} onChange={(e) => setlast_name(e.target.value)} placeholder="Last_name" />
      <input type="hidden" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
      <input type="hidden" value={phone} onChange={(e) => set_phone(e.target.value)} placeholder="Phone" />
      <input type="hidden" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Address" />

      <button type="submit">Pagar com PayPal</button>
      
    </form>

    <div className='separator'></div>

    </>
  );
};

export default Formulario;
