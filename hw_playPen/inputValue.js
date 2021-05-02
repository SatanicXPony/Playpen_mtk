<!DOCTYPE html>
<html>
<head>
  <title>Homework Assignment 26</title>
</head>
<body>
  <div style="width: 960px; margin: 64px auto;">
    <div>
      <input id="my-input" type="text" placeholder="Type here!" />
      <button id="my-button" onclick="myButtonHandler()">Click me!</button>
    </div>
    <div>
      <h1>Latest input value:</h1>
      <p id="my-display"></p>
    </div>
  </div>
  <script type="text/javascript">
    function myButtonHandler(){
      
      const myInput = document.querySelector('#my-input');
      const myDisplay = document.querySelector('#my-display');

      console.log('Input value:', myInput.value);
      console.log('Displayed value:', myDisplay.innerHTML);
    };
  </script>
</body>
</html>

// Change the JavaScript in this function so that the value
      // of #my-input is copied into #my-display when #my-button is clicked
      // you should not have to change anything outside of this function
    