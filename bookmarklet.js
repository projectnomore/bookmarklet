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

    // Create a heading element
    var heading = document.createElement('h1');
    heading.textContent = 'Made By ProjectNoMore';
    heading.style.color = 'red';
    heading.style.fontSize = '32px';
    heading.style.fontWeight = 'bold';
    heading.style.textAlign = 'center';
    heading.style.marginTop = '20px';

    // Append the heading to the container
    container.appendChild(heading);

    // Create a button box
    var buttonBox = document.createElement('div');
    buttonBox.style.textAlign = 'center';
    buttonBox.style.marginTop = '20px';

    // Create a button
    var clickButton = document.createElement('button');
    clickButton.textContent = 'CLICK ME';
    clickButton.style.padding = '10px 20px';
    clickButton.style.fontSize = '16px';
    clickButton.style.backgroundColor = 'blue';
    clickButton.style.color = 'white';

    // Add click event listener to the button
    clickButton.addEventListener('click', function() {
        alert('Button clicked!');
    });

    // Append the button to the button box
    buttonBox.appendChild(clickButton);

    // Append the button box to the container
    container.appendChild(buttonBox);

    // Open a new window and append the container to its document body
    var newWindow = window.open('', '_blank', 'width=' + containerWidth + ', height=' + containerHeight);
    newWindow.document.body.appendChild(container);

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
