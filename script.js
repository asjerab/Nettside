document.addEventListener("DOMContentLoaded", function () {
    getCalenderEvent();
  });
  
  function getCalenderEvent() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
  
    const calender = [
      //Shalom youth kalender
      {
        id: 1,
        dato: "01.02.2024",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "17:00 - 20:00",
        title: "Tjeneste Kick off!",
        paragraph:
          "Dette er tjeneste kick off for alle i tjeneste i Youth/New creation (Obligatorisk). Gi informasjon til din nærmeste leder om du ikke kommer",
      },
      {
        id: 2,
        dato: "17.02.2024",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "15:00 - 18:30",
        title: "James 1:27 Event!",
        paragraph: "Kommer mer info",
      },
      {
        id: 3,
        dato: "22.03-2024",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "Mer info",
        title: "Påskekonferanse",
        paragraph: "Kommer mer info",
      },
      {
        id: 4,
        dato: "08.06-2024",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "Mer info",
        title: "5 års markering",
        paragraph: "Kommer mer info",
      },
      {
        id: 5,
        dato: "(Partallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00",
        title: "Bibelstudie",
        paragraph: "Les mer om kurset ved å trykke på 'Grupper' i navigasjonsmenyen. Husk påmelding.",
      },
      {
        id: 6,
        dato: "(Oddetallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00",
        title: "Connect",
        paragraph: 'Småfellesskap. Les mer om kursene ved å trykke på "Grupper" i navigasjonsmenyen',
      },
      {
        id: 7,
        dato: "(Partallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00 - 19:00",
        title: "Bønnemøte",
        paragraph: " Felles bønnemøte for Youth & New creation",
      },
      {
        id: 8,
        dato: "(Oddetallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00",
        title: "Evangelisering",
        paragraph: " Vi går ut i Oslos gater og evangeliserer. Felles for Youth & New creation.",
      },
      {
        id: 9,
        dato: "Hver lørdag",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "16:00 - 19:00",
        title: "Gudstjeneste",
        paragraph:
          "Velkommen til gudstjeneste hver lørdag klokken 16:00. Vi ber, lovsynger og lytter til Guds ord. Ta med en venn eller to og ta del i det Gud har for oss som fellesskap. Velkommen hjem!",
        title2: "AlphaKurs & The Upper Room",
        paragraph2: 'Les mer om kursene ved å trykke på "Grupper" i navigasjonsmenyen',
        dato2: "Hver Lørdag (7ukers Program)",
        lokasjon2: "St. Olavs Gate 24, Oslo",
        clock2: "13:30 - 15:00",
      },
      {
        id: 10,
        dato: "(4 tirsdager)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00 - 19:00",
        title: "Tjenestekurs",
        paragraph: "Kurs for deg som vil tjenestegjøre. Les mer om kurset ved å trykke på 'Grupper' i navigasjonsmenyen. Husk påmelding.",
      },
      // ////////////
  
      // Add more events as needed
    ];
  
    const event = calender.find(function (i) {
      return i.id === parseInt(eventId);
    });
  
    const eventDetails = document.getElementById("eventDetails");
  
    const HTMLString = `
      <div class="kalender-page-flex">
          <div class="kalender-page-wrapper">
              <div class="kalender-page-info">
                  <h1>${event.title}</h1>
                  <p>${event.paragraph}</p>
                  <div class="kalender-page-details">
                      <p>${event.lokasjon}</p>
                      <p>${event.clock}</p>
                      <p>${event.datoWithoutDoubleInfo || event.dato}</p>
                  </div>
                  <hr class="kalendar-part-two">
                  ${event.title2 ? `<h1>${event.title2}</h1>` : ""}
                  ${event.paragraph2 ? `<p>${event.paragraph2}</p>` : ""}
                  <div class="kalender-page-details">
                      ${event.lokasjon2 ? `<p>${event.lokasjon2}</p>` : ""}
                      ${event.clock2 ? `<p>${event.clock2}</p>` : ""}
                      ${event.dato2 ? `<p>${event.dato2}</p>` : ""}
                  </div>
                  <div class="kalender-page-button">
                  </div>
              </div>
          </div>
      </div>`;
  
    eventDetails.innerHTML = HTMLString;
  }
  
  let currentMonthIndex; // Will be set to the current month on DOMContentLoaded
  
  document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    currentMonthIndex = currentDate.getMonth();
    showMonth(0); // Show the current month initially
  });
  
  function showMonth(index) {
    const months = document.querySelectorAll(".kalender-wrapper");
    months[currentMonthIndex].classList.remove("active");
    currentMonthIndex =
      (currentMonthIndex + index + months.length) % months.length;
    months[currentMonthIndex].classList.add("active");
  }
  
  function changeMonth(step) {
    // Check if you are trying to go to a month beyond the bounds
    if (currentMonthIndex + step >= 0 && currentMonthIndex + step < 12) {
      showMonth(step);
    }
    // Optionally, you can add else logic to handle what happens when trying to go beyond the bounds
  }
  
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////
  
  document.addEventListener("DOMContentLoaded", function () {
    getCalenderEventTwo();
  });
  
  function getCalenderEventTwo() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
  
    const calender = [
      //New creation kalender
      {
        id: 1,
        dato: "01.02.2024",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "17:00 - 20:00",
        title: "Tjeneste Kick off!",
        paragraph:
          "Dette er tjeneste kick off for alle i tjeneste i Youth/New creation (Obligatorisk). Gi informasjon til din nærmeste leder om du ikke kommer ",
      },
      {
        id: 2,
        dato: "17.02.2024",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "15:00 - 18:30",
        title: "James 1:27 Event!",
        paragraph: "Kommer mer info",
      },
      {
        id: 3,
        dato: "22.03-2024",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "Mer info",
        title: "Påskekonferanse",
        paragraph: "Kommer mer info",
      },
      {
        id: 4,
        dato: "(Partallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00",
        title: "Bibelstudie",
        paragraph: "Les mer om kurset ved å trykke på 'Grupper' i navigasjonsmenyen. Husk påmelding.",
      },
      {
        id: 5,
        dato: "(Oddetallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00",
        title: "Connect",
        paragraph: 'Småfellesskap. Les mer om kursene ved å trykke på "Grupper" i navigasjonsmenyen',
      },
      {
        id: 6,
        dato: "(Partallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00 - 19:00",
        title: "Bønnemøte",
        paragraph: " Felles bønnemøte for Youth & New creation",
      },
      {
        id: 7,
        dato: "(Oddetallsuker)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00",
        title: "Evangelisering",
        paragraph: " Vi går ut i Oslos gater og evangeliserer. Felles for Youth & New creation.",
      },
  
      {
        id: 8,
        dato: "(4 tirsdager)",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:00 - 19:00",
        title: "Tjenestekurs",
        paragraph: "Kurs for deg som vil tjenestegjøre. Les mer om kurset ved å trykke på 'Grupper' i navigasjonsmenyen. Husk påmelding.",
      },
      // ////////////
  
      {
        id: 9,
        dato: "Hver søndag",
        lokasjon: "St. Olavs Gate 24, Oslo",
        clock: "18:30 - 21:00",
        title: "Gudstjeneste",
        paragraph:
          "Velkommen til gudstjeneste hver søndag klokken 18:30. Vi ber, lovsynger og lytter til Guds ord. Ta med en venn eller to og ta del i det Gud har for oss som fellesskap. Velkommen hjem!",
        dato2: "(7 ukers program 11.02.2024) ",
        lokasjon2: "St. Olavs Gate 24, Oslo",
        clock2: "14:00 - 15:30",
        title2: "Alphakurs - The upper Room",
        paragraph2: 'Les mer om kursene ved å trykke på "Grupper" i navigasjonsmenyen',
      },
    ];
  
    const event = calender.find(function (i) {
      return i.id === parseInt(eventId);
    });
  
    const eventDetails = document.getElementById("eventDetailsTwo");
    
    const HTMLString = `
    <div class="kalender-page-flex">
        <div class="kalender-page-wrapper">
            <div class="kalender-page-info">
                <h1>${event.title}</h1>
                <p>${event.paragraph}</p>
                <div class="kalender-page-details">
                    <p>${event.lokasjon}</p>
                    <p>${event.clock}</p>
                    <p>${event.datoWithoutDoubleInfo || event.dato}</p>
                </div>
                <hr class="kalendar-part-two">
                ${event.title2 ? `<h1>${event.title2}</h1>` : ""}
                ${event.paragraph2 ? `<p>${event.paragraph2}</p>` : ""}
                <div class="kalender-page-details">
                    ${event.lokasjon2 ? `<p>${event.lokasjon2}</p>` : ""}
                    ${event.clock2 ? `<p>${event.clock2}</p>` : ""}
                    ${event.dato2 ? `<p>${event.dato2}</p>` : ""}
                </div>
                <div class="kalender-page-button">
                </div>
            </div>
        </div>
    </div>`;
  
    eventDetails.innerHTML = HTMLString;
  }
  
  let currentMonthIndexTwo = 0; // Index of the currently displayed month for the second calendar
  
  function showMonthTwo(index) {
    const monthsTwo = document.querySelectorAll(".kalender-wrapper-two");
    monthsTwo[currentMonthIndexTwo].classList.remove("active");
    currentMonthIndexTwo =
      (currentMonthIndexTwo + index + monthsTwo.length) % monthsTwo.length;
    monthsTwo[currentMonthIndexTwo].classList.add("active");
  }
  
  function changeMonthTwo(step) {
    showMonthTwo(step);
  }
  
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////

  document.addEventListener("DOMContentLoaded", function () {
    // Show loader
    document.getElementById("loaderContainer").style.display = "flex";

    // Additional 5 seconds timeout
    setTimeout(function () {
      // Hide loader after content is loaded and 5 seconds have passed
      document.getElementById("loaderContainer").style.display = "none";
    }, 1000);
  });
  
  function toggleBars() {
    const bars = document.querySelector(".bars");
    bars.classList.toggle("active");
  }
  
  // Get references to the elements
  const navButton = document.getElementById("navButton");
  const backButton = document.getElementById("backButton");
  const resMenuLinks = document.querySelector(".res-menu-container");
  
  // Event listener for displaying menu links
  navButton.addEventListener("click", () => {
    resMenuLinks.style.display = "block";
  });
  
  // Event listener for hiding menu links
  backButton.addEventListener("click", () => {
    resMenuLinks.style.display = "none";
  });
  
  // Disable double click behavior
  document.addEventListener("DOMContentLoaded", function () {
    var disableDoubleClick = function (event) {
      event.preventDefault();
    };
  
    document.addEventListener("dblclick", disableDoubleClick);
  });
  
  // Preserve scroll position on page load and handle smooth scrolling
  document.addEventListener("DOMContentLoaded", function () {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  
    // Smooth scrolling for a specific link
    let link = document.getElementById("flex-grupper-link");
    if (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1); // Get the target ID without the '#'
        let targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Scroll to the target element
          targetElement.scrollIntoView({
            behavior: "smooth", // Optional smooth scrolling
          });
        }
      });
    }
  });

  
  function setupButtons(openButtonId, closeButtonId, divId) {
    const openButton = document.getElementById(openButtonId);
    const closeButton = document.getElementById(closeButtonId);
    const myDiv = document.getElementById(divId);
  
    function openDiv() {
      myDiv.style.display = "block";
    }
  
    function closeDiv() {
      myDiv.style.display = "none";
    }
  
    openButton.addEventListener("click", openDiv);
    closeButton.addEventListener("click", closeDiv);
    document.addEventListener("DOMContentLoaded", closeDiv);
  }
  
  // Call the setup function for each set of elements
  setupButtons("openButton", "closeButton", "myDiv");
  setupButtons("openButton2", "closeButton2", "myDiv2");
  setupButtons("openButton3", "closeButton3", "myDiv3");
  setupButtons("openButton4", "closeButton4", "myDiv4");
  setupButtons("openButton5", "closeButton5", "myDiv5");
  setupButtons("openButton6", "closeButton6", "myDiv6");
  setupButtons("openButton7", "closeButton7", "myDiv7");
  setupButtons("openButton8", "closeButton8", "myDiv8");
  setupButtons("openButton9", "closeButton9", "myDiv9");
  