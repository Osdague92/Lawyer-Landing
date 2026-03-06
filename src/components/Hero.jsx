import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-b from-lightgold to-white px-6 pb-20 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-block rounded-full bg-gold/15 px-3 py-1 text-sm font-medium text-navy">
            Más de 15 años de experiencia legal
          </p>
          <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl">
            Defensa legal profesional para proteger sus derechos
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Asesoría legal especializada para individuos y empresas.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-navy shadow-soft transition hover:bg-[#b99147]"
          >
            Solicitar consulta
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
        >
          <h2 className="text-2xl font-semibold text-navy">Atención cercana y estratégica</h2>
          <p className="mt-4 text-slate-600">
            Cada caso se trabaja con enfoque personalizado, absoluta confidencialidad y una estrategia jurídica sólida para alcanzar el mejor resultado.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Representación en procesos judiciales y extrajudiciales.</li>
            <li>• Consultoría preventiva para minimizar riesgos legales.</li>
            <li>• Acompañamiento integral durante todo el proceso.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
