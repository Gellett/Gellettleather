from flask import Flask, render_template, request, jsonify
import sqlite3




app = Flask(__name__)

conn = sqlite3.connect('./gellettleather.db', check_same_thread=False)
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
            product_text.append(row[2])
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


@app.route('/skindtasker/dametasker')
def dametasker():
    titel = "Dametasker"
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
        if row[3] == "dametaske":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
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

    return render_template("dametasker.html", image_path=image_path, image_number=image_number, product_text=product_text,
                           product_price=product_price, height=height, titel=titel, content_height=content_height,
                           antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)




@app.route('/punge')
def punge():
    titel = "Punge"
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
        if row[3] == "damepung" or row[3] == "herrepung":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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
                           antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/punge/damepunge')
def damepunge():
    titel = "Damepunge"
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
        if row[3] == "damepung":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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
                           product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/punge/herrepunge')
def herrepunge():
    titel = "Herrepunge"
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
        if row[3] == "herrepung":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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


    return render_template("herrepunge.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/mapper')
def mapper():
    titel = "Mapper"
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
        if row[3] == "skrivemappe" or row[3] == "kredit-_&_visitkortmappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("mapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/skrivemapper')
def skrivemapper():
    titel = "Skrivemapper"
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
        if row[3] == "skrivemappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("skrivemapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/kredit-_&_visitkortmapper')
def kreditogvisitkortmapper():
    titel = "Kredit- og visitkortmapper"
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
        if row[3] == "kredit-_&_visitkortmappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("kredit-_&_visitkortmapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/rejseserien')
def rejseserien():
    titel = "Rejseserien"
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
        if row[3] == "rejsetaske" or row[3] == "valutamappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("rejseserien.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/rejsetasker')
def rejsetasker():
    titel = "Rejsetasker"
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
        if row[3] == "rejsetaske":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("rejsetasker.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/valutamapper')
def valutamapper():
    titel = "Valutamapper"
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
        if row[3] == "valutamappe":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("valutamapper.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/skindtasker/computertasker')
def computertasker():
    titel = "Computertasker"
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
        if row[3] == "computertaske":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("computertasker.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)



@app.route('/tilbehoer')
def tilbehoer():
    titel = "Tilbehoer"
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
        if row[3] == "tilbehoer":
            row_numm = c.rowcount + x
            image_number.append(row_numm)
            image_path.append(row[0])
            product_text.append(row[6])
            product_price.append(row[2])
            antal.append(row[4])
            buy_btn_value.append(row[5])
            p = p + 1
            height1 = p * 360
            content_height1 = height1 + 127 + 20
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

    return render_template("tilbehoer.html", image_path=image_path, image_number=image_number, product_text=product_text, product_price=product_price, height=height, titel=titel, content_height=content_height, antal=antal, buy_btn_value=buy_btn_value, height1=height1, content_height1=content_height1)


@app.route('/<varetype>/<varetype_1>/<varenummer>', methods=['GET'])
def vare_spec(varetype, varetype_1, varenummer):
    titel = varetype_1.capitalize() +" "+varenummer
    if varetype_1 == tilbehoer:
        varenavn = titel
    else:
        varenavn = varetype_1.capitalize()[:-1]
        vare_id = "Varenr.: " + varenummer

    image_url = "/static/images/varer/"+varetype+"/"+varetype_1+"/"+varenummer+".png"

    c.execute('SELECT * FROM varer WHERE varer_image_path = "%s"' % image_url)
    x = c.fetchone()

    if x[9] != "hej":
        alternativer = x[9]
        alternativer_list = alternativer.split("-")
    else:
        alternativer_list = "hej"

    pris = x[2]
    vare_beskrivelse = x[1].split("-")
    cm = x[7]
    farve = x[8]


    return render_template("vare_spec.html", pris=pris, titel=titel, varetype=varetype, varetype_1=varetype_1, varenavn=varenavn, varenummer=varenummer, image_url=image_url, vare_id=vare_id, vare_beskrivelse=vare_beskrivelse, cm=cm, farve=farve, alternativer_list=alternativer_list)

@app.route('/om_os')
def om_os():
    titel = "Om os"
    return render_template("om_os.html", titel=titel)

@app.route('/indkoebsvogn')
def indkoebsvogn():
    titel = "Indkoebsvogn"
    return render_template("indkoebsvogn.html", titel=titel)

@app.route('/handelsbetingelser')
def handelsbetingelser():
    titel = "Handelsbetingelser"
    return render_template("handelsbetingelser.html", titel=titel)


@app.route('/API/get_varenummer', methods=['POST'])
def get_varenummer():
    varenummer = request.args.get('varenummer')
    return jsonify(varenummer)


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



