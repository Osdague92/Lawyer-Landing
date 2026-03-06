import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'María G.',
    text: 'Recibí una asesoría impecable y un acompañamiento constante. Logramos resolver mi caso laboral con excelentes resultados.',
  },
  {
    name: 'Carlos R.',
    text: 'Su claridad y profesionalismo marcaron la diferencia en un conflicto civil muy complejo. Totalmente recomendable.',
  },
  {
    name: 'InnovaTech S.L.',
    text: 'Nos apoyó en la estructuración legal de la empresa y en la revisión de contratos clave. Trabajo serio y estratégico.',
  },
];

function Testimonials() {
  return (
    <section id="testimonios" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-navy"
        >
          Testimonios de clientes
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <p className="text-slate-600">“{item.text}”</p>
              <cite className="mt-4 block font-semibold text-navy not-italic">{item.name}</cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
