import { motion } from 'framer-motion';

function About() {
  return (
    <section id="experiencia" className="bg-navy px-6 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/5 p-10 shadow-soft"
      >
        <h2 className="text-3xl font-bold">Experiencia y compromiso</h2>
        <p className="mt-5 text-slate-100">
          Soy Laura Méndez, abogada con más de 15 años de experiencia en derecho civil, laboral y asesoría empresarial.
          He acompañado a particulares y organizaciones en procesos complejos, diseñando estrategias sólidas para proteger
          sus intereses legales con rigor técnico y sensibilidad humana.
        </p>
        <p className="mt-4 text-slate-100">
          Mi compromiso es ofrecer una defensa clara, honesta y efectiva en cada etapa del caso, priorizando siempre los
          derechos y la tranquilidad de mis clientes.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
