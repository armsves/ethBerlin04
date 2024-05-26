"use client";

import { constants } from "@/constants";
import { useApp } from "@/providers/app";
import { useMbWallet } from "@mintbase-js/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ReactEventHandler } from "react";
import InlineSVG from "react-inlinesvg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { isConnected } = useMbWallet();

  const { takePicture, openModal } = useApp();

  const renderFooterButtons = () => {
    const { isClosed } = constants;

    return (
<footer className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-primary h-10 py-2 text-white px-4">
    <a href="https://github.com/armsves/ethBerlin04/" style={{marginLeft: '20%'}} target="_blank">
        <FontAwesomeIcon icon={faGithub} />
    </a>
    <div>
        <a href="https://drpc.org/" target="_blank">Powered by dRPC</a>
    </div>
    <a href="https://twitter.com/armsves" style={{marginRight: '20%'}} target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
    </a>
</footer>
    )
  };

  return renderFooterButtons();
};

export default Footer;
