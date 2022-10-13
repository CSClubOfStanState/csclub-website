class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container">
			<footer class="py-3 my-4">
				<ul class="nav justify-content-center border-bottom pb-2 mb-2">
					<li class="nav-item">
						<a href="./index.html#" class="nav-link px-2 text-muted">Home</a>
					</li>
				
					<li class="nav-item">
						<a href="./index.html#Blog" class="nav-link px-2 text-muted"
							>Blog</a
						>
					</li>
					<li class="nav-item">
						<a href="./resources.html#" class="nav-link px-2 text-muted"
							>Resources</a
						>
					</li>
          <li class="nav-item">
            <a href="./officers.html" class="nav-link px-2 text-muted"
              >Officers</a
            >
          </li>
					<li class="nav-item">
						<a
							class="nav-link px-2 text-muted"
							href="./archive.html#"
							>Archive</a
						>
					</li>
          <li class="nav-item">
						<a
							class="nav-link px-2 text-muted"
							href="./events.html#"
							>Events</a
						>
					</li>
					<li class="nav-item">
						<a
							href="https://www.instagram.com/csclubofcsustan/"
							target="_blank"
							class="nav-link px-2 text-muted"
							>Instagram</a
						>
					</li>
					<li class="nav-item">
						<a
							href="https://discord.com/invite/Gp5V58B"
							target="_blank"
							class="nav-link px-2 text-muted"
							>Discord</a
						>
					</li>
				</ul>
				<p class="text-center text-muted">
					© <span id="yearDate"></span>
					2022 Computer Science Club at California State University,
					Stanislaus
				</p>
			</footer>
		</div>
    `;
  }
}

customElements.define("my-footer", Footer);
