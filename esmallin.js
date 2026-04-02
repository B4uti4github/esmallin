// # Esmallin.js 
//
// A framework that makes small improvements to help you develop a better and easier-to-build website.


class EsmallinTranslate {
    constructor() {
        this.list = [];
        this.start()
    }

    add(element, x = 0, y = 0) {
        // Inicializamos las propiedades de Flash en el elemento DOM
        //Transform part
        element.x = x;
        element.y = y;
        element.rotation = 0;
        element.scaleX = 1;
        element.scaleY = 1;
        element.skewX = 0;
        element.skewY = 0;

        // Filter part
        element.hue = 0;
        element.saturation = 1;
        element.brightness = 1;
        element.contrast = 1;

        // Estilos base para que se comporte como un objeto de Flash
        element.style.position = 'absolute';
        element.style.transformOrigin = '0 0'; 
        
        this.list.push(element);
    }

    start() {
        // Usamos bind para que "this" dentro de render siga siendo la clase
        const _loop = () => {
            this.render();
            requestAnimationFrame(_loop);
        };
        requestAnimationFrame(_loop);
    }

    render() {
        this.list.forEach(el => {
            // Combinamos todo en una sola operación de GPU
            el.style.transform = `
                translate(${el.x}px, ${el.y}px) 
                rotate(${el.rotation}deg) 
                scale(${el.scaleX}, ${el.scaleY}) 
                skew(${el.skewX}deg, ${el.skewY}deg)
            `;
            el.style.filter = `
                hue-rotate(${el.hue}deg) 
                saturate(${el.saturation}) 
                brightness(${el.brightness}) 
                contrast(${el.contrast})
            `;
        });
    }
}
class Esmallinlash {
    constructor() {
        this.list = [];
        this.start()
    }

    add(element, x = 0, y = 0) {
        // Inicializamos las propiedades de Flash en el elemento DOM
        //Transform part
        element.x = x;
        element.y = y;
        element.rotation = 0;
        element.scaleX = 1;
        element.scaleY = 1;
        element.skewX = 0;
        element.skewY = 0;

        // Filter part
        element.hue = 0;
        element.saturation = 1;
        element.brightness = 1;
        element.contrast = 1;

        // Estilos base para que se comporte como un objeto de Flash
        element.style.position = 'absolute';
        
        this.list.push(element);
    }

    start() {
        // Usamos bind para que "this" dentro de render siga siendo la clase
        const _loop = () => {
            this.render();
            requestAnimationFrame(_loop);
        };
        requestAnimationFrame(_loop);
    }

    render() {
        this.list.forEach(el => {
            // Combinamos todo en una sola operación de GPU
            el.style.transform = `
                translate(${el.x}px, ${el.y}px) 
                rotate(${el.rotation}deg) 
                scale(${el.scaleX}, ${el.scaleY}) 
                skew(${el.skewX}deg, ${el.skewY}deg)
            `;
            el.style.filter = `
                hue-rotate(${el.hue}deg) 
                saturate(${el.saturation}) 
                brightness(${el.brightness}) 
                contrast(${el.contrast})
            `;
        });
    }
}

class EsmallinStyle {
    constructor(code) {
        this.displaylist = []; 
        this.code = code;
        this.lastTime = 0;
        this.start();
    }

    add(type, selector) {
        const query = type === "id" ? `#${selector}` : `.${selector}`;
        const found = document.querySelectorAll(query);
        
        found.forEach(element => {
            let canvas = element.querySelector(".esmallin-canvas");
            if (!canvas) {
                canvas = document.createElement("canvas");
                canvas.className = "esmallin-canvas";
                canvas.style.position = "absolute";
                canvas.style.top = "0";
                canvas.style.left = "0";
                canvas.style.pointerEvents = "none";
                element.appendChild(canvas);
            }
            const ctx = canvas.getContext("2d");
            // Guardamos la referencia para no tener que buscarla luego
            this.displaylist.push({ element, canvas, ctx });
        });
    }

    start(currentTime = 0) {
        // 1. Calcular Delta Time
        const dt = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // 2. Usar la lista ya guardada (Rápido)
        this.displaylist.forEach(item => {
            const { element, canvas, ctx } = item;

            // Auto-ajuste de tamaño
            if (canvas.width !== element.offsetWidth || canvas.height !== element.offsetHeight) {
                canvas.width = element.offsetWidth;
                canvas.height = element.offsetHeight;
            }

            // 3. Ejecutar código del usuario pasando el dt
            if (this.code) {
                this.code.call(element, ctx, dt);
            }
        });

        requestAnimationFrame((time) => this.start(time));
    }
}
