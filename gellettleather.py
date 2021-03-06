# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, jsonify, json
import sqlite3

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

conn1 = sqlite3.connect('./gellettleather.db', check_same_thread=False)
conn2 = sqlite3.connect('./gellettleather.db', check_same_thread=False)
conn3 = sqlite3.connect('./gellettleather.db', check_same_thread=False)
conn4 = sqlite3.connect('./gellettleather.db', check_same_thread=False)

c1 = conn1.cursor()
c2 = conn2.cursor()
c3 = conn3.cursor()
c4 = conn4.cursor()

vare_list = []
billede_list = []
text_list = []
pris_list = []

orderID = 2167


def switch_titel(argument):
    titel_switcher = {
        "Tasker": u"Tasker i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Dametasker": u"Dame Tasker i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Kunstlaeder": u"Tasker i Kunstlæder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Computertasker": u"Computer Tasker i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Punge": u"Punge i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Damepunge": u"Dame Punge i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Herrepunge": u"Herre Punge i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Mapper": u"Mapper i Læder - Høj Kvalitet l Gellett Leather Danmark",
        "Skrivemapper": u"Skrive Mapper i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Kredit&visitkortmapper": u"Kredit Kort Punge i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Rejseserien": u"Tasker & Mapper i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Rejsetasker": u"Rejse Tasker i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Valutamapper": u"Valuta Mapper i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark",
        "Tilbehoer": u"Accessories i Læder - Høj Kvalitet | Billig | Gellett Leather Danmark"
    }
    titel_tag = titel_switcher[argument]
    return titel_tag


def switch_desc(argument):
    desc_switcher = {
        "Tasker": u"Søger du en Taske? Hos Gellett Leather Danmark har vi et bredt udvalg af Tasker lavet i det"
                  u" fineste kvalitets læder. Dame Tasker, Tasker i kuntlæder og Computertasker.",
        "Dametasker": u"Søger du en Dame Taske i lækkert læder eller kunstlæder? Så er Gellett Leather stedet at lede."
                      u"Vi har et bredt udvalg af billige dame tasker i fineste kvalitetslæder",
        "Kunstlaeder": u"Søger du en taske lavet i lækkert kunstlæder? Så se vores udvalg af cross over tasker,"
                       u" skulder tasker og rygsække lavet i kvalitets læder",
        "Computertasker": u"Søger du en Computertaske? Vi har hos Gellett Leather Computertasker i læder af højeste "
                          u"kvalitet med plads til hele kontoret.",
        "Punge": u"Søger du en Læder Pung? Få Punge i læder af højeste kvalitet hos Gellett Leather. Der er stort "
                 u"udvalg både til dame og herre.",
        "Damepunge": u"Søger du en Dame Pung? Vi har et stort udvalg, med punge i alle størrelser og former, lavet i "
                     u"læder af højeste kvalitet, til en overskuelig pris.",
        "Herrepunge": u"Søger du en Herre Pung i læder af høj kvalitet? Så se vores mange Herre Punge og find lige den"
                      u" pung du leder efter.",
        "Mapper": u"Søger du en Mappe i læder til din skriveblok eller kreditkort? Hos os kan du finde lige hvad du "
                  u"mangler, og vi garanterer kvalitet.",
        "Skrivemapper": u"Søger du en Skrive Mappe i læder i A4 eller A5 størrelse? Så kig her og find lige den "
                        u"du har brug for, og vær sikker på at få kvalitet",
        "Kredit&visitkortmapper": u"Søger du en kredit- eller visitkortmappe lavet i lækkert læder? Hos os har vi et "
                                  u"udvalg, der dækker over mapper med plads til 6 kort helt op til 72 kort.",
        "Rejseserien": u"Søger du en Rejse Taske eller en Valuta Mappe i læder af højeste kvalitet? Så er Gellett "
                       u"Leather hvor du skal hen. Vi har noget til enhver smag og budget.",
        "Rejsetasker": u"Søger du en holdbar Rejse Taske i læder? Så har vi lige det du mangler. Se vores udvalg af "
                       u"Rejse Tasker lavet af kvalitetslæder og find den der passer dig.",
        "Valutamapper": u"Søger du en Valuta Mappe i læder af høj kvalitet? Hos Gellett Leather har vi Valuta Mapper "
                        u"med plads til det hele og til en god pris.",
        "Tilbehoer": u"Søger du Iphone Covers, Armbånd, Nøgleringe eller andre accessories i læder? Så kig her og find "
                     u"lige det du mangler, eller skriv til os, og så lave vi det for dig."
    }
    desc_tag = desc_switcher[argument]
    return desc_tag


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/info')
def info():
    return render_template("info.html")


