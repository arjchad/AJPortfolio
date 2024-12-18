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
    constructor(canvas, spawnConfig = {}, rocketContainer) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.pool = [];
        this.MAX_PARTICLES = 200;
        this.isActive = false;
        this.position = 0;

        this.rocketContainer = rocketContainer; // Reference to the rocket container
        this.baseHeightRatio = 0.68; // Default ratio (68% of container height)

        this.spawnConfig = {
            baseY: this.calculateBaseY(), // Dynamically calculate the spawn point
            spreadX: spawnConfig.spreadX || 20,
            spawnRate: spawnConfig.spawnRate || {min: 1, max: 2},
            initialRadius: spawnConfig.initialRadius || {min: 8, max: 12},
        };

        this.init();
    }

    calculateBaseY() {
        // Calculate base spawn position as 68% of the rocket container's height
        const containerHeight = this.rocketContainer?.clientHeight || 1000;
        const rect = this.canvas.getBoundingClientRect();
        return containerHeight * this.baseHeightRatio - (rect.top || 0);
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    // resizeCanvas() {
    //     const container = this.rocketContainer;
    //
    //     // Set canvas dimensions to match container size
    //     this.canvas.width = container.clientWidth * window.devicePixelRatio;
    //     this.canvas.height = container.clientHeight * window.devicePixelRatio;
    //
    //     // Calculate uniform scaling based on the smaller dimension
    //     this.scale = Math.min(this.canvas.width, this.canvas.height) / 1000;
    //
    //     // Update base spawn position
    //     this.spawnConfig.baseY = this.calculateBaseY();
    // }

    resizeCanvas() {
        const container = this.rocketContainer;
        const dpr = window.devicePixelRatio;

        // Set canvas dimensions to match container size
        this.canvas.width = container.clientWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;

        // Set canvas CSS size
        this.canvas.style.width = `${container.clientWidth}px`;
        this.canvas.style.height = `${window.innerHeight}px`;
        this.canvas.style.left = `50%`; // Move canvas to the center
        //this.canvas.style.top = `80%`;
        this.canvas.style.transform = `translate(-50.5%)`;


        this.spawnConfig.baseY = this.canvas.height / 1.28; // Move spawn position lower

        // Prevent invisible borders
        this.canvas.style.overflow = 'visible';

        // Ensure rocket SVG doesn't move vertically
        const rocketSVG = document.querySelector('.rocket-svg');
        if (rocketSVG) {
            rocketSVG.style.position = 'fixed'; // Fix position vertically
            rocketSVG.style.top = `${window.innerHeight / 2}px`; // Lock vertically to the middle
            rocketSVG.style.transform = `translateY(-50%)`;
        }
    }

    start() {
        this.isActive = true;
        this.animate();
    }

    stop() {
        this.isActive = false;
    }

    spawn(x, baseY) {
        if (this.particles.length >= this.MAX_PARTICLES)
            this.pool.push(this.particles.shift());

        const particle = this.pool.length ? this.pool.pop() : new Particle();

        // Horizontal spawn around center
        const spawnX = x + this.random(-this.spawnConfig.spreadX / 2, this.spawnConfig.spreadX / 2);
        // Vertical spawn using this.spawnConfig.baseY
        const spawnY = (this.spawnConfig.baseY || baseY) + this.position;

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
        particle.vy = force; // Straight upward (if needed adjust sign)
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

        // Center X based on canvas width
        const centerX = this.canvas.width / 2;

        // Spawn particles at centerX horizontally
        const max = this.random(1, 2);
        for (let i = 0; i < max; i++) {
            this.spawn(centerX, 0); // We'll add baseY inside spawn method
        }

        this.update();
        this.draw();
    };
}