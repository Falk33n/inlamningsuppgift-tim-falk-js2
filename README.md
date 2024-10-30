# Project Title

A Movie Seat Booking Application where users can:

- View different movies, including their prices and available seating.
- See which seats are already booked.
- Complete a booking form to reserve seats by entering their personal information.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About the Project

### Background

I chose to create this project in Next.js as it's the most popular React framework and because I have previous experience with it. To get started, I took the initially provided plain HTML and CSS code and refactored it into separate components to improve readability, maintainability, and follow the DRY principle.

The first step was to restructure the code to fit TSX conventions. I then set up state management for seat selection, where already-booked seats are randomly assigned using Math.random. This approach was chosen as a database setup felt unnecessary for a project of this size.

To handle movie data, I created a JSON file listing available movies and their prices and used JSON Server to simulate an API for fetching this data. I opted to use Axios for these fetch calls, as it offers a cleaner syntax and additional features compared to native JavaScript fetch().

After setting up state management for selecting movies, I integrated ShadCN into the project. ShadCN is a component library that I prefer because it provides free usage and allows modification of original component code. This was especially helpful for simplifying the form creation in this relatively small project.

### Objectives

- **Seat Selection:** Implement state management for seat selection and update the total price based on the number of seats selected.
- **Data Retrieval:** Develop functionality to fetch movie titles and prices.
- **Booking form:** Create a form allowing users to book their selected seats by entering personal information.

## Features

- **Seat Selection:** Choose your preferred seats.
- **Booking:** Reserve selected seats by submitting personal details.

## Tech Stack

- **Frontend:** Next.js (React), Tailwind CSS, ShadCN.
- **Backend:** JSON Server.

## Getting Started

Instructions on how to get started with the project.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Falk33n/inlamningsuppgift-tim-falk-js2
   ```
2. Navigate to the project directory:
   ```bash
   cd inlamningsuppgift-tim-falk-js2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. To start the development server
   ```bash
   npm start
   ```

## License

Distributed under the MIT License. This project is open source and free to use, modify, and distribute under the terms of the MIT License.

You can find the full license text in the [LICENSE](LICENSE) file.
