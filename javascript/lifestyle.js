// lifestyle.js
console.log('Lifestyle JS loaded');

document.addEventListener("DOMContentLoaded", () => {
  // === Filter by Day ===
  const filterSelect = document.getElementById("dayFilter");
  const rows = document.querySelectorAll(".wellness-table tbody tr");

  if (filterSelect) {
    filterSelect.addEventListener("change", () => {
      const selectedDay = filterSelect.value;

      rows.forEach(row => {
        const dayCell = row.querySelector("td");
        const dayText = dayCell.textContent.trim();

        if (selectedDay === "all" || dayText === selectedDay) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  }

  // === Tip Card Modal Logic ===
  const buttons = document.querySelectorAll(".info-btn");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeModalBtn = document.getElementById("closeModal");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      console.log("Button clicked:", button.getAttribute("data-title"));
      modalTitle.textContent = button.getAttribute("data-title");

      const tipsRaw = button.getAttribute("data-content");
      const tips = tipsRaw.split("|").map(tip => tip.trim()).filter(tip => tip.length > 0);
      modalBody.innerHTML = "<ul>" + tips.map(tip => `<li>${tip}</li>`).join('') + "</ul>";

      modal.classList.add("show");
      document.body.style.overflow = "hidden";
      modal.setAttribute("aria-hidden", "false");

      // Optional: Try focusing the modal
      try {
        modal.focus();
      } catch (e) {
        console.warn("Modal cannot be focused:", e);
      }
    });
  });

  // Close Modal
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    modal.setAttribute("aria-hidden", "true");
  });

  // Optional: Close modal when clicking outside of it
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
    }
  });

  // Optional: Close on ESC key
  window.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
    }
  });
});
