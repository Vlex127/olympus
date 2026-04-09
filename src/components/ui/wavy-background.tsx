"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = useMemo(() => createNoise3D(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ w: 0, h: 0, nt: 0, animationId: 0, animationRunning: false });
  const isSafariRef = useRef(false);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const waveColors = useMemo(
    () =>
      colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
      ],
    [colors]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = stateRef.current;
    state.w = window.innerWidth;
    state.h = window.innerHeight;
    state.nt = 0;

    canvas.width = state.w;
    canvas.height = state.h;
    ctx.filter = `blur(${blur}px)`;

    const drawWave = (n: number) => {
      state.nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < state.w; x += 5) {
          const y = noise(x / 800, 0.3 * i, state.nt) * 100;
          ctx.lineTo(x, y + state.h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, state.w, state.h);
      drawWave(5);
      state.animationId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      state.w = window.innerWidth;
      state.h = window.innerHeight;
      canvas.width = state.w;
      canvas.height = state.h;
      ctx.filter = `blur(${blur}px)`;
    };

    state.animationRunning = true;
    render();
    window.addEventListener("resize", handleResize);

    return () => {
      if (state.animationId) {
        cancelAnimationFrame(state.animationId);
      }
      window.removeEventListener("resize", handleResize);
      state.animationRunning = false;
    };
  }, [blur, noise, getSpeed, waveColors, backgroundFill, waveOpacity]);

  useEffect(() => {
    isSafariRef.current =
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome");
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafariRef.current ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
