
      const items = [
          { image: "./gallery/main.jpeg" },
          { image: "/gallery/photo_gallery/Foundation_Day/4.jpeg" },
          { image: "/gallery/photo_gallery/Miscellaneous/10.jpeg" }
      ];

      let moveClass = '';
      let carouselItems = [...items];

      document.documentElement.style.setProperty('--num', carouselItems.length);

      function renderCarousel() {
          const carousel = document.getElementById('carousel');
          carousel.innerHTML = '';

          carouselItems.forEach((item) => {
              const li = document.createElement('li');
              li.className = 'card';

              const div = document.createElement('div');
              div.className = 'Introduction';

              const h2 = document.createElement('h2');
              h2.innerText = 'Welcome to Kanchenjungha Men\'s Hostel!';
              div.appendChild(h2);
            //   const h3 = document.createElement('h3');
            //   h2.innerText = 'Kanchenjungha Men's Hostel';
            //   div.appendChild(h3);

              const p = document.createElement('p');
              p.innerText = "Home... away from Home";
              div.appendChild(p);

              li.appendChild(div);

              const img = document.createElement('img');
              img.src = item.image;
              img.width = 1200;
              img.height = 1200;
              img.alt = 'University Image';

              li.appendChild(img);
              carousel.appendChild(li);
          });
      }

      function handleShift() {
          const carousel = document.getElementById('carousel');
          carousel.className = `${moveClass} carousel`;

          setTimeout(() => {
              if (moveClass === 'prev') {
                  shiftNext();
              } else if (moveClass === 'next') {
                  shiftPrev();
              }
              carousel.className = 'carousel'; // Reset class after the shift
          }, 500); // Adjust timing if necessary
      }

      function shiftPrev() {
          let lastcard = carouselItems.pop();
          carouselItems.unshift(lastcard);
          renderCarousel();
      }

      function shiftNext() {
          let firstcard = carouselItems.shift();
          carouselItems.push(firstcard);
          renderCarousel();
      }

      setInterval(() => {
          moveClass = 'prev';
          handleShift();
      }, 5000);

      renderCarousel(); // Initial render