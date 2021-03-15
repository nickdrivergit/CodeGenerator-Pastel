import pyodbc
import writesql as wsql
#import MySQLConnect

def ConnectToDB():
    conn_str = (
        r'DRIVER={Pervasive ODBC Client Interface};'
        r'DBQ=D:\\Pastel14\\RITO2017;'
        )
    cnxn = pyodbc.connect(conn_str)
    return cnxn

def extractData(cnx, tblName):
    cursor = cnx.cursor()
    sql = "SELECT * FROM {}".format(tblName)
    cursor.execute(sql)
    insertall = "VALUES \n"
    for row in cursor.fetchall():
        insertall = insertall + "("
        i = 0
        for col in row:
            if isinstance(col, basestring):
                colstr = col.encode('ascii', 'ignore').decode('ascii')
            else:
                colstr = col
            #print(colstr)
            if (i > 0):
                insertall = insertall + ", '{}' ".format(colstr)
            else:
                insertall = insertall + "'{}' ".format(colstr)
            i = i+1
        insertall = insertall + "),\n"
    insertall = insertall[:-2]
    return insertall

cnx = ConnectToDB()
tblNames = cnx.cursor()
#mydb = MySQLConnect.dbconnect()

for tableName in tblNames.tables(tableType='TABLE'):
    print("Table Name: {}").format(tableName.table_name)
    sqlfile = 'C:\\LISA\\Import\\PastelInsert{}.sql'.format(tableName.table_name)
    sfile = wsql.CreateMySQL(sqlfile, database='PASTEL_demo')
    #create the INSERT statement in one file
    mysql = extractData(cnx, tableName.table_name)
    mysql = "INSERT INTO `{}`\n{}".format(tableName.table_name, mysql)
    wsql.WriteInsert(sfile, mysql)
    wsql.CloseFile(sfile)
    #mydb.dbexecute(mysql)