import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Hotel Guest",
      text: "The doctor came directly to our hotel and helped us very quickly. Professional and reassuring service.",
    },
    {
      name: "Family Traveller",
      text: "Fast response, clear English communication and excellent care during our holiday.",
    },
    {
      name: "Villa Guest",
      text: "Very helpful medical support. WhatsApp contact made everything simple.",
    },
  ];

  return (
    <section className="section-padding bg-slate-900/80">
      <div className="container-premium">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Patient Reviews
          </span>

          <h2 className="mt-5 font-[var(--font-poppins)] text-4xl font-extrabold md:text-6xl">
            Trusted by Visitors
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-5 flex gap-1 text-cyan-300">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="leading-7 text-slate-300">“{review.text}”</p>

              <div className="mt-6 font-bold text-white">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}