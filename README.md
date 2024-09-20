# Movie Watchlist App
This is a movie watchlist application built using React.js and TMDb API. The application allows users to browse popular movies, search for specific films, and add them to a personalized watchlist. Users can also remove movies from their watchlist.

# Key Features
* Movie Listing: Displays popular and trending movies fetched from the TMDb API.
* Search Functionality: Allows users to search for movies by title.
* Watchlist Management: Users can add or remove movies from their watchlist.
* Persistent Watchlist: The watchlist is managed using React state. User can save  the watchlist in local storage .
* Dynamic Movie Information: For each movie, the app shows key information such as title, rating, popularity, and genres.

# Technologies Used
* Frontend: React.js with functional components and hooks (useState)
* Routing: React Router for navigating between the movie list and the watchlist.
* API: TMDb (The Movie Database) API for fetching movie details.
* Styling: Tailwind CSS for responsive design.
* Version Control: Git and GitHub for project management and versioning.
* Docker: For containerizing the application for easy deployment.

# How to Run the Project

 1) Install dependencies: Navigate into the project folder and install the required packages:
    ```
        cd movie-watchlist-app
        npm install
    ```
 2) Build for production: If you want to build the project for production, run:
    ```
    npm run build
    ```
    
 3) Run the application:
    ```
    npm run preview
    ```
