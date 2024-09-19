import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export function createRevealAnimation(revealElements) {
	revealElements.forEach((el) => {
		const translateDuration = getComputedStyle(document.documentElement)
			.getPropertyValue("--anim-translate-duration")
			.trim();
		const opacityDuration = getComputedStyle(document.documentElement)
			.getPropertyValue("--anim-opacity-duration")
			.trim();
		const cubicBezier = getComputedStyle(document.documentElement)
			.getPropertyValue("--cubic-bezier-transition")
			.trim();

		gsap.fromTo(
			el,
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: parseFloat(translateDuration),
				ease: cubicBezier,
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					end: "bottom 50%",
					toggleActions: "play none none reverse",
					// markers: true,
				},
				onComplete: () => {
					gsap.to(el, {
						opacity: 1,
						duration: parseFloat(opacityDuration),
						ease: cubicBezier,
					});
				},
			}
		);
	});
}

export function createBannerScaleAnimation(banner) {
	// get variable from scss
	const scaleStart = parseFloat(getComputedStyle(banner).getPropertyValue("--scale-start"));
	const scaleEnd = 1;

	gsap.to(banner, {
		scrollTrigger: {
			trigger: banner,
			start: "clamp(top 90%)",
			end: "clamp(bottom 75%)",
			scrub: true,
			// pin: true,
			markers: false,
		},
		scale: scaleEnd,
		// transformOrigin: "center top",
		ease: "none",
	});

	banner.style.transform = `matrix(${scaleStart}, 0, 0, ${scaleStart}, 0, 0)`;
}
