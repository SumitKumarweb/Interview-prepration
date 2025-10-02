  // Array of tab data
  const tabsData = [
    { id: 1, title: 'Tab 1', content: 'This is Tab 1 content' },
    { id: 2, title: 'Tab 2', content: 'This is Tab 2 content' },
    { id: 3, title: 'Tab 3', content: 'This is Tab 3 content' },
];

document.addEventListener('DOMContentLoaded', () => {
    // Set the first tab as active by default
    let activeTab = tabsData[0].id;

    // Function to render tab buttons and contents dynamically
    function renderTabs() {
        const tabContainer = document.querySelector("#tab-container");
        const contentContainer = document.querySelector("#tabContentContainer");

        tabsData.forEach(tab => {
            // Create a button for each tab
            const tabButton = document.createElement('button');
            tabButton.className = 'tabLinks';
            tabButton.textContent = tab.title;
            tabButton.setAttribute('data-tab', tab.id);

            // If it's the first tab, set it as active
            if (tab.id === activeTab) tabButton.classList.add('active');
            tabContainer.appendChild(tabButton);

            // Create content div for each tab
            const tabContent = document.createElement('div');
            tabContent.id = tab.id;
            tabContent.className = 'tabContent';
            tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;

            // Show content of the first tab by default
            if (tab.id === activeTab) tabContent.classList.add('active');
            contentContainer.appendChild(tabContent);
        });
    }

    // Event listener for tab button clicks
    const tabContainer = document.querySelector("#tab-container");
    tabContainer.addEventListener('click', (e) => {
        if (e.target.matches(".tabLinks")) {
            const tabId = e.target.getAttribute('data-tab');
            if (tabId != activeTab) {
                openTab(tabId);
                activeTab = tabId; // Update active tab
            }
        }
    });

    // Function to switch tabs
    function openTab(tabId) {
        const tabsContents = document.querySelectorAll('.tabContent');
        const tabLinks = document.querySelectorAll('.tabLinks');

        // Remove 'active' class from all tabs and contents
        tabsContents.forEach(tab => tab.classList.remove('active'));
        tabLinks.forEach(tab => tab.classList.remove('active'));

        // Add 'active' class to the selected tab and content
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active');
    }

    // Render tabs on page load
    renderTabs();
});