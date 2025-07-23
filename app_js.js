// Sample legislation data
const legislationData = [
    {
        title: "EU draft Sustainable Tourism Strategy",
        docNr: "COM(2024)0125",
        category: "Tourism", 
        type: "Communication",
        status: "Consultation",
        priority: "high",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/",
        ojDate: "2024-03-15",
        entryForce: "N/A",
        applicationDate: "N/A",
        currentStage: 0,
        impact: "This strategy will directly shape how tourism sustainability is measured and reported across the EU. For Travalyst, this represents a critical opportunity to align our platform's metrics with official EU standards. The strategy will likely mandate specific sustainability indicators that tourism companies must report, which aligns perfectly with our mission to provide transparent, comparable sustainability data. Implementation could create new data requirements that our platform is uniquely positioned to address, potentially opening significant market opportunities in the EU tourism sector.",
        summary: "The EU's draft Sustainable Tourism Strategy aims to establish a comprehensive framework for measuring and promoting sustainable tourism practices across member states. The strategy focuses on creating standardized metrics for environmental impact, social responsibility, and economic sustainability in tourism. Key elements include mandatory sustainability reporting for large tourism operators, establishment of EU-wide certification schemes, and integration with the European Green Deal objectives. The strategy also proposes creating a European Tourism Sustainability Observatory to monitor progress and share best practices across the industry."
    },
    {
        title: "Empowering Consumer Directive",
        docNr: "COM(2024)0825",
        category: "Tourism",
        type: "Directive",
        status: "Adopted",
        priority: "high",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/eli/dir/2024/825/oj/eng",
        ojDate: "2024-04-22",
        entryForce: "2024-05-27",
        applicationDate: "2025-05-27",
        currentStage: 5,
        impact: "This directive significantly enhances consumer rights in digital marketplaces, directly impacting how Travalyst and travel booking platforms operate. The directive requires clearer disclosure of sustainability claims, algorithmic transparency in search rankings, and stronger protection against greenwashing. This creates both challenges and opportunities: while compliance costs increase, the directive validates our approach to transparent sustainability reporting and could disadvantage less transparent competitors. Our platform's focus on verified sustainability data positions us well to help travel companies meet these new transparency requirements.",
        summary: "The Empowering Consumer Directive strengthens consumer protection in digital markets, with specific provisions affecting online travel platforms. Key requirements include mandatory disclosure of sustainability claims with verifiable evidence, transparency in how search results are ranked and personalized, and prohibition of dark patterns that mislead consumers about environmental impact. The directive also establishes stronger rights for consumers to access and port their data, and creates new obligations for platforms to clearly distinguish between organic and promoted content, particularly relevant for travel comparison sites."
    },
    {
        title: "Green Claims Directive",
        docNr: "COM(2023)0166",
        category: "Tourism",
        type: "Directive",
        status: "EP Committee",
        priority: "high",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52023PC0166",
        ojDate: "N/A",
        entryForce: "N/A",
        applicationDate: "N/A",
        currentStage: 2,
        impact: "The Green Claims Directive is perhaps the most directly relevant legislation for Travalyst's core mission. It will require all environmental claims to be substantiated with scientific evidence and independently verified, directly addressing greenwashing in the travel industry. This regulation validates our approach to verified sustainability data and creates a mandatory market for our services. Travel companies will need third-party verification for any sustainability claims, positioning Travalyst as an essential service provider. The directive could transform the competitive landscape by making verified sustainability reporting mandatory rather than voluntary.",
        summary: "The Green Claims Directive aims to combat greenwashing by establishing strict requirements for environmental claims made by businesses. Companies making green claims must provide scientific evidence to support their statements, undergo independent verification by accredited bodies, and use standardized methodologies for environmental impact assessment. The directive covers all sectors but has particular relevance for travel and tourism where sustainability claims are increasingly common but often unsubstantiated. It establishes penalties for misleading green claims and creates a harmonized framework across EU member states for environmental claim verification."
    },
    {
        title: "Product Environmental Footprint Category Rules (PEFCR)",
        docNr: "COM(2024)0089",
        category: "Accommodation",
        type: "Technical Guidance",
        status: "Proposal",
        priority: "high",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/",
        ojDate: "N/A",
        entryForce: "N/A",
        applicationDate: "N/A",
        currentStage: 1,
        impact: "PEFCR will establish the technical methodology for calculating environmental footprints across product categories, including accommodation services. This creates standardized metrics that Travalyst can implement across our platform, ensuring consistency and comparability. The rules will likely become the foundation for EU environmental reporting requirements, making early adoption crucial for competitive advantage. Our platform can help accommodation providers calculate and report their environmental footprint according to these official EU methodologies, creating a clear value proposition for compliance and transparency.",
        summary: "The Product Environmental Footprint Category Rules provide detailed technical guidance for calculating environmental impacts across different product and service categories. For the accommodation sector, PEFCR establishes standardized methodologies for measuring carbon footprint, water usage, waste generation, and land use impacts. The rules specify data collection requirements, calculation methods, and reporting formats to ensure consistency across the EU. PEFCR serves as the technical foundation for various EU environmental policies and is expected to become mandatory for large companies under future legislation."
    },
    {
        title: "CountEmissions EU",
        docNr: "COM(2023)0441",
        category: "Aviation",
        type: "Regulation",
        status: "Proposal",
        priority: "medium",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/legal-content/EN/PIN/?uri=CELEX:52023PC0441",
        ojDate: "N/A",
        entryForce: "N/A",
        applicationDate: "N/A",
        currentStage: 1,
        impact: "CountEmissions EU will mandate standardized emissions reporting for aviation, directly relevant to Travalyst's flight sustainability tracking capabilities. The regulation will require airlines to report emissions data in a standardized format, creating opportunities for our platform to aggregate and present this information to consumers. This could significantly enhance our flight comparison features by providing access to official, verified emissions data rather than relying on estimates. The regulation supports our mission of transparency in travel sustainability and could create new business opportunities in aviation sustainability reporting.",
        summary: "CountEmissions EU establishes a comprehensive framework for monitoring, reporting, and verifying greenhouse gas emissions from aviation activities within the EU. The regulation requires airlines to collect and report detailed emissions data using standardized methodologies, including direct emissions from fuel combustion and indirect emissions from contrail formation. The system will integrate with existing EU ETS requirements and provide granular data on per-flight emissions that can be used for consumer information and policy development. The regulation also establishes verification requirements and penalties for non-compliance."
    },
    {
        title: "Revision of the Air Services Regulation",
        docNr: "COM(2025)1008",
        category: "Aviation",
        type: "Regulation",
        status: "Consultation",
        priority: "low",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/eli/reg/2008/1008/oj/eng",
        ojDate: "N/A",
        entryForce: "N/A",
        applicationDate: "N/A",
        currentStage: 0,
        impact: "The revision of Air Services Regulation primarily focuses on market access and operational rights for airlines, with limited direct impact on Travalyst's core sustainability mission. However, the regulation may include new requirements for airlines to report sustainability metrics as part of their operating licenses, which could create indirect opportunities for our platform. The regulation's emphasis on transparency and consumer protection aligns with our values, but the operational impact on our business model is expected to be minimal compared to more directly relevant environmental legislation.",
        summary: "The revision of Regulation 1008/2008 updates the framework for air services within the EU, addressing market access rights, safety requirements, and operational standards for airlines. Key changes include updated licensing requirements for airlines, revised rules for route allocation at congested airports, and enhanced consumer protection provisions. The regulation also introduces new requirements for airlines to demonstrate financial fitness and operational capability, including potential sustainability criteria. The revision aims to modernize EU aviation law to address current market conditions and emerging challenges in the aviation sector."
    },
    {
        title: "Implementation of EASA FEL / RefuelEU Aviation",
        docNr: "COM(2023)2405",
        category: "Aviation",
        type: "Regulation",
        status: "Adopted",
        priority: "medium",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/eli/reg/2023/2405/oj/eng",
        ojDate: "2023-10-31",
        entryForce: "2024-01-01",
        applicationDate: "2025-01-01",
        currentStage: 5,
        impact: "RefuelEU Aviation mandates increasing use of sustainable aviation fuels (SAF), creating new metrics and reporting requirements that are highly relevant to Travalyst's aviation sustainability tracking. As airlines implement SAF blending requirements, our platform can help consumers understand the sustainability benefits of different flight options based on actual SAF usage rather than estimates. This regulation creates competitive differentiation opportunities for airlines using higher SAF percentages, which our platform can highlight to sustainability-conscious travelers. The detailed reporting requirements may also create business opportunities in helping airlines track and report their SAF compliance.",
        summary: "RefuelEU Aviation establishes mandatory targets for sustainable aviation fuel (SAF) uptake at EU airports, starting with 2% SAF content in 2025 and increasing to 70% by 2050. The regulation requires fuel suppliers to ensure minimum SAF percentages in aviation fuel, with specific targets for synthetic fuels. Airlines must report detailed information about their fuel usage and SAF consumption, with penalties for non-compliance. The regulation includes provisions for book-and-claim systems to optimize SAF distribution and establishes a comprehensive monitoring and reporting framework for tracking progress toward decarbonization goals."
    },
    {
        title: "Single Digital Booking and Ticketing Regulation (SDBTR)",
        docNr: "COM(2024)0298",
        category: "Rail",
        type: "Regulation",
        status: "Trilogue",
        priority: "high",
        lastUpdated: "25-07-2025",
        url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj/eng",
        ojDate: "N/A",
        entryForce: "N/A",
        applicationDate: "N/A",
        currentStage: 4,
        impact: "The SDBTR will revolutionize rail booking across Europe, creating opportunities for Travalyst to integrate comprehensive rail options into our platform. The regulation mandates interoperable booking systems and standardized sustainability reporting for rail journeys, aligning perfectly with our mission to promote sustainable travel options. This could significantly enhance our ability to present rail as a sustainable alternative to air travel, with standardized emissions data across all EU rail operators. The regulation's focus on seamless booking and transparency creates opportunities for our platform to become a central hub for sustainable rail travel planning.",
        summary: "The Single Digital Booking and Ticketing Regulation aims to create a seamless, integrated booking experience for rail travel across the EU. The regulation establishes technical standards for interoperability between different rail booking systems, mandatory distribution of tickets through third-party platforms, and standardized passenger information including real-time journey updates and sustainability metrics. Key provisions include open data requirements for rail operators, standardized APIs for ticket distributors, and consumer protection measures for cross-border journeys. The regulation is designed to make rail travel as easy to book as air travel while promoting modal shift toward more sustainable transport."
    }
];

