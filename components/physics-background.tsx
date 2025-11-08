"use client"

import { useEffect, useRef } from "react"
import Matter from "matter-js"

interface PhysicsBackgroundProps {
  className?: string
}

export function PhysicsBackground({ className }: PhysicsBackgroundProps) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Matter.Engine>()
  const renderRef = useRef<Matter.Render>()

  useEffect(() => {
    if (!sceneRef.current) return

    // Module aliases
    const Engine = Matter.Engine
    const Render = Matter.Render
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Body = Matter.Body
    const Composite = Matter.Composite
    const Common = Matter.Common

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0.05 },
    })
    engineRef.current = engine

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    })
    renderRef.current = render

    // Create boundaries
    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
        lineWidth: 0,
      },
    }

    const ground = Bodies.rectangle(
      render.options.width / 2,
      render.options.height + 30,
      render.options.width + 100,
      60,
      wallOptions,
    )

    const ceiling = Bodies.rectangle(render.options.width / 2, -30, render.options.width + 100, 60, wallOptions)

    const leftWall = Bodies.rectangle(-30, render.options.height / 2, 60, render.options.height + 100, wallOptions)

    const rightWall = Bodies.rectangle(
      render.options.width + 30,
      render.options.height / 2,
      60,
      render.options.height + 100,
      wallOptions,
    )

    // Create objects
    const objects: Matter.Body[] = []

    // Create Islamic-themed shapes
    const colors = [
      "#10b981", // green-500
      "#059669", // green-600
      "#047857", // green-700
      "#d1fae5", // green-100
      "#a7f3d0", // green-200
    ]

    // Create star shapes (8-pointed stars common in Islamic art)
    const createStar = (x: number, y: number, size: number, color: string) => {
      const sides = 8
      const points = []

      for (let i = 0; i < sides * 2; i++) {
        const radius = i % 2 === 0 ? size : size * 0.4
        const angle = (Math.PI * 2 * i) / (sides * 2)
        points.push({
          x: x + radius * Math.cos(angle),
          y: y + radius * Math.sin(angle),
        })
      }

      return Bodies.fromVertices(x, y, [points], {
        render: { fillStyle: color },
        frictionAir: 0.05,
        restitution: 0.3,
      })
    }

    // Create hexagons (common in Islamic geometric patterns)
    const createHexagon = (x: number, y: number, size: number, color: string) => {
      return Bodies.polygon(x, y, 6, size, {
        render: { fillStyle: color },
        frictionAir: 0.03,
        restitution: 0.3,
      })
    }

    // Create circles (representing dots in Islamic patterns)
    const createCircle = (x: number, y: number, size: number, color: string) => {
      return Bodies.circle(x, y, size, {
        render: { fillStyle: color },
        frictionAir: 0.02,
        restitution: 0.5,
      })
    }

    // Create book shapes
    const createBook = (x: number, y: number, width: number, height: number, color: string) => {
      return Bodies.rectangle(x, y, width, height, {
        chamfer: { radius: 5 },
        render: { fillStyle: color },
        frictionAir: 0.05,
        restitution: 0.2,
      })
    }

    // Add a variety of shapes
    for (let i = 0; i < 5; i++) {
      const x = Common.random(50, render.options.width - 50)
      const y = Common.random(50, render.options.height - 50)
      const color = colors[Math.floor(Math.random() * colors.length)]

      objects.push(createStar(x, y, Common.random(15, 25), color))
    }

    for (let i = 0; i < 5; i++) {
      const x = Common.random(50, render.options.width - 50)
      const y = Common.random(50, render.options.height - 50)
      const color = colors[Math.floor(Math.random() * colors.length)]

      objects.push(createHexagon(x, y, Common.random(15, 25), color))
    }

    for (let i = 0; i < 5; i++) {
      const x = Common.random(50, render.options.width - 50)
      const y = Common.random(50, render.options.height - 50)
      const color = colors[Math.floor(Math.random() * colors.length)]

      objects.push(createCircle(x, y, Common.random(8, 15), color))
    }

    for (let i = 0; i < 3; i++) {
      const x = Common.random(50, render.options.width - 50)
      const y = Common.random(50, render.options.height - 50)
      const color = colors[Math.floor(Math.random() * colors.length)]

      objects.push(createBook(x, y, Common.random(30, 40), Common.random(20, 30), color))
    }

    // Add all bodies to the world
    World.add(engine.world, [ground, ceiling, leftWall, rightWall, ...objects])

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })
    World.add(engine.world, mouseConstraint)
    render.mouse = mouse

    // Apply gentle forces to objects periodically
    const applyForces = () => {
      objects.forEach((object) => {
        if (Math.random() > 0.95) {
          const forceMagnitude = 0.0005 * object.mass
          Body.applyForce(object, object.position, {
            x: Common.random(-forceMagnitude, forceMagnitude),
            y: Common.random(-forceMagnitude, forceMagnitude),
          })
        }
      })
    }

    // Run the engine and renderer
    const interval = setInterval(applyForces, 500)
    Engine.run(engine)
    Render.run(render)

    // Handle window resize
    const handleResize = () => {
      if (!sceneRef.current || !render.canvas) return

      const width = sceneRef.current.clientWidth
      const height = sceneRef.current.clientHeight

      render.options.width = width
      render.options.height = height
      render.canvas.width = width
      render.canvas.height = height

      // Update boundary positions
      Body.setPosition(ground, { x: width / 2, y: height + 30 })
      Body.setPosition(ceiling, { x: width / 2, y: -30 })
      Body.setPosition(leftWall, { x: -30, y: height / 2 })
      Body.setPosition(rightWall, { x: width + 30, y: height / 2 })
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(interval)

      if (renderRef.current) {
        Render.stop(renderRef.current)
        World.clear(engine.world, false)
        Engine.clear(engine)
        renderRef.current.canvas.remove()
        renderRef.current = undefined
      }
    }
  }, [])

  return <div ref={sceneRef} className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }} />
}
