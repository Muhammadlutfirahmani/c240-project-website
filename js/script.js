// Shopping Cart Array
let cart = [];

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Menu tab functionality
function showMenu(category) {
    // Hide all menu items
    const menuItems = document.querySelectorAll('.menu-items');
    menuItems.forEach(menu => {
        menu.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected menu and mark tab as active
    const selectedMenu = document.getElementById(category);
    if (selectedMenu) {
        selectedMenu.classList.add('active');
    }

    // Mark the clicked tab as active
    event.target.classList.add('active');
}

// Quantity functions
function increaseQty(btn) {
    const input = btn.previousElementSibling;
    input.value = parseInt(input.value) + 1;
}

function decreaseQty(btn) {
    const input = btn.nextElementSibling;
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Add to Cart function
function addToCart(itemName, itemPrice, btn) {
    const qtyInput = btn.previousElementSibling.querySelector('.qty-input');
    const quantity = parseInt(qtyInput.value);

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: itemName,
            price: itemPrice,
            quantity: quantity
        });
    }

    // Reset quantity to 1
    qtyInput.value = 1;

    // Show feedback
    btn.textContent = '✓ Added!';
    btn.style.backgroundColor = '#28a745';
    setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.style.backgroundColor = '';
    }, 1500);

    updateCart();
}

// Toggle Cart Modal
function toggleCart(event) {
    if (event) {
        event.preventDefault();
    }
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('show');
}

// Close cart when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('cartModal');
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Update Cart Display
function updateCart() {
    const cartContainer = document.getElementById('cartItemsContainer');
    const cartCount = document.querySelector('.cart-count');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('checkoutBtn').disabled = true;
        document.getElementById('subtotal').textContent = '$0.00';
        document.getElementById('tax').textContent = '$0.00';
        document.getElementById('total').textContent = '$0.00';
        return;
    }

    // Build cart items HTML
    let html = '';
    cart.forEach((item, index) => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        html += `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateCartQtyInput(${index}, this.value)">
                    <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
                </div>
                <div class="cart-item-total">$${itemTotal}</div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartContainer.innerHTML = html;

    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;

    document.getElementById('checkoutBtn').disabled = false;
}

// Update cart quantity
function updateCartQty(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    updateCart();
}

// Update cart quantity from input
function updateCartQtyInput(index, value) {
    const qty = parseInt(value);
    if (qty < 1) {
        cart[index].quantity = 1;
    } else {
        cart[index].quantity = qty;
    }
    updateCart();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout function
function checkout() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = total * 0.10;
    const grandTotal = total + tax;

    let orderSummary = 'Order Summary:\n\n';
    cart.forEach(item => {
        orderSummary += `${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    orderSummary += `\nSubtotal: $${total.toFixed(2)}\n`;
    orderSummary += `Tax (10%): $${tax.toFixed(2)}\n`;
    orderSummary += `\nTotal: $${grandTotal.toFixed(2)}\n\n`;
    orderSummary += 'Thank you for your order! Your food will be ready soon.';

    alert(orderSummary);
    cart = [];
    updateCart();
    document.getElementById('cartModal').classList.remove('show');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('onclick')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe menu items and sections for animation
document.querySelectorAll('.menu-item, .contact-item, .features li').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