@app.route('/confirmed', methods=['GET', 'POST'])
def confirmed():
    return render_template("confirmed.html")


@app.route('/<varetype>/<varetype_1>')
@app.route('/<varetype>', defaults={'varetype_1': ''})
def varer(varetype, varetype_1):

    if varetype_1 != "":
        Titel = varetype_1.capitalize()
        titel = switch_titel(Titel)
        description = switch_desc(Titel)
        path_go_1 = varetype
        path_go_2 = varetype+"/"+varetype_1
        path_1 = varetype.capitalize()
        path_2 = varetype_1.capitalize()
        arrow = "> "
    else:
        path_go_1 = varetype
        path_go_2 = ""
        path_1 = varetype.capitalize()
        path_2 = ""
        Titel = varetype.capitalize()
        titel = switch_titel(Titel)
        description = switch_desc(Titel)
        arrow = ""

    x = 1
    y = 0
    z = 0
    w = 0
    h = 0
    buy_btn_value = []
    image_number = []
    image_path = []
    product_text = []
    product_price = []
    antal = []
    kategori = []
    varenummer = []
    c1.execute('SELECT * FROM varer')
    for row in c1.fetchall():
        if varetype_1 == "":
            if row[5] == varetype:
                row_numm = c1.rowcount + x
                image_number.append(row_numm)
                image_path.append(row[0])
                product_text.append(row[6])
                product_price.append(row[2])
                antal.append(row[4])
                buy_btn_value.append(row[5])
                kategori.append(row[3].capitalize())
                varenummer.append(row[6])
                x = x + 1
                z = z + 1
                w = w + 1
                if z == 3:
                    y = y + 1
                    z = 0
                if w == 2:
                    h = h + 1
                    w = 0
        else:
            if row[3] == varetype_1[:-1] or row[3] == varetype_1:
                row_numm = c1.rowcount + x
                image_number.append(row_numm)
                image_path.append(row[0])
                product_text.append(row[6])
                product_price.append(row[2])
                antal.append(row[4])
                buy_btn_value.append(row[5])
                kategori.append(row[3].capitalize())
                varenummer.append(row[6])
                x = x + 1
                z = z + 1
                w = w + 1
                if z == 3:
                    y = y + 1
                    z = 0
                if w == 2:
                    h = h + 1
                    w = 0

    if z:
        height = (y + 1) * 415 + 127 + 150
        content_height = (y + 1) * 415 + 127 + 20 + 127 + 150

    else:
        height = y * 415 + 150
        content_height = y * 415 + 127 + 20 + 150

    if w:
        mobile_height = (h*2 + 1) * 390
        mobile_content_height = (h*2 + 1) * 388 + 100
    else:
        mobile_height = h*2 * 390
        mobile_content_height = h*2 * 388 + 100

    return render_template("varer.html", varenummer=varenummer, kategori=kategori, arrow=arrow, path_go_1=path_go_1,
                           path_go_2=path_go_2, path_1=path_1, path_2=path_2, image_path=image_path,
                           image_number=image_number, product_text=product_text, product_price=product_price,
                           height=height, titel=titel, content_height=content_height, antal=antal,
                           buy_btn_value=buy_btn_value, description=description, mobile_height=mobile_height,
                           mobile_content_height=mobile_content_height)


