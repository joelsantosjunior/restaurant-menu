# Restaurant Menu Frontend Challenge

The project was created to serve as an online menu for restaurants and bars.\
Figma File:
https://www.figma.com/design/9eUcy4OeOdqP9Ux5TyCGga/Front-end-test?node-id=7-2406&t=nLbMZ2zhnqtZYXrx-0

## Who am I?

My name is Joel Santos and I am a frontend developer. I have over 6 years of experience working for large and small companies, corporations, and startups.

## How to run 

To run the project, you need to have Node.js installed on your machine.\
After that, you can clone the repository and run the following commands:

```bash
npm install
npm run dev
```
The project will be available at [http://localhost:3000](http://localhost:5173/)

## Cors Error

The project uses an API to simulate the backend, so you may encounter a CORS error when trying to access the API.\
To solve this problem, I recommend using a browser with CORS disabled, such as Google Chrome.\
To disable it you can install an extension like: [CORS Unlock](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=pt)

## How to build

To build the project, you can run the following command:

```bash
npm run build
```


## Time limitation and initial considerations

There was a problem with the first delivery which was the veggie-bistro menu (https://veggie-restro-client.vercel.app/) due to some communication problems I accidentally missed some important points to be implemented.

For this second delivery there was a time limitation, the time window available to work on this project was from 25jun until 27jun, considering I have a full time job from 8 to 18h, the available time was even shorter.  This way, I had to carefully split the work into smaller tasks that would complement each other adding up to the final project in around 16 hours of work.

## Task breakdown 

- [ ] Configure dev tools, inital libraries and project structure
    - [ ] Configure React Router
    - [ ] Configure Redux
    - [ ] Configure React Query
    - [ ] Configure CSS Modules
- [ ] Configure React Query & Caching
    - [ ] API Calls, Typescript Models
- [ ] Export assets from Figma
- [ ] Create App Layout and Main Components
- [ ] Create Search Input
- [ ] Mobile First
    - [ ] Header Layout
    - [ ] Categories Component
    - [ ] Section Component
    - [ ] Item Component
    - [ ] Footer Component
    - [ ] Item Modal
        - [ ] Options Component
    - [ ] Basket Modal
        - [ ] Item
        - [ ] Footer
- [ ] Desktop Enhancement 
    - [ ] Header
    - [ ] Basket
- [ ] Update UI Translation Labels
- [ ] Update readme.md
- [ ] Use new ViewTransitionAPI 

## About the Project

Below is the user journey:

- The user views the dishes
- The user chooses a dish and adds it to the cart
- The user can personalize the dish if available
- The user views the order and modifies it if necessary
- The user views the total order
- The user finalizes the order

## Technologies used

- React
- React Router DOM
- React-Redux
- React Query
- CSS Modules
- Typescript
- Vite

## Functional Requirements

Due to time constraints (2 days to complete the project) some non-essential functional requirements were not met so features with greater value delivery were done, such as translation and cart.

- [x]  View Menu
- [x]  View individual items
- [x]  Add Item to cart
- [x]  Update cart
- [x]  View Order
- [x]  Quick access menu
- [x]  Content translation
- [x]  Interface translation
- [x]  API Integration
- [x]  Restaurant Information
- [ ]  Unit Tests

Disclaimer: The monetary internationalization, although requested, was not included in the scope of this project. Because as a user I would like to see prices and pay using the local currency. 

Disclaimer 2: Unit tests were not done due to the time stipulated for project delivery, however, I would choose to write unit tests, especially for two items that I consider more important: cart logic and modifiers logic.

## Non-Functional Requirements

- [x]  Responsiveness (Desktop & Tablet & Mobile phone)

## Development

The project was developed in stages, starting with the construction of the user interface, visual elements, colors, and typography definition.

Then the secondary technologies (HTTP requests, routing...) to be used were defined, as well as the organization of folders and project architecture.

## User Interface

The following tools were used for the development of the user interface:

- Figma - Prototyping
- Google Fonts - Typography
- Visual Studio Code
- Vercel
- Google Chrome

A top Menu was added that becomes fixed when scrolling, allowing quick access to all item categories in the restaurant.

The Order view button is only displayed if there is at least one item in the order, as well as the total order.

I Keept the search input attached to the dishes card for bigger screens, to increase the sense of unit between those two elements
