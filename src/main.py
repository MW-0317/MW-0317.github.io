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
    vault_path : Path
    header : Path
    templates : Path
    temp : Path
    fmt : str

    def __init__(self, fmt: str):
        self.fmt = fmt

    def to(self, folder: Path, extension: str):
        shutil.copytree(self.header, folder / "header", dirs_exist_ok=True)

        for path, dirs, files in os.walk(self.vault_path):
            if ".obsidian" in path:
                continue

            path = Path(path)
            for dir in dirs:
                directory = Path(dir)
                relative_to_main = path.relative_to("main")
                new_directory = folder / relative_to_main / directory
                if not os.path.isdir(new_directory):
                    print("Making Dir:", new_directory)
                    new_directory.mkdir()

            for file in files:
                file_string = file
                file = Path(file)
                read_file = path / file
                relative_to_main = read_file.relative_to("main")

                if not file_string.endswith("md"):
                    shutil.copy2(read_file, folder / relative_to_main)
                    continue

                
                print("Reading:", read_file)
                doc = pandoc.read(file=str(read_file), format=self.fmt)

                # Convert .md links to .html
                remap_links(doc)

                print("Getting templates...")
                header_template = ""
                with open(self.templates / "header.html", "r") as header_template_file:
                    header_template = "".join(header_template_file.readlines())

                sidebar_template = ""
                with open(self.templates / "sidebar.html", "r") as sidebar_template_file:
                    sidebar_template = "".join(sidebar_template_file.readlines())

                write_file = folder / relative_to_main.with_suffix('.%s'% extension)
                print("Writing:", write_file)

                with open(self.temp / "temp_header.html", "w") as temp_header:
                    temp = header_template.format("../" * (len(write_file.parents) - 2) + "./")
                    temp_header.write(temp)

                with open(self.temp / "temp_sidebar.html", "w") as temp_sidebar:
                    temp_s = sidebar_template.format("../" * (len(write_file.parents) - 2) + "./")
                    temp_sidebar.write(temp_s)

                header = Path(self.temp / "temp_header.html")
                sidebar = Path(self.temp / "temp_sidebar.html")
                end = Path("./src/end.html")
                pandoc.write(doc, options=["--toc", "--standalone", "-c", ".", "-H", header, "-B", sidebar, "-A", end], file=str(write_file))

if __name__ == "__main__":
    ov = ObsidianVault("gfm")
    ov.vault_path = Path("main")
    ov.header = Path("src/header")
    ov.templates = Path("src/html")
    ov.temp = Path("src/temp_html")
    ov.to(Path("build"), "html")
