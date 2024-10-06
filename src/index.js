import './styles.css';

const popoverTrigger = document.getElementById('popover-trigger');
const popoverContainer = document.getElementById('popover-container');

let isPopoverVisible = false;

popoverTrigger.addEventListener('click', () => {
    const popoverRect = popoverTrigger.getBoundingClientRect();
    const popoverWidth = 200; 
    const popoverHeight = 100; 

    const centerX = popoverRect.left + popoverRect.width / 2;
    const centerY = popoverRect.top + popoverRect.height / 2;

    if (!isPopoverVisible) {
        popoverContainer.style.top = `${centerY - popoverHeight - popoverRect.height / 2 - 20}px`;
        popoverContainer.style.left = `${centerX - popoverWidth / 2}px`;
        popoverContainer.style.display = 'block';
        isPopoverVisible = true;
    } else {
        popoverContainer.style.display = 'none';
        isPopoverVisible = false;
    }
});