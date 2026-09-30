# Form & Field ? Bootstrap-only store

Open index.html. All pages use the existing local Bootstrap 5.3.8 CSS. No custom CSS, inline styles, JavaScript, backend, or external dependencies are used. Product illustrations are local SVG images.

Includes signup, login, responsive navbar, hero, four products, sample reviews, add-to-cart links, cart display, quantity changes/removal, checkout forms, and sample confirmation pages.

HTML alone cannot maintain accounts, persistent carts, calculate arbitrary quantities, or place orders. The cart links therefore navigate among predefined examples: one product at a time, quantity 1 or 2. Totals are precomputed and consistent. Delivery is PKR 300, free above PKR 10,000. Cart links in a cart/checkout page retain that example; returning to the store starts a new example.

Forms use native HTML validation. Their fields intentionally have no name attributes, so values (including sample passwords and addresses) are not submitted in the URL. Signup/login only show demo feedback, and checkout displays a matching sample receipt. Use fictional details. No account, purchase, or payment processing takes place.
