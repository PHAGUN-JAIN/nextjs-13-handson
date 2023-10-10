This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Notes

tried to follow [Learn Next.js by building a custom API with MongoDB using the latest app router.](https://youtu.be/ETV17M4SauU?si=Lt71M4JzrjT4lGWv)

Nextjs is a framework on top of Reactjs library, it requires the user to follow strict conventions, everyting from foldernames to decorators

- it supports server side rendering i.e. the pages are rendered on server itself and then served to the client
- the backend related stuff is kept under api folder which is lining in src folder
- middleware needs to nemed middleware.ts itself

[nextjs documentation](https://nextjs.org/docs/app/building-your-application)
