import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="bg-gray-200 text-center p-4 shadow-md">Palpite Box</div>
 
      <div className="bg-gray-300 p-2 shadow-md text-center">
      <Link href="/">
            <a className="px-2 hover:underline">Home</a>
        </Link>

        <Link href="/sobre">
            <a className="px-2 hover:underline">Sobre</a>
        </Link>

        <Link href="/contato">
            <a className="px-2 hover:underline">Contato</a>
        </Link>

        <Link href="/pesquisa">
            <a className="px-2 hover:underline">pesquisa</a>
        </Link>
      </div>
    
    </>
  );
};

export default Header;
