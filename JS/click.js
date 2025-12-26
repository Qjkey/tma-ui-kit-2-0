document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.clicked');

    items.forEach(item => {
        item.addEventListener('pointerdown', (e) => {
            const existingRipple = item.querySelector('.ripple');   
            if (existingRipple) {
                existingRipple.remove();
            }

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            item.appendChild(ripple);

            const itemRect = item.getBoundingClientRect();
            const itemWidth = item.offsetWidth;
            const itemHeight = item.offsetHeight;

            const x = e.clientX - itemRect.left;
            const y = e.clientY - itemRect.top;
            const diameter = Math.max(itemWidth, itemHeight) * 2;

            ripple.style.width = `${diameter}px`;
            ripple.style.height = `${diameter}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
        });
    });
    items.forEach(item => {
        item.addEventListener('mousedown', (e) => {
            const input_radio = item.querySelector('input[type="radio"]');
            const input_checkbox = item.querySelector('input[type="checkbox"]');
            if (input_radio) {
                if (input_radio.checked === false) {
                    input_radio.checked = !input_radio.checked;
                }
            } else if (input_checkbox) {
                const span = item.querySelector('span[class="slider"]')
                if (e.target === span) {
                    return;
                }
                input_checkbox.checked = !input_checkbox.checked; 
            }
        });
    });
});