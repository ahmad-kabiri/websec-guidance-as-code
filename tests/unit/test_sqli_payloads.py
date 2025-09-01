import yaml,pathlib
ROOT=pathlib.Path(__file__).resolve().parents[2]
LIB=ROOT/'payload-library'/'sqli.yaml'
d=yaml.safe_load(LIB.read_text())
cats={f['category'] for f in d['families']}
assert {'boolean-based','time-based','union-based'}.issubset(cats)
