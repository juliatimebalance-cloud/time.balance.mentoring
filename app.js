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
window.handleContactSubmit = async function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const offer = document.getElementById('contactOffer').value;
    const message = document.getElementById('contactMessage').value.trim();

    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccessMessage');

    const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Wird gesendet... ⏳';
    }

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: '28f46f2c-7856-4ea6-a1ff-81896bbd7e42',
                from_name: 'Time Balance Website',
                subject: `Neue Kontaktanfrage von ${name} (${offer})`,
                name: name,
                email: email,
                Gewuenschtes_Format: offer,
                Nachricht: message
            })
        });

        const result = await response.json();

        if (result.success) {
            if (contactForm && successMsg) {
                contactForm.style.display = 'none';
                successMsg.style.display = 'block';
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            alert('Beim Senden ist ein Fehler aufgetreten. Bitte sende mir direkt eine E-Mail an julia.time.balance@gmail.com');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = 'Nachricht absenden';
            }
        }
    } catch (err) {
        console.error(err);
        alert('Netzwerkfehler. Bitte kontaktiere julia.time.balance@gmail.com');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Nachricht absenden';
        }
    }
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

// Check URL for ?success=true to show confirmation message
function checkSuccessURL() {
    if (window.location.search.includes('success=true')) {
        const contactForm = document.getElementById('contactForm');
        const successMsg = document.getElementById('formSuccessMessage');
        if (contactForm && successMsg) {
            contactForm.style.display = 'none';
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupOfferSelection();
    setupModals();
    setupYear();
    checkSuccessURL();
});
