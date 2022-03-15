# Infinite World Generation 

> Demo of the wave form collapse algorithm with react three fiber and web assembly

![](misc/title.png)

The wave form collapse algorithm 

## Contents
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
└── blender                             
    ├── infty.blend                  # Blender file with objects and scripts
    ├── nameExporter.py              # Name exporter to copy paste in javascript
    ├── constraintExporter.py        # Constraint exporter for adjacency
    ├── objectExporter.py            # Object exportet for models
    └── gltfjsxify.sh                # TSX file generator from glb files
```


### Misc

This project was part of the Computer Graphics [internship][praktikum] by the university of Tübingen. 
Big thanks to Martin Donald for his amazing [tutorial][youtube] and 


<!-- Markdown link & img dfn's -->

[stahlberg]: https://www.youtube.com/watch?v=0bcZb-SsnrA
[youtube]: https://www.youtube.com/watch?v=2SuvO4Gi7uY
[city]: https://marian42.de/article/wfc/
[original]: https://github.com/mxgmn/WaveFunctionCollapse
[praktikum]: https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/computergrafik/lehrstuhl/lehre/praktikum-computergrafik/
