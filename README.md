# E-commerce Store

## Description
This is an e-commerce store built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. The backend is powered by Sanity CMS, and the application is deployed on Vercel. The project features dynamic routing for products and categories.

## Features
- **Dynamic Routing**: Categories and products are dynamically loaded based on data from Sanity.
- **Responsive Design**: Built with Tailwind CSS. (Currently optimized for desktop only)
- **Sanity Integration**: Products and categories are managed using Sanity CMS.

## Setup Instructions

> ### Clone the Repository:
> ```bash
> git clone https://github.com/Sarfaraz-ul-Haq/e-commerce_store.git
> cd e-commerce_store
> ```

> ### Install Dependencies:
> ```bash
> pnpm install
> ```

> ### Set Up Environment Variables:
> Create a `.env.local` file in the root directory and add your Sanity project ID, dataset, and other necessary environment variables:
> ```bash
> NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
> NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
> ```

> ### Run the Development Server:
> ```bash
> pnpm run dev
> ```
> Open (http://localhost:3000) with your browser to see the result.

## Todo
- **Product Detail Page**: Implement the dynamic route for individual product details.
- **Add to Cart Functionality**: Implement functionality to add products to the cart.
- **Stripe Integration**: Integrate Stripe for payment processing.
- **Mobile Responsiveness**: Optimize the design for mobile devices.
- **Notifications**: Integrate React Hot Toast for notifications.
- **Icons**: Use Lucid Icons from Shadcn UI.
