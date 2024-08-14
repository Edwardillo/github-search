# React + TypeScript + Vite

This project was based on the [React + TypeScript + Vite].

## Getting Started

First, you need to get a GitHub access token. You can get
it [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token).
for this project you only need a basic token, select the `public_repo` scope.

when you are done with creating your token, rename the .env.example to `.env` file in the root of the project and add your token
to the `VITE_GITHUB_ACCESS_TOKEN` variable.

after that, you can run the following commands:

```bash
# Install dependencies
npm install
# Run the development server
npm run dev
```