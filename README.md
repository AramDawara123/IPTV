# Streaming Service

## Overview
Welcome to **Stremium**, a modern platform where users can stream their favorite movies, TV shows, and exclusive content. Our service offers a wide selection of genres.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features
- **User Authentication**: Login feature where you can register and login.
- **Content Library**: Extensive library of movies and TV shows.(coming filtering and search)
- **Watchlists**: Create, view, and manage your watchlists.

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Python min 3+
- Node.js v18+ installed
- npm or Yarn
- SQLAlchemy Sqlite

### Steps
1. Clone the repository:    
    ```bash
    git clone https://github.com/AramDawara123/IPTV
    ```
2. Navigate to the project directory:
    ```bash
    cd IPTV
    ```
3. Install dependencies:
    ```bash
    When running the flask application it will dowload the requirements.
    ```
4. Run the app:
    ```bash
    npm start
    to run flask use:
    python main.py to run the flask application

    to run react use: 
    cd iptv-react
    npm run dev 
    you can cancel it by typing q
![testgif](https://github.com/AramDawara123/IPTV/blob/main/IPTV-REACT/images/gif%20github.gif)

    ```

## Usage
Once the installation is complete, you can access the application in your browser at `http://localhost:5173`.

- **Search**: Use the search bar to find your favorite content.
- **Watch**: Click on a title to start streaming. Playback controls are available on the video player.
- **Watchlists**: Add or remove titles from your watchlist by clicking the "Add to Watchlist" button.


## Technologies Used
- **Frontend**:React, JavaScript.
- **Backend**: Python , Flask.
- **Database**: SQLACHEMY, SQlite.
- **Video Streaming**: HLS (HTTP Live Streaming).
