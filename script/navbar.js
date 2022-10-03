class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav
        class="navbar sticky-top navbar-expand-lg"
        aria-label="CS Club Navbar"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  <i class="fa-solid fa-turn-up fa-xl"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./index.html#Blog">Blog</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./index.html#Resources">Resources</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./officers.html#">Officers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./archive.html#">Archive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./events.html#">Events</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("my-navbar", Navbar);