let currentLegislation = null;
let sortDirection = {};
let subscriptions = JSON.parse(localStorage.getItem('travalyst-subscriptions') || '{}');

// Initialize the page
function initializePage() {
    renderLegislationTable();
    setupEventListeners();
}

function renderLegislationTable() {
    const tbody = document.getElementById('legislationBody');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    let filteredData = legislationData.filter(item => {
        const matchesSearch = !searchTerm || 
            item.title.toLowerCase().includes(searchTerm) ||
            item.docNr.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || item.category === categoryFilter;
        const matchesStatus = !statusFilter || item.status === statusFilter;
        
        return matchesSearch && matchesCategory && matchesStatus;
    });

    tbody.innerHTML = filteredData.map(item => `
        <tr onclick="showDetailPage('${item.docNr}')">
            <td>
                <div><strong>${item.title}</strong></div>
                <div style="margin-top: 0.25rem;">
                    <button class="notification-btn" onclick="event.stopPropagation(); toggleNotification('${item.docNr}', this)" data-doc="${item.docNr}">
                        📧 Get Updates
                    </button>
                    <div class="email-form" id="email-form-${item.docNr}">
                        <input type="email" placeholder="your.email@example.com" id="email-input-${item.docNr}">
                        <button onclick="subscribeToUpdates('${item.docNr}')">Subscribe</button>
                    </div>
                </div>
            </td>
            <td>${item.docNr}</td>
            <td>${item.category}</td>
            <td>${item.type}</td>
            <td class="status-column"><span class="status-badge">${item.status}</span></td>
            <td><span class="priority-badge priority-${item.priority}">${item.priority}</span></td>
            <td class="date-column">${item.lastUpdated}</td>
        </tr>
    `).join('');

    // Update button states based on subscriptions
    updateNotificationButtons();
}

