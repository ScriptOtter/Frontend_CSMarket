import {
  FaDiscord,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaVk,
  FaYandex,
  FaYoutube,
} from "react-icons/fa";

export const SideBarFooter = () => {
  return (
    <>
      <div className="mb-6.5">
        <p className="text-md mb-2">@2025 market.csgo.com</p>
        <p className="text-white/60">
          Saturia Limited, Office A, 16/F, Heng Shan Centre, 145 Queen’s Road
          East, Wan Chai, HK
        </p>
      </div>
      <nav className="mb-6.5 text-md list-none space-y-1.5 text-slider-light ">
        <li className="hover:text-slider cursor-pointer duration-100">
          Связаться с нами
        </li>
        <li className="hover:text-slider cursor-pointer duration-100">
          История покупок
        </li>
        <li className="hover:text-slider cursor-pointer duration-100">
          Правила
        </li>
        <li className="hover:text-slider cursor-pointer duration-100">API</li>
      </nav>
      <div className="flex justify-between">
        <FaVk
          size={20}
          className="bg-bg-logo p-0.5 rounded-full text-input-dark hover:bg-bg-logo-hover duration-100 cursor-pointer"
        />
        <FaTelegram
          size={20}
          className="bg-bg-logo p-0.5 rounded-full text-input-dark hover:bg-bg-logo-hover duration-100 cursor-pointer"
        />
        <FaTiktok
          size={20}
          className="bg-bg-logo p-0.5 rounded-full text-input-dark hover:bg-bg-logo-hover duration-100 cursor-pointer"
        />
        <FaYandex
          size={20}
          className="bg-bg-logo p-0.5 rounded-full text-input-dark hover:bg-bg-logo-hover duration-100 cursor-pointer"
        />
        <FaYoutube
          size={20}
          className="bg-bg-logo p-0.5 rounded-full text-input-dark hover:bg-bg-logo-hover duration-100 cursor-pointer"
        />
        <FaDiscord
          size={20}
          className="bg-bg-logo p-0.5 rounded-full text-input-dark hover:bg-bg-logo-hover duration-100 cursor-pointer"
        />
        <FaInstagram
          size={20}
          className="bg-bg-logo p-0.5 rounded-full text-input-dark hover:bg-bg-logo-hover duration-100 cursor-pointer"
        />
      </div>
    </>
  );
};
