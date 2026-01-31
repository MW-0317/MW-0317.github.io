This article aims for the reader to understand both shaders in general and shaders in Godot, focusing on understanding Godot shaders over other shading languages alike GLSL or HLSL.
# What are shaders?
In the simplest sense, a shader is a program that runs code on the GPU with the assumption that it will generate a 3D scene. I mention that shaders assume the code is generating a 3D scene because of a variety of optimizations are built directly on the GPU, alongside code that is templated for a 3D setting.

The two most common shaders, and what Godot uses, are called **vertex** and **fragment** shaders. The vertex shaders take in a list of points, called vertices, and moves those points in a way that the camera can see. The fragment shaders take the pixels or "fragments" between vertices and give these fragments color.
# Composite Shaders
# Further Reading
[LearnOpenGL](https://learnopengl.com/)