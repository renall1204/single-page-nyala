// Array of steps with images, titles, and descriptions
const steps = [
  {
    img: "./assets/img/about/step 1.png",
    title: "Nomor 1",
    description:
      "Perlu transfer ke teman yang beda bank? Transfer kemanapun tanpa biaya dengan BI-FAST",
  },
  {
    img: "./assets/img/about/step 2.png",
    description:
      "Perlu top up e-wallet untuk jajan? Isi pulsa, paket data atau saldo e-wallet bisa bebas biaya admin!",
  },
  {
    img: "./assets/img/about/step 3.png",
    description:
      "Jajan di kantin tetapi tidak membawa uang cash? tinggal menggunakan QRIS saja, lebih praktis!",
  },
  {
    img: "./assets/img/about/step 4.png",
    description:
      "Lupa bawa kartu pas sekolah? Tarik tunai bisa tanpa kartu lewat OCBC mobile",
  },
  {
    img: "./assets/img/about/step 5.png",
    description:
      "Duh, saldo mau abis? Request dana lebih ke orangtua langsung dengan fitur Minta Dana",
  },
];

let currentStep = 0;

function changeContent(direction) {
  // Update the current step index
  currentStep += direction;

  // Cycle through the steps
  if (currentStep >= steps.length) {
    currentStep = 0;
  } else if (currentStep < 0) {
    currentStep = steps.length - 1;
  }

  // Update the DOM elements
  document.getElementById("phoneImg").src = steps[currentStep].img;
  document.getElementById("stepDesc").textContent =
    steps[currentStep].description;
}
