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

    let tbl = $("#MultiStoreTrn01").DataTable({
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
            url: "/dbview/MultiStoreTrn",
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
        {data: 'StoreCode', className: 'text-left', visible: true},
        {data: 'InvGroup', className: 'text-left', visible: true},
        {data: 'ItemCode', className: 'text-left', visible: true},
        {data: 'Bin', className: 'text-left', visible: true},
        {data: 'LastInvDate', className: 'text-left', visible: true},
        {data: 'LastPurchDate', className: 'text-left', visible: true},
        {data: 'LastPurchAmt', className: 'text-left', visible: true},
        {data: 'ReorderLevel', className: 'text-left', visible: true},
        {data: 'MaximumLevel', className: 'text-left', visible: true},
        {data: 'OpeningQty', className: 'text-left', visible: true},
        {data: 'ActualQty', className: 'text-left', visible: true},
        {data: 'StoreSnapShot', className: 'text-left', visible: true},
        {data: 'SellExcl01', className: 'text-left', visible: true},
        {data: 'SellExcl02', className: 'text-left', visible: true},
        {data: 'SellExcl03', className: 'text-left', visible: true},
        {data: 'SellExcl04', className: 'text-left', visible: true},
        {data: 'SellExcl05', className: 'text-left', visible: true},
        {data: 'SellExcl06', className: 'text-left', visible: true},
        {data: 'SellExcl07', className: 'text-left', visible: true},
        {data: 'SellExcl08', className: 'text-left', visible: true},
        {data: 'SellExcl09', className: 'text-left', visible: true},
        {data: 'SellExcl10', className: 'text-left', visible: true},
        {data: 'SellIncl01', className: 'text-left', visible: true},
        {data: 'SellIncl02', className: 'text-left', visible: true},
        {data: 'SellIncl03', className: 'text-left', visible: true},
        {data: 'SellIncl04', className: 'text-left', visible: true},
        {data: 'SellIncl05', className: 'text-left', visible: true},
        {data: 'SellIncl06', className: 'text-left', visible: true},
        {data: 'SellIncl07', className: 'text-left', visible: true},
        {data: 'SellIncl08', className: 'text-left', visible: true},
        {data: 'SellIncl09', className: 'text-left', visible: true},
        {data: 'SellIncl10', className: 'text-left', visible: true},
        {data: 'SpecialPriceExcl', className: 'text-left', visible: true},
        {data: 'SpecialPriceIncl', className: 'text-left', visible: true},
        {data: 'SpecialStartDate', className: 'text-left', visible: true},
        {data: 'SpecailEndDate', className: 'text-left', visible: true},
        {data: 'NewExcl01', className: 'text-left', visible: true},
        {data: 'NewExcl02', className: 'text-left', visible: true},
        {data: 'NewExcl03', className: 'text-left', visible: true},
        {data: 'NewExcl04', className: 'text-left', visible: true},
        {data: 'NewExcl05', className: 'text-left', visible: true},
        {data: 'NewExcl06', className: 'text-left', visible: true},
        {data: 'NewExcl07', className: 'text-left', visible: true},
        {data: 'NewExcl08', className: 'text-left', visible: true},
        {data: 'NewExcl09', className: 'text-left', visible: true},
        {data: 'NewExcl10', className: 'text-left', visible: true},
        {data: 'NewIncl01', className: 'text-left', visible: true},
        {data: 'NewIncl02', className: 'text-left', visible: true},
        {data: 'NewIncl03', className: 'text-left', visible: true},
        {data: 'NewIncl04', className: 'text-left', visible: true},
        {data: 'NewIncl05', className: 'text-left', visible: true},
        {data: 'NewIncl06', className: 'text-left', visible: true},
        {data: 'NewIncl07', className: 'text-left', visible: true},
        {data: 'NewIncl08', className: 'text-left', visible: true},
        {data: 'NewIncl09', className: 'text-left', visible: true},
        {data: 'NewIncl10', className: 'text-left', visible: true},
        {data: 'CostThis01', className: 'text-left', visible: true},
        {data: 'CostThis02', className: 'text-left', visible: true},
        {data: 'CostThis03', className: 'text-left', visible: true},
        {data: 'CostThis04', className: 'text-left', visible: true},
        {data: 'CostThis05', className: 'text-left', visible: true},
        {data: 'CostThis06', className: 'text-left', visible: true},
        {data: 'CostThis07', className: 'text-left', visible: true},
        {data: 'CostThis08', className: 'text-left', visible: true},
        {data: 'CostThis09', className: 'text-left', visible: true},
        {data: 'CostThis10', className: 'text-left', visible: true},
        {data: 'CostThis11', className: 'text-left', visible: true},
        {data: 'CostThis12', className: 'text-left', visible: true},
        {data: 'CostThis13', className: 'text-left', visible: true},
        {data: 'QtyBuyThis01', className: 'text-left', visible: true},
        {data: 'QtyBuyThis02', className: 'text-left', visible: true},
        {data: 'QtyBuyThis03', className: 'text-left', visible: true},
        {data: 'QtyBuyThis04', className: 'text-left', visible: true},
        {data: 'QtyBuyThis05', className: 'text-left', visible: true},
        {data: 'QtyBuyThis06', className: 'text-left', visible: true},
        {data: 'QtyBuyThis07', className: 'text-left', visible: true},
        {data: 'QtyBuyThis08', className: 'text-left', visible: true},
        {data: 'QtyBuyThis09', className: 'text-left', visible: true},
        {data: 'QtyBuyThis10', className: 'text-left', visible: true},
        {data: 'QtyBuyThis11', className: 'text-left', visible: true},
        {data: 'QtyBuyThis12', className: 'text-left', visible: true},
        {data: 'QtyBuyThis13', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis01', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis02', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis03', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis04', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis05', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis06', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis07', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis08', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis09', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis10', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis11', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis12', className: 'text-left', visible: true},
        {data: 'QtyAdjustThis13', className: 'text-left', visible: true},
        {data: 'QtySellThis01', className: 'text-left', visible: true},
        {data: 'QtySellThis02', className: 'text-left', visible: true},
        {data: 'QtySellThis03', className: 'text-left', visible: true},
        {data: 'QtySellThis04', className: 'text-left', visible: true},
        {data: 'QtySellThis05', className: 'text-left', visible: true},
        {data: 'QtySellThis06', className: 'text-left', visible: true},
        {data: 'QtySellThis07', className: 'text-left', visible: true},
        {data: 'QtySellThis08', className: 'text-left', visible: true},
        {data: 'QtySellThis09', className: 'text-left', visible: true},
        {data: 'QtySellThis10', className: 'text-left', visible: true},
        {data: 'QtySellThis11', className: 'text-left', visible: true},
        {data: 'QtySellThis12', className: 'text-left', visible: true},
        {data: 'QtySellThis13', className: 'text-left', visible: true},
        {data: 'AmtSellThis01', className: 'text-left', visible: true},
        {data: 'AmtSellThis02', className: 'text-left', visible: true},
        {data: 'AmtSellThis03', className: 'text-left', visible: true},
        {data: 'AmtSellThis04', className: 'text-left', visible: true},
        {data: 'AmtSellThis05', className: 'text-left', visible: true},
        {data: 'AmtSellThis06', className: 'text-left', visible: true},
        {data: 'AmtSellThis07', className: 'text-left', visible: true},
        {data: 'AmtSellThis08', className: 'text-left', visible: true},
        {data: 'AmtSellThis09', className: 'text-left', visible: true},
        {data: 'AmtSellThis10', className: 'text-left', visible: true},
        {data: 'AmtSellThis11', className: 'text-left', visible: true},
        {data: 'AmtSellThis12', className: 'text-left', visible: true},
        {data: 'AmtSellThis13', className: 'text-left', visible: true},
        {data: 'CostLast', className: 'text-left', visible: true},
        {data: 'QtyBuyLast', className: 'text-left', visible: true},
        {data: 'QtyAdjustLast', className: 'text-left', visible: true},
        {data: 'QtySellLast', className: 'text-left', visible: true},
        {data: 'AmtSellLast', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [126]
            }
        ],
    });

    // Table Column Click
    $('#MultiStoreTrn01 tbody').on('click', 'td', function () {
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
    $('#MultiStoreTrn01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
