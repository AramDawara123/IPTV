# Streaming Service

## Overview
Welcome to **Streaming Service**, a modern platform where users can stream their favorite movies, TV shows, and exclusive content. Our service offers a wide selection of genres, personalized recommendations, and high-quality playback options.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features
- **User Authentication**: Secure login and sign-up system with OAuth and traditional email/password.
- **Content Library**: Extensive library of movies and TV shows with search and filtering capabilities.
- **Watchlists**: Create, view, and manage your watchlists.

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Python min 3+
- Node.js v18+ installed
- npm or Yarn
- A MongoDB or PostgreSQL database

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/streaming-service.git
    ```
2. Navigate to the project directory:
    ```bash
    cd streaming-service
    ```
3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
4. Run the app:
    ```bash
    npm start
    to run react use: 

    npm run dev 
    and to open the wesite type o after it wich causes the project to open.
    ```

## Usage
Once the installation is complete, you can access the application in your browser at `http://localhost:3000`.

- **Search**: Use the search bar to find your favorite content.
- **Watch**: Click on a title to start streaming. Playback controls are available on the video player.
- **Watchlists**: Add or remove titles from your watchlist by clicking the "Add to Watchlist" button.


## Technologies Used
- **Frontend**:Vanilla CSS , HTML and were reworking it too react combined with typescript
- **Backend**: Python , Flask
- **Database**: SQlite
- **Authentication**: JSON Web Tokens (JWT), OAuth2
- **Video Streaming**: HLS (HTTP Live Streaming), Dash
- **Payments**: Stripe or PayPal (if applicable)

## Contributing
We welcome contributions from the community. To get started:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add a feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

