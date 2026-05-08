const DEMO_RECIPIENT = "hello@ordanex.ai";
const processModes = {
  order: {
    title: "Order to cash",
    pill: "Buyer to ERP",
    steps: [
      {
        title: "Capture",
        copy: "Customer orders arrive by email, portal, API, or EDI and enter a single review flow.",
      },
      {
        title: "Validate",
        copy: "Auto-corrections, approvals, and field checks keep the document clean before processing.",
      },
      {
        title: "Create",
        copy: "The platform generates the downstream sales order, invoice, ASN, or status event in ERP.",
      },
      {
        title: "Respond",
        copy: "Buyer-facing status updates, confirmations, and handling events flow back into the portal.",
      },
    ],
    videoTitle: "Watch the full order lifecycle move through Ordanex",
    videoCopy:
      "Documents move from capture to validation to ERP handoff, with status updates coming back automatically.",
    motion: [
      {
        title: "Buyer order",
        copy: "Captured from the portal, inbox, or EDI network",
      },
      {
        title: "Match & validate",
        copy: "Field mapping, totals, and exception checks",
      },
      {
        title: "ERP update",
        copy: "Sales order, ASN, and invoice status flow back",
      },
    ],
    snapshots: [
      {
        title: "Buyer order intake",
        copy: "Browse products, submit the order, and create the business document automatically.",
      },
      {
        title: "Exception-aware handling",
        copy: "Validation, approval, and auto-correction keep the transaction on track.",
      },
      {
        title: "Downstream updates",
        copy: "Capture confirmations, ASN, goods receipts, and invoice events in the portal.",
      },
    ],
  },
  requisition: {
    title: "Requisition to pay",
    pill: "Internal to supplier",
    steps: [
      {
        title: "Request",
        copy: "Employees raise a requisition through a guided intake or procurement workflow.",
      },
      {
        title: "Approve",
        copy: "Policy checks, budget rules, and human review are applied before the order is sent.",
      },
      {
        title: "Order",
        copy: "The platform generates the purchase order and sends it to the supplier or network.",
      },
      {
        title: "Receive",
        copy: "Goods receipt, invoice matching, and approval events flow back to the finance team.",
      },
    ],
    videoTitle: "See the requisition-to-pay chain in one premium walkthrough",
    videoCopy:
      "Requisitions, approvals, POs, receipts, and invoices stay connected through a single monitored flow.",
    motion: [
      {
        title: "Requisition",
        copy: "Employee request enters the procurement queue",
      },
      {
        title: "Approve & route",
        copy: "Budget and policy checks trigger the right route",
      },
      {
        title: "Receipt & invoice",
        copy: "Goods receipt and AP invoice events complete the loop",
      },
    ],
    snapshots: [
      {
        title: "Requisition intake",
        copy: "Guided request capture with approval context and policy checks.",
      },
      {
        title: "Goods receipt handling",
        copy: "Receiving updates and exception handling stay visible in one place.",
      },
      {
        title: "AP closeout",
        copy: "Invoice matching and approval events roll back into the finance workflow.",
      },
    ],
  },
};

const form = document.getElementById("demoForm");
const status = document.getElementById("demoStatus");
const processShowcase = document.querySelector(".process-showcase");
const processTabs = document.querySelectorAll("[data-process-mode]");
const processPlayButton = document.querySelector(".process-play");
const mediaPlayButton = document.querySelector(".media-play");

function setStatus(message, isError = false) {
  if (!status) return;
  status.textContent = message;
  status.style.color = isError ? "#b42318" : "#37516d";
}

function applyProcessMode(mode) {
  const config = processModes[mode] || processModes.order;
  if (!processShowcase) return;

  processShowcase.dataset.processMode = mode;
  const bindText = (selector, value) => {
    const node = document.getElementById(selector);
    if (node) node.textContent = value;
  };

  bindText("processTitle", config.title);
  bindText("processStep1Title", config.steps[0].title);
  bindText("processStep1Copy", config.steps[0].copy);
  bindText("processStep2Title", config.steps[1].title);
  bindText("processStep2Copy", config.steps[1].copy);
  bindText("processStep3Title", config.steps[2].title);
  bindText("processStep3Copy", config.steps[2].copy);
  bindText("processStep4Title", config.steps[3].title);
  bindText("processStep4Copy", config.steps[3].copy);
  bindText("processVideoTitle", config.videoTitle);
  bindText("processVideoCopy", config.videoCopy);
  bindText("motionCard1Title", config.motion[0].title);
  bindText("motionCard1Copy", config.motion[0].copy);
  bindText("motionCard2Title", config.motion[1].title);
  bindText("motionCard2Copy", config.motion[1].copy);
  bindText("motionCard3Title", config.motion[2].title);
  bindText("motionCard3Copy", config.motion[2].copy);
  bindText("snapshot1Title", config.snapshots[0].title);
  bindText("snapshot1Copy", config.snapshots[0].copy);
  bindText("snapshot2Title", config.snapshots[1].title);
  bindText("snapshot2Copy", config.snapshots[1].copy);
  bindText("snapshot3Title", config.snapshots[2].title);
  bindText("snapshot3Copy", config.snapshots[2].copy);

  processTabs.forEach((tab) => {
    const active = tab.getAttribute("data-process-mode") === mode;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
}

processTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const mode = tab.getAttribute("data-process-mode") || "order";
    applyProcessMode(mode);
  });
});

if (processPlayButton) {
  processPlayButton.addEventListener("click", () => {
    const motion = document.querySelector(".process-motion");
    if (!motion) return;
    const running = motion.classList.toggle("is-playing");
    processPlayButton.textContent = running ? "Pause walkthrough" : "Play walkthrough";
    setStatus(running ? "Premium walkthrough animation playing." : "");
  });
}

if (mediaPlayButton) {
  mediaPlayButton.addEventListener("click", () => {
    const demoSection = document.querySelector("#demo");
    demoSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    setStatus("Media preview ready. Drop MP4 or WebM files into website/media for a live walkthrough.");
  });
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

    const subject = encodeURIComponent(`Ordanex walkthrough request from ${company}`);
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

    setStatus("Opening your email client with a prefilled walkthrough request...");
    window.location.href = `mailto:${DEMO_RECIPIENT}?subject=${subject}&body=${body}`;
    form.reset();
  });
}

applyProcessMode("order");
