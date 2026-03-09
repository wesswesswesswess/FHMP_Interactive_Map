import os
import shutil

repo_dir = r"phone_flora\2025"

# 👇 CHANGE THIS EACH TIME to your camera dump location
incoming_dir = r"C:\FHMP\Photo_locations\phone_flora"

existing = set()
duplicates = []
added = []

print("\nIndexing existing repo photos...")

for root, dirs, files in os.walk(repo_dir):
    for f in files:
        path = os.path.join(root,f)
        size = os.path.getsize(path)
        existing.add((f.lower(), size))

print("Scanning incoming folder...\n")

for root, dirs, files in os.walk(incoming_dir):
    for f in files:
        if f.lower().endswith(('.jpg','.jpeg','.png','.tif','.tiff')):
            
            new_path = os.path.join(root,f)
            size = os.path.getsize(new_path)
            
            if (f.lower(), size) in existing:
                print(f"Duplicate skipped: {f}")
                duplicates.append(f)
            else:
                shutil.copy(new_path, os.path.join(repo_dir,f))
                print(f"Added: {f}")
                added.append(f)

print("\nDone.")
print(f"{len(added)} added")
print(f"{len(duplicates)} duplicates skipped")
