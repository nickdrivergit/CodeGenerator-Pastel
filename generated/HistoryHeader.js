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

    let tbl = $("#HistoryHeader01").DataTable({
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
            url: "/dbview/HistoryHeader",
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
        {data: 'DocumentType', className: 'text-left', visible: true},
        {data: 'DocumentNumber', className: 'text-left', visible: true},
        {data: 'CustomerCode', className: 'text-left', visible: true},
        {data: 'DocumentDate', className: 'text-left', visible: true},
        {data: 'OrderNumber', className: 'text-left', visible: true},
        {data: 'SalesmanCode', className: 'text-left', visible: true},
        {data: 'UserID', className: 'text-left', visible: true},
        {data: 'ExclIncl', className: 'text-left', visible: true},
        {data: 'Message01', className: 'text-left', visible: true},
        {data: 'Message02', className: 'text-left', visible: true},
        {data: 'Message03', className: 'text-left', visible: true},
        {data: 'DelAddress01', className: 'text-left', visible: true},
        {data: 'DelAddress02', className: 'text-left', visible: true},
        {data: 'DelAddress03', className: 'text-left', visible: true},
        {data: 'DelAddress04', className: 'text-left', visible: true},
        {data: 'DelAddress05', className: 'text-left', visible: true},
        {data: 'Terms', className: 'text-left', visible: true},
        {data: 'ExtraCosts', className: 'text-left', visible: true},
        {data: 'CostCode', className: 'text-left', visible: true},
        {data: 'PPeriod', className: 'text-left', visible: true},
        {data: 'ClosingDate', className: 'text-left', visible: true},
        {data: 'Telephone', className: 'text-left', visible: true},
        {data: 'Fax', className: 'text-left', visible: true},
        {data: 'Contact', className: 'text-left', visible: true},
        {data: 'CurrencyCode', className: 'text-left', visible: true},
        {data: 'ExchangeRate', className: 'text-left', visible: true},
        {data: 'DiscountPercent', className: 'text-left', visible: true},
        {data: 'Total', className: 'text-left', visible: true},
        {data: 'FCurrTotal', className: 'text-left', visible: true},
        {data: 'TotalTax', className: 'text-left', visible: true},
        {data: 'FCurrTotalTax', className: 'text-left', visible: true},
        {data: 'TotalCost', className: 'text-left', visible: true},
        {data: 'InvDeleted', className: 'text-left', visible: true},
        {data: 'InvPrintStatus', className: 'text-left', visible: true},
        {data: 'Onhold', className: 'text-left', visible: true},
        {data: 'GRNMisc', className: 'text-left', visible: true},
        {data: 'Paid', className: 'text-left', visible: true},
        {data: 'Freight01', className: 'text-left', visible: true},
        {data: 'Ship', className: 'text-left', visible: true},
        {data: 'IsTMBDoc', className: 'text-left', visible: true},
        {data: 'Spare', className: 'text-left', visible: true},
        {data: 'Exported', className: 'text-left', visible: true},
        {data: 'ExportRef', className: 'text-left', visible: true},
        {data: 'ExportNum', className: 'text-left', visible: true},
        {data: 'Emailed', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [45]
            }
        ],
    });

    // Table Column Click
    $('#HistoryHeader01 tbody').on('click', 'td', function () {
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
    $('#HistoryHeader01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
