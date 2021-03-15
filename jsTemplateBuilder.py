class js_template_builder:
    def __init__(self):
        pass

    def build_datatable_col_data(self, header):
        column_data_string = ""
        column_data_string += '        {' + f"data: '{header}', className: 'text-left', visible: true" + '},\n'

        return column_data_string