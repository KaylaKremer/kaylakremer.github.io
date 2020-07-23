const lerp = (a, b, n) => (1 - n) * a + n * b;
const { body } = document;
const getMousePosition = event => {
    let e = event;
    let posX = 0;
    let posY = 0;
    if (!e) {
        e = window.event;
    }
    if (e.pageX || e.pageY) {
        posX = e.pageX;
        posY = e.pageY;
    } else if (e.clientX || e.clientY) {
        posX =
            e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posY = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posX, y: posY };
};
export default class CustomCursor {
    constructor(cursor, innerTriangle, innerTriangleDot) {
        this.DOM = { cursor };
        this.DOM.triangle = innerTriangle;
        this.DOM.triangleDot = innerTriangleDot;
        this.bounds = {
            triangleDot: this.DOM.triangleDot.getBoundingClientRect(),
            triangle: this.DOM.triangle.getBoundingClientRect()
        };
        this.scale = 1;
        this.opacity = 1;
        this.mousePosition = { x: 0, y: 0 };
        this.lastMousePosition = {
            triangleDot: { x: 0, y: 0 },
            triangle: { x: 0, y: 0 }
        };
        this.lastScale = 1;

        this.initEvents();
        requestAnimationFrame(() => this.render());
    }

    initEvents() {
        window.addEventListener('mousemove', e => {
            this.mousePosition = getMousePosition(e);
            return this.mousePosition;
        });
    }

    render() {
        this.lastMousePosition.triangle.x = lerp(
            this.lastMousePosition.triangle.x,
            this.mousePosition.x - this.bounds.triangle.width / 2 - 5,
            0.25
        );
        this.lastMousePosition.triangle.y = lerp(
            this.lastMousePosition.triangle.y,
            this.mousePosition.y - this.bounds.triangle.height / 2 - 8,
            0.25
        );
        this.lastMousePosition.triangleDot.x = lerp(
            this.lastMousePosition.triangleDot.x,
            this.mousePosition.x - this.bounds.triangleDot.width,
            0.5
        );
        this.lastMousePosition.triangleDot.y = lerp(
            this.lastMousePosition.triangleDot.y,
            this.mousePosition.y - this.bounds.triangleDot.height,
            0.5
        );
        this.lastScale = lerp(this.lastScale, this.scale, 0.4);
        this.DOM.triangle.style.transform = `translateX(${this.lastMousePosition.triangle.x}px) translateY(${this.lastMousePosition.triangle.y}px)`;
        this.DOM.triangleDot.style.transform = `translateX(${this.lastMousePosition.triangleDot.x}px) translateY(${this.lastMousePosition.triangleDot.y}px) scale(${this.lastScale})`;
        requestAnimationFrame(() => this.render());
    }

    enter() {
        this.scale = 1.5;
        this.DOM.triangle.style.display = 'none';
    }

    leave() {
        this.scale = 1;
        this.DOM.triangle.style.display = '';
    }
}
