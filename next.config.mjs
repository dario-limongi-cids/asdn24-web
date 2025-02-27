/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enable static page exports, required for publishing a Next.js project to GitHub Pages
  basePath: "/asdn24-web", // needed for images support on GitHub Pages
  images: {
    unoptimized: true, // needed for images support on GitHub Pages
  },
};

export default nextConfig;
