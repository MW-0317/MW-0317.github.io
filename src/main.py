import os.path, pandoc
from pathlib import Path
from pandoc.types import *
import shutil

def remap_links(doc):
    elms = pandoc.iter(doc)
    for elm in elms:
        if isinstance(elm, Link) and elm[2][0].endswith("md"):
            elm[2] = (os.path.splitext(elm[2][0])[0] + ".html", '')

class ObsidianVault:
    vault_path: Path
    fmt: str
    def __init__(self, vault_path: Path, fmt: str):
        self.vault_path = vault_path
        self.fmt = fmt

    def to(self, folder: Path, ext: str):
        shutil.copytree("./src/header", folder / "header", dirs_exist_ok=True)
        for path, dirs, files in os.walk(self.vault_path):
            p = Path(path)
            if "obsidian" in path:
                continue
            for dir in dirs:
                d = Path(dir)
                main = p.relative_to("main")
                new_dir = folder / main / d
                if not os.path.isdir(new_dir):
                    print("Making Dir:", new_dir)
                    new_dir.mkdir()
            for file in files:
                f = Path(file)
                read_file = p / f

                main = read_file.relative_to("main")
                if not file.endswith("md"):
                    shutil.copy2(read_file, folder / main)
                    continue
                
                print("Reading:", read_file)
                doc = pandoc.read(file=str(read_file), format=self.fmt)
                remap_links(doc)
                
                write_file = folder / main.with_suffix('.%s'% ext)

                print("Writing:", write_file)
                wiki = Path("./src/wiki.html")
                with open("./src/temp_header.html", "w") as temp_header:
                    temp = '<script src="{0}header/script.js"></script> <link rel="stylesheet" href="{0}header/styles.css">'.format("../" * (len(write_file.parents) - 2) + "./")
                    temp_header.write(temp)
                with open("./src/temp_sidebar.html", "w") as temp_side_bar:
                    # <canvas height="256" width="512" style="margin: 0 auto; width: 50%; display: block;" id="gl-canvas"></canvas>
                    temp_s = """
<nav id="TON">
    <h1>Mark Williams</h1>
    Aspiring Graphics Programmer
    <div style="display: flex;">
        <ul>
            <li>
                <a href="{0}Main.html">Home</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="{0}Articles.html">Articles</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="{0}Projects.html">Projects</a>
            </li>
        </ul>
    </div>
</nav>
""".format("../" * (len(write_file.parents) - 2) + "./")
                    temp_side_bar.write(temp_s)
                header = Path("./src/temp_header.html")
                sidebar = Path("./src/temp_sidebar.html")
                end = Path("./src/end.html")
                pandoc.write(doc, options=["--toc", "--standalone", "-c", ".", "-H", header, "-B", sidebar, "-A", end], file=str(write_file))

if __name__ == "__main__":
    ov = ObsidianVault(Path("main"), "gfm")
    ov.to(Path("build"), "html")