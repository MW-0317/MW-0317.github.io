#!/usr/bin/env python3
import panflute as pf
import re

def action(elem, doc):
    if isinstance(elem, pf.Str):
        m = re.match(r"\[\[(\w+)\]\]", elem.text)
        if m != None:
            elem.text = m[1]
            new_elem = pf.Link(url="")


    if isinstance(elem, pf.Link) and elem.url.endswith('.md'):
        elem.url = elem.url[:-3] + '.html'
        return elem
    
if __name__ == '__main__':
    pf.run_filter(action)