# FilmFlare 🎬

A feature-rich movie discovery web application built with React that lets you explore, search, and curate your perfect watchlist using real-time data from The Movie Database (TMDB).

![FilmFlare Demo](./demo.gif)

## ✨ Features

### 🎥 Movie Discovery
- **Popular Movies Feed** - Browse continuously updating popular movies with smooth infinite scrolling
- **Advanced Search** - Find any movie instantly with the integrated TMDB search engine
- **Language Filters** - Discover movies across 13 different languages for personalized content

### 🎬 Immersive Viewing Experience
- **Trailer Playback** - Watch official YouTube trailers directly in the app with autoplay and mute controls
- **Detailed Movie View** - Access comprehensive movie information including ratings, runtime, release year, and original language
- **Smart Fallback** - High-resolution posters display when trailers aren't available

### 📝 Personal Watchlist
- **One-Click Saves** - Like movies to add them to your personal watchlist
- **Easy Access** - View and manage your saved movies from the top-right corner
- **Persistent Storage** - Your watchlist is preserved across sessions

### 🎨 Polished UI/UX
- **Beautiful Movie Cards** - Each card features poster art, ratings, and descriptions with elegant gradient overlays
- **Responsive Design** - Seamless experience across all device sizes
- **Infinite Scrolling** - Load more movies automatically as you browse

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TMDB API Key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/filmflare.git
cd filmflare
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

4. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🛠️ Built With

- **[React](https://react.dev/)** - UI library with Hooks (useState, useEffect, useRef)
- **[TMDB API](https://www.themoviedb.org/documentation/api)** - Real-time movie data and metadata
- **[YouTube Player API](https://developers.google.com/youtube/iframe_api_reference)** - Embedded trailer playback
- **[Vite](https://vitejs.dev/)** - Fast build tool and development server
- **Modern CSS** - Custom styling with gradients, animations, and responsive design

## 📁 Project Structure

```
filmflare/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx       # Individual movie card component
│   │   ├── MovieDetails.jsx    # Detailed view with trailer
│   │   ├── Watchlist.jsx       # Saved movies component
│   │   └── SearchBar.jsx       # Search functionality
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── .env                       # Environment variables (not in repo)
├── package.json
└── README.md
```

## 🎯 Key Technical Implementations

### Infinite Scrolling
Implements `IntersectionObserver` API with React refs to detect when users reach the bottom of the page, automatically loading the next page of movies for optimal performance.

### YouTube Trailer Integration
- Dynamically fetches trailer keys from TMDB
- Filters for YouTube-hosted content only
- Implements player lifecycle controls (autoplay, mute/unmute, looping)
- Graceful fallback to poster images

### Efficient State Management
- Centralized state for movies, watchlist, and filters
- Clean separation between UI and data-fetching logic
- Asynchronous API calls with proper error handling

## 🌐 API Integration

FilmFlare integrates with two primary APIs:

1. **TMDB API** - For movie data, images, and trailer information
   - Popular movies endpoint
   - Search endpoint
   - Movie details endpoint
   - Videos endpoint

2. **YouTube Player API** - For embedded trailer playback



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for their comprehensive movie API
- [YouTube](https://www.youtube.com/) for trailer hosting and player API
- Movie poster images and data are property of their respective owners

## 📧 Contact

Soman Dhir -somandhir@gmail.com
Project Link: [https://github.com/somandhir/react-learning/tree/main/Movie%20app](https://github.com/somandhir/react-learning/tree/main/Movie%20app)

---

⭐ If you found this project helpful, please consider giving it a star!