function updateNotificationButtons() {
    Object.keys(subscriptions).forEach(docNr => {
        const button = document.querySelector(`[data-doc="${docNr}"]`);
        if (button) {
            button.textContent = '✅ Subscribed';
            button.classList.add('subscribed');
        }
    });
}

function toggleNotification(docNr, button) {
    const form = document.getElementById(`email-form-${docNr}`);
    
    if (subscriptions[docNr]) {
        // Already subscribed, unsubscribe
        unsubscribeFromUpdates(docNr, button);
    } else if (form.classList.contains('show')) {
        // Form is showing, hide it
        form.classList.remove('show');
    } else {
        // Show email form
        form.classList.add('show');
        form.querySelector('input').focus();
    }
}

function subscribeToUpdates(docNr) {
    const emailInput = document.getElementById(`email-input-${docNr}`);
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Save subscription
    subscriptions[docNr] = {
        email: email,
        subscribedAt: new Date().toISOString(),
        legislation: legislationData.find(item => item.docNr === docNr).title
    };
    localStorage.setItem('travalyst-subscriptions', JSON.stringify(subscriptions));

    // Update UI
    const button = document.querySelector(`[data-doc="${docNr}"]`);
    const form = document.getElementById(`email-form-${docNr}`);
    
    button.textContent = '✅ Subscribed';
    button.classList.add('subscribed');
    form.classList.remove('show');

    // Show success message
    const legislation = legislationData.find(item => item.docNr === docNr);
    alert(`Success! You'll receive email updates about "${legislation.title}" at ${email}`);
}

