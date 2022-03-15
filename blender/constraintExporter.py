import os
import bpy
import math 
import json
import numpy as np


class ConstraintExporter:

    grid = None
    bounds = None
    constraints = []


    def __init__(self, bounds):
        self.bounds = bounds
        self.cartographRegion()
        self.generateConstraints()

    def export(self, path):
        with open(path + "constraints.json", "w") as outfile:
            json_object = json.dump(self.constraints, outfile, indent = 4)
            # print(json_object)

        

    def cartographRegion(self):
        """
        Cartographs region of voxels in the blender view by storing 
        detected object references in a voxel matrix
        """
        
        # Bound sizes
        sizeX = self.bounds["x"][1] - self.bounds["x"][0]
        sizeY = self.bounds["y"][1] - self.bounds["y"][0]
        sizeZ = self.bounds["z"][1] - self.bounds["z"][0]
        
        # Create voxel matrix
        voxelGrid = np.zeros([sizeX, sizeY, sizeZ]).tolist()
        
        # Scene Objects 
        objects = bpy.context.scene.objects
        
        # Iterate through objects
        for collection in bpy.data.collections:
            if collection.name == "Constrains":
                for obj in collection.all_objects:
                    
                    if (obj.name.split(".")[0] != "Connector"):
                    
                        # Voxel anchor coords
                        x = math.floor(obj.location.x)
                        y = math.floor(obj.location.y)
                        z = math.floor(obj.location.z)
                        
                        if self.isInBounds(x, y, z):
                            voxelGrid[x][y][z] = obj
                            
        # Iterate through Connector
        for collection in bpy.data.collections:
            if collection.name == "Constrains":
                for obj in collection.all_objects:
                    
                    if (obj.name.split(".")[0] == "Connector"):
                    
                        # Voxel anchor coords
                        x = math.floor(obj.location.x)
                        y = math.floor(obj.location.y)
                        z = math.floor(obj.location.z)
                        
                        if self.isInBounds(x, y, z):
                            if(voxelGrid[x][y][z] == 0):
                                voxelGrid[x][y][z] = obj

        self.grid = voxelGrid                    
                    
    
    def generateConstraints(self):
        """
        Generates the constraint object for cartographed objects.
        """

        constraints = {}
        
        # Add empty element 
        empty = {}
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                for dz in [-1, 0, 1]:
                    if abs(dx) + abs(dy) + abs(dz) == 1: # Change to != 0
                        empty[str(dx) + "_" + str(dy) + "_" + str(dz)] = []

        constraints["Empty"] = empty

        # Add floor elements
        floor = {}
        for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    for dz in [-1, 0, 1]:
                        if abs(dx) + abs(dy) + abs(dz) == 1: # Change to != 0
                            if dy == 0:
                                floor[str(dx) + "_" + str(dy) + "_" + str(dz)] = ["Floor"]
                            else :
                                floor[str(dx) + "_" + str(dy) + "_" + str(dz)] = []

        constraints["Floor"] = floor

        for x in range(0, len(self.grid)):
            for y in range(0, len(self.grid[x])):
                for z in range(0, len(self.grid[x][y])):
                    for r in [0, 1, 2, 3]:
                        parsedObject = self.parseGridObject(x, y, z, r)
                        adjacency = self.getObjectAdjacency(x, y, z, r)

                        
                        if parsedObject in constraints:
                            for key in adjacency:
                                if adjacency[key] != None:
                                    if adjacency[key] not in  constraints[parsedObject][key]:
                                        constraints[parsedObject][key].append(adjacency[key]) 
                                    
                                    if adjacency[key] == "Floor":
                                        iKey = key.split("_")[0] + "_1_" + key.split("_")[2]
                                        if parsedObject not in constraints["Floor"][iKey]:
                                            constraints["Floor"][iKey].append(parsedObject) 
                                        
                        else:
                            constraints[parsedObject] = {}
                            for key in adjacency:
                                if adjacency[key] != None:
                                    constraints[parsedObject][key] = [adjacency[key]]
                                    if adjacency[key] == "Floor":
                                        iKey = key.split("_")[0] + "_1_" + key.split("_")[2]
                                        if parsedObject not in constraints["Floor"][iKey]:
                                            constraints["Floor"][iKey].append(parsedObject)   
                                else: 
                                    constraints[parsedObject][key] = []
                                    if adjacency[key] == "Floor":
                                        iKey = key.split("_")[0] + "_1_" + key.split("_")[2]
                                        if parsedObject not in constraints["Floor"][iKey]:
                                            constraints["Floor"][iKey].append(parsedObject) 

        self.constraints = constraints  


    def getObjectAdjacency(self, x, y, z, r):
        """
        Returns the object adjacency for a given voxel
        """
        
        if(self.grid == None):
            return None

        adjacency = {}
        
        if r == 0:
            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    for dz in [-1, 0, 1]:
                        if abs(dx) + abs(dy) + abs(dz) == 1: # Change to != 0
                            direction = str(dx) + "_" + str(dy) + "_" + str(dz)
                            adjacency[direction] = self.parseGridObject(x + dx, y - dz, z + dy, r)
        
        if r == 1:
            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    for dz in [-1, 0, 1]:
                        if abs(dx) + abs(dy) + abs(dz) == 1: # Change to != 0
                            direction = str(dx) + "_" + str(dy) + "_" + str(dz)
                            adjacency[direction] = self.parseGridObject(x - dz, y - dx, z + dy, r)
        
        
        if r == 2:
            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    for dz in [-1, 0, 1]:
                        if abs(dx) + abs(dy) + abs(dz) == 1: # Change to != 0
                            direction = str(dx) + "_" + str(dy) + "_" + str(dz)
                            adjacency[direction] = self.parseGridObject(x - dx, y + dz, z + dy, r)

        
        if r == 3:
            for dx in [-1, 0, 1]:
                for dy in [-1, 0, 1]:
                    for dz in [-1, 0, 1]:
                        if abs(dx) + abs(dy) + abs(dz) == 1: # Change to != 0
                            direction = str(dx) + "_" + str(dy) + "_" + str(dz)
                            adjacency[direction] = self.parseGridObject(x + dz, y + dx, z + dy, r)

        return adjacency

    
    def isInBounds(self, x, y, z):
        """
        Checks if a voxel is within the bounds
        """
    
        if bounds["x"][0] <= x and x < bounds["x"][1] :
            if bounds["y"][0] <= y and y < bounds["y"][1] :
                if bounds["z"][0] <= z and z < bounds["z"][1] :
                    return True

        return False


    def isInGrid(self, x, y, z):
        """
        Checks if a voxel is within the bounds of the grid
        """

        if self.grid == None:
            return False

        if 0 <= x and x < len(self.grid) :
            if 0 <= y and y < len(self.grid[x]) :
                if 0 <= z and z < len(self.grid[x][y]) :
                    return True

        return False
    
    def isConnectedToFloor(self, x, y, z):
        """
        Checks if a voxel is connected with the floor
        """

        if self.grid == None:
            return False
        
        return z == 0
        

    def parseGridObject(self, x, y, z, r):
        """
        Parses a grid object to a string representation
        """

        if not self.isInGrid(x, y, z):
            if(z < 0):
                return "Floor"
            else:
                return "Empty"
        
        obj = self.grid[x][y][z]
        
        if obj == 0:
            return "Empty"
        
        nameIdentity = obj.name.split(".")[0]
        
        # Euler angles into 90 degree divisor
        rotation = obj.rotation_euler
        
        rotationX = int(divmod(round(math.degrees(rotation[0])) % 360, 90)[0] % 4) 
        rotationY = int(divmod(round(math.degrees(rotation[1])) % 360, 90)[0] % 4) 
        rotationZ = int(divmod(round(math.degrees(rotation[2]) + 90 * r) % 360, 90)[0] % 4) 
        
        if nameIdentity == "Connector":
            rotationX = 0
            rotationY = 0
            rotationZ = 0

        return nameIdentity + "_" + str(rotationX) + "_" + str(rotationY) + "_" + str(rotationZ)        
       
        

bounds = {
    "x": (0, 40),
    "y": (0, 40),
    "z": (0, 40)
}
    
constraintExporter = ConstraintExporter(bounds)
constraintExporter.export("/Users/jdihlmann/Desktop/")
