// ==========================================================================
// Time Balance App JavaScript (Julia Geneberg)
// ==========================================================================

// Handle Offer Selection & Smooth Scroll to Contact Form
function setupOfferSelection() {
    const selectBtns = document.querySelectorAll('.select-offer-btn');
    const contactSelect = document.getElementById('contactOffer');
    const contactSection = document.getElementById('kontakt');

    selectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const chosenOffer = btn.getAttribute('data-offer');
            
            if (contactSelect && chosenOffer) {
                contactSelect.value = chosenOffer;
            }

            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Handle Contact Form Submission
window.handleContactSubmit = function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const offer = document.getElementById('contactOffer').value;
    const message = document.getElementById('contactMessage').value;

    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccessMessage');

    // Show Confirmation Message
    if (contactForm && successMsg) {
        contactForm.style.display = 'none';
        successMsg.style.display = 'block';
    }

    // Direct Mailto Trigger to julia.time.balance@gmail.com
    const mailSubject = encodeURIComponent(`Anfrage für Time Balance: ${offer}`);
    const mailBody = encodeURIComponent(`Hallo Julia,\n\nich interessiere mich für: ${offer}.\n\nName: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
    
    // Launch Mail Client to send to julia.time.balance@gmail.com
    setTimeout(() => {
        window.location.href = `mailto:julia.time.balance@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }, 400);
};

// Modals Setup (Impressum & Datenschutz)
function setupModals() {
    const modalImpressum = document.getElementById('modalImpressum');
    const modalDatenschutz = document.getElementById('modalDatenschutz');

    const openImpressum = document.getElementById('openImpressum');
    const openDatenschutz = document.getElementById('openDatenschutz');

    const closeImpressumBtn = document.getElementById('closeImpressumBtn');
    const closeImpressumOverlay = document.getElementById('closeImpressumOverlay');

    const closeDatenschutzBtn = document.getElementById('closeDatenschutzBtn');
    const closeDatenschutzOverlay = document.getElementById('closeDatenschutzOverlay');

    // Open Impressum
    if (openImpressum && modalImpressum) {
        openImpressum.addEventListener('click', (e) => {
            e.preventDefault();
            modalImpressum.setAttribute('aria-hidden', 'false');
        });
    }

    // Open Datenschutz
    if (openDatenschutz && modalDatenschutz) {
        openDatenschutz.addEventListener('click', (e) => {
            e.preventDefault();
            modalDatenschutz.setAttribute('aria-hidden', 'false');
        });
    }

    // Close Impressum
    const hideImpressum = () => modalImpressum && modalImpressum.setAttribute('aria-hidden', 'true');
    if (closeImpressumBtn) closeImpressumBtn.addEventListener('click', hideImpressum);
    if (closeImpressumOverlay) closeImpressumOverlay.addEventListener('click', hideImpressum);

    // Close Datenschutz
    const hideDatenschutz = () => modalDatenschutz && modalDatenschutz.setAttribute('aria-hidden', 'true');
    if (closeDatenschutzBtn) closeDatenschutzBtn.addEventListener('click', hideDatenschutz);
    if (closeDatenschutzOverlay) closeDatenschutzOverlay.addEventListener('click', hideDatenschutz);
}

// Dynamic Footer Year
function setupYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupOfferSelection();
    setupModals();
    setupYear();
});
