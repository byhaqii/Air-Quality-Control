"use client";

import { useEffect, useRef } from "react";
import styles from "./cursor-glow.module.css";

export function CursorGlow() {
	const glowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const glow = glowRef.current;
		if (!glow) {
			return;
		}

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

		if (prefersReducedMotion || isCoarsePointer) {
			return;
		}

		const cardSelector = "[data-card]";

		const updatePosition = (event: PointerEvent) => {
			glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

			const target = event.target instanceof Element ? event.target : null;
			const hoveringCard = target?.closest(cardSelector) !== null;
			glow.style.opacity = hoveringCard ? "0.34" : "0.72";
		};

		window.addEventListener("pointermove", updatePosition, { passive: true });

		return () => {
			window.removeEventListener("pointermove", updatePosition);
		};
	}, []);

	return <div ref={glowRef} className={styles.glow} aria-hidden="true" />;
}
