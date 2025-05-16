// This script dynamically loads the header, footer, and latest posts into the main page - from the JS File.
// Define the header and footer HTML as strings
const headerHTML = `
<nav>
<div class="fixed z-100 navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="p-2 font-bold text-xl" href="/">[B;S]</a>
  </div>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-round btn-ghost">            
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
    </div>
    <ul tabindex="0" 
    class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-md">
      <li><a href="/posts/">Posts</a></li>
      <li><a href="/about/">About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
</div>
</nav>
`;
const footerHTML = `
<footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover" href="/about">About</a>
      <a class="link link-hover" href="/posts">Posts</a>
      <a class="link link-hover">Contact</a>
    </nav>
    <!--  
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>

        <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current">
          <path 
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
        </a>
      </div>
    </nav> -->
    <aside>
      <p class="footer"><a href="https://visitbirmingham.com/" target="_blank">Copyright © Ben Startin ${new Date().getFullYear()} - Built with 🔥 in Birmingham, UK</a></p>
    </aside>
  </footer>
  `;

const riceHTML = `
<div class=" mx-auto mt-20 mb-20 border border-gray-500 rounded-xl p-5">
  <h2 class="mb-4">RICE Calculator</h2>
<fieldset class="fieldset border-solid">
  <legend class="fieldset-legend">What is the Reach?</legend>
        <span class="label">Roughly how many customers will the new feature reach per month?</span>
  <input type="number"
  class="input validator"
  required
  placeholder="Type a number"
  min="1"
  title="Must be between be 1 to 10" id="reach" />
  <span class="validator-hint">Must be a number</span>


  <legend class="fieldset-legend">What is the Impact?</legend>
          <span class="label ">What is the value of the feature you're building?</span>
  <div class=" mb-5">
  <input type="range" min="0" max="3" value="1" class="range" step="1" id="impact" />
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div class="flex justify-between px-2.5 mt-2 text-xs">
    <span>No Impact</span>
    <span>Low</span>
    <span>Medium</span>
    <span>High Impact</span>
  </div>
</div>

  <legend class="fieldset-legend">What is your confidence?</legend>
    <span class="label">How confiident the feature will solve the issue you are facing?</span>
      <select class="select select-primary mb-5" id="confidence">
        <option value="" disabled selected>Select an option</option>
             <option value="0.8">High confidence</option>
             <option value="0.5">Medium confidence</option>
             <option value="0.3">Low confidence</option>
      </select>

  <legend class="fieldset-legend ">What is the effort to build?</legend>
    <span class="label">How much effort will this feature take to build?</span>
      <select class="select select-primary mb-5" id="confidence">
        <option value="" disabled selected>Select an option</option>
        <option value="3">7+ Sprints</option>
        <option value="2">5 > 6 Sprints</option>
        <option value="1">3 > 4 Sprints</option>
        <option value="0.5">1 > 2 Sprints</option>
      </select>

  <button type="submit" id="calculateButton" class="btn btn-primary mt-4">Calculate</button>
</fieldset>
</div>
  `;

  const latestPostsHTML = `<div class="mx-auto max-w-3xl mt-10 mb-5 p-5">
      <h2>Latest posts</h2>
      <ul class="list bg-base-100 rounded-box shadow-sm">
          
        {% assign newestPost = collections.posts | sort: "date" | reverse | first %}
    {% if newestPost %}
    <a href="{{ newestPost.url }}" class="hover:underline"><li class="list-row">
          <div>
            <div class="text-lg ">{{ newestPost.data.title }}<span class="text-xs text-gray-500"> // {{ newestPost.date | date: "%B %d, %Y" }}</span>
          </div>
            <div class="text-sm opacity-80">{{ newestPost.data.description | truncate: 120}}<span class="text-xs text-gray-500"> Read post</span></div>
          </div>
       </li> </a>
        {% endif %}
        
        {% assign sortedPosts = collections.posts | sort: "date" | reverse %}
      {% assign secondNewestPost = sortedPosts[1] %}
      {% if secondNewestPost %}
    <a href="{{ newestPost.url }}" class="hover:underline"><li class="list-row">
          <div>
            <div class="text-lg">{{ secondNewestPost.data.title }}<span class="text-xs text-gray-500"> // {{ secondNewestPost.date | date: "%B %d, %Y" }}</span>
              <div class="text-sm opacity-60">{{ secondNewestPost.data.description | truncate: 120 }}<span class="text-xs text-gray-500"> Read post</span></div>
          </div>
       </li> </a>
        {% endif %}
        
        {% assign sortedPosts = collections.posts | sort: "date" | reverse %}
      {% assign thirdNewestPost = sortedPosts[2] %}
      {% if thirdNewestPost %}
    <a href="{{ thirdNewestPost.url }}" class="hover:underline"><li class="list-row">
          <div>
            <div class="text-lg ">{{ thirdNewestPost.data.title }}<span class="text-xs text-gray-500"> // {{ thirdNewestPost.date | date: "%B %d, %Y" }}</span>
              <div class="text-sm opacity-60">{{ thirdNewestPost.data.description | truncate: 120 }}<span class="text-xs text-gray-500"> Read post</span></div>
          </div>
       </li> </a>
        {% endif %}

        {% assign sortedPosts = collections.posts | sort: "date" | reverse %}
      {% assign forthNewestPost = sortedPosts[3] %}
      {% if forthNewestPost %}
    <a href="{{ forthNewestPost.url }}" class="hover:underline"><li class="list-row">
          <div>
            <div class="text-lg ">{{ forthNewestPost.data.title }}<span class="text-xs text-gray-500"> // {{ forthNewestPost.date | date: "%B %d, %Y" }}</span>
              <div class="text-sm opacity-60">{{ forthNewestPost.data.description | truncate: 120 }}<span class="text-xs text-gray-500"> Read post</span></div>
          </div>
       </li> </a>
        {% endif %}

        {% assign sortedPosts = collections.posts | sort: "date" | reverse %}
      {% assign fifthNewestPost = sortedPosts[4] %}
      {% if fifthNewestPost %}
    <a href="{{ fifthNewestPost.url }}" class="hover:underline"><li class="list-row">
          <div>
            <div class="text-lg ">{{ fifthNewestPost.data.title }}<span class="text-xs text-gray-500"> // {{ fifthNewestPost.date | date: "%B %d, %Y" }}</span>
              <div class="text-sm opacity-60">{{ fifthNewestPost.data.description | truncate: 120 }}<span class="text-xs text-gray-500"> Read post</span></div>
          </div>
       </li> </a>
        {% endif %}
        
      </ul>
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

// Inject header and footer
injectHTML('#header', headerHTML);
injectHTML('#footer', footerHTML);  
injectHTML('#rice', riceHTML);
injectHTML('#latestPosts', latestPostsHTML);


// RICE calculator
/*function riceCalculator() {
  const reach = parseFloat(document.getElementById('reach').value);
  const impact = parseFloat(document.getElementById('impact').value);
  const confidence = parseFloat(document.getElementById('confidence
document.getElementById('riceForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const reach = parseFloat(document.getElementById('reach').value);
  const impact = parseFloat(document.getElementById('impact').value);
  const confidence = parseFloat(document.getElementById('confidence').value);
  const effort = parseFloat(document.getElementById('effort').value);
  
  if (effort === 0) {
      document.getElementById('result').innerText = 'Effort cannot be zero.';
      return;
  }
  
  const rice = (reach * impact * confidence) / effort;
  document.getElementById('riceResult').innerText = `Score: ${rice.toFixed(0)}`;
}

document.getElementById('riceForm').addEventListener('submit', function(event) {
  event.preventDefault();
  riceCalculator();
});

/* Function to load HTML components dynamically - Code Hidden
async function loadComponent(selector, filePath) {
  const element = document.querySelector(selector);
  if (element) {
    try {
      const response = await fetch(filePath);
      if (response.ok) {
        const html = await response.text();
        element.innerHTML = html;
      } else {
        console.error(`Failed to load ${filePath}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
    }
  }
}

// Load header and footer
loadComponent('#header', '/components/header.html');
loadComponent('#footer', '/components/footer.html');
loadComponent('#latest-posts', '/components/latest-posts.html'); */
