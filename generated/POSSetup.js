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

    let tbl = $("#POSSetup01").DataTable({
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
            url: "/dbview/POSSetup",
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
        {data: 'ID', className: 'text-left', visible: true},
        {data: 'CashSaleAcc', className: 'text-left', visible: true},
        {data: 'CashCtrlAcc', className: 'text-left', visible: true},
        {data: 'PayOutAcc', className: 'text-left', visible: true},
        {data: 'ReceiptCtrlAcc', className: 'text-left', visible: true},
        {data: 'CurrentSession', className: 'text-left', visible: true},
        {data: 'ExpenseEntry', className: 'text-left', visible: true},
        {data: 'EntryType', className: 'text-left', visible: true},
        {data: 'NextRef', className: 'text-left', visible: true},
        {data: 'CreditLimit', className: 'text-left', visible: true},
        {data: 'AlwaysPrint', className: 'text-left', visible: true},
        {data: 'DocumentFile', className: 'text-left', visible: true},
        {data: 'DepositNoCopies', className: 'text-left', visible: true},
        {data: 'UseCustMsg01', className: 'text-left', visible: true},
        {data: 'UseCustMsg02', className: 'text-left', visible: true},
        {data: 'CustMsg01Line01', className: 'text-left', visible: true},
        {data: 'CustMsg01Line02', className: 'text-left', visible: true},
        {data: 'CustMsg01Line03', className: 'text-left', visible: true},
        {data: 'CustMsg02Line01', className: 'text-left', visible: true},
        {data: 'CustMsg02Line02', className: 'text-left', visible: true},
        {data: 'CustMsg02Line03', className: 'text-left', visible: true},
        {data: 'Spare', className: 'text-left', visible: true},
        {data: 'UsePaidOuts', className: 'text-left', visible: true},
        {data: 'ShowTypeInfo01', className: 'text-left', visible: true},
        {data: 'ShowTypeInfo02', className: 'text-left', visible: true},
        {data: 'ShowTypeInfo03', className: 'text-left', visible: true},
        {data: 'ShowTypeInfo04', className: 'text-left', visible: true},
        {data: 'MinValue01', className: 'text-left', visible: true},
        {data: 'MinValue02', className: 'text-left', visible: true},
        {data: 'MinValue03', className: 'text-left', visible: true},
        {data: 'MinValue04', className: 'text-left', visible: true},
        {data: 'ChequeDesc01', className: 'text-left', visible: true},
        {data: 'ChequeDesc02', className: 'text-left', visible: true},
        {data: 'ChequeDesc03', className: 'text-left', visible: true},
        {data: 'ChequeDesc04', className: 'text-left', visible: true},
        {data: 'ShowChDesc01', className: 'text-left', visible: true},
        {data: 'ShowChDesc02', className: 'text-left', visible: true},
        {data: 'ShowChDesc03', className: 'text-left', visible: true},
        {data: 'ShowChDesc04', className: 'text-left', visible: true},
        {data: 'ChMinValue', className: 'text-left', visible: true},
        {data: 'ShowCCDesc01', className: 'text-left', visible: true},
        {data: 'ShowCCDesc02', className: 'text-left', visible: true},
        {data: 'ShowCCDesc03', className: 'text-left', visible: true},
        {data: 'ShowCCDesc04', className: 'text-left', visible: true},
        {data: 'ShowCCDesc05', className: 'text-left', visible: true},
        {data: 'CCMinValue', className: 'text-left', visible: true},
        {data: 'VoucherDesc01', className: 'text-left', visible: true},
        {data: 'VoucherDesc02', className: 'text-left', visible: true},
        {data: 'VoucherDesc03', className: 'text-left', visible: true},
        {data: 'VoucherDesc04', className: 'text-left', visible: true},
        {data: 'VoucherDesc05', className: 'text-left', visible: true},
        {data: 'ShowVDesc01', className: 'text-left', visible: true},
        {data: 'ShowVDesc02', className: 'text-left', visible: true},
        {data: 'ShowVDesc03', className: 'text-left', visible: true},
        {data: 'ShowVDesc04', className: 'text-left', visible: true},
        {data: 'ShowVDesc05', className: 'text-left', visible: true},
        {data: 'ShowCODDesc01', className: 'text-left', visible: true},
        {data: 'ShowCODDesc02', className: 'text-left', visible: true},
        {data: 'ShowCODDesc03', className: 'text-left', visible: true},
        {data: 'ShowCODDesc04', className: 'text-left', visible: true},
        {data: 'ShowCODDesc05', className: 'text-left', visible: true},
        {data: 'ShowCODDesc06', className: 'text-left', visible: true},
        {data: 'ShowCODDesc07', className: 'text-left', visible: true},
        {data: 'ShowCODDesc08', className: 'text-left', visible: true},
        {data: 'ShowBankName', className: 'text-left', visible: true},
        {data: 'ShowBankCode', className: 'text-left', visible: true},
        {data: 'PaidOutValue', className: 'text-left', visible: true},
        {data: 'LastPeriod', className: 'text-left', visible: true},
        {data: 'LastDate', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [69]
            }
        ],
    });

    // Table Column Click
    $('#POSSetup01 tbody').on('click', 'td', function () {
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
    $('#POSSetup01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
