const menuItems = {
    vegetarian: [
        { id: 1, name: "Truffle Paneer Tikka", price: "₹550", category: "Vegetarian", image: "https://imgs.search.brave.com/UxVPwa8-J8TQkr6ZPV07ecA5SJVyJzbcrsjkq5nelH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYW5u/YW5za2l0Y2hlbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDEvRFNDXzQ3/NjQtNjgzeDEwMjQu/anBn", description: "Classic malai paneer infused with black truffle paste.", recipe: "Malai paneer, truffle oil, hung curd, yellow chili." },
        { id: 2, name: "Mushroom Galouti", price: "₹480", category: "Vegetarian", image: "https://imgs.search.brave.com/Z9ynvalDmN-AG9gbM8yJiCbex-v7kcKAWvovbpCYB34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBldGluZWF0/cy5jb20vdGFjaHlv/bi8yMDIxLzAzL011/c2hyb29tLUdyYXZ5/XzctY29weS5qcGc", description: "Melt-in-the-mouth smoked mushroom kebabs.", recipe: "Button mushrooms, cashew paste, brown onion, potli masala." },
        { id: 11, name: "Chole masala", price: "₹420", category: "Vegetarian", image: "https://imgs.search.brave.com/9Uo-afhoFQah4zBPITNVzs9ajbMSR7CuFHJAzOxS9Tw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jaGlja3Bl/YXMtbWFzYWxhLWNo/b2xlLWN1cnJ5LXRy/YWRpdGlvbmFsLTI2/MG53LTE3NjQ2NzU3/NzYuanBn", description: "Crispy bread rolls stuffed with spiced hung curd.", recipe: "Hung curd, bell peppers, bread slices, green chili." }
    ],
    nonVeg: [
        { id: 3, name: "Mutton Galouti Kebab", price: "₹650", category: "Non-Veg", image: "https://imgs.search.brave.com/oNr4adKw4LdiVHeF_8XpofgY0N3EfzvCAWgdsWRQ9zY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM4/NjYyNDAyL3Bob3Rv/LzEwMC1sYW1iLWdy/ZWVrLW1lYXRiYWxs/LXBsYXR0ZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU9Y/WXJQX1FrZFlkcVI2/Tkp4WjFuazhFcm1p/NjkxRzZKN3lJVDNL/YW5hMmM9" , description: "Lucknowi style lamb kebabs smoked with cloves.", recipe: "Minced lamb, raw papaya, 24 secret spices, ghee." },
        { id: 4, name: "Chicken Tikka Angara", price: "₹580", category: "Non-Veg", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop", description: "Spicy, charcoal-grilled chicken with a smokey kick.", recipe: "Chicken thighs, Degi Mirch, yogurt, charcoal smoke." }
    ],
    gravy: [
        { id: 5, name: "Saffron Dal Makhani", price: "₹450", category: "Gravy", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop", description: "24-hour slow-cooked lentils with Iranian saffron.", recipe: "Urad dal, tomato puree, white butter, Iranian saffron." },
        { id: 6, name: "Old Delhi Butter Chicken", price: "₹750", category: "Gravy", image: "https://imgs.search.brave.com/_VDrEzGBdNbq2oC_DhnIC4onv9cumOiOTNKt4eO0Mpk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/NzA2MzczMC9waG90/by9idXR0ZXItY2hp/Y2tlbi1rYXJhaGkt/b3ItY2hpY2tlbi1t/YWtobmktd2l0aC1v/bmlvbi1hbmQtY2hp/bGktc2VydmVkLWlu/LWEtZGlzaC1pc29s/YXRlZC1vbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y1Bi/RVNzTFljTllwSlY0/ODhieDBobk5jM3Zq/cFFUclVQTmN6TEJH/VkU5ND0", description: "Classic makhani gravy with applewood smoked chicken.", recipe: "Tandoori chicken, tomatoes, honey, cashew paste." },
        { id: 12, name: "Rarha Gosht", price: "₹890", category: "Gravy", image: "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?q=80&w=800&auto=format&fit=crop", description: "Mutton pieces cooked in a rich, spiced minced meat gravy.", recipe: "Lamb chunks, lamb keema, whole spices, yogurt." }
    ],
    bread: [
        { id: 8, name: "Garlic Butter Naan", price: "₹120", category: "Breads", image: "https://imgs.search.brave.com/o01oTeG1HyLNlGapvnDCJxOqg_rGykrXqQLLkCmUA2k/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5o/b3dzd2VldGVhdHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAzL2dhcmxp/Yy1idXR0ZXItbmFh/bi01LmpwZw", description: "Tandoor baked sourdough flatbread with garlic.", recipe: "Refined flour, yogurt, minced garlic, butter." },
        { id: 13, name: "Olive & Cheese Kulcha", price: "₹180", category: "Breads", image: "https://imgs.search.brave.com/1qbQM_kmghfqOZ7Jhe3a7M9l0C3qNDJfL_-pRH-BGb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXJjaGFuYXNraXRj/aGVuLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9pbWFn/ZXMuYXJjaGFuYXNr/aXRjaGVuLmNvbS9p/bWFnZXMvcmVjaXBl/cy9pbmRpYW4vbWFp/bi1jb3Vyc2UvaW5k/aWFuLWJyZWFkLXJl/Y2lwZXMtcm90aS1w/YXJhdGhhLW5hYW4t/cHVyaS9rdWxjaGEt/cmVjaXBlcy9tZWRp/dW1fU3R1ZmZlZF9W/ZWdnaWVfS3VsY2hh/XzNkMThjOTYwMzUu/anBnJnc9MTkyMCZx/PTc1", description: "A fusion kulcha stuffed with cheddar and olives.", recipe: "Wheat flour, cheddar cheese, black olives, oregano." }
    ],
    dessert: [
        { id: 10, name: "Gulab Jamun Fondant", price: "₹250", category: "Dessert", image: "https://imgs.search.brave.com/4ajZ2tlsTgW50WYioFl9oG22ZDJJNRxfS-ulIeiDqBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9ndWxhYi1q/YW11bi1taWxrc29s/aWRiYXNlZC1zd2Vl/dC1pbmRpYS0yNjBu/dy0xODQ4NzE0MDg4/LmpwZw", description: "Chocolate lava cake with a warm gulab jamun inside.", recipe: "Dark chocolate, mini jamun, silver vark." },
        { id: 14, name: "Baked Gajar Halwa Tart", price: "₹320", category: "Dessert", image: "https://imgs.search.brave.com/UXCbY0jNmfm5A1cxsIlw_G3gR-1rZMtSL5xlPO9B3rI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/ODc1NDQ3MS9waG90/by9nYWphci1rYS1o/YWx3YS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bGZZS0FS/TFhIUzJDYkh0dVUy/NXVEblFRMVlNZzgz/VF9xU19lRkI4d05S/Zz0", description: "Traditional carrot pudding in a buttery pastry shell.", recipe: "Winter carrots, khoya, shortcrust pastry, pistachios." }
    ]
};

// REPLACE the content inside your backticks (``) in the createCard function with this:

    function createCard(item) {
    const card = document.createElement('div');
    
    // Ensure the card class also handles the switch from column to row
    card.className = `group cursor-pointer flex flex-col sm:flex-row gap-6 bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(251,191,36,0.1)] hover:border-amber-400`;

    card.onclick = () => openModal(item);

    card.innerHTML = `
        <div class="w-full sm:w-48 h-64 sm:h-48 rounded-2xl overflow-hidden shrink-0 relative">
            <img src="${item.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                 <span class="text-[8px] uppercase font-black text-white tracking-[0.2em] bg-amber-500 px-2 py-1 rounded">Chef's Choice</span>
            </div>
        </div>
        
        <div class="flex-1 flex flex-col justify-center mt-4 sm:mt-0">
            <div class="flex justify-between items-start mb-2 gap-4">
                <h3 class="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white uppercase transition-colors duration-300 group-hover:text-amber-500 leading-tight">
                    ${item.name}
                </h3>
                <span class="text-amber-500 font-serif text-lg sm:text-xl shrink-0 transform transition-transform group-hover:scale-110">
                    ${item.price}
                </span>
            </div>
            
            <p class="text-zinc-600 dark:text-zinc-400 font-bold mb-6 line-clamp-2 text-sm sm:text-base">
                ${item.description}
            </p>
            
            <div class="flex items-center gap-2">
                <span class="text-[10px] uppercase font-black px-4 py-2 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 rounded-full transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                    View Recipe
                </span>
                
                <svg class="w-4 h-4 text-amber-500 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </div>
        </div>
    `; // <-- This backtick was missing
    return card;
} // <-- This brace was missing

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

function openModal(item) {
    document.getElementById('modal-image').src = item.image;
    document.getElementById('modal-name').innerText = item.name;
    document.getElementById('modal-desc').innerText = item.description;
    document.getElementById('modal-recipe').innerText = item.recipe;
    modal.classList.add('active');
    setTimeout(() => modalContent.classList.replace('scale-95', 'scale-100'), 10);
}

function closeModal() {
    modalContent.classList.replace('scale-100', 'scale-95');
    setTimeout(() => modal.classList.remove('active'), 300);
}

function resetForm() {
    const resForm = document.getElementById('reservation-form');
    const successMsg = document.getElementById('success-msg');
    resForm.reset();
    resForm.classList.remove('hidden');
    successMsg.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('menu-search');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        Object.entries(containers).forEach(([id, items]) => {
            const containerEl = document.getElementById(id);
            const sectionTitle = containerEl.parentElement; // The div containing the H3 and the container
            
            // Filter items based on name or description
            const filteredItems = items.filter(item => 
                item.name.toLowerCase().includes(query) || 
                item.description.toLowerCase().includes(query)
            );

            // Clear and Re-populate
            containerEl.innerHTML = '';
            if (filteredItems.length > 0) {
                sectionTitle.style.display = 'block'; // Show section if matches found
                filteredItems.forEach(item => containerEl.appendChild(createCard(item)));
            } else {
                sectionTitle.style.display = 'none'; // Hide section if no matches
            }
        });
    });
}
    
    // --- THEME TOGGLE LOGIC ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Set initial state from localStorage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    });

    // --- RESERVATION LOGIC ---
    const resForm = document.getElementById('reservation-form');
    const successMsg = document.getElementById('success-msg');
    const submitBtn = document.getElementById('submit-btn');

    if (resForm) {
        // Force Number-Only Inputs
        const numericFields = ['res-phone', 'res-guests'];
        numericFields.forEach(id => {
            const field = document.getElementById(id);
            if (field) {
                field.addEventListener('input', function() {
                    this.value = this.value.replace(/[^0-9]/g, '');
                });
            }
        });

        // Prevent Past Dates
        const dateInput = document.getElementById('res-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        // ASYNC Form Submission (Formspree)
        resForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const phoneVal = document.getElementById('res-phone').value;
            if (phoneVal.length < 10) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending...</span>`;

            const formData = new FormData(this);

            try {
                // REPLACE YOUR_ID_HERE with your Formspree ID
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    resForm.classList.add('hidden');
                    successMsg.classList.remove('hidden');
                    successMsg.classList.add('animate-bounce');
                    window.scrollTo({ top: document.getElementById('reserve').offsetTop - 100, behavior: 'smooth' });
                } else {
                    alert("Submission failed. Check your Formspree setup.");
                }
            } catch (error) {
                alert("Error connecting to server.");
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }

    // --- POPULATE MENUS ---
    const containers = {
        'veg-container': menuItems.vegetarian,
        'non-veg-container': menuItems.nonVeg,
        'gravy-container': menuItems.gravy,
        'bread-container': menuItems.bread,
        'dessert-container': menuItems.dessert
    };

    Object.entries(containers).forEach(([id, items]) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = ''; 
            items.forEach(item => el.appendChild(createCard(item)));
        }
    });

    // --- NAVBAR SCROLL EFFECT ---
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        window.scrollY > 50 ? nav.classList.add('header-scrolled') : nav.classList.remove('header-scrolled');
    });
});
/**
 * CATEGORY FILTER LOGIC
 */
function filterCategory(targetId, event) {
    // 1. Manage Button Active States
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        // Reset all buttons to inactive state
        btn.classList.remove('bg-zinc-900', 'text-white', 'dark:bg-white', 'dark:text-black', 'active-filter');
        btn.classList.add('bg-white', 'dark:bg-zinc-900', 'border-2');
    });

    // 2. Highlight the clicked button
    const activeBtn = event.currentTarget;
    activeBtn.classList.add('bg-zinc-900', 'text-white', 'dark:bg-white', 'dark:text-black', 'active-filter');
    activeBtn.classList.remove('bg-white', 'border-2');

    // 3. Filter the Menu Sections
    const menuSections = ['veg-container', 'non-veg-container', 'gravy-container', 'bread-container', 'dessert-container'];

    menuSections.forEach(id => {
        const containerEl = document.getElementById(id);
        if (!containerEl) return;
        
        // This finds the parent div (the one with the section title) to hide/show the whole group
        const sectionWrapper = containerEl.closest('div.space-y-32 > div') || containerEl.parentElement;

        if (targetId === 'all' || id === targetId) {
            sectionWrapper.style.display = 'block';
        } else {
            sectionWrapper.style.display = 'none';
        }
    });
}