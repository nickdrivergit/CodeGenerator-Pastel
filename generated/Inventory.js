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

    let tbl = $("#Inventory01").DataTable({
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
            url: "/dbview/Inventory",
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
        {data: 'Category', className: 'text-left', visible: true},
        {data: 'ItemCode', className: 'text-left', visible: true},
        {data: 'Description', className: 'text-left', visible: true},
        {data: 'Barcode', className: 'text-left', visible: true},
        {data: 'DiscountType', className: 'text-left', visible: true},
        {data: 'Blocked', className: 'text-left', visible: true},
        {data: 'Fixed', className: 'text-left', visible: true},
        {data: 'ShowQty', className: 'text-left', visible: true},
        {data: 'Physical', className: 'text-left', visible: true},
        {data: 'UnitSize', className: 'text-left', visible: true},
        {data: 'SalesTaxType', className: 'text-left', visible: true},
        {data: 'PurchTaxType', className: 'text-left', visible: true},
        {data: 'GLCode', className: 'text-left', visible: true},
        {data: 'AllowTax', className: 'text-left', visible: true},
        {data: 'LinkWeb', className: 'text-left', visible: true},
        {data: 'SalesCommision', className: 'text-left', visible: true},
        {data: 'SerialItem', className: 'text-left', visible: true},
        {data: 'Picture', className: 'text-left', visible: true},
        {data: 'UserDefText01', className: 'text-left', visible: true},
        {data: 'UserDefText02', className: 'text-left', visible: true},
        {data: 'UserDefText03', className: 'text-left', visible: true},
        {data: 'UserDefNum01', className: 'text-left', visible: true},
        {data: 'UserDefNum02', className: 'text-left', visible: true},
        {data: 'UserDefNum03', className: 'text-left', visible: true},
        {data: 'CommodityCode', className: 'text-left', visible: true},
        {data: 'NettMass', className: 'text-left', visible: true},
        {data: 'UpdatedOn', className: 'text-left', visible: true},
        {data: 'GUID', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [28]
            }
        ],
    });

    // Table Column Click
    $('#Inventory01 tbody').on('click', 'td', function () {
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
    $('#Inventory01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
