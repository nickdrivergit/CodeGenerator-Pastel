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

    let tbl = $("#POSPayments01").DataTable({
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
            url: "/dbview/POSPayments",
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
        {data: 'UserID', className: 'text-left', visible: true},
        {data: 'InvoiceNo', className: 'text-left', visible: true},
        {data: 'Amount', className: 'text-left', visible: true},
        {data: 'SaleType', className: 'text-left', visible: true},
        {data: 'AccNumber', className: 'text-left', visible: true},
        {data: 'Cash', className: 'text-left', visible: true},
        {data: 'Cheque', className: 'text-left', visible: true},
        {data: 'CreditCard', className: 'text-left', visible: true},
        {data: 'Voucher', className: 'text-left', visible: true},
        {data: 'Name', className: 'text-left', visible: true},
        {data: 'PostAddress01', className: 'text-left', visible: true},
        {data: 'PostAddress02', className: 'text-left', visible: true},
        {data: 'PostAddress03', className: 'text-left', visible: true},
        {data: 'PostAddress04', className: 'text-left', visible: true},
        {data: 'PostAddress05', className: 'text-left', visible: true},
        {data: 'Telephone', className: 'text-left', visible: true},
        {data: 'Message', className: 'text-left', visible: true},
        {data: 'CardNumber', className: 'text-left', visible: true},
        {data: 'CardType', className: 'text-left', visible: true},
        {data: 'CardName', className: 'text-left', visible: true},
        {data: 'CardExpDate', className: 'text-left', visible: true},
        {data: 'ChequeNumber', className: 'text-left', visible: true},
        {data: 'ChequeDrawer', className: 'text-left', visible: true},
        {data: 'ChequeAcc', className: 'text-left', visible: true},
        {data: 'VoucherDescription01', className: 'text-left', visible: true},
        {data: 'VoucherDescription02', className: 'text-left', visible: true},
        {data: 'VoucherDescription03', className: 'text-left', visible: true},
        {data: 'VoucherDescription04', className: 'text-left', visible: true},
        {data: 'VoucherDescription05', className: 'text-left', visible: true},
        {data: 'EDate', className: 'text-left', visible: true},
        {data: 'TType', className: 'text-left', visible: true},
        {data: 'CashPaidOut', className: 'text-left', visible: true},
        {data: 'Change', className: 'text-left', visible: true},
        {data: 'CustomerCode', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [34]
            }
        ],
    });

    // Table Column Click
    $('#POSPayments01 tbody').on('click', 'td', function () {
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
    $('#POSPayments01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
