# DrumKit

This Project is a modification from [WesBos Javascript 30](https://courses.wesbos.com/account/signin)

## Demo

https://github.com/user-attachments/assets/fb7e247e-f853-4f10-a3c3-92fec955e3d7

# Objectives

**JavaScript Basics**

- Understand the role of variables, constants, and functions in JavaScript.
- Explore event listeners and their importance in handling user interactions.

**Working with DOM**

- Learn how to select DOM elements using `document.querySelector` and `document.querySelectorAll`.
- Understand how to manipulate DOM elements dynamically by adding and removing CSS classes.

**Keyboard Events**

- Understand how to listen for and respond to `keydown` events.
- Learn how to identify specific keyboard keys using the `event.keyCode` or `event.code` property.

**CSS Transitions**

- Understand how CSS transitions can be triggered using JavaScript.
- Explore the interaction between JavaScript and CSS to create smooth animations.

## Push Work

- Since I wanted a sound to play when a user clicks on a part of the image according to the instrument, my first idea was to screenshot each instrument separately and assemble them together. However, this approach turned out to be too complex, so I explored using an image map to create an interactive image. I used [Free Online Image Map Generator](https://www.image-map.net/).

- I then encountered another problem: since the map was created using pixels, it was not responsive at all. To address this, I used a CSS script from [GitHub](https://github.com/davidjbradshaw/image-map-resizer) to make it responsive, ensuring the image map adapts correctly across all devices.

- I used percentages for everything, including the main drumkit image and each clickable object, to make sure they stayed properly aligned as the image scaled up or down. Additionally, I found that using `rem` units for font sizes worked better, helping to maintain responsiveness as the drumkit resized.
