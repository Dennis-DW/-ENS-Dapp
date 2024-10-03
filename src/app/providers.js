"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

//importing the chains we need (here, just Sepolia)
import {
  sepolia
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const { wallets } = getDefaultWallets();

/**
 * Configuration object for the ENS dapp.
 *
 * @constant {Object} config - The configuration object.
 * @property {string} appName - The name of the application.
 * @property {string} projectId - The project ID for the application.
 * @property {Array} wallets - An array of wallet configurations.
 * @property {Object} wallets[].groupName - The name of the wallet group.
 * @property {Array} wallets[].wallets - An array of wallet instances.
 * @property {Array} chains - An array of blockchain networks.
 * @property {boolean} ssr - Server-side rendering flag.
 */
export const config = getDefaultConfig({
  appName: "ENS dapp",
  projectId: "dbec9aa641e2b84f89e89d3960f04c3d",
  
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
   sepolia
  ],
  ssr: true,
});

// TanStack Query is a library that makes it very easy to fetch, cache and handle data.
// It gives you declarative, always-up-to-date auto-managed queries and mutations.
export const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}