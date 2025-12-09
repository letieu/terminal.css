/**
 * terminal.css - Terminal CSS Component Library
 * JavaScript Utilities
 * Version: 3.0.0
 */

/**
 * Toggle FAQ item
 * @param {HTMLElement} element - The FAQ question element that was clicked
 */
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const wasActive = faqItem.classList.contains("is-active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("is-active");
  });

  // Open clicked item if it wasn't active
  if (!wasActive) {
    faqItem.classList.add("is-active");
  }
}

/**
 * Show a toast notification
 * @param {string} type - Toast type: 'primary', 'success', 'danger', 'warning', 'info'
 * @param {string} title - Toast title
 * @param {string} message - Toast message
 * @param {number} duration - Duration in milliseconds (default: 5000)
 */
function showToast(type, title, message, duration = 5000) {
  const container = document.getElementById("toastContainer");

  // Create toast element
  const toast = document.createElement("div");
  toast.className = `toast is-${type}`;

  // Icon mapping
  const icons = {
    primary: "▸",
    success: "✓",
    danger: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || "▸"}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="dismissToast(this)">×</button>
  `;

  container.appendChild(toast);

  // Auto dismiss after duration
  setTimeout(() => {
    dismissToast(toast.querySelector(".toast-close"));
  }, duration);
}

/**
 * Dismiss a toast notification
 * @param {HTMLElement} closeButton - The close button element that was clicked
 */
function dismissToast(closeButton) {
  const toast = closeButton.closest(".toast");
  if (toast) {
    toast.classList.add("is-dismissing");

    // Remove from DOM after animation
    setTimeout(() => {
      toast.remove();
    }, 300);
  }
}
