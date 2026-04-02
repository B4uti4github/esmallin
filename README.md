# Esmallin.js

A framework that makes small improvements to help you develop a better and easier-to-build website.

Caractheristics:
- **Esmallinlash (Before EsmallinTranslate)**: An class for an better translate like in Flash, but using HTML Elements :D.
- **EsmallinStyle**: An class for make our own Styles using Canvas and some automatization :D 


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
    <div id="helloWorld">
        <p>Hello, World!</p>
    </div>
    <style>
        #helloWorld {
            color: white;
            background-color: black;
            width: 200px;
            height: 50px;
            font-family: sans-serif;
        }
        #container {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            font-family: sans-serif;
            transform-origin: center center;
        }
    </style>
    <script src="https://unpkg.com/esmallin"></script>
    <script>
        const esmallinlash = new Esmallinlash();

        const esmallinStyle = new EsmallinStyle(function(ctx, dt) {
            this.rotation += 60 * dt;
            ctx.reset()
            ctx.strokeStyle = "black";
            ctx.lineWidth = 8;
            ctx.strokeRect(0, 0, this.offsetWidth, this.offsetHeight);
        });

        const esmallinStyle2 = new EsmallinStyle(function(ctx, dt) {
            this.y += 10 * dt;
            this.x += 10 * dt;
        });



        esmallinStyle.add("id", "container");

        esmallinStyle2.add("id", "helloWorld");

        var element = document.getElementById('container')
        var element2 = document.getElementById('helloWorld')
        esmallinlash.add(element, 100, 100)
        esmallinlash.add(element2, 0, 0)
        setTimeout(() => {
            element.x = 500
            element.rotation = 45
            element.hue = 180
        }, 2000)
        
    </script>
</body>
</html>
```