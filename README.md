# GitHub User Finder

A simple **Vue 3** application scaffolded with **Vite** that consumes the **GitHub REST API** to fetch and display details of a user by their username.

---

## 🚀 Features

- ⚡ Built with [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/)
- 🎨 Clean UI for searching GitHub users
- 🔍 Fetches data directly from the [GitHub REST API](https://docs.github.com/en/rest/users/users#get-a-user)
- 📄 Displays:
  - Name
  - Username
  - Avatar
  - Company
  - Blog / Website
  - Location
  - amount of Repositories
  - Followers / Following

---

## 📦 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-user-finder.git
cd github-user-finder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app should now be running at:  
👉 [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Usage

1. Enter a GitHub username in the search bar.
2. The app will call the GitHub API:
   ```
   https://api.github.com/users/<username>
   ```
3. The user’s profile details will be displayed on the page.

---

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) (next-gen frontend tooling)
- [GitHub REST API](https://docs.github.com/en/rest)

---

## 📂 Folder Structure (simplified)

```
.
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, icons, styles
│   ├── components/  # Reusable Vue components
│   ├── App.vue      # Root component
│   └── main.js      # Entry file
├── index.html       # App entry point
└── vite.config.js   # Vite config
```

---

## 📸 Preview (example)

```text
+--------------------------------------------------+
|  [ Avatar ]   ofureehiremhen                     |
|                                                  |
|  Name:  Ofure Ehiremhen                          |
|  Company:  myCompany                             |
|  Blog:  https://myportfolio.com                  |
|  Location:  Nigeria                              |
|  Repos:  42     Followers: 120     Following: 88 |
+--------------------------------------------------+
```

---

## 🔑 API Notes

- The app uses GitHub’s **public API**, so authentication is not required.
- GitHub applies [rate limiting](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting):
  - 60 requests/hour (unauthenticated)
  - 5000 requests/hour (authenticated with a token)

If you need higher limits, create a **Personal Access Token** and use it with your requests.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
