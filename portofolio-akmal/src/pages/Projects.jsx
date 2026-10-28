import ProjectCard from "../component/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Sistem Rekap Pembayaran Uang Kas & PDL",
    desc: "Website yang berfungsi untuk menginput uang kas dari setiap orang",
    image: "/image/p5.png",
    tech: ["PHP", "HTML", "CSS"],
    githubUrl: "https://github.com/Mayy401/sistem-rekap-pembayaran",
    demoUrl: "https://newg.co-id.id/uangkas/index.php",
  },
  {
    id: 2,
    title: "Jurnal Kemajuan Belajar",
    desc: "Website yang berfungsi untuk pencatatan, dokumentasi, dan evaluasi dalam belajar",
    image: "/image/project2.png",
    tech: ["PHP", "MySql", "HTML"],
    githubUrl: "https://github.com/Mayy401/Jurnal-Kemajuan-Belajar",
    demoUrl: "https://jurnalfajriiiii.co-id.id/jurnal_akmal/",
  },
  {
    id: 3,
    title: "Sistem Jadwal Kelas",
    desc: "Website yang berfungsi untuk murid yang ingin melihat jadwal pelajaran, kapan guru masuk kelas",
    image: "/image/p4.png",
    tech: ["PHP", "MySql", "HTML"],
    githubUrl: "http://github.com/Mayy401/Sistem-Jadwal-Kelas",
    demoUrl: "https://jurnalfajriiiii.co-id.id/pppp/data_jadwal.php",
  },
  // tambahkan proyek lain di sini mengikuti pola yang sama

];

function Projects() {
  return (
    <section className="projects">
      <center>
      <h2>Proyek Saya</h2>
      </center> 
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;