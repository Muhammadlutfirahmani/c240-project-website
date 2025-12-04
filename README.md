# Ruby's Diner - American Diner Website

A responsive, modern American diner website featuring a full menu, shopping cart functionality, and checkout system.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Menu** - Four menu categories: Breakfast, Lunch, Dinner, and Drinks
- **Shopping Cart** - Add items to cart with quantity selection
- **Cart Management** - Adjust quantities, remove items, and view real-time totals
- **Tax Calculation** - Automatic 10% tax calculation on subtotal
- **Checkout System** - Complete order summary with pricing breakdown
- **Smooth Animations** - Elegant transitions and fade-in effects
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Contact Form** - Get in touch with the diner
- **24/7 Availability** - Open around the clock

## File Structure

```
diner-website/
├── index.html          # Main HTML file
├── README.md           # This file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # Interactive functionality and cart logic
└── images/             # Directory for images (ready for future use)
```

## How to Use

1. **View the Website**: Open `index.html` in your web browser
2. **Browse Menu**: Click on menu tabs to view different meal categories
3. **Add to Cart**: 
   - Select quantity using +/- buttons
   - Click "Add to Cart"
4. **View Cart**: Click the cart icon in the navigation bar
5. **Checkout**: Review your order and click "Checkout"
6. **Contact**: Fill out the contact form to send a message

## Menu Items

### Breakfast
- Classic Pancakes - $8.99
- Country Scramble - $10.99
- Belgian Waffle - $9.99
- Western Omelet - $9.49

### Lunch
- Classic Burger - $11.99
- Crispy Fried Chicken Sandwich - $10.99
- Reuben Sandwich - $11.49
- Turkey Club - $10.99

### Dinner
- New York Strip Steak - $24.99
- Meatloaf Special - $14.99
- Fried Chicken Dinner - $15.99
- Grilled Salmon - $18.99

### Drinks
- Classic Milkshake - $5.99
- Homemade Lemonade - $3.99
- Root Beer Float - $5.49
- Fresh Brewed Iced Tea - $2.99

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with flexbox and grid
- **JavaScript** - Interactive features and cart management
- **LocalStorage** - Optional (can be added for persistent cart)

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

### Change Diner Name
Replace "Ruby's Diner" with your diner name in `index.html`

### Modify Colors
Update color variables in `css/styles.css`:
```css
:root {
    --primary-color: #dc143c;    /* Red */
    --secondary-color: #fff8dc;  /* Cream */
    --dark-color: #2c2c2c;       /* Dark */
    --accent-color: #ffd700;     /* Gold */
}
```

### Add Menu Items
Add new menu items in the appropriate category section in `index.html` with:
- Item name with emoji
- Description
- Price
- Quantity selector
- Add to cart button

## Future Enhancements

- Payment integration (Stripe, PayPal)
- User authentication and accounts
- Order history tracking
- Email notifications
- Admin dashboard for menu management
- Integration with POS systems
- Delivery tracking
- Reservation system

## License

This project is open source and available for educational purposes.

## Contact

For questions or support, please fill out the contact form on the website or visit:

**Ruby's Diner**
📍 123 Main Street, Small Town, USA 12345
📞 (555) 123-4567
📧 info@rubysdiner.com
🕒 Open 24/7

---

Made with ❤️ for lovers of classic American diner food
