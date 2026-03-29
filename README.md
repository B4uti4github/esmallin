# Esmallin.js

A framework that makes small improvements to help you develop a better and easier-to-build website.

For now we have this:
- **Esmallinlash (Before EsmallinTranslate)**: An class for an better translate like in Flash, but using HTML Elements :D.

Anything you want to add here to improve the framework and add more features is welcome ;D.
# Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container">
        <h1>Esmallin</h1>
    </div>
    <style>
        #container {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            font-family: sans-serif;
        }
    </style>
    <script src="esmallin.js"></script>
    <script>
        const esmallinlash = new Esmallinlash();

        var element = document.getElementById('container')

        esmallinlash.add(element, 100, 100)
        setTimeout(() => {
            element.x = 500
            element.rotation = 45
            element.hue = 180
        }, 2000)
        
    </script>
</body>
</html>
```