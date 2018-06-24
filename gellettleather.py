from flask import Flask, render_template, request, jsonify
import sqlite3




app = Flask(__name__)

conn = sqlite3.connect('/Users/OliverElggardGellett/Desktop/Gellettleather/gellettleather.db', check_same_thread=False)
c = conn.cursor()

@app.route('/test')
def test():
    return render_template("test.html")

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/skindtasker')
def skindtasker():
    titel = "Skindtasker"
    x = 1
    y = 0
    z = 0
    p = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "dametaske" or row[3] == "computertaske":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 +127+20
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("skindtasker.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/dametasker')
def dametasker():
    titel = "Dametasker"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "dametaske":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("dametasker.html", image_path=image_path, image_number=image_number, product_text=product_text,
                           product_price=product_price, height=height, titel=titel, content_height=content_height,
                           antal=antal, buy_btn_value=buy_btn_value)




@app.route('/punge')
def punge():
    titel = "Punge"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "damepung" or row[3] == "herrepung":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("punge.html", image_path=image_path, image_number=image_number, product_text=product_text,
                           product_price=product_price, height=height, titel=titel, content_height=content_height,
                           antal=antal, buy_btn_value=buy_btn_value)


@app.route('/damepunge')
def damepunge():
    titel = "Damepunge"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "damepung":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("damepunge.html", image_path=image_path, image_number=image_number, product_text=product_text,
                           product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/herrepunge')
def herrepunge():
    titel = "Herrepunge"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "herrepung":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20


    return render_template("herrepunge.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/mapper')
def mapper():
    titel = "Mapper"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "skrivemappe" or row[3] == "kredit-_&_visitkortmappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("mapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/skrivemapper')
def skrivemapper():
    titel = "Skrivemapper"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "skrivemappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("skrivemapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/kredit-_&_visitkortmapper')
def kreditogvisitkortmapper():
    titel = "Kredit- og visitkortmapper"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "kredit-_&_visitkortmappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("kredit-_&_visitkortmapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/rejseserien')
def rejseserien():
    titel = "Rejseserien"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "rejsetaske" or row[3] == "valutamappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("rejseserien.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/rejsetasker')
def rejsetasker():
    titel = "Rejsetasker"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "rejsetaske":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("rejsetasker.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/valutamapper')
def valutamapper():
    titel = "Valutamapper"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "valutamappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("valutamapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/computertasker')
def computertasker():
    titel = "Computertasker"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "computertaske":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0



    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("computertasker.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)



@app.route('/tilbehoer')
def tilbehoer():
    titel = "Tilbehør"
    x = 1
    y = 0
    z = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    c.execute('SELECT * FROM varer')
    for row in c.fetchall():
        if row[3] == "tilbehør":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[1])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            x = x + 1
            z = z + 1
            if z == 3:
                y = y + 1
                z = 0


    if z:
        height = (y + 1) * 360
        content_height = (y + 1) * 360 + 127 + 20
    else:
        height = y * 360
        content_height = y * 360 + 127 + 20

    return render_template("tilbehoer.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value)


@app.route('/om_os')
def om_os():
    titel = "Om os"
    return render_template("om_os.html", titel=titel)


@app.route('/API/get_image', methods=['GET', 'POST'])
def get_image():
    image_path = request.args.get('image', 0, type=str)
    return jsonify(image_path)




@app.route('/API/get_image_1', methods=['GET', 'POST'])
def get_image_1():
    image_path = request.args.get('image', 0, type=str)
    return jsonify(image_path)




@app.route('/API/get_image_2', methods=['GET', 'POST'])
def get_image_2():
    image_path = request.args.get('image', 0, type=str)
    return jsonify(image_path)




@app.route('/API/get_image_antal', methods=['GET', 'POST'])
def get_image_antal():
    image_path = request.args.get('test', 0, type=str)

    c.execute('SELECT Billeder FROM varer WHERE varer_image_path=?', (image_path,))
    antal = ''.join(c.fetchone())
    return jsonify(antal)
