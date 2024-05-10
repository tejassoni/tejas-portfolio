
# Developer Portfolio

### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![](./public/image/screen1.png)

## View live preview [here](https://google.com.

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/tejassoni/tejas-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "Tejas Soni",
  profile: "/profile.png",
  designation: "Team Leader | Senior Software Engineer",
  description: "My name is Tejas Soni....",
  email: 'tejas.tejas.soni3@gmail.com',
  phone: '+91 9662768548',
  address: 'Shiv Tenament , Vadodara, Gujarat - 390021 ',
  github: 'https://github.com/tejassoni',
  facebook: 'https://www.facebook.com/soni.teju/',
  linkedIn: 'https://www.linkedin.com/in/soni-tejas/',
  twitter: 'https://twitter.com/sonitejas',
  stackOverflow: 'https://stackoverflow.com/users/3523478/tejas-soni',
  leetcode: "https://leetcode.com/u/tejassoni/",
  devUsername: "tejassoni",
  resume: "https://drive.google.com/file/d/1zJ3Vezh734hVUHZ8KL89r2vMnBMnczc7/view?usp=sharing"
};
```

`devUsername` Used for fetching blog from `dev.to`.

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---