import { siteConfig } from "@/lib/config";

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="/about.jpg"
                                alt="About us"
                                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-0 lg:-right-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">🏆</span>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-primary">{siteConfig.about.highlights[0].split(" ")[0]}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{siteConfig.about.highlights[0].split(" ").slice(1).join(" ")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/10 rounded-full blur-xl" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:pl-8">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                            {siteConfig.about.subtitle}
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {siteConfig.about.title}
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {siteConfig.about.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-4 mb-8">
                            {siteConfig.about.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            Learn More About Us
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
