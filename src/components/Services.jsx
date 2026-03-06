import { BriefcaseBusiness, Building2, Gavel } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Gavel,
    title: 'Derecho civil',
    description:
      'Defensa y asesoría en conflictos contractuales, responsabilidad civil y reclamaciones patrimoniales.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Derecho laboral',
    description:
      'Representación en despidos, reclamaciones salariales y conflictos laborales para empleados y empleadores.',
  },
  {
    icon: Building2,
    title: 'Asesoría empresarial',
    description:
      'Acompañamiento legal para empresas en cumplimiento normativo, contratos y gestión de riesgos.',
  },
];

function Services() {
  return (
    <section id="servicios" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-navy"
        >
          Servicios legales
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Soluciones jurídicas claras, eficaces y orientadas a resultados.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <Icon className="h-10 w-10 text-gold" />
                <h3 className="mt-5 text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
