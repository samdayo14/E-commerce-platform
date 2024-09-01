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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Design Decisions, Optimizations, and Trade-Offs
Design Decisions
Component-Based Architecture: The project uses a component-based architecture with React. This approach ensures that each UI element (e.g., ProductCard, ProductForm, EditForm) is modular and reusable, promoting maintainability and scalability.

Context API for State Management: The React Context API is used to manage global state, such as the list of products and user preferences. This avoids prop drilling and centralizes state management, simplifying component communication.

Responsive Design: The UI is designed to be mobile-first, ensuring a good user experience across various devices. Media queries and responsive design techniques are applied to adapt layouts and styles based on screen size.

Form Validation and User Feedback: Toast notifications and error messages are used to provide real-time feedback to users when they add, edit, or delete products. This enhances usability and helps users understand the outcomes of their actions.

Optimizations
Local Storage for Data Persistence: Product data is stored in local storage to ensure that user changes persist across page reloads. This optimization improves user experience by maintaining state between sessions.

Efficient Filtering and Sorting: Products are filtered and sorted on the client side to improve performance. This approach reduces the need for frequent API calls and enhances the responsiveness of the product list.

Image Handling: Images are handled with proper error handling and fallback mechanisms to ensure that broken or unavailable images do not disrupt the user experience.

Code Splitting: Code splitting techniques are used to load only the necessary JavaScript for each page. This reduces the initial load time and improves application performance.

Trade-Offs
Local vs. Remote Data Handling: While local storage improves performance and offline usability, it does not handle concurrent updates from different devices. For real-time synchronization across devices, a backend service would be needed, which would increase complexity.

Client-Side Filtering: Although client-side filtering is faster and reduces API calls, it can become inefficient with a large number of products. For handling large datasets, server-side filtering and pagination would be more appropriate.

No Sticky Navbar: The decision to avoid a sticky navbar prioritizes a clean design and user focus on content. However, this means users need to scroll back to the top to access navigation options, which could impact usability on long pages.

## SEO Considerations
SEO Implementation
Meta Tags and Title: Dynamic meta tags and titles are used for each page to ensure that they are relevant to the page content. This improves search engine visibility and helps users find the right content.

Semantic HTML: The project uses semantic HTML elements (e.g., <main>, <section>) to enhance the structure and meaning of the content. This aids search engines in understanding the page's content and improves accessibility.

Image Alt Text: All images include descriptive alt attributes. This not only helps with SEO but also improves accessibility for users who rely on screen readers.

Sitemap and Robots.txt: A sitemap is provided to help search engines crawl and index the site efficiently. The robots.txt file is configured to manage which pages should be indexed and which should be excluded.

Performance Optimization: Page speed is optimized by minimizing JavaScript and CSS files, optimizing images. Faster load times contribute to better SEO rankings.
