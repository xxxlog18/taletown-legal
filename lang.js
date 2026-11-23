// ===== แก้ไขตรงนี้: ช่องทางติดต่อ / Edit your contact link here =====
const CONTACT_URL = "https://discord.gg/YOUR-INVITE"; // ลิงก์เชิญเซิร์ฟเวอร์ Discord ของ Tale Town
// ======================================================================

(function () {
  const params = new URLSearchParams(location.search);
  let lang = params.get("lang") || localStorage.getItem("lang") || "th";
  if (lang !== "th" && lang !== "en") lang = "th";

  function apply() {
    document.body.classList.remove("lang-th", "lang-en");
    document.body.classList.add("lang-" + lang);
    document.documentElement.lang = lang;
    const btn = document.getElementById("lang-btn");
    if (btn) btn.textContent = lang === "th" ? "English" : "ภาษาไทย";
    localStorage.setItem("lang", lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".contact-link").forEach(function (a) {
      a.href = CONTACT_URL;
      a.textContent = CONTACT_URL;
    });
    const btn = document.getElementById("lang-btn");
    if (btn) btn.addEventListener("click", function () {
      lang = lang === "th" ? "en" : "th";
      apply();
    });
    apply();
  });
})();
