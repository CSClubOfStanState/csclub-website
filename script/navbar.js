class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav
        class="navbar sticky-top navbar-expand-lg bg-light"
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
                <a class="nav-link" href="./resources.html#">Resources</a>
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
      <div
      class="alert alert-warning alert-dismissible fade show text-center"
      role="alert"
    >
      <div>
        <strong>Holy guacamole!</strong> We're on our third version already! If
        you ever wonder if there are updates your are NOT seeing,
        <a
          href="https://www.cuit.columbia.edu/clear-cache"
          class="alert-link"
          target="_blank"
          >clear your browser's cache!</a
        >
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
    `;
  }
}

customElements.define("my-navbar", Navbar);
