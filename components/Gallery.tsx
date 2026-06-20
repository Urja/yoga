interface GalleryProps {
    images: string[]
}

export default function Gallery({ images }: GalleryProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className="rounded-2xl h-[300px] object-cover w-full"
                />
            ))}
        </div>
    )
}