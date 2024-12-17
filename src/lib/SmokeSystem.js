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
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.pool = [];
        this.MAX_PARTICLES = 200;
        this.isActive = false;
        this.position = 0;

        // Default spawn configuration
        this.spawnConfig = {
            baseY: 680,
            spreadX: 20,
            spawnRate: { min: 1, max: 2 },
            initialRadius: { min: 8, max: 12 }
        };

        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.scale = Math.max(this.canvas.width, this.canvas.height) / 1000;
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

        // Use the configurable spawn point and spread
        const spawnX = x + this.random(-this.spawnConfig.spreadX/2, this.spawnConfig.spreadX/2);
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
        particle.vy = Math.cos(0) * force;

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

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(this.scale, this.scale);
        this.ctx.translate(
            -(1000 - this.canvas.width / this.scale) / 2,
            -(1000 - this.canvas.height / this.scale) / 2
        );
        this.ctx.clearRect(0, 0, 1000, 1000);

        const max = this.random(1, 2);
        for (let i = 0; i < max; i++) {
            this.spawn(494, 740);
        }

        this.update();
        this.draw();
    }
}