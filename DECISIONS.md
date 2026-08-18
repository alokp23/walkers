# Design and Engineering Decisions

## 1. Why this data ingestion strategy over the obvious alternative you rejected?

Given the prompt's heavy emphasis on a premium, highly animated 3D spatial UI within a strict timeframe, I opted to "ingest" and manage the product data (the sneaker specs, models, and bento grid details) via static, locally scoped component arrays rather than wiring up a headless CMS or a mock JSON server. 

The obvious alternative was to set up a mock REST endpoint or load a local `data.json` file asynchronously via `useEffect`. I rejected that approach because it would introduce unnecessary React state complexity, loading states, and async rendering lifecycles. For a highly animated landing page where the primary goal is a sub-3-second "wow" factor, synchronous static rendering guarantees that the DOM is fully populated the exact millisecond `framer-motion` calculates its spatial geometry and intersection observers. It eliminated layout shift and guaranteed peak performance on initial load.

## 2. One trade-off you made under the time limit, and what you’d do with a real week.

**The Trade-off:** I sacrificed true 3D modeling (using Three.js/React Three Fiber) in favor of "pseudo-3D" spatial depth using `framer-motion`, CSS perspective (`preserve-3d`), and layered DOM cards. 

**With a real week:** Building a genuine WebGL experience using R3F takes significant time to get the lighting, materials, and camera controls feeling premium rather than gimmicky. With a full week, I would model the Levitate Foam structure in Blender, export a compressed `.glb` file, and implement a true interactive 3D sneaker that users could rotate and dissect. I would also wire up a proper CMS (like Sanity) for the marketing team to ingest content dynamically, and write comprehensive Cypress tests for the scroll interactions.

## 3. Where did you use AI tools, and what did you personally verify or change afterward?

I built the core architecture, spatial UI logic, and glassmorphism styling entirely from scratch. I intentionally limited my use of AI tools to act as a localized assistant for a few specific, repetitive tasks rather than using it to generate large blocks of code. 

Specifically, I used an AI tool to:
- **Help configure the `framer-motion` spring physics syntax:** I asked the AI for the mathematical syntax to map `useTransform` outputs to 3D rotation degrees (`rotateX`/`rotateY`). 
- **Generate placeholder copy:** I used AI to brainstorm some of the technical sneaker copywriting for the Features section to save time.

**What I personally verified and changed:**
Even for those small queries, the AI's output required refinement. For the `framer-motion` physics, the AI provided standard transitions instead of the fluid, spring-based physics the design demanded. I manually rewrote the logic using `useSpring` with precise stiffness (300) and damping (30) values to ensure the 3D tilt cards felt heavy, physical, and premium. I also meticulously reviewed the generated copy, editing it down to fit the minimal, confident "Antigravity" brand voice.
