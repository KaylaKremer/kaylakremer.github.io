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
    constructor(cursor, innerDot, innerCircle) {
        this.DOM = { cursor };
        this.DOM.dot = innerDot;
        this.DOM.circle = innerCircle;
        this.bounds = {
            dot: this.DOM.dot.getBoundingClientRect(),
            circle: this.DOM.circle.getBoundingClientRect()
        };
        this.scale = 1;
        this.opacity = 1;
        this.mousePosition = { x: 0, y: 0 };
        this.lastMousePosition = {
            dot: { x: 0, y: 0 },
            circle: { x: 0, y: 0 }
        };
        this.lastScale = 1;

        this.initEvents();
        requestAnimationFrame(() => this.render());
    }

    initEvents() {
        window.addEventListener('mousemove', ev => {
            this.mousePosition = getMousePosition(ev);
            return this.mousePosition;
        });
    }

    render() {
        this.lastMousePosition.dot.x = lerp(
            this.lastMousePosition.dot.x,
            this.mousePosition.x - this.bounds.dot.width / 2,
            0.4
        );
        this.lastMousePosition.dot.y = lerp(
            this.lastMousePosition.dot.y,
            this.mousePosition.y - this.bounds.dot.height / 2,
            0.4
        );
        this.lastMousePosition.circle.x = lerp(
            this.lastMousePosition.circle.x,
            this.mousePosition.x - this.bounds.circle.width / 2,
            0.5
        );
        this.lastMousePosition.circle.y = lerp(
            this.lastMousePosition.circle.y,
            this.mousePosition.y - this.bounds.circle.height / 2,
            0.5
        );
        this.lastScale = lerp(this.lastScale, this.scale, 0.4);
        this.DOM.dot.style.transform = `translateX(${this.lastMousePosition.dot.x}px) translateY(${this.lastMousePosition.dot.y}px)`;
        this.DOM.circle.style.transform = `translateX(${this.lastMousePosition.circle.x}px) translateY(${this.lastMousePosition.circle.y}px) scale(${this.lastScale})`;
        requestAnimationFrame(() => this.render());
    }

    enter() {
        this.scale = 1.5;
        this.DOM.dot.style.display = 'none';
    }

    leave() {
        this.scale = 1;
        this.DOM.dot.style.display = '';
    }
}
