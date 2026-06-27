import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import venue from "@/assets/venue.jpg";

export function Venue() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)]"
        >
          <img
            src={venue}
            alt="The St. Regis Cairo, overlooking the Nile at sunset"
            width={1920}
            height={1080}
            loading="lazy"
            className="h-[460px] w-full object-cover md:h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-blush/30" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="text-primary-foreground">
              <p className="font-script text-xl">where it begins</p>
              <p className="text-xs uppercase tracking-[0.4em]">The St. Regis, Cairo</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-rose-deep">The Venue</p>
          <h2 className="mt-4 text-5xl text-primary">The St. Regis, Cairo</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A 17th-century estate nestled between lavender fields and ancient olive groves. Ceremony
            in the rose garden at sunset, reception under the stars.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-rose-deep">
            <MapPin className="h-4 w-4" />
            <span>The St. Regis, Cairo</span>
          </div>
          <a
            href="https://www.google.com/maps/place/%D8%B0%D8%A7+%D8%B3%D8%A7%D9%86%D8%AA+%D8%B1%D9%8A%D8%AC%D9%8A%D8%B3+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9+location%E2%80%AD/data=!4m2!3m1!1s0x145840e5930a1683:0x7c05897b40456e04?sa=X&ved=1t:242&ictx=111"
            target="_blank"
            rel="noreferrer"
            className="glass glow-hover mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.3em] text-primary"
          >
            Open in Maps <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
