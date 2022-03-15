import bpy
import os

def export(path):

    # Scene Objects 
    objects = bpy.context.scene.objects

    # Deselect all in scene
    bpy.ops.object.select_all(action='DESELECT')
    
    for collection in bpy.data.collections:
        if collection.name == "Objects":
            for obj in collection.all_objects:
                print('import ' + obj.name + ' from "@/models/' + obj.name + '"')
            
    print('#########################################################################################')
    
    for collection in bpy.data.collections:
        if collection.name == "Objects":
            for obj in collection.all_objects:
                print('case "' + obj.name + '":')
                print('return <' + obj.name + ' key={key} position={pos} rotation={obj.rotation} />' )

        
        
export('/Users/jdihlmann/Desktop/Export')