import React from "react";
import Link from "next/link";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const {data, error } = useSWR('/api/get-promo', fetcher)
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
        {!data && <p>Carregando...</p>}
        {!error && data && data.showCoupon &&
          <p className="my-12 text-center">
            {data.message}
          </p>
        }
      </div>

    </div>
  );
};

export default Index;
