<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/emjimadhu/corona-tracker">
    <img src="repo-assets/logo.png" alt="Logo" width="250">
  </a>

  <h3 align="center">srts.pw</h3>

  <p align="center">
    A URL Shortner.
    <br />
    <br />
    <a href="https://srts.pw/">Website</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
 * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Main Scripts](#main-scripts)
* [Directory Structure](#directory-structure)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

A URL Shortner for everyone. This project built using React.js, Vue.js, Nest.js, Typescript and NX Workspace.

## Built With

* [ReactJS](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [NX Workspace](https://nx.dev/react)
* [NodeJS](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Vue](https://vuejs.org)
* [NestJS](https://nestjs.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- **node** - v12.16.1
- **npm** - v6.14.5
- **yarn** - v1.22.4
- **nx** - v10.0.11
- **vue** - v4.5.4
- **nest** - v7.5.1

### Installation

1. Clone the repo

```sh
# SSH
git clone git@github.com:emjimadhu/srts.pw.git

# HTTPS
git clone https://github.com/emjimadhu/srts.pw.git
```

2. Install NPM packages

```sh
yarn # or yarn install
```

## Main Scripts

* `yarn start:client` - Starts Development server for client react app,
* `yarn start:admin` - Starts Development server for client vue app,
* `yarn start:server` - Starts Development server for client nest app

## Directory Structure

- `root`: Project root holds all the flies of the project
  - `apps`: Holds all the apps
    - `client`: Directory contains all the React app codes
    - `admin`: Directory contains all the Vue app codes
    - `server`: Directory contains all the Nest app codes
  - `libs`: Holds all the common library and codes you can share between apps
    - `client`: Holds all the components and services used in react app
    - `server`: Holds all the components and services used in nest app
  - `repo-assets`: Holds all the assets for README.



<!-- CONTACT -->
## Contact

Em Ji Madhu - [![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/emjimadhu/srts.pw](https://github.com/emjimadhu/srts.pw)

Website Link: [https://srts.pw/](https://srts.pw/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: repo-assets/screenshot.png
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=1
[linkedin-url]: https://www.linkedin.com/in/em-ji-madhu-8b007456/
