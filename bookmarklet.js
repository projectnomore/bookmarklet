javascript:(function() {
  // Create a container div for the UI
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '20px';
  container.style.left = '20px';
  container.style.padding = '10px';
  container.style.background = 'rgba(0, 0, 0, 0.5)';
  container.style.border = '1px solid black';
  container.style.zIndex = '9999';

  // Calculate the dimensions for 2.5/4ths of the screen
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var containerWidth = (screenWidth / 4) * 2.5;
  var containerHeight = (screenHeight / 4) * 2.5;

  // Set the dimensions for the container
  container.style.width = containerWidth + 'px';
  container.style.height = containerHeight + 'px';

  // Create a message indicating how to close the UI
  var message = document.createElement('p');
  message.textContent = 'Press Shift + ] to close or open';
  message.style.color = '#fff';
  container.appendChild(message);

  // Append the container to the document body
  document.body.appendChild(container);

  // Toggle the visibility of the container
  function toggleContainerVisibility() {
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  }

  // Listen for the Shift + ] key press event
  document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === '}') {
      toggleContainerVisibility();
    }
  });
})();
