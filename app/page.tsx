const speakers = [
  ['01','Alex Morgan','Product & Growth Lead','https://i.pravatar.cc/500?img=12'],
  ['02','Maya Chen','Creative Director','https://i.pravatar.cc/500?img=47'],
  ['03','Jordan Lee','Founder & CEO','https://i.pravatar.cc/500?img=11'],
  ['04','Sofia Williams','Community Builder','https://i.pravatar.cc/500?img=44'],
];

const events = [
  ['Sep 18','Future of Work','Jakarta · 09:00 AM','Business'],
  ['Oct 02','Design Forward','Bandung · 01:00 PM','Design'],
  ['Oct 21','Tech Connect','Surabaya · 10:00 AM','Technology'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell"><a className="brand" href="#">event<span>ives</span></a><div className="navlinks"><a href="#events">Events</a><a href="#speakers">Speakers</a><a href="#pricing">Pricing</a><a href="#blog">Blog</a></div><a className="navbtn" href="#create">Create Event ↗</a></nav>

      <section className="hero shell">
        <div className="hero-copy"><p className="eyebrow">THE NEW WAY TO EXPERIENCE EVENTS</p><h1>Make moments<br/><em>matter.</em></h1><p className="lead">Discover inspiring events, connect with remarkable people, and create experiences worth remembering.</p><div className="actions"><a className="button primary" href="#events">Explore events <span>↗</span></a><a className="textlink" href="#create">Host an event <span>→</span></a></div></div>
        <div className="hero-art"><div className="sun"></div><div className="art-card card-a"><small>UPCOMING</small><strong>Design<br/>Forward</strong><span>02 OCT · BANDUNG</span></div><div className="art-card card-b"><b>★</b><span>12k+ people<br/>connected</span></div><div className="art-note">CREATE<br/><i>memories</i></div></div>
      </section>

      <section className="ticker"><div>CONNECTION <b>✦</b> INSPIRATION <b>✦</b> COMMUNITY <b>✦</b> EXPERIENCE <b>✦</b> CONNECTION <b>✦</b> INSPIRATION</div></section>

      <section className="intro shell"><div><p className="eyebrow">WHY EVENTIVES</p><h2>More than an event.<br/><span>It’s a feeling.</span></h2></div><p className="introtext">We believe the best events do more than fill a calendar. They create unexpected connections, spark new ideas, and leave you with stories to tell.</p></section>

      <section id="speakers" className="speakers shell"><div className="sectionhead"><div><p className="eyebrow">MEET THE VOICES</p><h2>People worth <span>hearing.</span></h2></div><a className="roundlink" href="#">View all ↗</a></div><div className="speakergrid">{speakers.map(([n,name,role,img])=><article className="speaker" key={n}><div className="photo"><img src={img} alt=""/><b>{n}</b></div><h3>{name}</h3><p>{role}</p></article>)}</div></section>

      <section id="events" className="schedule"><div className="shell"><div className="sectionhead"><div><p className="eyebrow">DON’T MISS OUT</p><h2>What’s <span>happening.</span></h2></div><div className="tabs"><button>All</button><button>Technology</button><button>Design</button><button>Business</button></div></div><div className="eventlist">{events.map(([date,title,meta,tag])=><a className="eventrow" href="#" key={title}><div className="date"><b>{date.split(' ')[1]}</b><span>{date.split(' ')[0]}</span></div><div><small>{tag}</small><h3>{title}</h3><p>{meta}</p></div><span className="arrow">↗</span></a>)}</div></div></section>

      <section className="quote shell"><div className="quote-mark">“</div><blockquote>The right room can change everything. One conversation, one idea, one connection at a time.</blockquote><p>— Eventives Community</p></section>

      <section id="pricing" className="pricing shell"><div className="sectionhead"><div><p className="eyebrow">SIMPLE & TRANSPARENT</p><h2>Choose your <span>experience.</span></h2></div></div><div className="pricegrid"><article><p>Explorer</p><h3>Free</h3><span>For curious minds</span><hr/><ul><li>Discover public events</li><li>Save your favorites</li><li>Join the community</li></ul><a href="#events">Get started →</a></article><article className="featured"><p>Creator</p><h3>$19<span>/mo</span></h3><span>For event makers</span><hr/><ul><li>Create unlimited events</li><li>Audience analytics</li><li>Priority support</li></ul><a href="#create">Start creating →</a></article><article><p>Studio</p><h3>$59<span>/mo</span></h3><span>For growing teams</span><hr/><ul><li>Everything in Creator</li><li>Team collaboration</li><li>Advanced reporting</li></ul><a href="#create">Talk to us →</a></article></div></section>

      <section id="create" className="cta shell"><div><p className="eyebrow">YOUR TURN</p><h2>Have a story<br/><em>to share?</em></h2></div><div><p>Bring people together around something meaningful. Build an event your community will remember.</p><a className="button light" href="#">Create your event ↗</a></div></section>

      <section id="blog" className="blog shell"><div className="sectionhead"><div><p className="eyebrow">FROM THE JOURNAL</p><h2>Ideas worth <span>sharing.</span></h2></div><a className="textlink" href="#">Read all →</a></div><div className="bloggrid"><article><div className="blogimage one">01</div><small>EVENT CULTURE · 6 MIN READ</small><h3>Why the best events feel less like events</h3><a href="#">Read story →</a></article><article><div className="blogimage two">02</div><small>COMMUNITY · 4 MIN READ</small><h3>Designing spaces where people actually connect</h3><a href="#">Read story →</a></article><article><div className="blogimage three">03</div><small>CREATORS · 8 MIN READ</small><h3>The little details that make a big difference</h3><a href="#">Read story →</a></article></div></section>

      <section className="partners"><div className="shell"><p className="eyebrow">TRUSTED BY TEAMS AT</p><div className="logos"><b>northstar</b><b>arc.</b><b>MONO</b><b>layer</b><b>orbit</b></div></div></section>

      <footer className="footer"><div className="shell footgrid"><div><a className="brand inverse" href="#">event<span>ives</span></a><p>Making meaningful moments<br/>easier to find and create.</p></div><div><b>Explore</b><a href="#events">Events</a><a href="#speakers">Speakers</a><a href="#blog">Journal</a></div><div><b>Company</b><a href="#">About</a><a href="#">Careers</a><a href="#">Contact</a></div><div><b>Follow along</b><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a><a href="#">X ↗</a></div></div><div className="shell copyright"><span>© 2026 Eventives</span><span>Privacy · Terms</span></div></footer>
    </main>
  );
}
