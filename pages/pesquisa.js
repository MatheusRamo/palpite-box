import React, {useState} from "react";
import Link from "next/link";

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: ''
  })
  const save = async() =>{
    try {

      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
    } catch (err){
      console.log(err)

    }
  }
  const onChange = event => {
    const value = event.target.value
    const key = event.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  } 
  return (
    <div>
      <h1 className=" my-4 text-center font-bold text-2xl">Criticas e Sugestões</h1>

      <p className="my-12 text-center">
        O restaurante X sempre busca por atender melhor seus clientes.<br/>
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>

      <div className="w-52 text-center mx-auto">
        <label className="font-bold">Seu Nome:</label>
        <input className="p-4 block bg-blue-100 mx-auto my-2 rounded" placeholder="Nome" name="Nome" onChange={onChange} value={form.Nome} type="text"></input>
        <label className="font-bold">Seu Email:</label>
        <input className="p-4 block bg-blue-100 mx-auto my-2 rounded" placeholder="Email" name="Email" onChange={onChange} value={form.Email} type="text"></input>
        <label className="font-bold">Seu Whatsapp:</label>
        <input className="p-4 block bg-blue-100 mx-auto my-2 rounded" placeholder="Whatsapp"  name="Whatsapp" onChange={onChange} value={form.Whatsapp} type="text"></input>
        <button className="bg-blue-400 p-2 font-bold rounded-lg my-1 hover:shadow-lg" onClick={save}>Salvar</button>
      </div>

    </div>
  );
};

export default Pesquisa;
