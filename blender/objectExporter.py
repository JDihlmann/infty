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
        
                outpath = os.path.join(path, obj.name + '.glb')

                old_x = obj.location.x
                old_y = obj.location.y
                old_z = obj.location.z

                obj.location.x = 0
                obj.location.y = 0
                obj.location.z = 0
                
                bpy.context.scene.objects[obj.name].select_set(True)

                bpy.ops.export_scene.gltf(
                    filepath=outpath,
                    use_selection=True
                )

                bpy.context.scene.objects[obj.name].select_set(False)

                obj.location.x = old_x
                obj.location.y = old_y
                obj.location.z = old_z

        
        
export('/Users/jdihlmann/Desktop/CG Infty')