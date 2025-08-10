# 🌟 Interactive Floating Dots

A mesmerizing interactive web experience featuring floating particles that connect to your cursor, built with React and enhanced with smooth animations and dynamic gradients.

![Interactive Dots Demo](https://img.shields.io/badge/Demo-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.1-yellow)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.11-teal)
![License](https://img.shields.io/badge/License-ISC-orange)

## ✨ Features

- **🎨 Dynamic Backgrounds**: Click anywhere to cycle through 10 beautiful gradient backgrounds
- **🔗 Interactive Connections**: Floating dots connect to your cursor with distance-based opacity
- **📱 Responsive Design**: Seamlessly adapts to all screen sizes and devices  
- **⚡ Smooth Performance**: Optimized canvas rendering with 60fps animations
- **🎭 Visual Effects**: Shimmer text animations and pulsing background overlays
- **🎯 Smart Connections**: Limited connection system prevents visual clutter

## 🚀 Demo

Move your mouse around the screen to see the dots connect to your cursor! Click anywhere to change the beautiful gradient background.

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.1
- **Styling**: Tailwind CSS 4.1.11
- **Canvas**: HTML5 Canvas API
- **Animations**: CSS animations & RequestAnimationFrame

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/floating-dots-website.git
   cd floating-dots-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the magic!

## 🎮 Usage

- **Mouse Movement**: Move your cursor to see dots connect with smooth lines
- **Click**: Click anywhere to cycle through gradient backgrounds
- **Responsive**: Works beautifully on desktop, tablet, and mobile devices

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
floating-dots-website/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Modify Dot Behavior
```javascript
// In App.jsx, adjust these constants:
const DOT_COUNT = 100;           // Number of floating dots
const CONNECTION_DISTANCE = 150; // Connection range
const MAX_CONNECTIONS = 5;       // Max connections per cursor
```

### Add New Gradients
```javascript
// Add new gradient classes to the darkGradients array:
const darkGradients = [
  'bg-gradient-to-br from-your-color via-accent-color to-your-color',
  // ... more gradients
];
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built with ❤️ using React and Vite
- Styled with Tailwind CSS for rapid development
- Canvas animations inspired by particle systems
- Gradient designs crafted for visual appeal

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

---

<div align="center">

**Made with 💫 by [Your Name]**

[⭐ Star this repo](https://github.com/your-username/floating-dots-website) if you found it helpful!

</div>