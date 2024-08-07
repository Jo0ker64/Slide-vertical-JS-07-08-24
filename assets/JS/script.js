const btnDown = document.querySelectorAll('.btn2');
const btnUp = document.querySelectorAll('.btn1');
const tableau = document.querySelectorAll('.tableauPrincipal');
const grid1 = document.querySelectorAll('.grid1');
const grid2 = document.querySelectorAll('.grid2');
const grid3 = document.querySelectorAll('.grid3');
const grid4 = document.querySelectorAll('.grid4');
const grid5 = document.querySelectorAll('.grid5');
const grid6 = document.querySelectorAll('.grid6');
const grid7 = document.querySelectorAll('.grid7');

let index = 1;

const downTableau = () => {

    const TLEND = gsap.timeline();

    TLEND.to(`.t${index}`, { opacity: 0, y: -100, duration: 0.45 });
    TLEND.to(`.st${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.25');
    TLEND.to(`.mt${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.25');
    TLEND.to(`.btna${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.35');
    TLEND.to(`.btnb${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.35');
    TLEND.to(`.tg${index}`, { opacity: 0, y: -100, duration: 0.45 }, '-=0.55');
    TLEND.to(tableau, { duration: 1, ease: "power1.in", y: '-=100vh' }, '-=0.95');

    const TLSTART = gsap.timeline();

    TLSTART.fromTo(`.t${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45, delay: 1 });
    TLSTART.fromTo(`.st${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART.fromTo(`.mt${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART.fromTo(`.btna${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART.fromTo(`.btnb${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART.fromTo(`.tg${index + 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.45');
}

const upTableau = () => {

    const TLEND2 = gsap.timeline();

    TLEND2.to(`.t${index}`, { opacity: 0, y: 100, duration: 0.45 });
    TLEND2.to(`.st${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.25');
    TLEND2.to(`.mt${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.25');
    TLEND2.to(`.btna${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.35');
    TLEND2.to(`.btnb${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.35');
    TLEND2.to(`.tg${index}`, { opacity: 0, y: 100, duration: 0.45 }, '-=0.55');
    TLEND2.to(tableau, { duration: 1, ease: "power1.in", y: '+=100vh' }, '-=0.75');

    const TLSTART2 = gsap.timeline();

    TLSTART2.fromTo(`.t${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.75 });
    TLSTART2.fromTo(`.st${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART2.fromTo(`.mt${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25');
    TLSTART2.fromTo(`.btna${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART2.fromTo(`.btnb${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35');
    TLSTART2.fromTo(`.tg${index - 1}`, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.45');
}

btnDown.forEach(btn => {

    btn.addEventListener('click', () => {

        if (index === 7) {
            btn.classList.add('animBtn');
            setTimeout(() => {
                btn.classList.remove('animBtn');
            }, 500);
        }
        if (index < 7) {
            btn.classList.add('animBtnGood');
            setTimeout(() => {
                btn.classList.remove('animBtnGood');
            }, 500);
            downTableau();
            index++;
        }

    });
});

btnUp.forEach(btn => {

    btn.addEventListener('click', () => {

        if (index === 1) {
            btn.classList.add('animBtn');
            setTimeout(() => {
                btn.classList.remove('animBtn');
            }, 500);
        }

        if (index > 1) {
            btn.classList.add('animBtnGood');
            setTimeout(() => {
                btn.classList.remove('animBtnGood');
            }, 500);
            upTableau();
            index--;
        }

    });
});

// const btnDown = document.querySelectorAll('.btn2');
// const btnUp = document.querySelectorAll('.btn1');
// const tableau = document.querySelector('.tableauPrincipal');
// const grids = document.querySelectorAll('.grid1, .grid2, .grid3, .grid4, .grid5, .grid6, .grid7');

// let index = 1;

// const animateElements = (elements, properties, options) => {
//     const timeline = gsap.timeline();
//     elements.forEach((selector, i) => {
//         timeline.to(selector, properties, i === 0 ? '' : `-=${options.delay}`);
//     });
//     timeline.to(tableau, { duration: 1, ease: "power1.in", y: options.tableauY }, `-=${options.timelineOffset}`);
//     return timeline;
// };

// const downTableau = () => {
//     const elements = [`.t${index}`, `.st${index}`, `.mt${index}`, `.btna${index}`, `.btnb${index}`, `.tg${index}`];
//     animateElements(elements, { opacity: 0, y: -100, duration: 0.45 }, { delay: 0.25, tableauY: '-=100vh', timelineOffset: 0.95 });
//     animateElements(elements.map(el => el.replace(index, index + 1)), { opacity: 1, y: 0, duration: 0.45 }, { delay: 0.25, tableauY: '+=0', timelineOffset: 0.95 });
// };

// const upTableau = () => {
//     const elements = [`.t${index}`, `.st${index}`, `.mt${index}`, `.btna${index}`, `.btnb${index}`, `.tg${index}`];
//     animateElements(elements, { opacity: 0, y: 100, duration: 0.45 }, { delay: 0.25, tableauY: '+=100vh', timelineOffset: 0.75 });
//     animateElements(elements.map(el => el.replace(index, index - 1)), { opacity: 1, y: 0, duration: 0.45 }, { delay: 0.25, tableauY: '+=0', timelineOffset: 0.75 });
// };

// const addButtonEventListener = (buttons, increment) => {
//     buttons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             if ((increment === 1 && index < grids.length) || (increment === -1 && index > 1)) {
//                 btn.classList.add('animBtnGood');
//                 setTimeout(() => btn.classList.remove('animBtnGood'), 500);
//                 if (increment === 1) {
//                     downTableau();
//                 } else {
//                     upTableau();
//                 }
//                 index += increment;
//             } else {
//                 btn.classList.add('animBtn');
//                 setTimeout(() => btn.classList.remove('animBtn'), 500);
//             }
//         });
//     });
// };

// addButtonEventListener(btnDown, 1);
// addButtonEventListener(btnUp, -1);
