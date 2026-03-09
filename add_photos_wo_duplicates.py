import os
import shutil

repo_dir = "photos/phone_flora/2025"
incoming_dir = "new_photos"

existing_files = set()
duplicates = []
added = []

# index repo filenames
print("\nIndexing existing repo photos...")

for root, dirs, files in os.walk(repo_dir):
    for f in files:
        existing_files.add(f.lower())

# check new uploads
print("Checking new uploads...\n")

for f in os.listdir(incoming_dir):
    if f.lower().endswith(('.jpg','.jpeg','.png','.tif','.tiff')):
        
        if f.lower() in existing_files:
            print(f"Duplicate skipped: {f}")
            duplicates.append(f)
        else:
            shutil.copy(
                os.path.join(incoming_dir, f),
                os.path.join(repo_dir, f)
            )
            print(f"Added: {f}")
            added.append(f)

print("\nDone.")
print(f"{len(added)} added")
print(f"{len(duplicates)} duplicates skipped")

# optional report
with open("duplicate_report.txt","w") as r:
    r.write("\n".join(duplicates))
