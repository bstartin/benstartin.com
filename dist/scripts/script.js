document.addEventListener('DOMContentLoaded', () => {
  // Define the header, footer, RICE calculator, and sharing components
  const headerHTML = `
  <nav>
    <div class="fixed z-100 navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="pl-2 pr-2 pt-3 pb-3 font-semibold black text-xl" href="/">Ben\\Startin</a>
      </div>
      <div class="dropdown dropdown-end">
        
    
  
        <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer-4" class="btn btn-round btn-ghost">            
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 22 22" stroke="currentColor"> 
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> 
          </svg></label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-10">
            <!-- Sidebar content here -->
            <li class="text-xl"><a href="/posts/">Posts</a></li>
            <li class="text-xl"><a href="/about/">About</a></li>
            <!-- <li class="text-xl"><a href="#">WSJF Calculator</a></li>
            <li class="text-xl"><a href="#">RICE Calculator</a></li> -->
            <!-- Example: Social icons for email, LinkedIn, and GitHub -->
<div class="flex items-center space-x-4 pt-10">
  <!-- Email -->
  <a href="mailto:ben.startin@gmail.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Email">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.5 5L18 8m0 8H3V8a2 2 0 012-2h14a2 2 0 012 2v8z" />
    </svg>
  </a>
  <!-- LinkedIn -->
  <a href="https://www.linkedin.com/in/benstartin/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.112 13H17.1v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z"/>
    </svg>
  </a>
  <!-- GitHub -->
  <a href="https://github.com/bstartin" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.646.35-1.089.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.184 22 16.437 22 12.021 22 6.484 17.523 2 12 2z"/>
    </svg>
  </a>
</div>
          </ul>
        </div>
      </div>
</div>
</nav>
  `;

  const footerHTML = `
  <footer class="footer footer-horizontal footer-center bg-gradient-to-tr from-gray-300 to-gray-50 text-base-content p-10 shadow-t-sm border-t-gray-300">
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover" href="/about">About</a>
      <a class="link link-hover" href="/posts">Posts</a>
    </nav>
    <!-- Example: Social icons for email, LinkedIn, and GitHub -->
<div class="flex items-center space-x-4">
  <!-- 
  <a href="mailto:ben.startin@gmail.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="Email">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.5 5L18 8m0 8H3V8a2 2 0 012-2h14a2 2 0 012 2v8z" />
    </svg>
  </a> Email -->
  <!-- LinkedIn -->
  <a href="https://www.linkedin.com/in/bstartin/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.112 13H17.1v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z"/>
    </svg>
  </a>
  <!-- GitHub -->
  <a href="https://github.com/bstartin" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.646.35-1.089.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.184 22 16.437 22 12.021 22 6.484 17.523 2 12 2z"/>
    </svg>
  </a>
</div>
    <aside>
      <p class="footer">
        <a href="https://visitbirmingham.com/" target="_blank">
          Copyright © Ben Startin ${new Date().getFullYear()} - Built with 🔥 in Birmingham, UK
        </a>
      </p>
    </aside>
  </footer>
  `;

  const riceHTML = `
  <div class="mt-10 mb-10 border border-gray-500 rounded-xl p-5 max-w-full">
    <h2 class="mb-4 text-2xl font-bold">RICE Calculator</h2>
    <form id="riceForm" class="space-y-6">
      <fieldset class="fieldset border-solid">
        <legend class="fieldset-legend font-bold text-lg">What is the Reach?</legend>
        <span class="label block mb-2">Roughly how many customers will the new feature reach per month?</span>
        <input type="number" class="input validator w-full p-2 border rounded" required placeholder="Type a number" min="1" id="reach" />
        <span class="validator-hint text-sm text-gray-500">Must be a number</span>
      </fieldset>

      <fieldset class="fieldset border-solid">
        <legend class="fieldset-legend text-lg font-bold">What is the Impact?</legend>
        <span class="label block mb-2">What is the value of the feature you're building?</span>
        <div class="mb-5">
          <input type="range" min="0" max="3" value="1" class="range w-full" step="1" id="impact" />
          <div class="flex justify-between px-2.5 mt-2 text-xs">
            <span>No Impact</span>
            <span>Low</span>
            <span>Medium</span>
            <span>High Impact</span>
          </div>
        </div>
      </fieldset>

      <fieldset class="fieldset border-solid">
        <legend class="fieldset-legend text-lg font-bold">What is your confidence?</legend>
        <span class="label block mb-2">How confident are you that the feature will solve the issue?</span>
        <select class="select select-primary w-full p-2 border rounded" id="confidence">
          <option value="" disabled selected>Select an option</option>
          <option value="0.8">High confidence</option>
          <option value="0.5">Medium confidence</option>
          <option value="0.3">Low confidence</option>
        </select>
      </fieldset>

      <fieldset class="fieldset border-solid">
        <legend class="fieldset-legend text-lg font-bold">What is the effort to build?</legend>
        <span class="label block mb-2">How much effort will this feature take to build?</span>
        <select class="select select-primary w-full p-2 border rounded" id="effort">
          <option value="" disabled selected>Select an option</option>
          <option value="3">7+ Sprints</option>
          <option value="2">5 > 6 Sprints</option>
          <option value="1">3 > 4 Sprints</option>
          <option value="0.5">1 > 2 Sprints</option>
        </select>
      </fieldset>

      <button type="submit" id="calculateButton" class="btn btn-primary w-full">Calculate</button>
    </form>
    <div id="riceResult" class="mt-4 text-xl font-bold text-center"></div>
  </div>
  `;

  const sharingComponents = `
  <div class="share-component flex items-center ">
    <h5 class="text-lg font-bold">Share:</h5>
    <div class="flex space-x-2 ml-4">
      <!-- Twitter -->
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(document.querySelector('meta[property="og:title"]')?.content || 'Default Title')}&url=${encodeURIComponent(document.querySelector('meta[property="og:url"]')?.content || window.location.href)}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="btn btn-outline btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 22 22">
          <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.229-.616v.061a4.916 4.916 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
        </svg>
      </a>

      <!-- Facebook -->
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.querySelector('meta[property="og:url"]')?.content || window.location.href)}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="btn btn-outline btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 22 22">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
        </svg>
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(document.querySelector('meta[property="og:url"]')?.content || window.location.href)}&title=${encodeURIComponent(document.querySelector('meta[property="og:title"]')?.content || 'Default Title')}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="btn btn-outline btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="currentColor" viewBox="0 0 22 22">
          <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.112 13H17.1v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.26z"/>
        </svg>
      </a>
    </div>
  </div>
  `;

  // Function to inject HTML into a selector
  function injectHTML(selector, htmlContent) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML = htmlContent;
    } else {
      console.error(`Element with selector "${selector}" not found.`);
    }
  }

  // Inject header, footer, RICE calculator, and sharing components
  injectHTML('#header', headerHTML);
  injectHTML('#footer', footerHTML);
  injectHTML('#rice', riceHTML);
  injectHTML('#sharing', sharingComponents);

  // RICE Calculator Logic
  function riceCalculator() {
    const reach = parseFloat(document.getElementById('reach').value);
    const impact = parseFloat(document.getElementById('impact').value);
    const confidence = parseFloat(document.getElementById('confidence').value);
    const effort = parseFloat(document.getElementById('effort').value);

    if (!reach || !impact || !confidence || !effort) {
      document.getElementById('riceResult').innerText = 'Please fill in all fields.';
      return;
    }

    if (effort === 0) {
      document.getElementById('riceResult').innerText = 'Effort cannot be zero.';
      return;
    }

    const rice = (reach * impact * confidence) / effort;
    document.getElementById('riceResult').innerText = `Score: ${rice.toFixed(2)}`;
  }

  // Add event listener for form submission
  const riceForm = document.getElementById('riceForm');
  if (riceForm) {
    riceForm.addEventListener('submit', function (event) {
      event.preventDefault();
      riceCalculator();
    });
  }
  // year calculator for about information
  const startYear = 2011; // set your starting year here
  const currentYear = new Date().getFullYear();
  const yearsSince = Math.max(0, currentYear - startYear); // e.g. 2025 - 2013 = 12

  const el = document.getElementById('yearText');
  if (el) {
    // show just the number of years
    el.textContent = `${yearsSince}`;

    // OR show nicer text, uncomment to use:
    // el.textContent = yearsSince === 1 ? `${yearsSince} year` : `${yearsSince} years`;
  }

});