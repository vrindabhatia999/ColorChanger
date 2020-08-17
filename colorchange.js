<!DOCTYPE html>
<html>
<head>
  <title>Color Change</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <style type="text/css">
     
   .s1{
    text-align: center;
    font-size: 35px;
    font-family: monospace;

   }

   .s2{
    margin-top: 5%;
    text-align: center;
   }
  </style>
</head>

<body>
  <script type="text/javascript">
    
    function onChangeBack(color){
      document.body.style.background=color;

    }

    function onChangeHead(color){
      document.getElementById("root").style.color=color;
    }

  </script>


  <div class="container">
    <p id="root" style="text-align: center; font-size: 60px; font-weight: bolder; font-style: italic;">Hello Text to Be changed</p>
  </div>
  <div class="s1">
    <h2 style="font-family: monospace; font-size: 35px;">To Change the heading color click:</h2>
    <button type="button" onclick="onChangeHead('yellow');" class="btn btn-info" style="font-size: 30px;">Yellow</button>
    <button type="button" onclick="onChangeHead('lightgreen');" class="btn btn-info" style="font-size: 30px;">Green</button>
    <button type="button" onclick="onChangeHead('purple');" class="btn btn-info" style="font-size: 30px;">Purple</button>
    <button type="button" onclick="onChangeHead('magenta');" class="btn btn-info" style="font-size: 30px;">Magenta</button>
    <button type="button" onclick="onChangeHead('orange');" class="btn btn-info" style="font-size: 30px;">Orange</button>
    
  </div>
  <div class="s2">
    <h2 style="font-family: monospace; font-size: 35px;">To Change the background color click:</h2>
    <button type="button" onclick="onChangeBack('coral');" class="btn btn-info" style="font-size: 30px;">Coral</button>
    <button type="button" onclick="onChangeBack('#ffccf9');" class="btn btn-info" style="font-size: 30px;">Pastel pink</button>
    <button type="button" onclick="onChangeBack('#d5aaff');" class="btn btn-info" style="font-size: 30px;">Pastel purple</button>
    <button type="button" onclick="onChangeBack('#bffcc6');" class="btn btn-info" style="font-size: 30px;">Pastel green</button>
    <button type="button" onclick="onChangeBack('#ffff85');" class="btn btn-info" style="font-size: 30px;">Pastel yellow</button>
  </div>

</body>
</html>
