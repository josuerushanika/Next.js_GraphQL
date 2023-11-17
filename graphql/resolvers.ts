export const resolvers = {
    Query: {
        links: () => [
            {
                category: "Open Source",
                description: "Fullstack React framework",
                id: 1,
                imageUrl: "https://github.com/vercel.png",
                title: "Next.js",
                url: "https://nextjs.org",
              },
              {
                category: "Open Source",
                description: "Next Generation ORM for TypeScript and JavaScript",
                id: 2,
                imageUrl: "https://github.com/prisma.png",
            
                title: "Prisma",
                url: "https://prisma.io",
              },
              {
                category: "Open Source",
                description: "Utility-fist css framework",
                id: 3,
                imageUrl: "https://github.com/tailwindlabs.png",
                title: "TailwindCSS",
                url: "https://tailwindcss.com",
              },
        ],
    }
}