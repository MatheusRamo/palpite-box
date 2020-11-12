import React from "react";
import Link from "next/link";

const Pesquisa = () => {
  return (
    <div>
      <h1 className=" my-4 text-center font-bold text-2xl">Criticas e Sugestões</h1>

      <p className="my-12 text-center">
        O restaurante X sempre busca por atender melhor seus clientes.<br/>
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>

      <div className="w-52 text-center mx-auto bg-red-100">
        <label className="font-bold">Seu Nome:</label>
        <input className="p-4 block shadow bg-blue-100 mx-auto my-2 rounded" type="text"></input>
      </div>

    </div>
  );
};

export default Pesquisa;
