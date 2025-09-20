  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const btn = item.querySelector("button");
    const answer = item.querySelector(".answer");
    const icon = item.querySelector("svg");

    btn.addEventListener("click", () => {
      answer.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

  // Simpan menu yang sedang terbuka
  let activeMenu = null;

  function toggleDropdown(menuId) {
    const menu = document.getElementById(menuId);
    const icon = document.querySelector(`#${menuId.replace("Menu", "Icon")}`);

    // Tutup dropdown lain yang sedang aktif
    if (activeMenu && activeMenu !== menu) {
      activeMenu.classList.add("hidden");
      const prevIconId = activeMenu.id.replace("Menu", "Icon");
      document.getElementById(prevIconId).classList.remove("rotate-180");
    }

    // Toggle menu yang diklik
    menu.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");

    // Update activeMenu
    activeMenu = menu.classList.contains("hidden") ? null : menu;
  }

  // Tutup dropdown saat klik link di dalamnya
  document.querySelectorAll("#profileMenu a, #infoMenu a").forEach(link => {
    link.addEventListener("click", () => {
      const parentMenu = link.closest("ul");
      parentMenu.classList.add("hidden");
      const iconId = parentMenu.id.replace("Menu", "Icon");
      document.getElementById(iconId).classList.remove("rotate-180");
      activeMenu = null;
    });
  });

  // Tutup dropdown saat klik di luar area
  document.addEventListener("click", (event) => {
    if (!event.target.closest("li.relative")) {
      if (activeMenu) {
        activeMenu.classList.add("hidden");
        const iconId = activeMenu.id.replace("Menu", "Icon");
        document.getElementById(iconId).classList.remove("rotate-180");
        activeMenu = null;
      }
    }
  });

  
