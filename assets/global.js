/* Global JavaScript for Hype Spot theme */

class CartDrawer extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
  }

  open() {
    this.classList.add('active');
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}

customElements.define('cart-drawer', CartDrawer);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add to cart handler
function addToCart(variantId, quantity = 1) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [{
        id: variantId,
        quantity: quantity
      }]
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Added to cart:', data);
    // Update cart count
    updateCartCount();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      const cartCount = document.querySelector('.cart-count-bubble span');
      if (cartCount) {
        cartCount.textContent = cart.item_count;
      }
    });
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
