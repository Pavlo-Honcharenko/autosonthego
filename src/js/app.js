// Підключення функціоналу "Чортоги Фрілансера"
import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"

// Відкривання сабменю в хедері:
document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.querySelector('.menu__list');
    if (!mainMenu) {
        return;
    }

    mainMenu.addEventListener('click', (event) => {
        const clickedAnchor = event.target.closest('.menu-item-has-children > a');
        
        if (!clickedAnchor) {
            return;
        }

        event.preventDefault();
        const parentMenuItem = clickedAnchor.closest('.menu-item-has-children');
        const isCurrentlyOpening = !parentMenuItem.classList.contains('sub-menu-open');
        parentMenuItem.classList.toggle('sub-menu-open');
        
        // Закриття інших відкритих підменю
        if (isCurrentlyOpening) {
                mainMenu.querySelectorAll('.menu-item-has-children').forEach(item => {
                if (item !== parentMenuItem && item.classList.contains('sub-menu-open')) {
                    item.classList.remove('sub-menu-open');
                }
            });
        }
    });
});
