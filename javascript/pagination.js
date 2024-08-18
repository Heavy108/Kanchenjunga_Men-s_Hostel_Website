document.addEventListener("DOMContentLoaded", function () {
    const staffData = [
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      // Add more staff objects as needed
      {
        position: "Vice Prefect",
        name: "John Doe",
        year: "2021-2022",
        imageUrl: "./gallery/Admin_photois/viceprefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },

      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
      },
      {
        position: "Prefect",
        name: "Pallab Kumar Borah",
        year: "2022-2023",
        imageUrl: "./gallery/Admin_photois/prefect.jpeg"
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
  