$(document).ready(function () {
    var vars = [], hash;
    var q = document.URL.split('?')[1];
    if (q != undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }

    let tbl = $("#TaxDescription01").DataTable({
        // Table formatting options
        // dom: "<'row'<'col-sm-4'l><'col-sm-8'f>>"+
        //     "<'row'<'col-sm-4'B>>"+
        //     "<'row'<'col-sm-12'tr>>" +
        //     "<'row'<'col-sm-4'i><'col-sm-8'p>>",
        processing: false,
        serverSide: false,
        paging: true,
        info: true,
        filter: true,
        // select: {
        //     style: 'single',
        // },
        // Set default sort order
        order: [[0, 'asc']],
        responsive: false,
        rowReorder: false,
        lengthChange: true,
        lengthMenu: [
            [15, 25, 50, 75, -1],
            [15, 25, 50, 75, "All"]
        ],
        pageLength: 15,
        ajax: {
            type: 'GET',
            url: "/dbview/TaxDescription",
            error: function( xhr, ajaxOptions, thrownError ) {
                swal.fire({
                    type: "error",
                    title: "API Error",
                    html: "<p>Status Code: "+xhr.status+'</p><p>Error: ' + thrownError + '</p>',
                    confirmButtonClass: "btn btn-confirm mt-2",
                    footer: '<a href="">Why do I have this issue?</a>'
                }).then((result) => {
                    if (result.value) {
                    }
                });
            }
        },

        language: {
            search: "Filter records:",
            decimal: ".",
            emptyTable: "No data in table",
            info: "_START_ to _END_ of _TOTAL_ ",
            infoEmpty: "",
            infoFiltered: "(filtered from _MAX_ total entries)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Entries _MENU_ per page",
            processing: '<div class="fa fa-spinner fa-spin fa-fw"></div>',
            loadingRecords: '<div class="fa fa-spinner fa-spin fa-2x fa-fw"></div>',
            zeroRecords: "No matching records found with current filer",
            paginate: {
                first: "First",
                last: "Last",
                next: "<i class='fas fa-long-arrow-alt-right'></i>",
                previous: "<i class='fas fa-long-arrow-alt-left'></i>"
            }
        },
        buttons: [
            // TODO: check that the export options are used in your new form
            // TODO: is so remove this todo is not comment out the line below
           "pdfHtml5", "excelHtml5", "copyHtml5"
        ],
        columns: [
        {data: 'TaxBoxDesc01', className: 'text-left', visible: true},
        {data: 'TaxboxDesc02', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc03', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc04', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc05', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc06', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc07', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc08', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc09', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc10', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc11', className: 'text-left', visible: true},
        {data: 'TaxBoxdesc12', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc13', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc14', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc15', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc16', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc17', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc18', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc19', className: 'text-left', visible: true},
        {data: 'TaxBOxDesc20', className: 'text-left', visible: true},
        {data: 'TaxBOxDesc21', className: 'text-left', visible: true},
        {data: 'TaxBOxDesc22', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc23', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc24', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc25', className: 'text-left', visible: true},
        {data: 'taxBOxDesc26', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc27', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc28', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc29', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc30', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc31', className: 'text-left', visible: true},
        {data: 'TaxBoxDesc32', className: 'text-left', visible: true},
        {data: 'TaxDesc01', className: 'text-left', visible: true},
        {data: 'TaxDesc02', className: 'text-left', visible: true},
        {data: 'TaxDesc03', className: 'text-left', visible: true},
        {data: 'TaxDesc04', className: 'text-left', visible: true},
        {data: 'TaxDesc05', className: 'text-left', visible: true},
        {data: 'TaxDesc06', className: 'text-left', visible: true},
        {data: 'TaxDesc07', className: 'text-left', visible: true},
        {data: 'TaxDesc08', className: 'text-left', visible: true},
        {data: 'TaxDesc09', className: 'text-left', visible: true},
        {data: 'TaxDesc10', className: 'text-left', visible: true},
        {data: 'TaxDesc11', className: 'text-left', visible: true},
        {data: 'TaxDesc12', className: 'text-left', visible: true},
        {data: 'TaxDesc13', className: 'text-left', visible: true},
        {data: 'TaxDesc14', className: 'text-left', visible: true},
        {data: 'TaxDesc15', className: 'text-left', visible: true},
        {data: 'TaxDesc16', className: 'text-left', visible: true},
        {data: 'TaxDesc17', className: 'text-left', visible: true},
        {data: 'TaxDesc18', className: 'text-left', visible: true},
        {data: 'TaxDesc19', className: 'text-left', visible: true},
        {data: 'TaxDesc20', className: 'text-left', visible: true},
        {data: 'TaxDesc21', className: 'text-left', visible: true},
        {data: 'TaxDesc22', className: 'text-left', visible: true},
        {data: 'TaxDesc23', className: 'text-left', visible: true},
        {data: 'TaxDesc24', className: 'text-left', visible: true},
        {data: 'TaxDesc25', className: 'text-left', visible: true},
        {data: 'TaxDesc26', className: 'text-left', visible: true},
        {data: 'TaxDesc27', className: 'text-left', visible: true},
        {data: 'TaxDesc28', className: 'text-left', visible: true},
        {data: 'TaxDesc29', className: 'text-left', visible: true},
        {data: 'TaxDesc30', className: 'text-left', visible: true},
        {data: 'TaxDesc31', className: 'text-left', visible: true},
        {data: 'TaxDesc32', className: 'text-left', visible: true},
        {data: 'TaxDesc33', className: 'text-left', visible: true},
        {data: 'TaxDesc34', className: 'text-left', visible: true},
        {data: 'TaxDesc35', className: 'text-left', visible: true},
        {data: 'TaxDesc36', className: 'text-left', visible: true},
        {data: 'TaxDesc37', className: 'text-left', visible: true},
        {data: 'TaxDesc38', className: 'text-left', visible: true},
        {data: 'TaxDesc39', className: 'text-left', visible: true},
        {data: 'TaxDesc40', className: 'text-left', visible: true},
        {data: 'TaxDesc41', className: 'text-left', visible: true},
        {data: 'TaxDesc42', className: 'text-left', visible: true},
        {data: 'TaxDesc43', className: 'text-left', visible: true},
        {data: 'TaxDesc44', className: 'text-left', visible: true},
        {data: 'TaxDesc45', className: 'text-left', visible: true},
        {data: 'TaxDesc46', className: 'text-left', visible: true},
        {data: 'TaxDesc47', className: 'text-left', visible: true},
        {data: 'TaxDesc48', className: 'text-left', visible: true},
        {data: 'TaxDesc49', className: 'text-left', visible: true},
        {data: 'TaxDesc50', className: 'text-left', visible: true},
        {data: 'TaxDesc51', className: 'text-left', visible: true},
        {data: 'TaxDesc52', className: 'text-left', visible: true},
        {data: 'TaxDesc53', className: 'text-left', visible: true},
        {data: 'TaxDesc54', className: 'text-left', visible: true},
        {data: 'TaxDesc55', className: 'text-left', visible: true},
        {data: 'TaxDesc56', className: 'text-left', visible: true},
        {data: 'TaxDesc57', className: 'text-left', visible: true},
        {data: 'TaxDesc58', className: 'text-left', visible: true},
        {data: 'TaxDesc59', className: 'text-left', visible: true},
        {data: 'TaxDesc60', className: 'text-left', visible: true},
        {data: 'TaxDesc61', className: 'text-left', visible: true},
        {data: 'TaxDesc62', className: 'text-left', visible: true},
        {data: 'TaxDesc63', className: 'text-left', visible: true},
        {data: 'TaxDesc64', className: 'text-left', visible: true},
        {data: 'TaxDesc65', className: 'text-left', visible: true},
        {data: 'TaxDesc66', className: 'text-left', visible: true},
        {data: 'TaxDesc67', className: 'text-left', visible: true},
        {data: 'TaxDesc68', className: 'text-left', visible: true},
        {data: 'TaxDesc69', className: 'text-left', visible: true},
        {data: 'TaxDesc70', className: 'text-left', visible: true},
        {data: 'TaxDesc71', className: 'text-left', visible: true},
        {data: 'TaxDesc72', className: 'text-left', visible: true},
        {data: 'TaxDesc73', className: 'text-left', visible: true},
        {data: 'TaxDesc74', className: 'text-left', visible: true},
        {data: 'TaxDesc75', className: 'text-left', visible: true},
        {data: 'TaxDesc76', className: 'text-left', visible: true},
        {data: 'TaxDesc77', className: 'text-left', visible: true},
        {data: 'TaxDesc78', className: 'text-left', visible: true},
        {data: 'TaxDesc79', className: 'text-left', visible: true},
        {data: 'TaxDesc80', className: 'text-left', visible: true},
        {data: 'TaxDesc81', className: 'text-left', visible: true},
        {data: 'TaxDesc82', className: 'text-left', visible: true},
        {data: 'TaxDesc83', className: 'text-left', visible: true},
        {data: 'TaxDesc84', className: 'text-left', visible: true},
        {data: 'TaxDesc85', className: 'text-left', visible: true},
        {data: 'TaxDesc86', className: 'text-left', visible: true},
        {data: 'TaxDesc87', className: 'text-left', visible: true},
        {data: 'TaxDesc88', className: 'text-left', visible: true},
        {data: 'TaxDesc89', className: 'text-left', visible: true},
        {data: 'TaxDesc90', className: 'text-left', visible: true},
        {data: 'TaxDesc91', className: 'text-left', visible: true},
        {data: 'TaxDesc92', className: 'text-left', visible: true},
        {data: 'TaxDesc93', className: 'text-left', visible: true},
        {data: 'TaxDesc94', className: 'text-left', visible: true},
        {data: 'TaxDesc95', className: 'text-left', visible: true},
        {data: 'TaxDesc96', className: 'text-left', visible: true},
        {data: 'TaxDesc97', className: 'text-left', visible: true},
        {data: 'TaxDesc98', className: 'text-left', visible: true},
        {data: 'TaxDesc99', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [131]
            }
        ],
    });

    // Table Column Click
    $('#TaxDescription01 tbody').on('click', 'td', function () {
        let colIdx = tbl.cell(this).index().column;
        let row_data = tbl.row($(this).closest('tr')).data();
        console.log(colIdx);
        console.log(row_data);
        if (colIdx === 0 || colIdx) {
            let row = $(this).closest('tr');
            let rowdata = tbl.row(row).data();

            //Apply or update the selected item backgrounds
            if (row.hasClass('selected')) {
                row.removeClass('selected');
                // Clear the groups table
                updateDataTable(tbl, {recordsTotal: 0});
            } else {
                tbl.$('tr.selected').removeClass('selected');
                row.addClass('selected');

                // AJAX to post the data for
                form_data = {
                    // TODO: Add what for data is required for the post
                };
                let data = postItems(form_data, "%AJAX_FILE%");

                // Update datatable
                updateDataTable(tbl, data);
            }
        }
    });
    $('#TaxDescription01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
