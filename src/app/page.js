'use client'
import Image from "next/image";
import Punks from "./images/dennyspunks.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useEnsName } from "wagmi";

export default function Home() {
  //state variables for the user's ENS name . It will be blank ("") if inexistent
  const [ens, setEns] = useState("");

  const { address } = useAccount();
  console.log(address);

  const ensName = useEnsName({
    address: address,
  });

  console.log(ensName.data);
  //will be undefined if the user doesn't have an ens name

  //the useEffect below will change our ens variable's value to whatever is returned by the useEnsName() hook.
  useEffect(() => {
    setEns(ensName.data);
  }, [ensName.data]);

  const renderButton = () => {
    if (address) {
      //if the user has connected their wallet,
      return <div>Wallet connected</div>;
    } else {
      return (
        // if the user hasn't connected their wallet, show them a connect wallet button
        <ConnectButton />
        // this button is provided to us by RainbowKit itself
      );
    }
  };

  return (
    <div>
      <div className={" min-h-[90vh] flex justify-center items-center font-sans max-[1000px]:w-full max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:items-center  "}>
        <div className="pl-12">
          <h1 className="text-4xl my-8  mx-0 ">
            Welcome to ENS test WEB_App  {ens ? ens : address}!
          </h1>
          <div className={"leading-4 my-8 mx-0 text-xl"}>
            {/* Using HTML Entities for the apostrophe */}
            It&#39;s an NFT collection for dennyswamb Punks.
          </div>
          {renderButton()}
        </div>
        <div>
          <Image className={" w-[70%] h-[50%] ml-[20%]"} src={Punks} alt="Denny's Punks" />
        </div>dennyswamb_Punks
      </div>

      <footer className={"flex py-[1.4rem] border-t-2 border-[#eaeaea] justify-center items-center"}>
        Made with &#10084; by Denny's wamb Punks
      </footer>
    </div>
  );
}