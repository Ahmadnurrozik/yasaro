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

  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      setTimeout(() => {
        menu.classList.remove('scale-95', 'opacity-0');
        menu.classList.add('scale-100', 'opacity-100');
      }, 10);
    } else {
      menu.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        menu.classList.add('hidden');
        menu.classList.remove('scale-100', 'opacity-100');
      }, 300);
    }
  }

 document.querySelectorAll(".loadMoreBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    // cari container terdekat
    const container = btn.closest(".card-container");
    // cari card hidden di container ini
    const hiddenCards = container.querySelectorAll(".hidden");

    hiddenCards.forEach(card => {
      card.classList.remove("hidden"); // tampilkan
    });

    // sembunyikan tombol
    btn.style.display = "none";
  });
});

  document.querySelectorAll(".slider-container").forEach((container) => {
    const slider = container.querySelector(".slider");
    const slides = slider.children;
    const dots = container.querySelectorAll(".dot");
    const prevBtn = container.querySelector(".prevBtn");
    const nextBtn = container.querySelector(".nextBtn");
    let index = 0;

    function updateSlider() {
      slider.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.style.backgroundColor = i === index ? "#223DFC" : "#D1D5DB";
      });
    }

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlider();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        updateSlider();
      });
    });

    updateSlider();
  });


  

