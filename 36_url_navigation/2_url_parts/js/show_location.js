const loc = window.location;
const ul = document.getElementById("infoList");

const parts = [
  // 🌐 href: the full URL as a string (all parts combined)
  ["🌐 Full URL", loc.href],

  // 🔐 protocol: the scheme used, usually "http:" or "https:"
  // Useful to detect if the page is secure (HTTPS) or not.
  ["🔐 Protocol", loc.protocol],

  // 🌍 host: the hostname and port together, e.g. "example.com:3000"
  ["🌍 Host", loc.host],

  // 🖥️ hostname: just the domain or IP (without the port)
  ["🖥️ Hostname", loc.hostname],

  // 🔢 port: the port number (e.g. "8080"), or empty string for default ports (80, 443)
  // Helpful if your app runs on a non-standard port (like a local dev server).
  ["🔢 Port", loc.port || "(none)"],

  // 📁 pathname: the part after the domain and before the query string or hash
  // Often used in routing (e.g., "/products/123")
  ["📁 Pathname", loc.pathname],

  // ❓ search: the query string, including the leading "?" (e.g., "?id=42")
  // You can parse this with URLSearchParams
  ["❓ Search (query)", loc.search || "(none)"],

  // 🔗 hash: the fragment identifier, including the "#" (e.g., "#section1")
  // Used to link to parts of the same page.
  ["🔗 Hash", loc.hash || "(none)"],
];

parts.forEach(([label, value]) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${label}:</strong> <code>${value}</code>`;
  ul.appendChild(li);
});
