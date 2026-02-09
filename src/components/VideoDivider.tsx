interface VideoDividerProps {
    webmSrc: string;
    mp4Src: string;
    opacity?: number;
}

export default function VideoDivider({ webmSrc, mp4Src, opacity = 0.5 }: VideoDividerProps) {
    return (
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-[#0A0A0A]">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
                style={{ opacity }}
            >
                <source src={webmSrc} type="video/webm" />
                <source src={mp4Src} type="video/mp4" />
            </video>

            {/* Smooth transition gradients */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>
    );
}
