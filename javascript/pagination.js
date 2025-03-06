document.addEventListener("DOMContentLoaded", function () {
    const staffData = [
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg",
      },
      // Add more staff objects as needed
      {
        position: "General Administration",
        name: "Omkar Pandey",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/omkar pandey.jpeg",
      },
      {
        position: "Cleanliness & Sanitization",
        name: "Keshav Kumar",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/keshavkumar.jpeg",
      },
      {
        position: "Cultural, Literary, Sports, Common Room",
        name: "Himan Roshan Borah",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/himan roshan.jpeg",
      },
      {
        position: "Mess Operation",
        name: "Nilutpal Piku Deka",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/nilutpal.jpeg",
      },
      {
        position: "Mess Supplies & Food Quality",
        name: "Aman Kumar Gupta",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/aman (2).jpg",
      },

      {
        position: "Auditor, Finance",
        name: "Ashankur Borgohain",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/ashankur.jpeg",
      },
      {
        position: "Web Master",
        name: "Deepak Kumar Prajapati",
        year: "2023-2024",
        imageUrl: "./gallery/Admin_photois/dkp-image.webp",
      },

      // Add more staff members here...
    ];
  
    const itemsPerPage = 8;
    let currentPage = 1;
    const staffContent = document.getElementById("staff-content");
    const totalPages = Math.ceil(staffData.length / itemsPerPage);
  
    function generateStaffContent(page) {
      staffContent.innerHTML = ""; // Clear previous content
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const pageData = staffData.slice(start, end);
  
      pageData.forEach((staff) => {
        const prContainer = document.createElement("div");
        prContainer.classList.add("prcontainer");
  
        prContainer.innerHTML = `
          <div class="primagecontainer">
            <img src="${staff.imageUrl}" alt="">
          </div>
          <div class="printroduction">
            <h4>Position: ${staff.position}</h4>
            <h5>${staff.name}</h5>
            <p>Year: ${staff.year}</p>
          </div>
        `;
  
        staffContent.appendChild(prContainer);
      });
    }
  
    function showPage(page) {
      generateStaffContent(page);
      document.getElementById("page-numbers").textContent = `Page ${currentPage} of ${totalPages}`;
      document.getElementById("prev-page").disabled = currentPage === 1;
      document.getElementById("next-page").disabled = currentPage === totalPages;
    }
  
    // Event listeners for pagination controls
    document.getElementById("prev-page").addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });
  
    document.getElementById("next-page").addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
      }
    });
  
    // Initialize the first page
    showPage(currentPage);
  });
  