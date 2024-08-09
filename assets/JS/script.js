class TableauAnimator {
    constructor(btnDownSelector, btnUpSelector, tableauSelector, gridSelectors) {
        this.btnDown = document.querySelectorAll(btnDownSelector);
        this.btnUp = document.querySelectorAll(btnUpSelector);
        this.tableau = document.querySelector(tableauSelector);
        this.grids = document.querySelectorAll(gridSelectors);
        this.index = 1;

        this.addEventListeners();
    }

    animateElementsOut(index, direction) {
        const timeline = gsap.timeline();
        const selectors = [
            `.t${index}`, `.st${index}`, `.mt${index}`, `.btna${index}`, `.btnb${index}`, `.tg${index}`
        ];

        timeline.to(selectors, { 
            opacity: 0, 
            y: direction === 'down' ? -100 : 100, 
            duration: 0.45, 
            stagger: 0.1 
        });

        timeline.to(this.tableau, {
            y: direction === 'down' ? '-=100vh' : '+=100vh',
            duration: 1,
            ease: "power1.in"
        }, '-=0.75');

        return timeline;
    }

    animateElementsIn(index) {
        const timeline = gsap.timeline();
        const selectors = [
            `.t${index}`, `.st${index}`, `.mt${index}`, `.btna${index}`, `.btnb${index}`, `.tg${index}`
        ];

        timeline.fromTo(selectors, 
            { opacity: 0, y: -100 }, 
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.1 }
        );

        return timeline;
    }

    animateButton(btn, isGood) {
        const animationClass = isGood ? 'animBtnGood' : 'animBtn';
        btn.classList.add(animationClass);
        setTimeout(() => btn.classList.remove(animationClass), 500);
    }

    moveDown() {
        if (this.index < this.grids.length) {
            this.animateElementsOut(this.index, 'down').then(() => {
                this.index++;
                this.animateElementsIn(this.index);
            });
        }
    }

    moveUp() {
        if (this.index > 1) {
            this.animateElementsOut(this.index, 'up').then(() => {
                this.index--;
                this.animateElementsIn(this.index);
            });
        }
    }

    handleButtonClick(btn, increment) {
        const isAtLimit = (increment === 1 && this.index >= this.grids.length) || 
                          (increment === -1 && this.index <= 1);

        this.animateButton(btn, !isAtLimit);

        if (!isAtLimit) {
            if (increment === 1) {
                this.moveDown();
            } else {
                this.moveUp();
            }
        }
    }

    addEventListeners() {
        this.btnDown.forEach(btn => {
            btn.addEventListener('click', () => this.handleButtonClick(btn, 1));
        });

        this.btnUp.forEach(btn => {
            btn.addEventListener('click', () => this.handleButtonClick(btn, -1));
        });
    }
}

// Initialisation de la classe
const animator = new TableauAnimator('.btn2', '.btn1', '.tableauPrincipal', '.grid1, .grid2, .grid3, .grid4, .grid5, .grid6, .grid7');
