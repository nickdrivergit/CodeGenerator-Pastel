import pyodbc
import datetime
import sys
import os


def dbconnect():
    host = 'msp.deve.local'
    dbase = 'PASTEL_demo'
    user = 'pastel'
    pword = 'f9C2xnPras6NFpyx'
    driver = "{MySQL ODBC 5.2 ANSI Driver}"

    connectionString = "DRIVER={}; SERVER={};DATABASE={}; UID={}; PASSWORD={};".format(driver, host, dbase, user, pword)
    cnxn = pyodbc.connect(connectionString)
    return cnxn


def dbexecute(db, sql):
    cur = db.cursor()
    try:
        cur.execute(sql)
        db.commit()
    except pyodbc.Error as e:
        writeflog("MySQL Error [%d]: %s" % (e[0], e[1]))
        writeflog('SQL - '+sql)
        sys.exit("MySQL Error [%d]: %s" % (e[0], e[1]))
    finally:
        return cur

def writeflog(systemlogfile, msg):
    flog = open(systemlogfile, 'a')
    flog.write(datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')+' - 1.1 - '+msg+'\n')
    flog.close()

db = dbconnect()
result = dbexecute(db, "SELECT * FROM `Inventory`")
for row in result.fetchall():
    print(row)