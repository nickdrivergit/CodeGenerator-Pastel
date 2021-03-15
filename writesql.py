from datetime import datetime


def CreateFile(filename, database):
    outfile = open(filename, 'w')
    outfile.write('# SQL Code generated from MDB to MySQL' + "\n")
    text = "# Date - {}\n".format(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    outfile.write(text)
    outfile.write("\n")
    outfile.write("CREATE DATABASE `"+database+"`;\n")
    outfile.write("USE `"+database+"`;\n")
    return outfile


def write_create(f, tablename):
    f.write("CREATE TABLE IF NOT EXISTS `"+tablename+"` (\n")


def dataType(data_type):
    return {
        'COUNTER': " int(11) NOT NULL AUTO_INCREMENT",
        'INTEGER': "  int(11) NOT NULL DEFAULT '0'",
        'IDENTITY': "  int(11) NOT NULL DEFAULT '0'",
        'SMALLINT': "  int(11) NOT NULL DEFAULT '0'",
        'UTINYINT': "  int(11) NOT NULL DEFAULT '0'",
        'VARCHAR': " varchar({})",
        'CHAR': " varchar({})",
        'LONGVARCHAR': " TEXT",
        'DATETIME': " datetime NOT NULL",
        'DATE': " date NOT NULL ",
        'BIT': " tinyint(1) NOT NULL DEFAULT '0'",
        'REAL': " real(24,4) NOT NULL DEFAULT '0.0000'",
        'CURRENCY': " decimal(19,2) NOT NULL DEFAULT '0.00'",
        'DOUBLE': " decimal(19,2) NOT NULL DEFAULT '0.00'",
    }.get(data_type, data_type)


def write_columns(f, col):
    if col.type_name == 'CHAR':
        data = dataType(col.type_name).format(col[7])
    else:
        data = dataType(col.type_name)
    f.write("    `"+col.column_name+"`"+data)


def writePK(f, PK):
    f.write("  PRIMARY KEY (`"+PK+"`)")


def writeEndCreat(f):
    f.write("\n")
    f.write(") ENGINE=InnoDB DEFAULT CHARSET=latin1;\n")
    f.write("\n")
    f.write("\n")


def CreateMySQL(filename, database):
    outfile = open(filename, 'w')
    outfile.write('# SQL Code generated from Pervasive to MySQL' + "\n")
    text = "# Date - {}\n".format(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    outfile.write(text)
    outfile.write("\n")
    outfile.write("USE `"+database+"`;\n")
    return outfile


def WriteInsert(f, sql):
    f.write(sql)


def CloseFile(f):
    f.write("\n")
    f.close()