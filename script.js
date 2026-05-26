console.log("Portfolio JavaScript connected successfully.");

document.addEventListener("DOMContentLoaded", () => {
  // Cache the main DOM elements once the page is ready.
  const body = document.body;
  const contactForm = document.getElementById("contactForm");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section, header");
  const typingText = document.getElementById("typingText");
  const skillCards = document.querySelectorAll(".skill-card");
  const skillTitle = document.getElementById("skillTitle");
  const skillDescription = document.getElementById("skillDescription");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  const roleTexts = ["Web Developer", "Frontend Developer", "JavaScript Learner"];
  const formFields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("nameError"),
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailError"),
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("messageError"),
    },
  };
  const formSuccessMessage = document.getElementById("formSuccessMessage");

  const skillDescriptions = {
    HTML: "Structures web pages with meaningful content and semantic layout.",
    CSS: "Styles web pages with responsive layouts, colors, spacing, and animations.",
    JavaScript: "Adds interactivity through DOM updates, events, and dynamic behavior.",
    PHP: "Builds server-side logic and handles backend form or data workflows.",
    React: "Builds component-based interfaces for scalable frontend applications.",
    "Node.js": "Runs JavaScript on the server for APIs, tools, and backend services.",
    Astro: "Creates fast content-focused websites with modern component patterns.",
    Go: "Builds efficient backend services and tools with strong performance.",
    "Next.js": "Helps build full-stack React apps with routing and server rendering.",
    "Tailwind CSS": "Speeds up UI styling with utility-first CSS classes.",
    Supabase: "Provides backend services such as database, auth, and APIs.",
    MongoDB: "Stores flexible NoSQL data for modern web applications.",
  };

  function selectElement(selector) {
    return document.querySelector(selector);
  }

  // Display an error message and error styling for invalid fields.
  function showError(input, errorElement, message) {
    input.classList.add("error");
    input.classList.remove("success");
    errorElement.textContent = message;
  }

  // Apply success styling and clear any previous error message.
  function showSuccess(input, errorElement) {
    input.classList.remove("error");
    input.classList.add("success");
    errorElement.textContent = "";
  }

  // Reusable email validation using a simple regular expression.
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  }

  function savePreference(key, value) {
    localStorage.setItem(key, value);
  }

  // Toggle dark mode and remember the user's choice.
  function toggleDarkMode() {
    const isDarkMode = body.classList.toggle("dark-mode");
    savePreference("portfolio-dark-mode", String(isDarkMode));
    updateThemeButtonText(isDarkMode);
  }

  // Update the text and icon inside the theme button.
  function updateThemeButtonText(isDarkMode) {
    const themeText = selectElement(".theme-text");
    const themeIcon = selectElement(".theme-icon");

    if (themeText) {
      themeText.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    }

    if (themeIcon) {
      themeIcon.textContent = isDarkMode ? "☀️" : "🌙";
    }
  }

  // Individual field validators keep the form logic easy to reuse.
  function validateName() {
    const nameValue = formFields.name.input.value.trim();

    if (nameValue === "") {
      showError(formFields.name.input, formFields.name.error, "Name is required.");
      return false;
    }

    if (nameValue.length < 3) {
      showError(
        formFields.name.input,
        formFields.name.error,
        "Name must be at least 3 characters long."
      );
      return false;
    }

    showSuccess(formFields.name.input, formFields.name.error);
    return true;
  }

  function validateEmailField() {
    const emailValue = formFields.email.input.value.trim();

    if (emailValue === "") {
      showError(formFields.email.input, formFields.email.error, "Email is required.");
      return false;
    }

    if (!validateEmail(emailValue)) {
      showError(formFields.email.input, formFields.email.error, "Enter a valid email address.");
      return false;
    }

    showSuccess(formFields.email.input, formFields.email.error);
    return true;
  }

  function validateMessage() {
    const messageValue = formFields.message.input.value.trim();

    if (messageValue === "") {
      showError(formFields.message.input, formFields.message.error, "Message is required.");
      return false;
    }

    if (messageValue.length < 10) {
      showError(
        formFields.message.input,
        formFields.message.error,
        "Message must be at least 10 characters long."
      );
      return false;
    }

    showSuccess(formFields.message.input, formFields.message.error);
    return true;
  }

  // Validate every field before showing a form success message.
  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmailField();
    const isMessageValid = validateMessage();

    return isNameValid && isEmailValid && isMessageValid;
  }

  function clearFormStatus() {
    formSuccessMessage.textContent = "";
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    clearFormStatus();

    if (validateForm()) {
      formSuccessMessage.textContent = "Your message looks great. Form validation passed successfully.";
      contactForm.reset();

      Object.values(formFields).forEach(({ input }) => {
        input.classList.remove("success");
      });
    }
  }

  // Validate fields while the user types for real-time feedback.
  function handleRealtimeValidation(event) {
    const fieldId = event.target.id;

    if (fieldId === "name") {
      validateName();
    }

    if (fieldId === "email") {
      validateEmailField();
    }

    if (fieldId === "message") {
      validateMessage();
    }

    clearFormStatus();
  }

  // Show or hide the scroll button based on page position.
  function handleScrollTopButton() {
    if (window.scrollY > 320) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Highlight the navigation link for the section currently in view.
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        sectionId &&
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
        });
      }
    });
  }

  // Create a looping typing animation for the hero role text.
  function typeText(words, element, wordIndex = 0, charIndex = 0, isDeleting = false) {
    const currentWord = words[wordIndex];
    const currentText = currentWord.slice(0, charIndex);
    element.textContent = currentText;

    let typingSpeed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex < currentWord.length) {
      setTimeout(() => typeText(words, element, wordIndex, charIndex + 1, false), typingSpeed);
      return;
    }

    if (isDeleting && charIndex > 0) {
      setTimeout(() => typeText(words, element, wordIndex, charIndex - 1, true), typingSpeed);
      return;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => typeText(words, element, wordIndex, charIndex, true), 1200);
      return;
    }

    const nextWordIndex = (wordIndex + 1) % words.length;
    setTimeout(() => typeText(words, element, nextWordIndex, 0, false), 220);
  }

  // Update the skill details panel when a skill card is selected.
  function updateSkillInfo(skillName) {
    skillTitle.textContent = skillName;
    skillDescription.textContent =
      skillDescriptions[skillName] || "This skill supports modern web development workflows.";
  }

  function handleSkillClick(event) {
    const clickedCard = event.currentTarget;
    const selectedSkill = clickedCard.dataset.skill;

    skillCards.forEach((card) => card.classList.remove("active"));
    clickedCard.classList.add("active");
    updateSkillInfo(selectedSkill);
  }

  function handleMobileNavToggle() {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  function closeMobileNav() {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  // Restore dark mode on page load if the user enabled it earlier.
  function loadSavedTheme() {
    const savedTheme = localStorage.getItem("portfolio-dark-mode");
    const isDarkMode = savedTheme === "true";

    if (isDarkMode) {
      body.classList.add("dark-mode");
    }

    updateThemeButtonText(isDarkMode);
  }

  loadSavedTheme();
  updateActiveNav();
  handleScrollTopButton();
  typeText(roleTexts, typingText);

  contactForm.addEventListener("submit", handleFormSubmit);
  formFields.name.input.addEventListener("input", handleRealtimeValidation);
  formFields.email.input.addEventListener("input", handleRealtimeValidation);
  formFields.message.input.addEventListener("input", handleRealtimeValidation);
  darkModeToggle.addEventListener("click", toggleDarkMode);
  scrollTopBtn.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", handleScrollTopButton);
  window.addEventListener("scroll", updateActiveNav);
  navToggle.addEventListener("click", handleMobileNavToggle);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  skillCards.forEach((card) => {
    card.addEventListener("click", handleSkillClick);
  });
});
