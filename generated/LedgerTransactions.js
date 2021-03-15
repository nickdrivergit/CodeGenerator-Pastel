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

    let tbl = $("#LedgerTransactions01").DataTable({
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
            url: "/dbview/LedgerTransactions",
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
        {data: 'GDC', className: 'text-left', visible: true},
        {data: 'AccNumber', className: 'text-left', visible: true},
        {data: 'DiscFlag', className: 'text-left', visible: true},
        {data: 'CurrCode', className: 'text-left', visible: true},
        {data: 'Spare', className: 'text-left', visible: true},
        {data: 'PPeriod', className: 'text-left', visible: true},
        {data: 'DDate', className: 'text-left', visible: true},
        {data: 'EType', className: 'text-left', visible: true},
        {data: 'Refrence', className: 'text-left', visible: true},
        {data: 'JobCode', className: 'text-left', visible: true},
        {data: 'Amount', className: 'text-left', visible: true},
        {data: 'TaxAmt', className: 'text-left', visible: true},
        {data: 'ThisCurrTaxAmount', className: 'text-left', visible: true},
        {data: 'BankTaxAmount', className: 'text-left', visible: true},
        {data: 'CurrAmt', className: 'text-left', visible: true},
        {data: 'BankCurrAmount', className: 'text-left', visible: true},
        {data: 'ReconFlag', className: 'text-left', visible: true},
        {data: 'Description', className: 'text-left', visible: true},
        {data: 'TaxType', className: 'text-left', visible: true},
        {data: 'Country', className: 'text-left', visible: true},
        {data: 'Generated', className: 'text-left', visible: true},
        {data: 'PayBased', className: 'text-left', visible: true},
        {data: 'UserID', className: 'text-left', visible: true},
        {data: 'WhichUserRef', className: 'text-left', visible: true},
        {data: 'LinkAcc', className: 'text-left', visible: true},
        {data: 'UpdateReconFlag', className: 'text-left', visible: true},
        {data: 'ChequeFlag', className: 'text-left', visible: true},
        {data: 'LinkID', className: 'text-left', visible: true},
        {data: 'InInv', className: 'text-left', visible: true},
        {data: 'TaxReportDate', className: 'text-left', visible: true},
        {data: 'TaxReportPeriod', className: 'text-left', visible: true},
        {data: 'BatchID', className: 'text-left', visible: true},
        {data: 'TransactionID', className: 'text-left', visible: true},
        {data: 'AutoNumber', className: 'text-left', visible: true},
        {data: 'Exported', className: 'text-left', visible: true},
        {data: 'ExportRef', className: 'text-left', visible: true},
        {data: 'ExportNum', className: 'text-left', visible: true},
        {data: 'CostSyncDone', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [38]
            }
        ],
    });

    // Table Column Click
    $('#LedgerTransactions01 tbody').on('click', 'td', function () {
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
    $('#LedgerTransactions01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
