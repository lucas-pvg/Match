<a id="readme-top"></a>
# :musical_note: Match!

[![Vite][vite-badge]][vite-url]
[![React][react-badge]][react-url]
[![Redux][redux-badge]][redux-url]
[![Axios][axios-badge]][axios-url]
[![Netlify][netlify-badge]][netlify-url]
[![Spotify API][spotify-badge]][spotify-url]
[![LinkedIn][linkedin-badge]][linkedin-url]
[![Gmail][gmail-badge]][gmail-url]
[![License][license-badge]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Match!</h3>

  <p align="center">
    Discover new music for your Spotify playlists
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">:question: About The Project</a>
      <ul>
        <li><a href="#built-with">:construction: Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">:checkered_flag: Getting Started</a>
      <ul>
        <li><a href="#prerequisites">:gear: Prerequisites</a></li>
        <li><a href="#installation">:computer: Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">:coffee: Roadmap</a></li>
    <li><a href="#contributing">:handshake: Contributing</a></li>
    <li><a href="#license">:page_facing_up: License</a></li>
    <li><a href="#contact">:envelope: Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## :question: About The Project :question:

<br />
<div align="center">
  <a href="">
    <img src="" alt="print" width="70%" height="auto">
  </a>
</div>
<br />

**Match!** is a different way of discovering new music for your Spotify playlists. It lets you browse through thousands of songs that may match the general feeling of your playlists and allow you to add them to your playlist easily and export them to your Spotify account. Match! also enables the user to manage their Spotify playlists or to create a completely new one, while still taking you through the experience of finding new and exciting music to listen to.

This project has no commercial intent or use. It only aims to put into practice concepts of **CSS**, **React**, **Redux** and asynchronous requests with **Axios** as a training method. It also uses the Spotify API and it was deployed using **Netlify** and can be accessed at Match!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### :construction: Built With :construction:

* [![Vite][vite-badge]][vite-url]
* [![React][react-badge]][react-url]
* [![Redux][redux-badge]][redux-url]
* [![Axios][axios-badge]][axios-url]
* [![Spotify API][spotify-badge]][spotify-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## :checkered_flag: Getting Started :checkered_flag:

The web app was deployed using **Netlify** and can be accessed at Match! It is the recommended way to experience the app. Although, if you want to get a local copy up and running follow these simple steps:

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### :gear: Prerequisites :gear:

It is required that you install `npm` before trying to run the application. This is an example of how to install it, but it can also be done by looking at the [npm documentation](https://docs.npmjs.com/about-npm).
* npm
  ```sh
  npm install npm@latest -g
  ```

You should also have a Spotify account to be able to use the Spotify web API. You can set up a free account [here](https://www.spotify.com/br-pt/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2Fintl-pt&flow_ctx=eb8e764f-f098-4041-b980-1f5fa70e3b24%3A1729280297)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### :computer: Installation :computer:

This project uses **Redux Toolkit**, **Axios** and some other packages, such as `class-variance-authority` and `react-icons`. All the required dependencies are listed in the `package.json` file. It also uses the **Spotify Web API**, so it will be necessary to generate an API key.

1. Gerenate Spotify Web API key by creating an app in your dashboard. You can follow the steps in [this documentation](https://developer.spotify.com/documentation/web-api). Keep in mind you will be asked to verify your account and to provide some information about your newly created app.
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
5. Enter your API key in `config.js`
   ```
   const API_KEY = 'ENTER YOUR API';
   ```
7. Execute the app
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## :coffee: Roadmap :coffee:

- [x] Add components and match page
- [ ] Add Playlist slice and manage logic
- [ ] Work on responsiveness
- [ ] Create API key and integration with Spotify
    - [ ] Fetching songs and playlists
    - [ ] Authentication
- [ ] Add user account
- [ ] Add playlist pages
- [ ] Fetch and export playlists to Spotify
- [ ] Add searching tool
- [ ] Add filters for the match feature


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## :handshake: Contributing :handshake:

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## :page_facing_up: License :page_facing_up:

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## :envelope: Contact :envelope:

Lucas Pavan Garieri - lucaspvg1@gmail.com

LinkedIn: [https://linkedin.com/in/lucas-pvg](https://linkedin.com/in/lucas-pvg)

Project Link: [https://github.com/lucas-pvg/Match](https://github.com/lucas-pvg/Match)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[vite-badge]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[vite-url]: https://vite.dev/
[redux-badge]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux-toolkit.js.org/
[react-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[codecademy-badge]: https://img.shields.io/badge/Codecademy-FFF0E5?style=for-the-badge&logo=codecademy&logoColor=303347
[codecademy-url]: https://www.codecademy.com/learn
[netlify-badge]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[netlify-url]: https://www.netlify.com/
[axios-badge]: https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white
[axios-url]: https://axios-http.com/ptbr/docs/intro
[spotify-badge]: https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white
[spotify-url]: https://developer.spotify.com/documentation/web-api

[license-badge]: https://img.shields.io/github/license/lucas-pvg/Match.svg?style=for-the-badge
[license-url]: https://github.com/lucas-pvg/Match/blob/main/LICENSE.txt
[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: https://mail.google.com/mail/u/0/?to=lucaspvg1@gmail.com&tf=cm
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/lucas-pvg
