import pathlib,yaml
ROOT=pathlib.Path(__file__).resolve().parents[2]
RULES=list((ROOT/'vulns').rglob('sast/semgrep/rules.yaml'))
assert RULES
for p in RULES:
 d=yaml.safe_load(p.read_text()); assert isinstance(d,dict) and d.get('rules')
