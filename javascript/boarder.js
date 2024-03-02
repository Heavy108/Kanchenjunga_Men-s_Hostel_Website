
  $(document).ready(function () {
    function updateTableHeaders() {
      var windowWidth = $(window).width();
      var isMobile = windowWidth <= 375;

      $(".tab-pane").each(function () {
        var table = $(this).find("table");
        if (isMobile) {
          // Hide the ROLL NO. column when the window is less than 375 pixels
          table.find("th:contains('ROLL NO.')").hide();
          table.find("td").each(function () {
            var tdIndex = $(this).index();
            if (tdIndex === 3) {
              $(this).hide();
            }
          });
        } else {
          // Show the ROLL NO. column for larger windows
          table.find("th:contains('ROLL NO.')").show();
          table.find("td").each(function () {
            var tdIndex = $(this).index();
            if (tdIndex === 3) {
              $(this).show();
            }
          });
        }
      });
    }

    // Call the function when the document is ready and when the window is resized
    updateTableHeaders();
    $(window).resize(updateTableHeaders);
  });

