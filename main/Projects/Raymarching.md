# Raymarching
![](../cloud.jpg)
Imagine the light that passes through this cloud.

Light is interesting, we imagine it as both a particle and a wave and yet in computer graphics we always seem to assume light is a particle, flying towards our camera in the time it takes to render a single frame. Light, like other parts of nature, however, act in opposition to us, its *much* faster and *much* more confusing than the simplifications will describe it. Light is much more interesting than these simplifications will lead you to believe, I hope someday we can understand its' beauty, in the meantime we will estimate its' beauty with **Raymarching**. 

Raymarching is a technique that assumes, even further, how light acts. Instead of computing every ray that comes from some light source, we send rays outward (for every pixel) and find which rays will somehow interact with the initial light source. This gives us an estimation, and yet still take a substantial amount of computing power.

I wonder why we haven't found a way to simulate the wave-like properties of light. I'd have to think it's because even simulating waves, like those in an ocean, still require a lot of computing power so its still not as simple as using rays.
## Black Holes

<div class="scratch-preview">
<iframe width="560" height="315" src="https://www.youtube.com/embed/dMohMW29gSM?si=r0G8tohUHJ92waS6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

I saw this incredible video attempting to simulate a black hole by *assuming* light acts as an object with mass and will be pulled in by a black hole. In reality black holes warp space and time such that light moving in a "straight" path appears to curve. It's still something I very much don't understand but for now this assumption will do.

To obtain a curve or "gravitational pull" on this ray that passes by the black hole, we must first find the distance to the black hole. Since we're already using ray's it'll be easiest to use **Signed Distance Functions**. These are like building blocks of building geometry out of rays instead of the typical triangles we're used to. We traverse along the ray, calculating the distance from some SDF shape, and once we "enter" the shape (where the distance is less than zero) we stop the ray and set the color value to the color of the shape. However, we'll be using the typical SDF's a little differently. Instead, we'll be using the distance to apply the gravitational pull the ray experiences.
## Clouds
Blah blah blah
## Implementing in Godot
Godot has many options towards 

# References
- Based on this [video](https://www.youtube.com/watch?v=dMohMW29gSM)
- Oh and [this one](https://www.youtube.com/watch?v=ryB8hT5TMSg) too
- [SDF's](https://iquilezles.org/articles/distfunctions/)
# Further Reading
- [4D Raytracing](https://www.youtube.com/watch?v=FS8NotZ3diY)
# Future Ideas
- [Dithering](https://www.youtube.com/watch?v=8wOUe32Pt-E) to recreate how the first rendered black hole looks
- FFT to recreate [lens effects](https://www.youtube.com/watch?v=QWqb5Gewbx8)
- Weather Simulation of some sort
- [Particle Simulation](https://www.reddit.com/r/creativecoding/comments/1n7hu40/black_hole_simulation_using_300000_particles/)
- Phase change of [clouds and rain](https://www.youtube.com/watch?v=itRV2jEtV8Q)
