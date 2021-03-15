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

    let tbl = $("#HistoryLines01").DataTable({
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
            url: "/dbview/HistoryLines",
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
        {data: 'UserId', className: 'text-left', visible: true},
        {data: 'DocumentType', className: 'text-left', visible: true},
        {data: 'DocumentNumber', className: 'text-left', visible: true},
        {data: 'ItemCode', className: 'text-left', visible: true},
        {data: 'CustomerCode', className: 'text-left', visible: true},
        {data: 'SalesmanCode', className: 'text-left', visible: true},
        {data: 'SearchType', className: 'text-left', visible: true},
        {data: 'PPeriod', className: 'text-left', visible: true},
        {data: 'DDate', className: 'text-left', visible: true},
        {data: 'UnitUsed', className: 'text-left', visible: true},
        {data: 'TaxType', className: 'text-left', visible: true},
        {data: 'DiscountType', className: 'text-left', visible: true},
        {data: 'DiscountPercentage', className: 'text-left', visible: true},
        {data: 'Description', className: 'text-left', visible: true},
        {data: 'CostPrice', className: 'text-left', visible: true},
        {data: 'Qty', className: 'text-left', visible: true},
        {data: 'UnitPrice', className: 'text-left', visible: true},
        {data: 'InclusivePrice', className: 'text-left', visible: true},
        {data: 'FCurrUnitPrice', className: 'text-left', visible: true},
        {data: 'FCurrInclPrice', className: 'text-left', visible: true},
        {data: 'TaxAmt', className: 'text-left', visible: true},
        {data: 'FCurrTaxAmount', className: 'text-left', visible: true},
        {data: 'DiscountAmount', className: 'text-left', visible: true},
        {data: 'FCDiscountAmount', className: 'text-left', visible: true},
        {data: 'CostCode', className: 'text-left', visible: true},
        {data: 'DateTime', className: 'text-left', visible: true},
        {data: 'WhichUserDef', className: 'text-left', visible: true},
        {data: 'Physical', className: 'text-left', visible: true},
        {data: 'Fixed', className: 'text-left', visible: true},
        {data: 'ShowQty', className: 'text-left', visible: true},
        {data: 'LinkNum', className: 'text-left', visible: true},
        {data: 'LinkedNum', className: 'text-left', visible: true},
        {data: 'GRNQty', className: 'text-left', visible: true},
        {data: 'LinkID', className: 'text-left', visible: true},
        {data: 'MultiStore', className: 'text-left', visible: true},
        {data: 'IsTMBLine', className: 'text-left', visible: true},
        {data: 'LinkDocumentType', className: 'text-left', visible: true},
        {data: 'LinkDocumentNumber', className: 'text-left', visible: true},
        {data: 'Exported', className: 'text-left', visible: true},
        {data: 'ExportRef', className: 'text-left', visible: true},
        {data: 'ExportNum', className: 'text-left', visible: true},
        {data: 'QtyLeft', className: 'text-left', visible: true},
        {data: 'CaseLotCode', className: 'text-left', visible: true},
        {data: 'CaseLotQty', className: 'text-left', visible: true},
        {data: 'CaseLotRatio', className: 'text-left', visible: true},
        {data: 'CostSyncDone', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [46]
            }
        ],
    });

    // Table Column Click
    $('#HistoryLines01 tbody').on('click', 'td', function () {
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
    $('#HistoryLines01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
