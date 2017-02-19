
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>

<head>
  <title>Index Page</title>
  <script src="/res/jquery-3.1.1.min.js" type="text/javascript"></script>
  <script src="/res/index.js" type="text/javascript"></script>
</head>

<body>

<p>Введите число скрытых слоёв</p><br>
<input type="text" id="hiddenLayers"><br>
<p>Введите число нейронов в скрытом слое</p>
<input type="text" id="hiddenNeurons">
<input type="button" value="Рассчитать" onclick="send()">
</body>

</html>
