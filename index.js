const contactsButton = document.querySelector(".contacts_button");
const contacts = document.querySelector(".contacts");

if (contactsButton && contacts) {
  contactsButton.addEventListener("click", () => {
    contacts.classList.toggle("active");
  });
}