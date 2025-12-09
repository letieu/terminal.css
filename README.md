# terminal.css
<img width="3842" height="2302" alt="image" src="https://github.com/user-attachments/assets/c050f694-fc2a-46d9-8100-dc2be8747092" />
<img width="3826" height="2294" alt="image" src="https://github.com/user-attachments/assets/53868306-30ac-4098-9f1d-430c6e3956be" />
<img width="3838" height="2298" alt="image" src="https://github.com/user-attachments/assets/8697ca76-cd98-494e-afe7-abf4af449ac6" />
<img width="3842" height="2298" alt="image" src="https://github.com/user-attachments/assets/167567a8-30cb-415b-b7fc-38d67b2070f4" />

A modern CSS framework for terminal-style websites.

## Installation

### CDN Installation

Add these links to your HTML file:

```html
<!-- In your <head> section -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/letieu/terminal.css@v0.0.3/index.css" />

<!-- Before closing </body> tag -->
<!-- [Optional: Only for toast, FAQ component] -->
<script src="https://cdn.jsdelivr.net/gh/letieu/terminal.css@v0.0.3/index.js"></script>
```

Optional: Add Tailwind CSS for layout utilities (flex, grid, spacing)

```html
<script src="https://cdn.tailwindcss.com"></script>
```

## How to Use Components

To use any component, simply:

1. Go to the [Components page](https://letieu.github.io/terminal.css/)
2. Find the component you want to use
3. Press <kbd>F12</kbd> to open DevTools
4. Inspect the component and copy the HTML code
5. Paste it into your project

### Complete HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Terminal App</title>

    <!-- terminal.css Stylesheet -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/letieu/terminal.css@v0.0.3/index.css">

    <!-- Optional: Tailwind for layout utilities -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <h1 class="title is-1 has-text-primary">Hello Terminal!</h1>
    <button class="button is-primary">Click Me</button>

    <!-- terminal.css JavaScript -->
    <script src="https://cdn.jsdelivr.net/gh/letieu/terminal.css@v0.0.3/index.js"></script>
</body>
</html>
```

## Customization

Override CSS variables to customize the theme:

```css
/* In your custom stylesheet */
:root {
    /* Change primary color */
    --primary: #00ff00;

    /* Change background */
    --terminal-bg: #0a0a0a;

    /* Change font */
    font-family: 'Courier New', monospace;

    /* Other variables */
    --terminal-fg: #f0f0f0;
    --danger: #ff5555;
    --success: #50fa7b;
    --warning: #f1fa8c;
    --info: #8be9fd;
    --border-color: #333333;
    --surface: #1a1a1a;
    --muted: #6c757d;
}
```
