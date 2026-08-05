/* ==========================================================================
   Contact form — Web3Forms submission
   Split out of contactus.html so the page ships no inline script and the
   handler can be cached separately. Loaded with `defer`.
   ========================================================================== */
(function () {
  "use strict";

  var form = document.getElementById("contactForm");
  if (!form) return;

  var formMessage = document.getElementById("formMessage");
  var submitButton = form.querySelector('button[type="submit"]');
  var messageTimer;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
    submitButton.disabled = true;

    clearTimeout(messageTimer);

    var show = function (kind, text) {
      formMessage.className = "alert alert-" + kind + " mt-3";
      formMessage.textContent = text;
      formMessage.style.display = "block";
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    })
      .then(function (response) {
        return response.json().then(function (json) {
          return { ok: response.ok, json: json };
        });
      })
      .then(function (result) {
        if (result.ok) {
          show("success", "Thank you! Your message has been sent successfully.");
          form.reset();
        } else {
          show(
            "danger",
            result.json.message || "Something went wrong. Please try again."
          );
        }
      })
      .catch(function () {
        show(
          "danger",
          "Something went wrong. Please check your internet connection."
        );
      })
      .finally(function () {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        // Move focus to the result so screen-reader users are told what
        // happened; aria-live on the container announces it either way.
        formMessage.setAttribute("tabindex", "-1");
        formMessage.focus({ preventScroll: true });
        messageTimer = setTimeout(function () {
          formMessage.style.display = "none";
        }, 8000);
      });
  });
})();
