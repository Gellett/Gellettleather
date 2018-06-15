import sqlite3

conn = sqlite3.connect('gellettleather.db')
c = conn.cursor()

def create_table():
    c.execute('CREATE TABLE IF NOT EXISTS varer( varer_image_path text, varer_text text, varer_cost text, ID text)')

def data_entry(_path, _text, _cost, _ID):
    c.execute('INSERT INTO varer (varer_image_path, varer_text, varer_cost) VALUES (?, ?, ?, ?) ', (_path, _text, _cost, _ID))
    conn.commit()

def read_from_db():
    c.execute('SELECT * FROM varer')
    data = c.fetchall()
    for row in data:
        print(row[0])


create_table()

#data_entry("../images/999.png", "en fin pung", "100 DKK")

read_from_db()
c.close()
conn.close()