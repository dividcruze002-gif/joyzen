# Joyzen Website

A React recreation of the Joyzen healthcare website, featuring a modern design with navigation bar and hero section with medical consultation background.

## Features

- **Exact Design Replication**: Matches the original design with precise colors, layout, and typography
- **Responsive Navigation Bar**: Logo with orange accent, navigation links, and CTA button
- **Hero Section**: Full-screen background image with gradient overlay and text content
- **Mobile Responsive**: Optimized for all screen sizes

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd c:\Users\hp\OneDrive\testproject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
testproject/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Styling for the application
│   └── index.js        # React DOM rendering
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## Design Details

### Navigation Bar
- **Logo**: "÷joyżen" with orange accent on the division symbol
- **Links**: About, Programs, Who It's For, Products
- **CTA Button**: "Book Clarity Call" with circular icon

### Hero Section
- **Background**: Medical consultation image with patient and doctor
- **Overlay**: Gradient for text readability
- **Content**: "A New Health System" headline and subtitle

### Color Scheme
- **Orange**: #FF6B35 (logo accent)
- **Grey**: #666666 (logo text)
- **White**: For navigation text and hero content
- **Gradient overlays**: For depth and readability

## Customization

To replace the background image:
1. Update the `background-image` URL in `src/App.css`
2. Adjust the gradient overlay if needed

To modify colors or text:
1. Edit the corresponding values in `src/App.css`
2. Update text content in `src/App.js`

## Technologies Used

- React 18.2.0
- CSS3 with modern features (flexbox, gradients)
- Responsive design principles
