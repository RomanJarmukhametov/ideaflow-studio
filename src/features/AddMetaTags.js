// Get the browser language from the navigator object
const browserLanguage = navigator.language || navigator.userLanguage;
// Declare variables for title and description
let title, description;

// Function to add the title in the appropriate language
const AddTitle = (titleRu, titleEn) => {
  // Set the title based on the browser language
  if (browserLanguage.startsWith("ru")) {
    title = titleRu;
  } else {
    title = titleEn;
  }
  // Update the document title
  document.title = title;

  // Update the Open Graph title if the meta tag exists
  const metaOgTitle = document.querySelector('meta[property="og:title"]');
  if (metaOgTitle) {
    metaOgTitle.setAttribute("content", title);
  }
};

// Function to add the description in the appropriate language
const AddDescription = (descriptionRu, descriptionEn) => {
  // Set the description based on the browser language
  if (browserLanguage.startsWith("ru")) {
    description = descriptionRu;
  } else {
    description = descriptionEn;
  }

  // Update the meta description if the meta tag exists
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }

  // Update the Open Graph description if the meta tag exists
  const metaOgDescription = document.querySelector(
    'meta[property="og:description"]'
  );
  if (metaOgDescription) {
    metaOgDescription.setAttribute("content", description);
  }
};

// Export the AddTitle and AddDescription functions for use in other modules
export { AddTitle, AddDescription };
