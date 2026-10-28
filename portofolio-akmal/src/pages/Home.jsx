import Hero from "../component/Hero";
import SkillCard from "../component/SkillCard";

const skills = [
  { id: 1, title: "HTML", desc: "Menyusun struktur Website." },
  { id: 2, title: "CSS", desc: "Menyusun tampilan halaman website."},
  { id: 3, title: "JavaScript", desc: "Menambahkan interaktivitas pada halaman web." },
  { id: 4, title: "React.js", desc: "Membangun antarmuka web berbasis komponen." },
];

function Home() {
  return (
    <div>
      <Hero
        title="Halo, Saya Akmal Ali Muzaffar"
        subtitle="Siswa RPL yang belajar membangun aplikasi web dengan React."
      /><br></br>
      <section className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} title={skill.title} desc={skill.desc} />
        ))}
      </section>
    </div>
  );
}

export default Home;