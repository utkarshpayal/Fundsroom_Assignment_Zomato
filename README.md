# Fundsroom Assignment – Zomato Clone with Cooking Live Stream & Recipe Videos

This repository contains a frontend Zomato clone (React JS + Vite) in the [`zomato_clone-main/`](zomato_clone-main) folder, extended with two features on the restaurant page:

- **Cooking Live Stream** ("Meeting" tab) – a panel with *Join Live Stream* / *Leave Live Stream* buttons. Joining asks for camera and microphone access and shows your video in the page; leaving stops the tracks and shows "The live stream has ended."
- **Recipe videos** ("Videos" tab) – a grid of embedded YouTube cooking/recipe videos with thumbnails, a *Load More* button, and a modal player.

The rest of the app (home page, order online / dining / nightlife listings, restaurant overview, order, reviews, photos and menu pages, user profile, login/signup modals) is a static UI clone; all data is sample data and there is no backend API in this repository.

## Project structure

```
.
├── README.md                 # this file
└── zomato_clone-main/        # the Vite + React application
    ├── Project Images/       # screenshots
    ├── public/               # banners and icons
    ├── src/
    │   ├── main.jsx          # routes
    │   ├── components/RestaurantComponents/OrderBodyComponent/Components/
    │   │   ├── MeetingComponent/   # Cooking Live Stream
    │   │   └── VideosComponent/    # Recipe videos
    │   └── ...
    ├── package.json
    └── vite.config.js
```

## Routes

Defined in `zomato_clone-main/src/main.jsx`:

| Route | Page |
| ----- | ---- |
| `/` | Home |
| `/show-case?page=order-online` \| `dinning-out` \| `night-life` | Order online / Dining out / Nightlife listings |
| `/user/:userId/:hashId` | User profile |
| `/:city/:hotel` | Restaurant overview |
| `/:city/:hotel/:page` | Restaurant sub-page: `order`, `reviews`, `photos`, `menu`, `meeting` (live stream), `video` (recipe videos) |
| `*` | Error (404) page |

## Tech stack

- React 18, React Router v6
- Vite 2 (`@vitejs/plugin-react`)
- Formik + Yup (forms and validation)
- React Slick / slick-carousel (carousels)
- socket.io-client (live stream component)
- Tailwind CSS / PostCSS / Autoprefixer, plus CSS modules

## Getting started

Prerequisites: Node.js and npm.

```sh
cd zomato_clone-main
npm install
npm run dev
```

Then open the local URL printed by Vite.

Available scripts (in `zomato_clone-main/package.json`):

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |

There is no test script.

## Configuration

No environment variables are used.

The live stream component (`MeetingComponent.jsx`) connects to a Socket.IO server at the hard-coded URL `http://localhost:8080` and emits a `stream` event when you join. **No streaming server is included in this repository**, so out of the box only the local camera preview works; broadcasting to other viewers requires a separate server (needs confirmation). Edit the URL in the component to point to a different server.

## Screenshots

Screenshots in `zomato_clone-main/Project Images/` (from the base Zomato clone):

### Home Page

<img src="zomato_clone-main/Project Images/Home.png" />

### Order Online Page

<img src="zomato_clone-main/Project Images/OrderOnlinePage.png" />

### Restaurant Order Page

<img src="zomato_clone-main/Project Images/HotelOrderPage.png" />

### Login

<img src="zomato_clone-main/Project Images/LoginPage.png" />

More details about the base clone are in [`zomato_clone-main/README.md`](zomato_clone-main/README.md).
