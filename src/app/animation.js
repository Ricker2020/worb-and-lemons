function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}

export function setupAnimation() {
    const sections = document.querySelectorAll('.section', true);
    const timeline = document.querySelector('.timeline');
    const line = document.querySelector('.line');
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler(e){
        const{
            scrollY
        } = window;
        up = scrollY < prevScrollY;
        down = !up;
        const timelineRect = timeline.getBoundingClientRect();
        //const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

        const dist = targetY - timelineRect.top
        console.log(dist);

        if (down && !full){
            set = Math.max(set, dist);
                line.style.bottom = `calc(100% - ${set}px)`
        }

        if (dist > timeline.offsetHeight + 50 && !full){
            full = true;
            line.style.bottom = `-50px`
        }

        sections.forEach(item => {
            //console.log(items);
            const rect = item.getBoundingClientRect();

            if(rect.top + item.offsetHeight / 5 < targetY) {
                item.classList.add('show-me')
            }
        });

        prevScrollY = window.scrollY;
    }

    //scrollHandler();
    line.style.display = 'block';
    //window.addEventListener('scroll', scrollHandler)
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
}