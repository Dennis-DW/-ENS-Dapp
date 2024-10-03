
# ENS Dapp README

## Table of Contents
1. [Overview](#overview)
2. [Dependencies](#dependencies)
3. [Components](#components)
    - [Home Component](#home-component)
4. [Configuration](#configuration)
5. [Libraries Used](#libraries-used)


## 1. Overview

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The ENS Dapp is a web application designed for users to connect their Ethereum wallets, retrieve their Ethereum Name Service (ENS) names if available, and interact with NFTs, particularly the **dennyswamb Punks** collection. The application is built on the Sepolia testnet and leverages RainbowKit for easy wallet connection and Wagmi for Ethereum-related functionalities.

## 2. Dependencies
The dapp utilizes various libraries to provide seamless integration with Ethereum and optimize performance. Key dependencies include:

- **React**: A core library for building user interfaces.
- **RainbowKit**: A wallet connector library that supports multiple wallets such as MetaMask, Ledger, and Trust Wallet.
- **Wagmi**: A library that simplifies Ethereum wallet connection and ENS integration.
- **TanStack Query**: For data fetching, caching, and query management.
- **Next.js**: A framework for server-side rendering in React applications.
- **Next/Image**: For image optimization, enhancing the loading speed and performance of images.

## 3. Components

### Home Component
The `Home` component serves as the main entry point for users interacting with the ENS Dapp.

#### Features:
- **Wallet Connection**: It uses the `useAccount` hook from Wagmi to check if the user's wallet is connected. If connected, it displays a welcome message along with the user's wallet address or their ENS name.
- **ENS Integration**: The dapp attempts to resolve the user's Ethereum address to an ENS name using the `useEnsName` hook from Wagmi.
- **Dynamic Rendering**: It dynamically displays either the wallet connection status or a "Connect Wallet" button using the RainbowKit `ConnectButton` component.
- **NFT Display**: A display image of the **dennyswamb Punks** NFT collection is presented using the `Next/Image` component for optimized rendering.

## 4. Configuration
To configure the ENS Dapp, ensure that the following environment variables and dependencies are properly set up:

1. **Network**: The application runs on the Sepolia testnet. Make sure your wallet is configured to interact with the Sepolia network.
2. **Wallet Integration**: Use RainbowKit to integrate wallet connectors (MetaMask, Ledger, etc.) for smooth wallet connection experiences.
3. **ENS Support**: Wagmi is configured to resolve ENS names associated with Ethereum addresses.

## 5. Libraries Used
The ENS Dapp makes use of the following libraries:
- **React**: Core library for building UI components.
- **RainbowKit**: Wallet connection tool supporting multiple wallets.
- **Wagmi**: For handling Ethereum wallet connections and ENS integrations.
- **TanStack Query**: For managing data fetching and caching logic.
- **Next.js**: To provide server-side rendering and efficient routing.
- **Next/Image**: For optimizing images in the application.

This documentation provides a general overview and essential technical details of the ENS Dapp. Make sure to configure the dapp correctly and install all necessary dependencies for it to run smoothly.