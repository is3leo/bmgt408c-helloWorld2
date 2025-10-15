    document.addEventListener('DOMContentLoaded', function() {

      // Headshot hover effect
      const headshot = document.getElementById('headshot');

      if (headshot) {
        const originalHeadshot = headshot.getAttribute('src');
        const hoverHeadshot = headshot.getAttribute('data-hover');;

        headshot.addEventListener('mouseenter', function() {
          this.src = hoverHeadshot;
        });

        headshot.addEventListener('mouseleave', function() {
          this.src = originalHeadshot;
        });

        // Preload hover image
        const preloadHeadshot = new Image();
        preloadHeadshot.src = hoverHeadshot;
      }

      // Name image hover effect
      const nameImage = document.getElementById('nameImage');

      if (nameImage) {
        const originalName = nameImage.getAttribute('src');
        const hoverName = nameImage.getAttribute('data-hover');

        nameImage.addEventListener('mouseenter', function() {
          this.src = hoverName;
        });

        nameImage.addEventListener('mouseleave', function() {
          this.src = originalName;
        });

        // Preload hover image
        const preloadName = new Image();
        preloadName.src = hoverName;
      }
    });