"use client";

import { constants } from "@/constants";
import { useApp } from "@/providers/app";
import { useMbWallet } from "@mintbase-js/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ReactEventHandler } from "react";
import InlineSVG from "react-inlinesvg";


const Footer = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { isConnected } = useMbWallet();

  const { takePicture, openModal } = useApp();

  const renderFooterButtons = () => {
    const { isClosed } = constants;

    return (
      <footer className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-primary h-10 py-2 text-white">
          Powered by dRPC
      </footer>
    )
  };

  return renderFooterButtons();
};

export default Footer;
