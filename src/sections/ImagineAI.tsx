import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 5449;

const IMG = {
    r1c1: "/images/hf_20260226_190127_d32cba66-0f70-4e19-8390-13c309bc698f_1.webp",
    r1c2: "/images/hf_20260226_190553_3998c3a6-59cb-4764-8a8d-e2254aec952e_1.webp",
    r1c3: "/images/hf_20260226_191526_ce117c66-5840-4f63-b511-56a58d07eee0_1.webp",
    r1c4: "/images/hf_20260226_191143_7c946b2d-9d26-4d05-9227-afc8c355e872_1.webp",
    r2c1: "/images/hf_20260226_184644_5b4bd2d3-66fa-4048-9dd0-ede4045db57e_1.webp",
    r2c2: "/images/hf_20260226_191309_1ab3808d-eca7-495b-b0c4-e2b69589fd74_1.webp",
    r2c3: "/images/hf_20260226_185536_5353fb09-c4bb-46f7-8c44-9d719e23f8ae_1.webp",
    r2c4: "/images/hf_20260226_191925_32922e76-ecc2-4db6-a0b0-69772f39a7aa_1.webp",
    r3c1: "/images/hf_20260226_191839_9d8f1cb2-dbcd-4a44-9446-b38743f2486a_1.webp",
    r3c2: "/images/hf_20260226_185536_b4379064-0c83-4466-b871-5fdc284bcc9c_1.webp",
    r4c1: "/images/hf_20260226_185536_0a68bf00-246a-4cd7-8273-939b3d9d55fa_1.webp",
    r4c3: "/images/dancer_leopard.webp",
    r4c4: "/images/hf_20260226_191715_b1db0d6f-d2ca-47fa-b005-0968e1bbfd3f_1.webp",
    r5c1: "/images/hf_20260227_060928_a77b1f1e-425a-4387-ae42-2f9a28516e5f_1.webp",
    r5c2tall: "/images/hf_20260227_045621_2fe667d2-0d3f-4ca8-bc4c-ab59e94e85fb__1__2.webp",
    r5c3: "/images/hf_20260227_044237_3ba4dd8c-0946-4346-b9fa-a0012baaed30_1.webp",
    r5c4: "/images/hf_20260227_043621_211695d4-398a-41a2-9d16-5cc60f305247_1.webp",
    r6c1: "/images/hf_20260227_045555_f99e5c28-57ee-42e3-bbdc-d83489b4529d_1.webp",
    r6c3tall: "/images/hf_20260227_045621_2fe667d2-0d3f-4ca8-bc4c-ab59e94e85fb__1__3.webp",
    r6c4: "/images/ritual_bottle_full.webp",
    r7c1: "/images/hf_20260227_064929_bb22973d-44e4-401f-b479-a9c90e909d55_1.webp",
    r7c4: "/images/hf_20260227_062508_180ea3c8-461c-4b3e-9d0f-f7a1cc3609da_1.webp",
    r8c1: "/images/hf_20260227_064947_879188bf-1e6b-4405-b13d-cf8758a9368a__1__1.webp",
    r8c3: "/images/hf_20260227_065801_7ca5e2f1-fe62-447f-baad-ca93529d4486_1.webp",
    r8c4: "/images/hf_20260227_063246_f6a92de6-cfd5-4dce-ad7b-faadbb789a04_1.webp",
};

function GlassPill() {
    return (
        <div
            className="absolute inset-0 rounded-[296px]"
            style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0px 8px 40px 0px rgba(0,0,0,0.12)",
            }}
        />
    );
}

function useMouseFloat(strength = 18) {
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.8 });
    const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.8 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const parent = el.closest("[data-name='slide-root']") as HTMLElement | null;
        if (!parent) return;

        const onMove = (e: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height * 0.15;
            rawX.set(((e.clientX - cx) / rect.width) * strength);
            rawY.set(((e.clientY - cy) / rect.height) * strength * 0.6);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [rawX, rawY, strength]);

    return { containerRef, x, y };
}

const ease = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay = 0) {
    return {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
        viewport: { once: true, amount: 0.07 as number },
        transition: { duration: 0.85, ease, delay },
    };
}

