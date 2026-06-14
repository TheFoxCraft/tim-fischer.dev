"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Carousel.module.css";
import { useVisible } from "@/utils/visibleDetector";

type Props = {
  slides: React.ReactNode[];
  autoplayMs?: number;
};

export default function Carousel({ slides, autoplayMs = 5000 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 25,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const visible = useVisible(carouselRef);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setProgress(0);
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || hovered || !visible) return;

    let frame: number;
    let start = Date.now();

    const loop = () => {
      const p = Math.min((Date.now() - start) / autoplayMs, 1);

      setProgress(p);

      if (p >= 1) {
        emblaApi.scrollNext();
        start = Date.now();
      }

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frame);
  }, [emblaApi, hovered, autoplayMs, visible]);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={carouselRef}
    >
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button className={styles.prev} onClick={scrollPrev}>
        <ChevronLeft size={22} />
      </button>

      <button className={styles.next} onClick={scrollNext}>
        <ChevronRight size={22} />
      </button>

      <div className={styles.dots}>
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`${styles.dot} ${
              i === selectedIndex ? styles.dotActive : ""
            }`}
          />
        ))}
      </div>

      <div className={styles.progressTrack}>
        <div
          className={styles.progressBar}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  );
}
