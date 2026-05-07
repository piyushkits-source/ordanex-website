const DEMO_RECIPIENT = "hello@ordanex.ai";

const form = document.getElementById("demoForm");
const status = document.getElementById("demoStatus");

function setStatus(message, isError = false) {
  if (!status) return;
  status.textContent = message;
  status.style.color = isError ? "#b42318" : "#37516d";
}

if (form) {
  form.addEventListener("input", () => {
    setStatus("");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const role = String(data.get("role") || "").trim();
    const erp = String(data.get("erp") || "").trim();
    const documents = String(data.get("documents") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!fullName || !email || !company) {
      setStatus("Please complete your name, email, and company so we can follow up.", true);
      return;
    }

    const subject = encodeURIComponent(`Ordanex demo request from ${company}`);
    const body = encodeURIComponent(
      [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Role: ${role || "-"}`,
        `ERP / Platform: ${erp || "-"}`,
        `Document Types: ${documents || "-"}`,
        "",
        "Request details:",
        message || "-",
      ].join("\n")
    );

    setStatus("Opening your email client with a prefilled demo request...");
    window.location.href = `mailto:${DEMO_RECIPIENT}?subject=${subject}&body=${body}`;
    form.reset();
  });
}