function unsubscribeFromUpdates(docNr, element) {
    delete subscriptions[docNr];
    localStorage.setItem('travalyst-subscriptions', JSON.stringify(subscriptions));

    // Update UI
    const button = document.querySelector(`[data-doc="${docNr}"]`) || element;
    button.textContent = '📧 Get Updates';
    button.classList.remove('subscribed');

    // Hide unsubscribe link if on detail page
    const unsubLink = element.parentElement?.querySelector('.unsubscribe-link');
    if (unsubLink) {
        unsubLink.style.display = 'none';
    }

    const legislation = legislationData.find(item => item.docNr === docNr);
    alert(`Unsubscribed from updates for "${legislation.title}"`);
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', renderLegislationTable);
    document.getElementById('categoryFilter').addEventListener('change', renderLegislationTable);
    document.getElementById('statusFilter').addEventListener('change', renderLegislationTable);
}

function sortTable(columnIndex) {
    const table = document.getElementById('legislationTable');
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.rows);
    
    const currentDirection = sortDirection[columnIndex] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
    sortDirection[columnIndex] = newDirection;

    rows.sort((a, b) => {
        const aVal = a.cells[columnIndex].textContent.trim();
        const bVal = b.cells[columnIndex].textContent.trim();
        
        if (newDirection === 'asc') {
            return aVal.localeCompare(bVal, undefined, {numeric: true});
        } else {
            return bVal.localeCompare(aVal, undefined, {numeric: true});
        }
    });

    rows.forEach(row => tbody.appendChild(row));
}

function showDetailPage(docNr) {
    currentLegislation = legislationData.find(item => item.docNr === docNr);
    if (!currentLegislation) return;

    // Hide list page, show detail page
    document.getElementById('listPage').classList.remove('active');
    document.getElementById('detailPage').classList.add('active');

    // Populate metadata
    document.getElementById('metadataContent').innerHTML = `
        <div class="metadata-item">
            <span class="metadata-label">Title:</span> 
            <a href="${currentLegislation.url}" target="_blank" style="color: #00878A;">${currentLegislation.title}</a>
            <div class="notification-detail">
                <button class="notification-btn" onclick="toggleNotificationDetail('${currentLegislation.docNr}', this)" data-doc="${currentLegislation.docNr}">
                    📧 Get Updates
                </button>
                <span class="unsubscribe-link" style="display: none;" onclick="unsubscribeFromUpdates('${currentLegislation.docNr}', this)">unsubscribe</span>
                <div class="email-form" id="email-form-detail-${currentLegislation.docNr}">
                    <input type="email" placeholder="your.email@example.com" id="email-input-detail-${currentLegislation.docNr}">
                    <button onclick="subscribeToUpdatesDetail('${currentLegislation.docNr}')">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="metadata-item">
            <span class="metadata-label">Doc Nr:</span> ${currentLegislation.docNr}
        </div>
        <div class="metadata-item">
            <span class="metadata-label">Category:</span> ${currentLegislation.category}
        </div>
        <div class="metadata-item">
            <span class="metadata-label">Type:</span> ${currentLegislation.type}
        </div>
        <div class="metadata-item">
            <span class="metadata-label">OJ Publication:</span> ${currentLegislation.ojDate}
        </div>
        <div class="metadata-item">
            <span class="metadata-label">Entry into Force:</span> ${currentLegislation.entryForce}
        </div>
        <div class="metadata-item">
            <span class="metadata-label">Application Date:</span> ${currentLegislation.applicationDate}
        </div>
        <div class="metadata-item">
            <span class="metadata-label">Last Updated:</span> ${currentLegislation.lastUpdated}
        </div>
    `;

    // Create timeline
    createTimeline();

    // Set expandable text content
    setExpandableText('summary', currentLegislation.summary);
    setExpandableText('impact', currentLegislation.impact);

    // Update notification button state for detail page
    updateDetailNotificationButton();
}

