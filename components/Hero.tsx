interface HeroProps {
    title: string
    subtitle: string
    image: string
}

export default function Hero({ title, subtitle, image }: HeroProps) {
    return (
        <section
            className="h-[80vh] flex items-center justify-center text-center text-white hero-image"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="bg-black/30 p-8 rounded-xl">
                <h1 className="text-5xl mb-4">{title}</h1>
                <p className="max-w-xl text-lg">{subtitle}</p>
            </div>
        </section>
    )
}