function fadeIn(delay = 0) {
    return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 } as { opacity: number },
        viewport: { once: true, amount: 0.07 as number },
        transition: { duration: 0.9, ease, delay },
    };
}

function AnimatedSlide() {
    const heroGlass = useMouseFloat(22);

    return (
        <div className="relative size-full" data-name="slide-root">

            {/* Glass bubble behind hero headline — follows mouse */}
            <motion.div
                ref={heroGlass.containerRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease }}
                style={{ x: heroGlass.x, y: heroGlass.y }}
                className="absolute left-[247px] top-[96px] w-[1401px] h-[126px] rounded-[1000px] isolate"
            >
                <GlassPill />
            </motion.div>

            {/* Hero title */}
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease }}
                className="absolute font-['Gotham_Bold',_'Montserrat',_sans-serif] font-bold h-[613px] leading-[0] left-[90px] text-[132px] text-white top-[126px] w-[1071px] whitespace-pre-wrap"
            >
                <p className="mb-0">
                    <span className="leading-[63px]">AI IMAG</span>
                    <span className="leading-[63px]">{` / INE`}</span>
                </p>
                <p className="leading-[63px] mb-0">&nbsp;</p>
                <p className="font-['Gotham_Book',_'Montserrat',_sans-serif] font-normal leading-[63px]">PORTFOLIO</p>
            </motion.div>

            {/* Header divider */}
            <motion.div
                {...fadeIn(0.15)}
                className="absolute bg-[#d9d9d9] h-[3px] left-[48px] top-[379px] w-[1082px]"
            />

            {/* Header pills */}
            <motion.div {...fadeIn(0)} className="absolute content-stretch flex gap-[4px] items-center justify-center left-[29px] px-[20px] py-[6px] rounded-[1000px] top-[357px]">
                <GlassPill />
                <div className="content-stretch flex h-[36px] items-center justify-center relative rounded-[100px] shrink-0">
                    <div className="flex flex-col font-['Gotham_Ultra',_'Montserrat',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[8px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss16'" }}>
                        <p className="leading-[normal]">AUTOMIQ.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...fadeIn(0.1)} className="absolute content-stretch flex gap-[4px] items-center justify-center left-[539px] px-[20px] py-[6px] rounded-[1000px] top-[357px]">
                <GlassPill />
                <div className="content-stretch flex h-[36px] items-center justify-center relative rounded-[100px] shrink-0">
                    <div className="flex flex-col font-['Gotham_Ultra',_'Montserrat',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[8px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss16'" }}>
                        <p className="leading-[normal]">FEBRUARY 2026.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div {...fadeIn(0.2)} className="absolute content-stretch flex gap-[4px] items-center justify-center left-[1107px] px-[20px] py-[6px] rounded-[1000px] top-[357px]">
                <GlassPill />
                <div className="content-stretch flex h-[36px] items-center justify-center relative rounded-[100px] shrink-0">
                    <div className="flex flex-col font-['Gotham_Ultra',_'Montserrat',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[8px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss16'" }}>
                        <p className="leading-[normal]">CONFIDENTIAL.</p>
                    </div>
                </div>
            </motion.div>

            {/* ROW 1 — top 463 */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] rounded-tl-[145px] top-[463px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[145px] size-full" src={IMG.r1c1} />
            </motion.div>

            <motion.div {...fadeUp(0.07)} className="absolute h-[600px] left-[500px] top-[463px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r1c2} />
            </motion.div>

            <motion.div {...fadeUp(0.14)} className="absolute h-[600px] left-[970px] top-[463px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r1c3} />
            </motion.div>

            <motion.div {...fadeUp(0.21)} className="absolute h-[600px] left-[1439px] top-[463px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r1c4} />
            </motion.div>

            {/* ROW 2 — top 1086-1087 */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] top-[1087px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r2c1} />
            </motion.div>

            <motion.div {...fadeUp(0.07)} className="absolute h-[600px] left-[500px] top-[1086px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r2c2} />
            </motion.div>

            <motion.div {...fadeUp(0.14)} className="absolute h-[600px] left-[970px] top-[1086px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r2c3} />
            </motion.div>

            <motion.div {...fadeUp(0.21)} className="absolute h-[600px] left-[1439px] top-[1087px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r2c4} />
            </motion.div>

            {/* ROW 3 — top 1714 */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] top-[1714px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r3c1} />
            </motion.div>

            <motion.div {...fadeUp(0.07)} className="absolute h-[600px] left-[500px] top-[1714px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r3c2} />
            </motion.div>

            {/* "THE DAWN OF THE DIGITAL TWIN." pill */}
            <motion.div {...fadeIn(0.15)} className="absolute flex items-center justify-center left-[867px] px-[20px] py-[6px] rounded-[1000px] top-[1752px] w-[566px] h-[48px] isolate">
                <GlassPill />
                <div className="flex h-[36px] items-center justify-center relative rounded-[100px] shrink-0">
                    <div className="flex flex-col font-['Gotham_Ultra',_'Montserrat',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[8px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss16'" }}>
                        <p className="leading-[normal]">THE DAWN OF THE DIGITAL TWIN.</p>
                    </div>
                </div>
            </motion.div>

            {/* Large mid-page heading */}
            <motion.div
                {...fadeUp(0)}
                className="absolute font-['Gotham_Bold',_'Montserrat',_sans-serif] font-bold h-[613px] leading-[93px] left-[992px] text-[82px] text-white top-[1808px] uppercase w-[905px] whitespace-pre-wrap"
            >
                <p className="mb-0">One Character.&nbsp;</p>
                <p className="mb-0">Infinite Worlds.&nbsp;</p>
                <p>Zero Compromise.</p>
            </motion.div>

            {/* ROW 4 — top 2127 */}
            <motion.div {...fadeUp(0.14)} className="absolute h-[600px] left-[970px] top-[2127px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r4c3} />
            </motion.div>

            <motion.div {...fadeUp(0.21)} className="absolute h-[600px] left-[1440px] rounded-tr-[145px] top-[2127px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tr-[145px] size-full" src={IMG.r4c4} />
            </motion.div>

            {/* "CONSISTENT BY DESIGN." pill */}
            <motion.div {...fadeIn(0)} className="absolute z-10 isolate content-stretch flex gap-[4px] items-center justify-center left-[518px] w-[737px] h-[48px] px-[20px] py-[6px] rounded-[1000px] top-[2360px]">
                <GlassPill />
                <div className="content-stretch flex h-[36px] items-center justify-center relative rounded-[100px] shrink-0">
                    <div className="flex flex-col font-['Gotham_Ultra',_'Montserrat',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[8px] uppercase whitespace-nowrap" style={{ fontFeatureSettings: "'ss16'" }}>
                        <p className="leading-[normal]">Consistent by Design. Iconic by Result.</p>
                    </div>
                </div>
            </motion.div>

            {/* Vertical divider — draws down on scroll */}
            <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bg-white h-[308px] left-[724px] top-[2454px] w-px origin-top"
            />

            {/* col 1 row 4 shifted */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] top-[2341px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r4c1} />
            </motion.div>

            {/* Body paragraph */}
            <motion.p
                {...fadeUp(0)}
                className="absolute font-['Gotham_Bold',_'Montserrat',_sans-serif] font-bold leading-[38px] left-[541px] text-[22px] text-justify text-white top-[2762px] uppercase w-[1308px] whitespace-pre-wrap"
            >
                The holy grail of AI creation is here: flawless consistency. We've moved beyond generating look-alikes to creating a persistent digital soul. The same character, with the same intricate tattoos and signature braids, can now seamlessly transition from a stark desert landscape to the cover of Vogue.
            </motion.p>

            {/* ROW 5 — top 2968 */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] top-[2968px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r5c1} />
            </motion.div>

            {/* col 2 — tall 1854px */}
            <motion.div {...fadeUp(0.07)} className="absolute h-[1854px] left-[500px] top-[2968px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r5c2tall} />
            </motion.div>

            <motion.div {...fadeUp(0.14)} className="absolute h-[600px] left-[970px] top-[2968px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r5c3} />
            </motion.div>

            <motion.div {...fadeUp(0.21)} className="absolute h-[600px] left-[1440px] top-[2968px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r5c4} />
            </motion.div>

            {/* ROW 6 — top 3595 */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] top-[3595px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r6c1} />
            </motion.div>

            {/* col 3 — tall 1227px */}
            <motion.div {...fadeUp(0.14)} className="absolute h-[1227px] left-[970px] top-[3595px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r6c3tall} />
            </motion.div>

            {/* col 4 — bottle full */}
            <motion.div {...fadeUp(0.21)} className="absolute h-[600px] left-[1440px] top-[3595px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r6c4} />
            </motion.div>

            {/* ROW 7 — top 4222 */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] top-[4222px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r7c1} />
            </motion.div>

            {/* col 4 — framed image */}
            <motion.div {...fadeUp(0.21)} className="absolute h-[597px] left-[1444px] pointer-events-none top-[4222px] w-[446px]">
                <div className="absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute h-[120.69%] left-[-3.65%] max-w-none top-[-3.61%] w-[120.73%]" src={IMG.r7c4} />
                </div>
                <div aria-hidden className="absolute border border-black border-solid inset-0" />
            </motion.div>

            {/* ROW 8 — top 4846-4849 */}
            <motion.div {...fadeUp(0)} className="absolute h-[600px] left-[30px] rounded-bl-[145px] top-[4849px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[145px] size-full" src={IMG.r8c1} />
            </motion.div>

            <motion.div {...fadeUp(0.14)} className="absolute h-[600px] left-[970px] top-[4849px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r8c3} />
            </motion.div>

            <motion.div {...fadeUp(0.21)} className="absolute h-[600px] left-[1440px] top-[4846px] w-[450px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={IMG.r8c4} />
            </motion.div>

            {/* "The code is creative…" pill */}
            <motion.div {...fadeIn(0.1)} className="absolute flex items-center justify-center left-[325px] px-[20px] py-[6px] rounded-[1000px] top-[4872px] w-[1269px] h-[48px] isolate">
                <GlassPill />
                <div className="flex h-[36px] items-center justify-center relative rounded-[100px] shrink-0">
                    <div className="flex flex-col font-['Gotham_Ultra',_'Montserrat',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[8px] uppercase whitespace-nowrap" style={{ fontFeatureSettings: "'ss16'" }}>
                        <p className="leading-[normal]">The code is creative. The character is constant. The future is here.</p>
                    </div>
                </div>
            </motion.div>

            {/* Footer heading */}
            <motion.div
                {...fadeUp(0)}
                className="absolute font-['Gotham_Bold',_'Montserrat',_sans-serif] font-bold h-[613px] leading-[93px] left-[496px] text-[82px] text-white top-[4957px] uppercase w-[1306px] whitespace-pre-wrap"
            >
                <p className="mb-0">Your world.</p>
                <p className="mb-0">your rules.</p>
                <p className="mb-0">your icon.</p>
                <p className="mb-0">&nbsp;</p>
                <p>replicated flawlessly.</p>
            </motion.div>

            {/* Bottom glass line */}
            <motion.div
                {...fadeIn(0.2)}
                className="absolute flex items-center justify-center left-[-15px] top-[5180px] w-[768px] h-[22px] rounded-[1000px] isolate"
            >
                <GlassPill />
            </motion.div>

        </div>
    );
}

export default function ImagineAI() {
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const updateScale = () => {
            const vw = window.innerWidth;
            // You can adjust the math to ensure it scales correctly but not boundlessly large
            // Math.min logic keeps it from looking too big on giant screens if needed, 
            // but let's emulate what the original app did exactly:
            setScale(vw / DESIGN_WIDTH);
        };
        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    const scaledHeight = DESIGN_HEIGHT * scale;

    return (
        <section
            id="imagine-ai"
            ref={containerRef}
            className="w-full relative py-24"
        >
            <div
                className="mx-auto"
                style={{ width: "100%", height: scaledHeight, overflow: "hidden" }}
            >
                <div
                    style={{
                        width: DESIGN_WIDTH,
                        height: DESIGN_HEIGHT,
                        transformOrigin: "top left",
                        transform: `scale(${scale})`,
                    }}
                >
                    <AnimatedSlide />
                </div>
            </div>
        </section>
    );
}
