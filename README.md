Fresh Bakes Bakery - WEDE5020 POE
A fully responsive, functional website for a local bakery built with HTML, CSS, and JavaScript.
Project Structure
`index.html` - Home page with a hero section and interactive FAQ accordion.
`about.html` - Organisation overview, mission, vision, and target audience.
`products.html` - Dynamic product gallery with a live search filter.
`enquiry.html` - Service/Order enquiry form with JavaScript validation and AJAX submission.
`contact.html` - General contact form using `mailto:` to compile and send an email.
`style.css` - External stylesheet handling layout, colors, and responsive design.
`script.js` - External JavaScript handling interactivity, validation, and AJAX.
`robots.txt` - SEO file instructing search engine crawlers.
`sitemap.xml` - SEO file helping search engines understand the site structure.
Changelog
Part 3 Updates
SEO Best Practices:
Added unique `<title>` tags and meta descriptions to all HTML pages.
Added descriptive `alt` text to all images on the Products page.
Created `robots.txt` and `sitemap.xml` files.
JavaScript Enhancements:
Added an interactive Accordion (FAQ) to the Home page to enhance user experience and layout.
Implemented a real-time search filter on the Products page so users can filter by product name or description.
Form Functionality & Validation:
Enquiry Form: Added client-side JavaScript validation (checks for name length, valid email format, and phone number digits). Implemented error handling messages that display dynamically. Added AJAX (Fetch API) submission to process data without reloading the page.
Contact Form: Implemented the `mailto:` action to compile form data into an email for the user to send to the business owner.
Deployment: The website has been deployed to [http://127.0.0.1:5500/index.html].
Part 2 Feedback Implementation
Replaced inline styles with an external `style.css` file for better maintainability.
Improved website responsiveness using CSS Media Queries (added breakpoints for tablet and mobile devices).
Changed fixed footer positioning to static to prevent it from overlapping content on smaller screens.
Improved navigation layout using CSS Flexbox.
