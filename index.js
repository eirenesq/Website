const contactsButton = document.querySelector(".contacts_button");
const contacts = document.querySelector(".contacts");

if (contactsButton && contacts) {
  contactsButton.addEventListener("click", () => {
    contacts.classList.toggle("active");
  });
}
document.querySelectorAll(".copy-email").forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const email = button.dataset.email;
    const contacts = button.closest(".contacts");

    try {
      await navigator.clipboard.writeText(email);

      contacts.classList.add("email-copied");

      clearTimeout(button.copyTimer);
      button.copyTimer = setTimeout(() => {
        contacts.classList.remove("email-copied");
      }, 1600);
    } catch (error) {
      contacts.dataset.copied = email;
      contacts.classList.add("email-copied");

      clearTimeout(button.copyTimer);
      button.copyTimer = setTimeout(() => {
        contacts.classList.remove("email-copied");
      }, 2200);
    }
  });
});