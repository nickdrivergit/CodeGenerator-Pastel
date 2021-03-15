import sys
from flask import jsonify, render_template, redirect, request, url_for, session
from app.dbview import blueprint
from app.PastelAPI import api_json
from app.PastelAPI.api_json import CouldNotConnectToPastelError
import urllib.parse
from flask_jwt_extended import jwt_required, get_jwt_claims
from dotenv import load_dotenv
import os
import datetime
from dotenv import load_dotenv

load_dotenv()

front_html = os.getenv('HTML_BUILDER_OPEN')
end_html = os.getenv('HTML_BUILDER_CLOSE')
front_ajax = os.getenv('AJAX_BUILDER_OPEN')
end_ajax = os.getenv('AJAX_BUILDER_CLOSE')


@blueprint.route('/InventoryCategory')
def get_inventorycategory():
    request_path = request.path[request.path.rindex('/') + 1:]
    html_out = front_html.format(request_path + "card", request_path, request_path)

    data = request.get_json()
    sql = 'SELECT ' \
          '"InventoryCategory"."ICCode", ' \
          '"InventoryCategory"."ICDesc"' \
          ' FROM "InventoryCategory"'
    result = api_json.PastelAPI()
    result.company = session['db_id']
    result.partner_database = session['db_location']
    result.query(sql)

    with open(r'C:\Users\nick\Desktop\htmlout.txt', 'a') as f:
        f.write(html_out)
    with open(r'C:\Users\nick\Desktop\ajaxout.txt', 'a') as f:
        f.write(front_ajax.format(request_path, request_path))
    for key in result.json_data['data'][0]:
        print(key)
        with open(r'C:\Users\nick\Desktop\htmlout.txt', 'a') as f:
            f.write("<th>{}</th>\n".format(key))
        with open(r'C:\Users\nick\Desktop\ajaxout.txt', 'a') as f:
            f.write("{{\ndata: \"{}\",\nclassName: \"text-right\",\nvisible: true\n}},\n".format(key))
    with open(r'C:\Users\nick\Desktop\htmlout.txt', 'a') as f:
        f.write(end_html)
    with open(r'C:\Users\nick\Desktop\ajaxout.txt', 'a') as f:
        f.write(end_ajax)

    if result.error_data["Status"] == "OK":
        return result.json_data
    else:
        return result.error_data, 500