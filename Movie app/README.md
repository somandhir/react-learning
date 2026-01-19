    # 🎬 FilmFlare — Movie Discovery Web Application

    FilmFlare is a modern movie discovery web application built using **React.js** that allows users to explore popular movies, watch trailers, search for films, and curate a personalized watchlist. The app integrates real-time data from **TMDB (The Movie Database) API** and streams official movie trailers using **YouTube** for an immersive browsing experience.

    ---

    ## 🚀 Features

    ### 🔥 Popular Movies Feed
    - Fetches and displays **real-time popular movies** using the TMDB API
    - Movies are presented as **interactive cards** with:
    - Poster / backdrop image
    - Movie title and release year
    - Short overview
    - Rating displayed prominently
    - Subtle dark gradient overlay for enhanced readability

    ---

    ### 🎞️ Movie Details & Trailer Playback
    - Clicking **“Show Details”** opens a full-screen detailed preview
    - Automatically plays the **official movie trailer** using the YouTube Player API
    - Trailer playback features:
    - Autoplay
    - Looping
    - Mute / unmute controls
    - Fallback poster image is shown if a trailer is unavailable
    - Displays detailed metadata:
    - Rating
    - Release year
    - Runtime (formatted as hours & minutes)
    - Original language

    ---

    ### ❤️ Watchlist (Like Feature)
    - Users can **like movies** directly from movie cards
    - Liked movies are stored in a centralized **Watchlist component**
    - Watchlist is accessible from the **top-right corner** of the application

    ---

    ### 🌍 Language-Based Filtering
    - Filter popular movies by **13 different languages**
    - Enhances global accessibility and content personalization

    ---

    ### 🔄 Infinite Scrolling
    - Implements **infinite scrolling** for the popular movies page
    - Uses:
    - `useRef`
    - `IntersectionObserver`
    - Dynamically loads additional movies as the user scrolls
    - Optimized for performance without overwhelming the UI

    ---

    ### 🔍 Search Functionality
    - Search movies using TMDB’s search API
    - Displays all relevant movies based on user input
    - Search results support:
    - Liking movies
    - Viewing details
    - Trailer playback

    ---

    ## 🛠️ Tech Stack

    - **Frontend:** React.js
    - **Styling:** CSS
    - **APIs:**
    - TMDB API (movie data)
    - YouTube Player API (trailers)
    - **State Management:** React Hooks
    - `useState`
    - `useEffect`
    - `useRef`
    - **Build Tool:** Vite

    ---

    ## 📂 Project Structure

    ```text
    Movie App/
    ├── src/
    │   ├── components/
    │   │   ├── MovieCard.jsx
    │   │   ├── LargeView.jsx
    │   │   ├── Watchlist.jsx
    │   │   └── Search.jsx
    │   ├── pages/
    │   │   └── Home.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── styles/
    ├── public/
    ├── .env
    ├── package.json
    └── README.md

    ---

    ## ▶ Getting Started

    ### 1️ Clone the Repository
    ```bash
    git clone https://github.com/somandhir/react-learning.git
    cd react-learning/Movie\ app
    ### 2 Install Dependencies
    ```bash
    npm install

    ### 3 Run the Development Server
    ```bash
    npm run dev

    The application will start at:

    http://localhost:5173

    Author

    Soman Dhir

    LinkedIn: https://linkedin.com/in/somandhir

    GitHub: https://github.com/somandhir