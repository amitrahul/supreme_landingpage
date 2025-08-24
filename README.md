# Supreme Group Next.js Project

## Project Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd supreme_group
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## Component Architecture Overview

- **/src/components/HeroSection.jsx**  
  Displays the main hero banner with a background overlay and centered text.

- **/src/components/Crausel.jsx**  
  Implements an image carousel/slider using a custom or third-party carousel component.

- **/src/components/ContactUs.jsx**  
  Renders the contact section with address details and a contact form.

- **/public/**  
  Contains static assets like images and SVGs used in the UI.

---

## Responsive Design Strategy

- Utilizes [Tailwind CSS](https://tailwindcss.com/) utility classes for responsive layouts.
- Uses Flexbox and responsive spacing classes to ensure components adapt to various screen sizes.
- The form and content sections stack or align side-by-side based on screen width.

---

## Performance Optimization Techniques Employed

- **Image Optimization:** Uses Next.js `<Image />` component (where applicable) for optimized image loading.
- **Code Splitting:** Next.js automatically splits code for each page.
- **Static Assets:** Images are served from the `/public` directory for fast access.
- **Minimal Dependencies:** Only essential third-party libraries are included.

---

## Accessibility Considerations

- Semantic HTML elements (e.g., `<form>`, `<input>`, `<button>`) are used.
- Sufficient color contrast (white text on blue background).
- Form fields have clear placeholders and focus outlines.
- Button is keyboard accessible.

---

## Explanation of Any Third-Party Libraries Used

- **Tailwind CSS:** For utility-first styling and responsive design.
- **motion/react:** For animation in carousel or hero sections.
- **Next.js:** For server-side rendering, routing, and static asset management.

---

## Assumptions Made and Decisions Taken

- The contact form is currently non-functional and does not submit data to a backend.
- Images are referenced from the `/public` directory and assumed to exist.
- Placeholder text is used for demonstration; actual content may vary.
- The carousel uses a custom or third-party component as per project requirements.

---

## Challenges Faced and Potential Solutions

- **Styling Consistency:** Ensuring consistent styling across browsers and devices.  
  _Solution:_ Used Tailwind CSS for predictable styling.

- **Form Placeholder Boldness:** Browsers do not support bold placeholder text natively.  
  _Solution:_ Used `placeholder:font-bold` with Tailwind CSS (requires Tailwind v3+).

- **Client/Server Component Boundaries:** Ensured event handlers are only used in client components.

---

## Suggested Upcoming Features and Improvements

- **Form Validation:** Add client-side and server-side validation for the contact form.
- **Form Submission:** Integrate with an API or email service for real submissions.
- **Accessibility Enhancements:** Add ARIA labels and error messages.
- **Unit Tests:** Add tests for components and forms.
- **Dark Mode:** Support for dark/light themes.
- **Internationalization:** Add support for multiple languages.

---

## Additional Remarks

- The project is structured for clarity and scalability.
- Contributions and suggestions are

Deployed Link :-
https://supreme-landingpage.vercel.app/
