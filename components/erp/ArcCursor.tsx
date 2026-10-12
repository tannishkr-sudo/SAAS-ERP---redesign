
"use client";

import { useEffect, useRef } from "react";
import "./ArcCursor.css";

export default function ArcCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const follower = followerRef.current;

    if (!dot || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animationFrame = 0;

    const root = document.documentElement;
    root.classList.add("arc-cursor-enabled");

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      dot.classList.add("arc-cursor-visible");
      follower.classList.add("arc-cursor-visible");
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;

      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(animateFollower);
    };

    const handleMouseDown = () => {
      dot.classList.add("arc-cursor-clicked");
      follower.classList.add("arc-cursor-clicked");
    };

    const handleMouseUp = () => {
      dot.classList.remove("arc-cursor-clicked");
      follower.classList.remove("arc-cursor-clicked");
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="interactive"]'
      );

      follower.classList.toggle("arc-cursor-hover", Boolean(interactive));
    };

    const handleMouseLeave = () => {
      dot.classList.remove("arc-cursor-visible");
      follower.classList.remove("arc-cursor-visible");
    };

    const handleMouseEnter = () => {
      dot.classList.add("arc-cursor-visible");
      follower.classList.add("arc-cursor-visible");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animationFrame = requestAnimationFrame(animateFollower);

    return () => {
      cancelAnimationFrame(animationFrame);

      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      root.classList.remove("arc-cursor-enabled");
    };
  }, []);

  return (
    <div className="arc-cursor-layer" aria-hidden="true">
      <div ref={followerRef} className="arc-cursor-follower" />
      <div ref={dotRef} className="arc-cursor-dot" />
    </div>
  );
}
