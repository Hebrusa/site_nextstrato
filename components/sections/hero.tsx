"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [loaded, setLoaded] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="relative rounded-2xl border border-[#E4E4EF] bg-white overflow-hidden shadow-xl shadow-black/[0.06]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E4E4EF] bg-[#F8F8FC] select-none">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[#71718A] text-xs font-mono">nextstrato.ai — Plateforme agents IA</span>
        </div>
        {/* Duration badge */}
        <span className="text-[#71718A] text-[10px] font-mono bg-[#E4E4EF] px-2 py-0.5 rounded-md">
          DÉMO
        </span>
      </div>

      {/* Video area */}
      <div
        className="relative w-full bg-[#F8F8FC] cursor-pointer group"
        style={{ aspectRatio: "16/9" }}
        onClick={toggle}
      >
        <video
          ref={videoRef}
          src="/videos/demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setLoaded(true)}
          className="w-full h-full object-cover"
        />

        {/* Loading skeleton — shown before video loads */}
        {!loaded && (
          <div className="absolute inset-0 bg-[#F0F0F8] flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-[#E4E4EF] border-t-[#4F6EF7] animate-spin mx-auto mb-3" />
              <p className="text-[#71718A] text-sm">Chargement de la démo...</p>
            </div>
          </div>
        )}

        {/* Play / Pause overlay — visible on hover ou quand pausé */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            !playing ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center shadow-lg shadow-black/10 border border-[#E4E4EF]">
            {playing ? (
              /* Pause icon */
              <svg className="w-5 h-5 text-[#0F0F18]" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              /* Play icon */
              <svg className="w-5 h-5 text-[#0F0F18] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>

        {/* Bottom gradient bar avec indicateur "muet" */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/10 to-transparent flex items-end justify-end px-4 pb-2">
          <span className="text-white/60 text-[10px] font-medium flex items-center gap-1 select-none">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
            Muet
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(79,110,247,0.06)_0%,transparent_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#4F6EF7 1px, transparent 1px), linear-gradient(90deg, #4F6EF7 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <Badge variant="blue" className="text-[13px] px-4 py-1.5">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#4F6EF7] inline-block"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Plateforme IA pour ETI & PME
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-[#0F0F18] leading-[1.1] tracking-tight mb-6"
          >
            Vos équipes <span className="gradient-text">augmentées,</span>
            <br />
            vos systèmes <span className="gradient-text">connectés,</span>
            <br />
            votre efficacité <span className="gradient-text">améliorée.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-[#71718A] leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Une plateforme d'agents IA prêts à l'emploi, calibrés sur vos processus
            métier et connectés à vos systèmes cœurs — déployée avec vous, du
            diagnostic à l'adoption.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button href="/contact" variant="primary" size="lg">
              Démarrer par un diagnostic gratuit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button href="/agents" variant="outline" size="lg">
              Voir la plateforme
            </Button>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-[#71718A] text-sm"
          >
            {["Diagnostic offert", "Sans engagement", "Réponse sous 48h"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#4F6EF7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <HeroVideo />
          {/* Soft glow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-[#4F6EF7] opacity-[0.07] blur-2xl rounded-full pointer-events-none" />
        </motion.div>
      </Container>
    </section>
  );
}
