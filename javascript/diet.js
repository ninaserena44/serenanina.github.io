// Smooth scroll to the "Types of Diet" section when the main button is clicked
document.addEventListener('DOMContentLoaded', () => {

    const exploreDietsBtn = document.querySelector('.main-btn'); // Button that triggers scrolling
    const typesOfDietSection = document.getElementById('types-of-diet'); // Target section

    if (exploreDietsBtn && typesOfDietSection) {
        exploreDietsBtn.addEventListener('click', () => {
            typesOfDietSection.scrollIntoView({
                behavior: 'smooth', // Smooth transition
                block: 'start'      // Align to top
            });
        });
    }
});


// Modal functionality: Open and close modal windows
document.addEventListener('DOMContentLoaded', function() {
    var openModalBtns = document.querySelectorAll('.open-modal');   // Buttons that open modals
    var closeButtons = document.querySelectorAll('.close-button');  // Buttons inside modals to close them
    var modals = document.querySelectorAll('.modal');               // All modal containers

    // Function to open a modal by ID
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex'; // Show the modal with flex display
        }
    }

    // Function to close a modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    }

    // Add click event to buttons to open modals
    openModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modalId = this.dataset.modal; // Get modal ID from data attribute
            openModal(modalId);
        });
    });

    // Add click event to buttons inside modals to close them
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modal = this.closest('.modal'); // Find the closest modal container
            closeModal(modal);
        });
    });

    // Close modal if user clicks outside modal content area
    modals.forEach(function(modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });
});


// Weekly meal planner button functionality
document.addEventListener('DOMContentLoaded', () => {
    const plannerButtons = document.querySelectorAll('.planner-btn');  // Meal plan buttons
    const weeklyPlans = document.querySelectorAll('.weekly-plan');     // Weekly plan containers
    const weeklyPlannerContainer = document.querySelector('.weekly-planner-container'); // Container

    // Function to show selected plan and hide others
    const showPlan = (planId) => {
        if (weeklyPlannerContainer && !weeklyPlannerContainer.classList.contains('is-visible')) {
            weeklyPlannerContainer.classList.add('is-visible'); // Show the planner container if hidden
        }
        // Hide all plans
        weeklyPlans.forEach(plan => {
            plan.classList.remove('active-plan');
        });

        // Show the selected plan
        const activePlan = document.getElementById(`plan-${planId}`);
        if (activePlan) {
            activePlan.classList.add('active-plan');

            // Scroll smoothly to the first day card of the active plan after a delay
            setTimeout(() => {
                requestAnimationFrame(() => {
                    const firstDayCard = activePlan.querySelector('.day-card:first-child');
                    if (firstDayCard) {
                        firstDayCard.scrollIntoView({
                            behavior: 'smooth', 
                            inline: 'start',    
                            block: 'nearest'    
                        });
                    }
                });
            }, 700); // Delay to allow transition
        }

        // Update active button styling
        plannerButtons.forEach(btn => btn.classList.remove('active'));
        const clickedButton = document.querySelector(`.planner-btn[data-plan="${planId}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }
    };

    // Attach click event to each planner button
    plannerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planToShow = button.dataset.plan;
            showPlan(planToShow);
        });
    });
});

