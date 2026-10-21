// Pause landing page settings.
window.PAUSE = {
  // Waitlist goes to the "Pause waitlist" Google Form, which fills the
  // "Pause waitlist" Google Sheet in Akshay's Drive. One row per visit or signup.
  GOOGLE_FORM: "https://docs.google.com/forms/d/e/1FAIpQLSchgoJpHHT-KMXoSxqGe0HgOYzXgOySUGYj81JAlnXxU_lHhQ/formResponse",
  FORM_FIELDS: {
    event: "entry.995633958",    // "visit" or "signup"
    email: "entry.1421332886",
    phone: "entry.1253411392",   // what they picked: iphone / android
    details: "entry.174939097",  // device, where on the page, utm source, visitor id
  },

  // Meta Pixel ID, to track Lead events from ads. Leave "" to skip.
  META_PIXEL_ID: "",

  // App Store link. While it's "", the page shows the waitlist instead.
  APP_STORE_URL: "",

  // Contact email shown on the support and privacy pages.
  SUPPORT_EMAIL: "aramach1194@gmail.com",
};
