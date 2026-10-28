function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <img src="/image/p6.jpeg" alt="Foto Profil" className="profile-photo"></img><br />
      <h1 className="teks">{title}</h1>
      <p className="teks">{subtitle}</p>
    </section>
  );
}

export default Hero;