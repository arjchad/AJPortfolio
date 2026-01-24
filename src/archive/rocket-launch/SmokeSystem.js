class Particle {
    constructor() {
        this.init(0, 0, 10);
    }

    init(x, y, radius) {
        this.alive = true;
        this.radius = radius || 10;
        this.wander = 0;
        this.drag = 1;
        this.color = '#fff';
        this.x = x || 0.0;
        this.y = y || 0.0;
        this.vx = 0.0;
        this.vy = 0.0;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= this.drag;
        this.vy *= this.drag;
        this.radius += 0.5;
        this.alive = this.radius < 60;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0deg, 0%, 100%, ${1 - (this.radius - 20) / 40})`;
        ctx.fill();
    }
}

export class SmokeSystem {
    constructor(canvas, spawnConfig = {}, rocketContainer, rocketSvgElement = null) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.pool = [];
        this.MAX_PARTICLES = 200;
        this.isActive = false;
        this.position = 0;

        this.rocketContainer = rocketContainer; // Reference to the rocket container
        this.rocketSvgElement = rocketSvgElement; // Reference to the actual rocket SVG for position tracking

        this.spawnConfig = {
            spreadX: spawnConfig.spreadX || 20,
            spawnRate: spawnConfig.spawnRate || {min: 1, max: 2},
            initialRadius: spawnConfig.initialRadius || {min: 8, max: 12},
        };

        this.init();
    }

    // Set the rocket SVG element for position tracking
    setRocketElement(element) {
        this.rocketSvgElement = element;
    }

    // Get the rocket's bottom position in canvas coordinates
    getRocketBottomPosition() {
        if (!this.rocketSvgElement) {
            // Fallback: try to find the rocket SVG in the DOM
            this.rocketSvgElement = document.querySelector('.Svg-launch');
        }

        if (this.rocketSvgElement) {
            const rocketRect = this.rocketSvgElement.getBoundingClientRect();
            const canvasRect = this.canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio;

            // Calculate the bottom center of the rocket relative to canvas
            // The flames are at roughly 75-80% down the SVG viewBox (y ~730 out of 1000)
            const flameYRatio = 0.72;
            const rocketFlameY = rocketRect.top + (rocketRect.height * flameYRatio);

            return {
                x: (rocketRect.left + rocketRect.width / 2 - canvasRect.left) * dpr,
                y: (rocketFlameY - canvasRect.top) * dpr
            };
        }

        // Fallback to center of canvas
        return {
            x: this.canvas.width / 2,
            y: this.canvas.height * 0.78
        };
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        const dpr = window.devicePixelRatio;

        // Set canvas to cover full viewport
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;

        // Set canvas CSS size to match viewport
        this.canvas.style.width = `${window.innerWidth}px`;
        this.canvas.style.height = `${window.innerHeight}px`;
        this.canvas.style.left = '0';
        this.canvas.style.top = '0';
        this.canvas.style.transform = 'none';

        // Prevent invisible borders
        this.canvas.style.overflow = 'visible';
    }

    start() {
        this.isActive = true;
        this.animate();
    }

    stop() {
        this.isActive = false;
    }

    spawn(rocketPos) {
        if (this.particles.length >= this.MAX_PARTICLES)
            this.pool.push(this.particles.shift());

        const particle = this.pool.length ? this.pool.pop() : new Particle();

        // Spawn at rocket's flame position with slight horizontal spread
        const spawnX = rocketPos.x + this.random(-this.spawnConfig.spreadX / 2, this.spawnConfig.spreadX / 2);
        const spawnY = rocketPos.y;

        particle.init(
            spawnX,
            spawnY,
            this.random(
                this.spawnConfig.initialRadius.min,
                this.spawnConfig.initialRadius.max
            )
        );

        const force = this.random(2, 8);
        particle.vx = this.random(-1, 1);
        particle.vy = force; // Particles move downward (positive Y is down in canvas)
        this.particles.push(particle);
    }


    random(min, max) {
        return min + Math.random() * (max - min);
    }

    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            if (particle.alive) particle.move();
            else this.pool.push(this.particles.splice(i, 1)[0]);
        }
    }

    draw() {
        this.ctx.globalCompositeOperation = 'lighter';
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].draw(this.ctx);
        }
    }

    animate = () => {
        if (!this.isActive) return;

        requestAnimationFrame(this.animate);

        // No scaling or translating; draw at native resolution
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Get the rocket's current position (tracks it as it moves)
        const rocketPos = this.getRocketBottomPosition();

        // Spawn particles at the rocket's flame position
        const max = this.random(1, 2);
        for (let i = 0; i < max; i++) {
            this.spawn(rocketPos);
        }

        this.update();
        this.draw();
    };
}