"use client";

import React, { useEffect, useRef, useState } from "react";

interface MoleculeVisualProps {
  className?: string;
  size?: "lg" | "md" | "sm";
  videoSrc?: string;
}

interface Atom {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  glowColor: string;
  label?: string;
}

interface Bond {
  from: number;
  to: number;
  double?: boolean;
}

export default function MoleculeVisual({
  className = "",
  size = "lg",
  videoSrc = "/images/molecule.mp4",
}: MoleculeVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0.25;
    let angleY = 0.35;
    let angleZ = 0.1;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // Heterocyclic Isothiazolinone Biocide (BIT/CMIT) Molecular Geometry
    const baseAtoms: Atom[] = [
      // Central Heterocyclic Ring
      { x: -55, y: -45, z: 0, radius: 24, color: "#F59E0B", glowColor: "rgba(245, 158, 11, 0.45)", label: "S" }, // Sulfur (Amber)
      { x: 35, y: -70, z: 25, radius: 20, color: "#0EA5E9", glowColor: "rgba(14, 165, 233, 0.45)", label: "N" },  // Nitrogen (Cyan)
      { x: 85, y: -20, z: -20, radius: 21, color: "#5AB900", glowColor: "rgba(90, 185, 0, 0.45)", label: "C" },   // Carbon (Guard Green)
      { x: 50, y: 55, z: 30, radius: 21, color: "#101E10", glowColor: "rgba(16, 30, 16, 0.35)", label: "C" },     // Carbon (Deep Green)
      { x: -40, y: 40, z: -35, radius: 21, color: "#5AB900", glowColor: "rgba(90, 185, 0, 0.45)", label: "C" },   // Carbon (Guard Green)
      // Carbonyl Oxygen (=O)
      { x: 140, y: -30, z: 45, radius: 19, color: "#F43F5E", glowColor: "rgba(244, 63, 94, 0.45)", label: "O" },  // Oxygen (Rose/Red)
      // Benzene fused ring carbons (BIT structure)
      { x: -105, y: 95, z: 15, radius: 20, color: "#C6F19D", glowColor: "rgba(198, 241, 157, 0.5)", label: "C" },
      { x: -175, y: 75, z: -15, radius: 20, color: "#101E10", glowColor: "rgba(16, 30, 16, 0.35)", label: "C" },
      { x: -195, y: -10, z: 25, radius: 20, color: "#5AB900", glowColor: "rgba(90, 185, 0, 0.45)", label: "C" },
      { x: -135, y: -70, z: -20, radius: 20, color: "#C6F19D", glowColor: "rgba(198, 241, 157, 0.5)", label: "C" },
      // Functional satellites
      { x: 45, y: -135, z: 50, radius: 13, color: "#F1F5F9", glowColor: "rgba(241, 245, 249, 0.3)", label: "H" },
      { x: 95, y: 120, z: -40, radius: 18, color: "#10B981", glowColor: "rgba(16, 185, 129, 0.45)", label: "Cl" }, // Chlorine (Emerald)
      { x: -90, y: 160, z: 35, radius: 13, color: "#F1F5F9", glowColor: "rgba(241, 245, 249, 0.3)", label: "H" },
      { x: -225, y: 125, z: -30, radius: 13, color: "#F1F5F9", glowColor: "rgba(241, 245, 249, 0.3)", label: "H" },
      { x: -265, y: -35, z: 45, radius: 13, color: "#F1F5F9", glowColor: "rgba(241, 245, 249, 0.3)", label: "H" },
    ];

    const bonds: Bond[] = [
      { from: 0, to: 1 }, // S - N
      { from: 1, to: 2 }, // N - C
      { from: 2, to: 3 }, // C - C
      { from: 3, to: 4, double: true }, // C = C
      { from: 4, to: 0 }, // C - S
      { from: 2, to: 5, double: true }, // C = O
      // Benzene fused ring
      { from: 4, to: 6 },
      { from: 6, to: 7, double: true },
      { from: 7, to: 8 },
      { from: 8, to: 9, double: true },
      { from: 9, to: 0 },
      // Satellites
      { from: 1, to: 10 },
      { from: 3, to: 11 },
      { from: 6, to: 12 },
      { from: 7, to: 13 },
      { from: 8, to: 14 },
    ];

    const scaleFactor = size === "lg" ? 1.4 : size === "md" ? 1.05 : 0.8;

    // Retina display scaling
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const baseW = 540;
    const baseH = 460;
    canvas.width = baseW * dpr;
    canvas.height = baseH * dpr;
    ctx.scale(dpr, dpr);

    const render = () => {
      if (!isDragging) {
        angleY += 0.008;
        angleX += 0.004;
        angleZ += 0.002;
      }

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      // Rotate and project atoms
      const projectedAtoms = baseAtoms.map((atom) => {
        // Y-axis rotation
        let x1 = atom.x * cosY - atom.z * sinY;
        let z1 = atom.z * cosY + atom.x * sinY;
        // X-axis rotation
        let y2 = atom.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + atom.y * sinX;
        // Z-axis rotation
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = y2 * cosZ + x1 * sinZ;

        // Perspective projection
        const fov = 480;
        const perspective = fov / (fov + z2);

        return {
          ...atom,
          projX: baseW / 2 + x3 * scaleFactor * perspective,
          projY: baseH / 2 + y3 * scaleFactor * perspective,
          projZ: z2,
          projRadius: atom.radius * scaleFactor * perspective,
          alpha: Math.max(0.35, Math.min(1, (z2 + 250) / 440)),
        };
      });

      // Clear canvas
      ctx.clearRect(0, 0, baseW, baseH);

      // 1. Draw Bonds
      bonds.forEach((bond) => {
        const a1 = projectedAtoms[bond.from];
        const a2 = projectedAtoms[bond.to];
        const avgZ = (a1.projZ + a2.projZ) / 2;
        const alpha = Math.max(0.3, Math.min(0.9, (avgZ + 250) / 440));

        ctx.save();
        ctx.globalAlpha = alpha;

        if (bond.double) {
          const dx = a2.projX - a1.projX;
          const dy = a2.projY - a1.projY;
          const len = Math.sqrt(dx * dx + dy * dy);
          const offset = 4.5 * scaleFactor;
          const nx = (-dy / len) * offset;
          const ny = (dx / len) * offset;

          ctx.strokeStyle = "#101E10";
          ctx.lineWidth = 4 * scaleFactor;
          ctx.beginPath();
          ctx.moveTo(a1.projX + nx, a1.projY + ny);
          ctx.lineTo(a2.projX + nx, a2.projY + ny);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(a1.projX - nx, a1.projY - ny);
          ctx.lineTo(a2.projX - nx, a2.projY - ny);
          ctx.stroke();
        } else {
          ctx.strokeStyle = "#1C2B1C";
          ctx.lineWidth = 6 * scaleFactor;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(a1.projX, a1.projY);
          ctx.lineTo(a2.projX, a2.projY);
          ctx.stroke();

          // Subtle reflective shine along bond
          ctx.strokeStyle = "rgba(198, 241, 157, 0.65)";
          ctx.lineWidth = 2 * scaleFactor;
          ctx.beginPath();
          ctx.moveTo(a1.projX, a1.projY);
          ctx.lineTo(a2.projX, a2.projY);
          ctx.stroke();
        }
        ctx.restore();
      });

      // 2. Depth sort atoms from back to front
      const sortedAtoms = [...projectedAtoms].sort((a, b) => a.projZ - b.projZ);

      // 3. Render Atoms as 3D Glossy Spheres
      sortedAtoms.forEach((atom) => {
        ctx.save();
        ctx.globalAlpha = atom.alpha;

        // Radial Glow
        const glowGrad = ctx.createRadialGradient(
          atom.projX,
          atom.projY,
          atom.projRadius * 0.7,
          atom.projX,
          atom.projY,
          atom.projRadius * 1.8
        );
        glowGrad.addColorStop(0, atom.glowColor);
        glowGrad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(atom.projX, atom.projY, atom.projRadius * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // 3D Sphere Shading with Specular Highlight
        const sphereGrad = ctx.createRadialGradient(
          atom.projX - atom.projRadius * 0.35,
          atom.projY - atom.projRadius * 0.35,
          atom.projRadius * 0.08,
          atom.projX,
          atom.projY,
          atom.projRadius
        );
        sphereGrad.addColorStop(0, "#FFFFFF"); // Bright specular highlight
        sphereGrad.addColorStop(0.2, atom.color);
        sphereGrad.addColorStop(0.85, atom.color);
        sphereGrad.addColorStop(1, "#0A130A"); // Deep shadow edge

        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(atom.projX, atom.projY, atom.projRadius, 0, Math.PI * 2);
        ctx.fill();

        // Atom Symbol Label
        if (atom.label && atom.projRadius > 13) {
          ctx.fillStyle = atom.color === "#F1F5F9" ? "#101E10" : "#FFFFFF";
          ctx.font = `800 ${Math.round(atom.projRadius * 0.72)}px system-ui, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(atom.label, atom.projX, atom.projY + 0.5);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse drag handlers for interactive exploration
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      angleY += dx * 0.01;
      angleX += dy * 0.01;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };
    const handleMouseUp = () => {
      isDragging = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      {/* Fallback ambient glowing aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5AB900]/15 via-[#C6F19D]/20 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      {/* If an MP4 video exists and plays, render it; otherwise seamlessly fall back to Canvas */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${
            videoLoaded ? "opacity-100 z-20" : "opacity-0 -z-10"
          }`}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 3D Molecular Canvas Animation */}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", maxWidth: "540px", maxHeight: "460px" }}
        className="relative z-10 w-full h-full object-contain"
      />
    </div>
  );
}
