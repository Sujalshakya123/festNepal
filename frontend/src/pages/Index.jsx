const Index = () => {
  return (
    <>
      <section class="hero">
        <h1>
          <span class="discover-nepal">Discover Nepal</span>
          <br />
          Festivals & Stays
        </h1>
        <p>
          Experience authentic Nepali culture through vibrant festivals
          <br />
          and comfortable, memorable stays
        </p>

        <div class="search-bar">
          <input
            type="text"
            placeholder="Search festivals,hotels,locations..."
          />
          <button class="search-btn">Search</button>
        </div>

        <div class="stats">
          <div class="stat-item">
            <div class="stat-icon">🏨</div>
            <div class="stat-number">150+</div>
            <div class="stat-label">Hostels</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">🎊</div>
            <div class="stat-number">200+</div>
            <div class="stat-label">Festivals</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">👥</div>
            <div class="stat-number">50K+</div>
            <div class="stat-label">Happy Guests</div>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="section-header">
          <div>
            <h2>Featured Festivals</h2>
            <p>Immerse in traditional celebrations</p>
          </div>
          <a href="Festivals.html" class="view-all">
            View All Festivals →
          </a>
        </div>

        <div class="cards">
          <div class="card">
            <div class="card-image festival1"></div>
            <div class="card-content">
              <h3 class="card-title">Dashain Festival Celebration</h3>
              <div class="card-meta">Sep 15 - Oct 1</div>
              <div class="card-meta">⏰ 15 days celebration</div>
              <div class="card-footer">Kathmandu Valley</div>
              <button class="card-btn">Book Event</button>
            </div>
          </div>

          <div class="card">
            <div class="card-image festival2"></div>
            <div class="card-content">
              <h3 class="card-title">Holi Festival of Colors</h3>
              <div class="card-meta">Mar 25, 2026</div>
              <div class="card-meta">⏰ Full day event</div>
              <div class="card-footer">Basantapur Square</div>
              <button class="card-btn">Book Event</button>
            </div>
          </div>
        </div>

        <div class="section-header">
          <div>
            <h2>Popular Hostels</h2>
            <p>Cozy, perfect location hostels</p>
          </div>
          <button class="view-all">View All Hostels →</button>
        </div>

        <div class="cards">
          <div class="card">
            <div class="card-image hostel1">
              <span class="badge">⚡ FEATURED</span>
            </div>
            <div class="card-content">
              <h3 class="card-title">Mountain View Lodge</h3>
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span>5.0</span>
                <span class="reviews">(248 reviews)</span>
              </div>
              <div class="card-footer">Pokhara, Lakeside</div>
              <button class="card-btn secondary">Book Now</button>
            </div>
          </div>

          <div class="card">
            <div class="card-image hostel2">
              <span class="badge">⚡ FEATURED</span>
            </div>
            <div class="card-content">
              <h3 class="card-title">Himalayan Haven Hostel</h3>
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span>4.9</span>
                <span class="reviews">(189 reviews)</span>
              </div>
              <div class="card-footer">Thamel, Kathmandu</div>
              <button class="card-btn secondary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
