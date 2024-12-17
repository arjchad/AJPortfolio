export const SHAKE_PATTERNS = [
    // [translateX, translateY, rotate]
    [ 2,  1,  0],
    [-1, -2, -1],
    [-3,  0,  1],
    [ 0,  2,  0],
    [ 1, -1,  1],
    [-1,  2, -1],
    [-3,  1,  0],
    [ 2,  1, -1],
    [-1, -1,  1],
    [ 2,  2,  0],
    [ 1, -2, -1]
].map(s => [s[0]/6, s[1]/6, s[2]/8]);

export class FlameAnimation {
    constructor(mainFlame, sideFlames) {
        this.mainFlame = mainFlame;
        this.sideFlames = sideFlames;
        this.frame = 0;
    }

    animate() {
        // Flame height animation
        const mainFlameHeight = 109 + Math.sin(this.frame * 0.2) * 5;
        const sideFlameHeight = 109 + Math.sin(this.frame * 0.2 + Math.PI) * 3;

        // Update flame heights
        if (this.mainFlame) {
            this.mainFlame.style.height = `${mainFlameHeight}px`;
        }

        this.sideFlames.forEach((flame, i) => {
            if (flame) {
                flame.style.height = `${sideFlameHeight + Math.sin(this.frame * 0.15 + i) * 2}px`;
            }
        });

        this.frame++;
    }
}

export class RocketShake {
    constructor(rocketRef, intensity = 1) {
        this.rocketRef = rocketRef;
        this.intensity = intensity;
        this.frame = 0;
    }

    getShakeTransform(progress) {
        const shakeIndex = Math.floor(this.frame / 7) % SHAKE_PATTERNS.length;
        const shake = SHAKE_PATTERNS[shakeIndex];

        // Intensity increases with launch progress up to a point
        const shakeIntensity = Math.min(progress * this.intensity, 1);

        return {
            x: shake[0] * shakeIntensity,
            y: shake[1] * shakeIntensity,
            rotation: shake[2] * shakeIntensity
        };
    }

    animate(launchProgress) {
        if (!this.rocketRef.current) return;

        const shake = this.getShakeTransform(launchProgress);

        // Apply shake to rocket
        this.rocketRef.current.style.transform =
            `translate(${shake.x}px, ${shake.y}px) rotate(${shake.rotation}deg)`;

        this.frame++;
    }

    stop() {
        if (this.rocketRef.current) {
            this.rocketRef.current.style.transform = 'none';
        }
    }
}