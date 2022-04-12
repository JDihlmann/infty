# Infinite World Generation 

> Demo of the wave form collapse (WFC) algorithm with react three fiber and web assembly (WASM) [Tweet][tweet]


https://user-images.githubusercontent.com/9963865/158373612-9377a198-a6fe-454f-8d7d-085650761d01.mov


The WFC algorithm is part of the family of procedural algorithms and allows to construct object grids that follow human designed neighbouring rules. 
It was first introduced by [Maxim Gumin][original] and apated for 3D by many others such as in the [Stålberg experiments][stahlberg] or [generative cities][city].
This project provides a baseline of the WFC algorithm in a flexible but still a very performant manner. 
We present a pipeline containing three parts the fast flexible WFC WASM implementation, a model and adjancency exporter and a demo that showcases the results and interacts with the WFC WASM.
In this repository one will find the adjancency exporter, the compiled WASM and the demo. 
The demo can be tested at https://inftyworld.vercel.app/.

## Features
The WFC WASM version features a 32x16x32 3D solver, with a run and a run step mode. 
Voxels can be preset to set the floor or pad the walls. 
Additionaly a sampling rate of objects can be set to force certain models over others, this is usefull to create for example more sparse results. 
The solver features a backtracking step, to avoid getting stuck in unsolvable situations. 
For the exporter part of the pipeline we used blender to model the objects. 
One is able to export the models and adjacency examples with the provided python scripts. 
The results of the compination of the exporter and the WASM can be viewed in the demo, which also has a generate and a step mode. 
Models can be exported and smapling rate can be changed. 

## Contents
In the following you find a short description of the most important files that are in connection with WFC. 
Files that are not named here are either config files or supporting structure to render and display the results. 

```
.
├── public
│   ├── ... .glb                     # All models glb files
│   ├── wfc.wasm                     # Web assembly wave form collapse
│   └── constraint.json              # Adjacency constraints
│
├── src                             
│   ├── components                 
│   │   ├── generator                # Generator files loading and using WFC
│   │   └── displayer                # Displayer of generated WFC structures
│   ├── models                       # All models tsx files
│   └── wfc                          # Emscripten WFC javascript module
│
├── stores                             
│   └── generationStore.tsx          # Config for WFC such as size and samples
│
└── blender                             
    ├── infty.blend                  # Blender file with objects and scripts
    ├── nameExporter.py              # Name exporter to copy paste in javascript
    ├── constraintExporter.py        # Constraint exporter for adjacency
    ├── objectExporter.py            # Object exportet for models
    └── gltfjsxify.sh                # TSX file generator from glb files
```


### Misc

This project was part of the Computer Graphics [internship][praktikum] by the university of Tübingen. 
Big thanks to [Martin Donald][martinDonald] for his amazing [tutorial][youtube] as well as [Oskar Stålberg][oskarStahlberg] and [Marian Kleineberg][marian] for their inspiration. 


<!-- Markdown link & img dfn's -->

[stahlberg]: https://www.youtube.com/watch?v=0bcZb-SsnrA
[youtube]: https://www.youtube.com/watch?v=2SuvO4Gi7uY
[martinDonald]: https://twitter.com/bolddunkley
[oskarStahlberg]: https://twitter.com/osksta
[city]: https://marian42.de/article/wfc/
[marian]: https://twitter.com/marian42_
[original]: https://github.com/mxgmn/WaveFunctionCollapse
[praktikum]: https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/computergrafik/lehrstuhl/lehre/praktikum-computergrafik/
[tweet]: https://twitter.com/JDihlmann/status/1511717277959442432?s=20&t=UFAo1s9EnVkQ7GC3kXmQfw