function updateDetailNotificationButton() {
    const button = document.querySelector('.notification-detail .notification-btn');
    const unsubLink = document.querySelector('.notification-detail .unsubscribe-link');
    
    if (button && subscriptions[currentLegislation.docNr]) {
        button.textContent = '✅ Subscribed';
        button.classList.add('subscribed');
        if (unsubLink) {
            unsubLink.style.display = 'inline';
        }
    }
}

function createTimeline() {
    const stages = ['Consultation', 'Proposal', 'EP Committee', 'EP Plenary', 'Trilogue', 'Adopted'];
    const timeline = document.getElementById('timeline');
    const labels = document.getElementById('timelineLabels');

    timeline.innerHTML = stages.map((stage, index) => {
        let className = 'timeline-step';
        if (index < currentLegislation.currentStage) {
            className += ' completed';
        } else if (index === currentLegislation.currentStage) {
            className += ' current';
        }
        return `<div class="${className}">${index + 1}</div>`;
    }).join('');

    labels.innerHTML = stages.map((stage, index) => {
        let className = 'timeline-label';
        if (index === currentLegislation.currentStage) {
            className += ' current';
        }
        return `<div class="${className}">${stage}</div>`;
    }).join('');
}

function setExpandableText(type, content) {
    const words = content.split(' ');
    const previewWordCount = 50; // Show first 50 words in preview
    
    const container = document.getElementById(`${type}Content`);
    if (!container) return;

    if (words.length <= previewWordCount) {
        // Short content, no need for expansion
        container.innerHTML = `<div>${content}</div>`;
    } else {
        // Long content, create expandable structure
        const preview = words.slice(0, previewWordCount).join(' ') + '...';
        const full = content;
        
        container.innerHTML = `
            <div class="text-preview" id="${type}Preview">${preview}</div>
            <div id="${type}Full" style="display: none;">${full}</div>
            <button class="expand-btn" id="${type}ExpandBtn" onclick="toggleText('${type}')">Show more</button>
        `;
    }
}

function toggleText(type) {
    const preview = document.getElementById(`${type}Preview`);
    const full = document.getElementById(`${type}Full`);
    const btn = document.getElementById(`${type}ExpandBtn`);

    if (!preview || !full || !btn) return;

    if (full.style.display === 'none' || !full.style.display) {
        preview.style.display = 'none';
        full.style.display = 'block';
        btn.textContent = 'Show less';
    } else {
        preview.style.display = 'block';
        full.style.display = 'none';
        btn.textContent = 'Show more';
    }
}

function showListPage() {
    document.getElementById('detailPage').classList.remove('active');
    document.getElementById('listPage').classList.add('active');
}

function openModal() {
    document.getElementById('addModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('addModal').style.display = 'none';
    document.getElementById('comUrl').value = '';
}

function addLegislation() {
    const url = document.getElementById('comUrl').value;
    if (url) {
        alert('Legislation would be added from: ' + url + '\n\n(This is a prototype - actual implementation would parse the COM proposal and add it to the system)');
        closeModal();
    } else {
        alert('Please enter a valid COM proposal URL');
    }
}

function exportToWord() {
    if (!currentLegislation) return;
    alert('Export to Word functionality would be implemented here');
}

function exportToExcel() {
    alert('Export to Excel functionality would be implemented here');
}

function toggleNotificationDetail(docNr, button) {
    const form = document.getElementById(`email-form-detail-${docNr}`);
    const unsubLink = button.parentElement.querySelector('.unsubscribe-link');
    
    if (subscriptions[docNr]) {
        // Already subscribed, show unsubscribe option
        return;
    } else if (form.classList.contains('show')) {
        // Form is showing, hide it
        form.classList.remove('show');
    } else {
        // Show email form
        form.classList.add('show');
        form.querySelector('input').focus();
    }
}

function subscribeToUpdatesDetail(docNr) {
    const emailInput = document.getElementById(`email-input-detail-${docNr}`);
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Save subscription
    subscriptions[docNr] = {
        email: email,
        subscribedAt: new Date().toISOString(),
        legislation: currentLegislation.title
    };
    localStorage.setItem('travalyst-subscriptions', JSON.stringify(subscriptions));

    // Update UI
    const button = document.querySelector(`[data-doc="${docNr}"]`);
    const form = document.getElementById(`email-form-detail-${docNr}`);
    const unsubLink = button.parentElement.querySelector('.unsubscribe-link');
    
    button.textContent = '✅ Subscribed';
    button.classList.add('subscribed');
    form.classList.remove('show');
    unsubLink.style.display = 'inline';

    alert(`Success! You'll receive email updates about "${currentLegislation.title}" at ${email}`);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);