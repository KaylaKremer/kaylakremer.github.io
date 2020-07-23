import { gsap } from 'gsap';

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
    constructor(cursor, outerTriangle, innerTriangle) {
        this.DOM = { cursor };
        this.DOM.outerTriangle = outerTriangle;
        this.DOM.innerTriangle = innerTriangle;
        this.bounds = {
            outerTriangle: this.DOM.outerTriangle.getBoundingClientRect(),
            innerTriangle: this.DOM.innerTriangle.getBoundingClientRect()
        };
        this.scale = 1;
        this.opacity = 1;
        this.mousePosition = { x: 0, y: 0 };
        this.lastMousePosition = {
            outerTriangle: { x: 0, y: 0 },
            innerTriangle: { x: 0, y: 0 }
        };
        this.lastScale = 1;

        this.initEvents();
        this.initHovers();
        requestAnimationFrame(() => this.render());
    }

    initEvents() {
        window.addEventListener('mousemove', e => {
            this.mousePosition = getMousePosition(e);
            return this.mousePosition;
        });
    }

    initHovers() {
        const handleMouseEnter = e => {
            const target = e.currentTarget;
            const box = target.getBoundingClientRect();
            this.outerCursorOriginals = {
                width: this.bounds.outerTriangle.width,
                height: this.bounds.outerTriangle.height
            };
            gsap.to(this.DOM.outerTriangle, {
                width: this.DOM.innerTriangle.width,
                height: this.DOM.innerTriangle.height,
                border: '1px solid red',
                duration: 0.2
            });
        };

        const handleMouseLeave = () => {
            gsap.to(this.DOM.outerTriangle, {
                width: this.outerCursorOriginals.width,
                height: this.outerCursorOriginals.height,
                border: 'none',
                duration: 0.2
            });
        };

        const clickableItems = document.querySelectorAll(['a', 'button']);
        clickableItems.forEach(item => {
            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);
        });
    }

    render() {
        this.lastMousePosition.outerTriangle.x = lerp(
            this.lastMousePosition.outerTriangle.x,
            this.mousePosition.x - this.bounds.outerTriangle.width / 2 - 5,
            0.25
        );
        this.lastMousePosition.outerTriangle.y = lerp(
            this.lastMousePosition.outerTriangle.y,
            this.mousePosition.y - this.bounds.outerTriangle.height / 2 - 8,
            0.25
        );
        this.lastMousePosition.innerTriangle.x = lerp(
            this.lastMousePosition.innerTriangle.x,
            this.mousePosition.x - this.bounds.innerTriangle.width,
            0.5
        );
        this.lastMousePosition.innerTriangle.y = lerp(
            this.lastMousePosition.innerTriangle.y,
            this.mousePosition.y - this.bounds.innerTriangle.height,
            0.5
        );
        this.lastScale = lerp(this.lastScale, this.scale, 0.4);
        this.DOM.outerTriangle.style.transform = `translateX(${this.lastMousePosition.outerTriangle.x}px) translateY(${this.lastMousePosition.outerTriangle.y}px)`;
        this.DOM.innerTriangle.style.transform = `translateX(${this.lastMousePosition.innerTriangle.x}px) translateY(${this.lastMousePosition.innerTriangle.y}px) scale(${this.lastScale})`;
        requestAnimationFrame(() => this.render());
    }
}
