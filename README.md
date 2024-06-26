# Simple Dark Portfolio Template

![Simple Portfolio Template](https://github.com/sarahdewitt/portfolio-template/raw/main/public/cover.jpg "Portfolio Template Cover")

A simple, dark mode portfolio template built with TailwindCSS, Next.js, and Framer Motion.

Designed and Developed by Sarah De Witt.

## Features

- Personal Introduction and Summary
- About Me
- Projects Grid
- Contact and Socials

## Demo

Check out the live demo [here](#).

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

2. Install the dependencies:

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

### Running the Development Server

Start the development server:

    ```bash
    # Using npm
    npm run dev

    # Using yarn
    yarn dev
    ```

Open your browser and navigate to `http://localhost:3000`. You should see your portfolio site running.

### Building for Production

To create an optimized production build:

    ```bash
    # Using npm
    npm run build

    # Using yarn
    yarn build
    ```

This will create a `/.next` folder with the production build.

### Running in Production Mode

To run the project in production mode:

    ```bash
    # Using npm
    npm run start

    # Using yarn
    yarn start
    ```

## Project Structure
```
.
├── app                     # Layout, page and globals.css files
├── components              # Components organised according to Atomic Design
│   ├── atoms               # Basic building blocks
│   ├── molecules           # Blocks that contain atoms
│   └── organisms           # Sections of the website
├── public                  # Static files
│   └── images
├── utils                   # Utility functions
│   ├── AnchorsHeader.ts    # Anchors in the header
│   ├── ContactSocials.ts   # Contact and socials information
│   └── ProjectInfo.ts      # Project information in project grid
├── .prettierrc             # Prettier configuration file
├── .gitignore              # Git ignore files
├── next.config.mjs         # Next.js configuration file
├── tailwind.config.ts      # TailwindCSS configuration
└── package.json            # Project dependencies and scripts
```

## Customization

### TailwindCSS

To customize the TailwindCSS configuration, edit the `tailwind.config.js` file.

### Framer Motion

You can add animations using Framer Motion by importing and using its components and hooks in your React components. Refer to the [Framer Motion documentation](https://www.framer.com/motion/) for more details.

## Deployment

You can deploy this Next.js project to Vercel, Netlify, or any other static site hosting service.

### Deploying to Vercel

1. Install the Vercel CLI:

    ```bash
    npm install -g vercel
    ```

2. Deploy the project:

    ```bash
    vercel
    ```

Follow the prompts to complete the deployment.

## Technologies Used

- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Framer Motion](https://www.framer.com/motion/)
- [HeadlessUI](https://headlessui.com/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.


