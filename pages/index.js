import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <p className="my-12 text-center">
        O restaurante X sempre busca por atender melhor seus clientes.<br/>
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>

      <div className="text-center my-12">
        <Link href="/pesquisa">
          <a className="bg-blue-400 p-4 font-bold rounded-lg hover:shadow-lg"> Dar Opnião ou Sugestão</a>
        </Link>

        <p className="my-12 text-center">
          Mensagem do desconto
        </p>
      </div>

    </div>
  );
};

export default Index;
