def write_columns(f, table_name, cols):
    dict_file = open(f, 'w')
    dict_file.write(table_name + ' = {\n')
    for col in cols:
        dict_file.write(f'    \'{col}\': \'\'')
    dict_file.write('}\n')
    dict_file.close()
