from flask import Flask, request
import sqlite3
app=Flask(__name__)
@app.get('/search')
def search():
 q=request.args.get('name','')
 con=sqlite3.connect(':memory:')
 cur=con.cursor()
 cur.execute('CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT)')
 cur.execute("INSERT INTO users(name) VALUES ('alice'),('bob')")
 sql=f"SELECT * FROM users WHERE name LIKE '%{q}%'"
 rows=cur.execute(sql).fetchall()
 return {'rows': rows}
app.run(port=7002)