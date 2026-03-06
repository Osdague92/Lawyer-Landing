import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contacto" className="bg-lightgold px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl font-bold text-navy">Solicita tu consulta</h2>
          <p className="mt-4 text-slate-700">
            Cuéntame tu situación y recibirás una respuesta profesional para evaluar las mejores opciones legales.
          </p>
          <div className="mt-6 space-y-3 text-slate-700">
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gold" /> +34 600 123 456
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gold" /> contacto@lauramendezlegal.com
            </p>
          </div>
        </motion.div>

        <motion.form
          name="contacto"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <p className="hidden">
            <label>
              No completar: <input name="bot-field" />
            </label>
          </p>

          <label className="mb-4 block text-sm font-medium text-slate-700" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            className="mb-5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-navy/20 transition focus:ring"
            placeholder="Tu nombre"
          />

          <label className="mb-4 block text-sm font-medium text-slate-700" htmlFor="correo">
            Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            className="mb-5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-navy/20 transition focus:ring"
            placeholder="tu@email.com"
          />

          <label className="mb-4 block text-sm font-medium text-slate-700" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            required
            className="mb-6 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-navy/20 transition focus:ring"
            placeholder="Describe brevemente tu consulta"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Enviar consulta
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
