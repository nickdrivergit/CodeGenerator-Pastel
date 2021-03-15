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

    let tbl = $("#InventoryParameters01").DataTable({
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
            url: "/dbview/InventoryParameters",
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
        {data: 'Id', className: 'text-left', visible: true},
        {data: 'RegimeDesc01', className: 'text-left', visible: true},
        {data: 'RegimeDesc02', className: 'text-left', visible: true},
        {data: 'RegimeDesc03', className: 'text-left', visible: true},
        {data: 'RegimeDesc04', className: 'text-left', visible: true},
        {data: 'RegimeDesc05', className: 'text-left', visible: true},
        {data: 'RegimeDesc06', className: 'text-left', visible: true},
        {data: 'RegimeDesc07', className: 'text-left', visible: true},
        {data: 'RegimeDesc08', className: 'text-left', visible: true},
        {data: 'RegimeDesc09', className: 'text-left', visible: true},
        {data: 'RegimeDesc10', className: 'text-left', visible: true},
        {data: 'Integrated', className: 'text-left', visible: true},
        {data: 'EntryType', className: 'text-left', visible: true},
        {data: 'AllowNegative', className: 'text-left', visible: true},
        {data: 'Includeorderedqty', className: 'text-left', visible: true},
        {data: 'WarnReorderlevel', className: 'text-left', visible: true},
        {data: 'DftGroup', className: 'text-left', visible: true},
        {data: 'QtyDecimals', className: 'text-left', visible: true},
        {data: 'CostDecimals', className: 'text-left', visible: true},
        {data: 'SellDecimals', className: 'text-left', visible: true},
        {data: 'MaxSellPrice', className: 'text-left', visible: true},
        {data: 'MaxBuyPrice', className: 'text-left', visible: true},
        {data: 'MinGPPercent', className: 'text-left', visible: true},
        {data: 'MaxCostDiffPercent', className: 'text-left', visible: true},
        {data: 'MaxLineDiscPercent', className: 'text-left', visible: true},
        {data: 'MaxTradeDiscPercent', className: 'text-left', visible: true},
        {data: 'ZeroCost', className: 'text-left', visible: true},
        {data: 'CodeString', className: 'text-left', visible: true},
        {data: 'CodeDecimal', className: 'text-left', visible: true},
        {data: 'InvDesc01', className: 'text-left', visible: true},
        {data: 'InvDesc02', className: 'text-left', visible: true},
        {data: 'InvDesc03', className: 'text-left', visible: true},
        {data: 'InvDesc04', className: 'text-left', visible: true},
        {data: 'InvDesc05', className: 'text-left', visible: true},
        {data: 'InvDesc06', className: 'text-left', visible: true},
        {data: 'InvDesc07', className: 'text-left', visible: true},
        {data: 'InvDesc08', className: 'text-left', visible: true},
        {data: 'InvDesc09', className: 'text-left', visible: true},
        {data: 'InvDesc10', className: 'text-left', visible: true},
        {data: 'InvDesc11', className: 'text-left', visible: true},
        {data: 'InvCopyDesc01', className: 'text-left', visible: true},
        {data: 'InvCopyDesc02', className: 'text-left', visible: true},
        {data: 'InvCopyDesc03', className: 'text-left', visible: true},
        {data: 'InvCopyDesc04', className: 'text-left', visible: true},
        {data: 'InvCopyDesc05', className: 'text-left', visible: true},
        {data: 'InvCopyDesc06', className: 'text-left', visible: true},
        {data: 'InvCopyDesc07', className: 'text-left', visible: true},
        {data: 'InvCopyDesc08', className: 'text-left', visible: true},
        {data: 'InvCopyDesc09', className: 'text-left', visible: true},
        {data: 'InvCopyDesc10', className: 'text-left', visible: true},
        {data: 'InvCopyDesc11', className: 'text-left', visible: true},
        {data: 'ExtraDesc01', className: 'text-left', visible: true},
        {data: 'ExtraDesc02', className: 'text-left', visible: true},
        {data: 'ExtraDesc03', className: 'text-left', visible: true},
        {data: 'ExtraDesc04', className: 'text-left', visible: true},
        {data: 'ExtraDesc05', className: 'text-left', visible: true},
        {data: 'ExtraDesc06', className: 'text-left', visible: true},
        {data: 'ExtraDesc07', className: 'text-left', visible: true},
        {data: 'ExtraDesc08', className: 'text-left', visible: true},
        {data: 'ExtraDesc09', className: 'text-left', visible: true},
        {data: 'ExtraDesc10', className: 'text-left', visible: true},
        {data: 'ExtraDesc11', className: 'text-left', visible: true},
        {data: 'InvEntryType01', className: 'text-left', visible: true},
        {data: 'InvEntryType02', className: 'text-left', visible: true},
        {data: 'InvEntryType03', className: 'text-left', visible: true},
        {data: 'InvEntryType04', className: 'text-left', visible: true},
        {data: 'InvEntryType05', className: 'text-left', visible: true},
        {data: 'InvEntryType06', className: 'text-left', visible: true},
        {data: 'InvEntryType07', className: 'text-left', visible: true},
        {data: 'InvEntryType08', className: 'text-left', visible: true},
        {data: 'InvEntryType09', className: 'text-left', visible: true},
        {data: 'InvEntryType10', className: 'text-left', visible: true},
        {data: 'InvEntryType11', className: 'text-left', visible: true},
        {data: 'ForceCostCode01', className: 'text-left', visible: true},
        {data: 'ForceCostCode02', className: 'text-left', visible: true},
        {data: 'ForceCostCode03', className: 'text-left', visible: true},
        {data: 'ForceCostCode04', className: 'text-left', visible: true},
        {data: 'ForceCostCode05', className: 'text-left', visible: true},
        {data: 'ForceCostCode06', className: 'text-left', visible: true},
        {data: 'ForceCostCode07', className: 'text-left', visible: true},
        {data: 'ForceCostCode08', className: 'text-left', visible: true},
        {data: 'ForceCostCode09', className: 'text-left', visible: true},
        {data: 'ForceCostCode10', className: 'text-left', visible: true},
        {data: 'ForceCostCode11', className: 'text-left', visible: true},
        {data: 'ForceSalesCode01', className: 'text-left', visible: true},
        {data: 'ForceSalesCode02', className: 'text-left', visible: true},
        {data: 'ForceSalesCode03', className: 'text-left', visible: true},
        {data: 'ForceSalesCode04', className: 'text-left', visible: true},
        {data: 'ForceSalesCode05', className: 'text-left', visible: true},
        {data: 'ForceSalesCode06', className: 'text-left', visible: true},
        {data: 'ForceSalesCode07', className: 'text-left', visible: true},
        {data: 'ForceSalesCode08', className: 'text-left', visible: true},
        {data: 'ForceSalesCode09', className: 'text-left', visible: true},
        {data: 'ForceSalesCode10', className: 'text-left', visible: true},
        {data: 'ForceSalesCode11', className: 'text-left', visible: true},
        {data: 'BOMDesc01', className: 'text-left', visible: true},
        {data: 'BOMDesc02', className: 'text-left', visible: true},
        {data: 'BOMDesc03', className: 'text-left', visible: true},
        {data: 'BOMRecoverAcc01', className: 'text-left', visible: true},
        {data: 'BOMRecoverAcc02', className: 'text-left', visible: true},
        {data: 'BOMRecoverAcc03', className: 'text-left', visible: true},
        {data: 'BOMEntryType', className: 'text-left', visible: true},
        {data: 'NumbersPerUser', className: 'text-left', visible: true},
        {data: 'BOMNextReference', className: 'text-left', visible: true},
        {data: 'Fixed', className: 'text-left', visible: true},
        {data: 'ShowQty', className: 'text-left', visible: true},
        {data: 'DfltPhysical', className: 'text-left', visible: true},
        {data: 'DfltUnit', className: 'text-left', visible: true},
        {data: 'DiscountType', className: 'text-left', visible: true},
        {data: 'InvSnapshot', className: 'text-left', visible: true},
        {data: 'WarnQty', className: 'text-left', visible: true},
        {data: 'WarnSupplier', className: 'text-left', visible: true},
        {data: 'AutoCost', className: 'text-left', visible: true},
        {data: 'UserDefDesc01', className: 'text-left', visible: true},
        {data: 'UserDefDesc02', className: 'text-left', visible: true},
        {data: 'UserDefDesc03', className: 'text-left', visible: true},
        {data: 'UserDefDesc04', className: 'text-left', visible: true},
        {data: 'UserDefDesc05', className: 'text-left', visible: true},
        {data: 'UserDefDesc06', className: 'text-left', visible: true},
        {data: 'UserDefDec01', className: 'text-left', visible: true},
        {data: 'UserDefDec02', className: 'text-left', visible: true},
        {data: 'UserDefDec03', className: 'text-left', visible: true},
        {data: 'OwnNumbers', className: 'text-left', visible: true},
        {data: 'UseMultiStore', className: 'text-left', visible: true},
        {data: 'ReceiptDfltDesc', className: 'text-left', visible: true},
        {data: 'AssignOrderedSN', className: 'text-left', visible: true},
        {data: 'DefaultSerialItem', className: 'text-left', visible: true},
        {data: 'PrintSN01', className: 'text-left', visible: true},
        {data: 'PrintSN02', className: 'text-left', visible: true},
        {data: 'PrintSN03', className: 'text-left', visible: true},
        {data: 'PrintSN04', className: 'text-left', visible: true},
        {data: 'PrintSN05', className: 'text-left', visible: true},
        {data: 'PrintSN06', className: 'text-left', visible: true},
        {data: 'PrintSN07', className: 'text-left', visible: true},
        {data: 'PrintSN08', className: 'text-left', visible: true},
        {data: 'PrintSN09', className: 'text-left', visible: true},
        {data: 'PrintSN10', className: 'text-left', visible: true},
        {data: 'PrintSN11', className: 'text-left', visible: true},
        {data: 'PrintPickSlip', className: 'text-left', visible: true},
        {data: 'PickSlipStyle', className: 'text-left', visible: true},
        {data: 'PickSlipNoCopies', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [141]
            }
        ],
    });

    // Table Column Click
    $('#InventoryParameters01 tbody').on('click', 'td', function () {
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
    $('#InventoryParameters01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
