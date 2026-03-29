// # Esmallin.js 
//
// A framework that makes small improvements to help you develop a better and easier-to-build website.
//
// For now we have this:
// - **EsmallinTranslate**: An class for an better translate like in Flash, but using HTML Elements :D.

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
