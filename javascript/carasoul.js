
      const items = [
          { image: "/gallery/photo_gallery/Foundation_Day/1.jpeg" },
          { image: "/gallery/photo_gallery/Foundation_Day/2.jpeg" },
          { image: "/gallery/photo_gallery/Foundation_Day/3.jpeg" }
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
              h2.innerText = 'Together Again!';
              div.appendChild(h2);

              const p = document.createElement('p');
              p.innerText = "Welcome back, brilliant minds of 0s and 1s! As CSE alumni, you're the architects of the digital future. Reconnect, reminisce, and inspire. Together, let's code unforgettable memories!";
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