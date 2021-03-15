import pyodbc
import writesql as wsql
from jsTemplateBuilder import js_template_builder

conn_str = (
    r'DRIVER={Pervasive ODBC Client Interface};'
    r'DBQ=C:\\Pastel18\\WMAX2021;'
)

sqlfile = 'C:\\Pastel18\\WMAX2021\\MySQL\\Pastel.sql'
sfile = wsql.CreateFile(sqlfile, database='WMAX2021')
html_template = 'template_html.html'
js_template = 'template_js.js'
js_builder = js_template_builder()


def dataType(data_type):
    return {
        0: 'COUNTER',
        1: 'INTEGER',
        2: 'IDENTITY',
        3: 'SMALLINT',
        4: 'UTINYINT',
        5: 'VARCHAR',
        6: 'CHAR',
        7: 'LONGVARCHAR',
        8: 'DATETIME',
        9: 'DATE',
        10: 'BIT',
        11: 'REAL',
        12: 'CURRENCY',
        13: 'DOUBLE',
    }.get(data_type, data_type)


def write_html(template, table_name, columns):
    new_html_page = open(f'../../minkey/viewDB/app/base/templates/dbViewTables/{table_name}.html', 'w')
    with open(template, 'r') as html_template:
        for line in html_template:
            if "%$_tableName_$%" in line:
                line = line.replace('%$_tableName_$%', table_name)
            if "%DATATABLEID%" in line:
                line = line.replace('%DATATABLEID%', table_name)
            if '%HTML_COLUMNS%' in line:
                line = line.replace('%HTML_COLUMNS%', '')
                line.strip("\n")
                for col in columns:
                    new_html_page.write('\t\t\t\t\t\t\t\t<th>' + (col[3]) + '</th>\n')
            new_html_page.write(line)
    print(table_name + '.html generated')
    pass


def write_js(template, table_name, columns):
    new_js_page = open(f'../../minkey/viewDB/app/base/static/assets/local/js/dbViewAjax/{table_name}.js', 'w')
    colCount = 0
    with open(template, 'r') as js_template:
        for line in js_template:
            if "%$TABLE_NAME$%" in line:
                line = line.replace('%$TABLE_NAME$%', table_name)
            if "%DATATABLEID%" in line:
                line = line.replace('%DATATABLEID%', table_name)
            if '%TABLECOLUMNS%' in line:
                line = line.replace('%TABLECOLUMNS%', '')
                line.strip("\n")
                for col in columns:
                    colCount += 1
                    new_js_page.write(js_builder.build_datatable_col_data(col[3]))
            if '%COLCOUNT%' in line:
                line = line.replace('%COLCOUNT%', str(colCount - 1))
            new_js_page.write(line)
    print(table_name + '.js generated')
    pass


def write_columns(table_name, columns):
    dict_file = open(f'../../minkey/viewDB/app/dbview/routes/' + table_name + '.py', 'w', newline='\n')
    s = f"import sys\n" \
        "from flask import jsonify, render_template, redirect, request, url_for, session\n" \
        "from app.dbview import blueprint\n" \
        "from app.PastelAPI import api_json\n" \
        "from app.PastelAPI.api_json import CouldNotConnectToPastelError\n" \
        "import urllib.parse\n" \
        "from flask_jwt_extended import jwt_required, get_jwt_claims\n" \
        "from dotenv import load_dotenv\n" \
        "import os\n" \
        "import datetime\n" \
        "\n\n" \
        "@blueprint.route('/"+table_name+"')\n" \
        "def get_"+ table_name.lower() + "():\n" \
        "    data = request.get_json()\n" 
    dict_file.write(s)
    count = 0
    select_string = ''
    for col in columns:
        if count > 0:
            # dict_file.write(',\n')
            select_string = select_string + ", ' \\^"
            pass
        column_name = col.column_name
        select_string = select_string + f"          '\"{table_name}\".\"{column_name}\""
        count = count + 1
    select_string = "    sql = 'SELECT ' \\^" + select_string + "' \\^"
    select_string = select_string + f"          \' FROM \"{table_name}\"'^"
    select_string = select_string.replace('^', '\n')
    s = select_string

    dict_file.write(s)
    dict_file.write("    result = api_json.PastelAPI()\n")
    dict_file.write("    result.company = \"3\"\n")
    dict_file.write("    result.partner_database = \"C:\\\\Pastel19\\\\BESTCOMP\"\n")
    dict_file.write("    result.query(sql)\n")
    dict_file.write("    if result.error_data[\"Status\"] == \"OK\":\n")
    dict_file.write("        return result.json_data\n")
    dict_file.write("    else:\n")
    dict_file.write("        return result.error_data, 500\n")
    dict_file.close()
    print(table_name + '.py generated')


# Connect to the the Pastel Database
cnxn = pyodbc.connect(conn_str)
tblNames = cnxn.cursor()
# for tableName in tblNames.tables(tableType='TABLE'):
    # print("Table Name: {}".format(tableName.table_name))
tblStats = cnxn.cursor()
tblColumns = cnxn.cursor()
for table_info in tblNames.tables(tableType='TABLE'):
    # print(table_info.table_name)
    wsql.write_create(sfile, table_info.table_name)
    row = 0
    cols = tblColumns.columns(table_info.table_name)
    write_columns(table_info.table_name, cols)
    write_html(html_template, table_info.table_name, tblColumns.columns(table_info.table_name))
    write_js(js_template, table_info.table_name, tblColumns.columns(table_info.table_name))
    for col in tblColumns.columns(table_info.table_name):
        # i = 0
        # if table_info.table_name == 'CustomerMaster':
        #     while i < len(col):
        #         print(col[i], end=" ")
        #         i = i + 1
        #     print('')
        # print(col.column_name)
        for key in col:
            # print("Row -> {} - Key {} ".format(row, key))
            # print(col.table_name, col.column_name, col.data_type, col.type_name, col[7])
            pass
        if row > 0:
            sfile.write(",\n")
        wsql.write_columns(sfile, col)
        row = row + 1
    #    if (len(pk_cols) > 0):
    #        for key in pk_cols:
    #            sfile.write(",\n")
    #            wsql.writePK(sfile, pk_cols[key])
    wsql.writeEndCreat(sfile)

wsql.CloseFile(sfile)
