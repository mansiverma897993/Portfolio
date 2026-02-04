// 3D Animation Script
const canvas = document.getElementById('canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });

// Profile Image Upload Handler
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        // Allow drag and drop image replacement
        profileImage.addEventListener('dragover', (e) => {
            e.preventDefault();
            profileImage.style.opacity = '0.7';
        });

        profileImage.addEventListener('dragleave', () => {
            profileImage.style.opacity = '1';
        });

        profileImage.addEventListener('drop', (e) => {
            e.preventDefault();
            profileImage.style.opacity = '1';
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        profileImage.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            }
        });

        // Add click to select file
        profileImage.style.cursor = 'pointer';
        profileImage.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        profileImage.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        });
    }
});

// Set renderer size to fullscreen
function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

onWindowResize();
window.addEventListener('resize', onWindowResize);

// Set background darker so 3D shapes stand out
scene.background = new THREE.Color(0xc5c5c5);

// Create 3D Objects (darker materials for full visibility)
const objects = [];

// Main Cube
const geometry1 = new THREE.BoxGeometry(2, 2, 2);
const material1 = new THREE.MeshPhongMaterial({
    color: 0x454545,
    shininess: 100,
    wireframe: false
});
const cube = new THREE.Mesh(geometry1, material1);
cube.position.x = -3;
scene.add(cube);
objects.push({ mesh: cube, rotationSpeed: 0.005 });

// Sphere
const geometry2 = new THREE.IcosahedronGeometry(1.5, 4);
const material2 = new THREE.MeshPhongMaterial({
    color: 0x505050,
    shininess: 100,
    wireframe: false
});
const sphere = new THREE.Mesh(geometry2, material2);
sphere.position.x = 0;
scene.add(sphere);
objects.push({ mesh: sphere, rotationSpeed: 0.003 });

// Torus
const geometry3 = new THREE.TorusGeometry(2, 0.6, 16, 32);
const material3 = new THREE.MeshPhongMaterial({
    color: 0x5a5a5a,
    shininess: 80,
    wireframe: false
});
const torus = new THREE.Mesh(geometry3, material3);
torus.position.x = 3;
torus.rotation.x = Math.PI / 4;
scene.add(torus);
objects.push({ mesh: torus, rotationSpeed: 0.004 });

// Pyramid
const geometry4 = new THREE.TetrahedronGeometry(1.5, 0);
const material4 = new THREE.MeshPhongMaterial({
    color: 0x4a4a4a,
    shininess: 90,
    wireframe: false
});
const pyramid = new THREE.Mesh(geometry4, material4);
pyramid.position.y = 2.5;
scene.add(pyramid);
objects.push({ mesh: pyramid, rotationSpeed: 0.006 });

// Octahedron
const geometry5 = new THREE.OctahedronGeometry(1.2, 0);
const material5 = new THREE.MeshPhongMaterial({
    color: 0x555555,
    shininess: 85,
    wireframe: false
});
const octahedron = new THREE.Mesh(geometry5, material5);
octahedron.position.y = -2.5;
scene.add(octahedron);
objects.push({ mesh: octahedron, rotationSpeed: 0.005 });

// Lighting (kept so shapes stay visible and defined)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
scene.add(ambientLight);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.75);
directionalLight1.position.set(5, 10, 7);
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.25);
directionalLight2.position.set(-5, -10, -7);
scene.add(directionalLight2);

const pointLight = new THREE.PointLight(0xaaaaaa, 0.45);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Camera position
camera.position.z = 8;

// Scroll interaction
let scrollY = 0;
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate objects
    objects.forEach((obj) => {
        obj.mesh.rotation.x += obj.rotationSpeed;
        obj.mesh.rotation.y += obj.rotationSpeed * 1.5;
        obj.mesh.rotation.z += obj.rotationSpeed * 0.7;

        // Float effect
        obj.mesh.position.z = Math.sin(Date.now() * 0.0005 + obj.mesh.position.x) * 0.5;
    });

    // Gentle auto-rotation based on time
    const time = Date.now() * 0.0001;
    camera.position.x = Math.sin(time) * 3;
    camera.position.y = Math.cos(time * 0.5) * 2;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Smooth parallax effect for hero section
window.addEventListener('scroll', () => {
    const heroSection = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    if (heroSection && scrollPosition < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Contact form: open mailto with name, email, and message
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const subject = encodeURIComponent('Portfolio contact from ' + name);
        const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
        window.location.href = 'mailto:missmv897@gmail.com?subject=' + subject + '&body=' + body;
    });
}
