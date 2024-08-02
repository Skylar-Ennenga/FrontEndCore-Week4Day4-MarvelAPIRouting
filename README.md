# Marvel Characters Viewer

This project is a React application that fetches and displays Marvel characters using the Marvel API. Users can browse a list of Marvel characters, view details, and explore associated comics.

## Table of Contents

- [Marvel Characters Viewer](#marvel-characters-viewer)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Integration](#api-integration)
    - [Example API Call](#example-api-call)
  - [Components](#components)
    - [`CharacterList`](#characterlist)
    - [`CharacterDetails`](#characterdetails)
  - [Contributing](#contributing)
    - [Note:](#note)

## Overview

The Marvel Characters Viewer is a simple React application that allows users to browse through a list of Marvel characters fetched from the Marvel API. Users can click on a character to view additional details such as the description and associated comics directly within the character card.

## Features

- **Character Listing:** Fetches and displays a list of Marvel characters.
- **Character Details:** View detailed information about each character, including their description and associated comics.
- **Dynamic Image Loading:** Displays character images using the Marvel API's dynamic image URLs.
- **Responsive UI:** Uses Bootstrap for styling to create a responsive and user-friendly interface.

## Installation

To get started with this project, follow the steps below:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Skylar-Ennenga/FrontEndCore-Week4Day3-MarvelAPI.git
   cd marvel-characters-viewer
   ```

2. **Install Dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Setup Marvel API Key:**

   - Sign up at [Marvel Developer Portal](https://developer.marvel.com/) to get your API key.
   - In the project directory, create a `.env` file and add your API credentials:

     ```
     REACT_APP_MARVEL_PUBLIC_KEY=your_public_key
     REACT_APP_MARVEL_HASH=your_md5_hash
     ```

4. **Start the Development Server:**

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can:

1. **Browse Characters:** View a list of Marvel characters displayed as cards.
2. **View Details:** Click on the "Show Details" button in a character's card to view more information, including their description and associated comics.
3. **Hide Details:** Click "Hide Details" to collapse the details view within the card.

## API Integration

This project integrates with the Marvel API to fetch character data, including:

- **Character List:** The list of characters is fetched.
- **Character Details:** Detailed information about each character, including their description and associated comics.

### Example API Call

The application makes an API call.

## Components

### `CharacterList`

- Fetches and displays a list of characters.
- Each character is shown as a card with an image, name, and a button to show more details.

### `CharacterDetails`

- Displays additional information about the selected character, including the description and associated comics.

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your branch.
4. Submit a pull request with a description of your changes.


---

### Note:
- Customize the placeholders like `your-username`, `your_public_key`, and `your_md5_hash` with your actual data.
- If you're using environment variables or specific tools, ensure the setup instructions reflect those details accurately.

This README provides a good foundation for your project and can be expanded or customized further based on your specific needs.
