# Cronos Accelerator 2023 - Client

## Getting Started

`npm install` to install dependencies

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Everything you need is inside `pages/index.ts`.

To customize the website to load info from your own contract, change the following:

- Update `CONTRACT_ADDRESS` in `helpers/constants.ts` to your own tipCreator contract on the Cronos testnet.
- Update `utils/tipCreator.json` to match the json artifact for your contract after compilation.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
