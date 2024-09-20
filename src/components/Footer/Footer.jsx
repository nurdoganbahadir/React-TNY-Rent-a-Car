import React from "react";

const Footer = () => {
  return (
    <footer className="md:my-12 mx-auto px-4 max-w-screen-xl md:px-8 bg-gray-200 md:rounded-xl">
      <div className=" flex flex-col md:flex-row justify-between">
        <div className="dark:text-white w-[100%] md:w-[50%] my-12">
          <p className="text-center text-xl mb-4 font-bold">
            Bize Ulaşmak İçin
          </p>
          <p className="mb-2">
            <b>Telefon:</b> <span>+90 538 644 98 91</span>
          </p>
          <p className="mb-2">
            <b>Email:</b> nurdoganbahadirr@gmail.com
          </p>
          <p className="mb-2">
            <b>Adress:</b> Alikahya Atatürk, Sanayi Cd. No: 23 No:6, 41310,
            Kocaeli/İzmit
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.4325470074089!2d30.004041997601494!3d40.767958704901474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4ff2bcbec6f5%3A0x84833275ccf07d94!2sTNY%20Oto%20Kiralama!5e0!3m2!1str!2str!4v1726825933171!5m2!1str!2str"
          //   width="500"
          //   height="500"
          className="w-[100%] h-[300px] md:w-[50%] md:h-[500px] mb-5 md:mb-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
