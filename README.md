<h1> React App Skeleton  </h1>

- [Usage:](#usage)
- [Recommended VSCode extensions:](#recommended-vscode-extensions)
- [Skeleton info](#skeleton-info)
- [Dependecies](#dependecies)

## Usage:
- Download code:
```bash
git clone [](https://github.com/tonikny/react-js-skeleton.git) myProject
```
- Change to project directory:
```bash
cd myProject
```
- Configure your remote repository (if needed):
```bash
git remote set-url origin https://your-remote-repo-server/repository.git 
```
- Change to application directory:
```bash
cd app
```
- Run the app and start coding ...
```bash
npm run dev
```

## Recommended VSCode extensions:
  - ESLint
  - Prettier - Code formatter
  - VS Code ES7+ React/Redux/React-Native/JS snippets
  - Vitest


## Skeleton info
Created with:
```bash
mkdir -p myProject/app
cd myProject/app
npm create vite@latest . -- --template react
npm install 
npx install-peerdeps --dev eslint-config-airbnb
npm install -D eslint-config-prettier
npm install prop-types styled-components modern-normalize immer react-router-dom 
```
and added some configuration files with recommended settings

## Dependecies

- **dependencies**:
  - from Vite create:
    - react
    - react-dom
  - prop-types
  - styled-components
  - modern-normalize
  - immer
  - react-router-dom 

- **devDependencies**:
  - from Vite create:
    - @types/react
    - @types/react-dom
    - @vitejs/plugin-react
    - vite
  - eslint
  - eslint-config-airbnb
    - eslint-plugin-import
    - eslint-plugin-jsx-a11y
    - eslint-plugin-react
    - eslint-plugin-react-hooks
  - eslint-config-prettier