@app.route('/<varetype>/<varetype_1>/<varenummer>', methods=['GET'])
@app.route('/<varetype_1>', defaults={'varetype': '', 'varenummer': ''})
def vare_spec(varetype, varetype_1, varenummer):
    titel = varetype_1.capitalize() +" "+varenummer
    if varetype_1 == "tilbehoer":
        varenavn = "Accessory"
        vare_id = "Varenr.: " + varenummer
        image_url = "/static/images/varer/" + varetype + "/" + varetype_1 + "/" + varenummer + ".png"

    else:
        varenavn = varetype_1.capitalize()[:-1]
        vare_id = "Varenr.: " + varenummer
        image_url = "/static/images/varer/" + varetype + "/" + varetype_1 + "/" + varenummer + ".png"

    c2.execute('SELECT * FROM varer WHERE varer_image_path = "%s"' % image_url)
    x = c2.fetchone()
    alternativer = x[9]
    alternativer_list = alternativer.split("-")
    pris = x[2]
    vare_beskrivelse_1 = x[1].replace(".", "")
    vare_beskrivelse = vare_beskrivelse_1.split("-")
    cm = x[7]
    farve = x[8]

    return render_template("vare_spec.html", pris=pris, titel=titel, varetype=varetype, varetype_1=varetype_1,
                           varenavn=varenavn, varenummer=varenummer, image_url=image_url, vare_id=vare_id,
                           vare_beskrivelse=vare_beskrivelse, cm=cm, farve=farve, alternativer_list=alternativer_list)


@app.route('/om_os')
def om_os():
    titel = "Om os"
    return render_template("om_os.html", titel=titel)


@app.route('/indkoebsvogn', methods=['GET', 'POST'])
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
    c3.execute('SELECT Billeder FROM varer WHERE varer_image_path=?', (image_path,))
    antal = ''.join(c3.fetchone())
    return jsonify(antal)


@app.route('/API/vare', methods=['GET', 'POST'])
def vare():
    x = request.args.get('q_data', 0, type=str)
    y = request.args.get('r_data', 0, type=str)
    z = request.args.get('s_data', 0, type=str)
    vare_list.append(x)
    return jsonify(x, y, z)


@app.route('/API/varer', methods=['GET', 'POST'])
def varerjs():
    return jsonify(vare_list)


@app.route('/API/billede', methods=['GET', 'POST'])
def billede():
    global billede_list
    x = request.args.get('data', "", type=str)
    billede_list.append(x)
    return jsonify(billede_list)


@app.route('/API/text', methods=['GET', 'POST'])
def text():
    global text_list
    x = request.args.get('data', "", type=str)
    text_list.append(x)
    return jsonify(text_list)


@app.route('/API/pris', methods=['GET', 'POST'])
def pris():
    global pris_list
    x = request.args.get('data', "", type=str)
    pris_list.append(x)
    return jsonify(pris_list)


@app.route('/API/orderID', methods=['GET', 'POST'])
def order_id():
    global orderID
    orderID = orderID + 1
    return jsonify(orderID)


@app.route('/API/send_conf_email', methods=['GET', 'POST'])
def send_conf_email():

    ordrenummer = str(orderID)

    print(request.args.get('data', "", type=str))

    fromaddr = "kundeservice@gellettleather.dk"
    toaddr = request.args.get('data', "", type=str)
    msg = MIMEMultipart()
    msg['From'] = fromaddr
    msg['To'] = toaddr
    msg['Subject'] = "Order confirmation"

    message = "Tak for din ordre! Den er nu registreret og vil blive afsendt indenfor 24 timer. \nOrdrenr.:"+ordrenummer

    msg.attach(MIMEText(message, 'plain'))

    server = smtplib.SMTP('send.one.com:587')
    server.starttls()
    server.login(fromaddr, "gellett13")
    server.sendmail(fromaddr, toaddr, msg.as_string())
    server.quit()
    return ""


@app.route('/API/rabat', methods=['GET', 'POST'])
def rabatkode():
    x = request.args.get('rabatkode', "", type=str)
    if x == "rabatkode":
        rabat = "0"
    else:
        rabat = "0"
    return jsonify(rabat)
