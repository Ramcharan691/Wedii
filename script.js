document.addEventListener('DOMContentLoaded', () => {

    function setupModal(modalId, btnId, closeClass) {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById(btnId);
        const closeBtn = document.querySelector(closeClass); // Use generic close class inside specific modal

        if (!modal || !openBtn) return;

        // Open modal
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('visible');
            }, 10);
        });

        // Close modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal);
            });
        }

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    }

    function closeModal(modal) {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Setup Story Modal
    // Note: older close button might share class, handled via querySelector which finds first, 
    // but we can target specific children if needed. 
    // Actually, let's select the close button relative to the modal to be safe.

    // helper to get close button within modal
    function setupModalGeneric(modalId, btnId) {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById(btnId);
        if (!modal || !openBtn) return;

        const closeBtn = modal.querySelector('.close-story-btn') || modal.querySelector('.close-info-btn');

        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('visible');
            }, 10);
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal);
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    }


    setupModalGeneric('story-modal', 'open-story-btn');
    setupModalGeneric('info-modal', 'open-info-btn');

});
