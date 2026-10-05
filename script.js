function showMessage(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function handlePdfInput(input) {
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      showMessage("Please choose a PDF file.");
      input.value = "";
      return;
    }

    showMessage(`Selected: ${file.name} — PDF upload UI is working!`);
  });
}

const topInput = document.getElementById("pdfInput");
const bottomInput = document.getElementById("pdfInputBottom");

if (topInput) handlePdfInput(topInput);
if (bottomInput) handlePdfInput(bottomInput);

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("open");
}
