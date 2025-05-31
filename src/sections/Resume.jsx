export default function Resume() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
      <div className="text-center">
        <a
          href="https://drive.google.com/file/d/1JPecIwWUrX80JLFUhkD8SPL6Paspy1Mi/view?usp=sharing"
          download="Prakash_Timilsina_Resume.pdf" 
          className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}