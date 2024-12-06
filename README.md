# Next.js 14 Course for Beginners (Strapi 5)

Based on the youtube video by LearnWebCode https://www.youtube.com/watch?v=04bNEnIzCJc

This a portfolio like website with a homepage and team members page and about us page

## Contents

- JSX
- State in React
- Fetch data in Next.js
- URL Patterns / Routing in Next.js
- Tailwind CSS
- Content live in a CMS

## Technologies Used

- Next.js 14
- Strapi 5 (CMS)
- Tailwind CSS

## Project Creation (using Manual Method)

`npm init -y`
`npm install next react react-dom`
Landing page created at 'app/page.jsx' with a simple h1.
Package.json updated with scripts for development and build. (copied from https://nextjs.org/docs/app/getting-started/installation#manual-installation)

## Project Start

`npm run dev`

## Tailwind CSS Installation

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`
this last script will create a tailwind.config.js and postcss.config.js

On the tailwind.config.js paste the 'content' array to indicate the folders to apply the styles.

```js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create a css file (can be any name in any folder, for the example it was used assets/main.css) and paste the below.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally import on top of the layout.jsx file
`import "../assets/main.css";`

## Strapi Installation

On a new project folder, run the command `npx create-strapi-app@latest my-strapi-app`` (Skip login / typescript no)

Run the command `npm run develop` to start the server.
