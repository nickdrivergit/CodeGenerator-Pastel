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

    let tbl = $("#SupplierMaster01").DataTable({
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
            url: "/dbview/SupplierMaster",
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
        {data: 'SupplCode', className: 'text-left', visible: true},
        {data: 'SupplDesc', className: 'text-left', visible: true},
        {data: 'BalanceThis01', className: 'text-left', visible: true},
        {data: 'BalanceThis02', className: 'text-left', visible: true},
        {data: 'BalanceThis03', className: 'text-left', visible: true},
        {data: 'BalanceThis04', className: 'text-left', visible: true},
        {data: 'BalanceThis05', className: 'text-left', visible: true},
        {data: 'BalanceThis06', className: 'text-left', visible: true},
        {data: 'BalanceThis07', className: 'text-left', visible: true},
        {data: 'BalanceThis08', className: 'text-left', visible: true},
        {data: 'BalanceThis09', className: 'text-left', visible: true},
        {data: 'BalanceThis10', className: 'text-left', visible: true},
        {data: 'BalanceThis11', className: 'text-left', visible: true},
        {data: 'BalanceThis12', className: 'text-left', visible: true},
        {data: 'BalanceThis13', className: 'text-left', visible: true},
        {data: 'BalanceLast01', className: 'text-left', visible: true},
        {data: 'BalanceLast02', className: 'text-left', visible: true},
        {data: 'BalanceLast03', className: 'text-left', visible: true},
        {data: 'BalanceLast04', className: 'text-left', visible: true},
        {data: 'BalanceLast05', className: 'text-left', visible: true},
        {data: 'BalanceLast06', className: 'text-left', visible: true},
        {data: 'BalanceLast07', className: 'text-left', visible: true},
        {data: 'BalanceLast08', className: 'text-left', visible: true},
        {data: 'BalanceLast09', className: 'text-left', visible: true},
        {data: 'BalanceLast10', className: 'text-left', visible: true},
        {data: 'BalanceLast11', className: 'text-left', visible: true},
        {data: 'BalanceLast12', className: 'text-left', visible: true},
        {data: 'BalanceLast13', className: 'text-left', visible: true},
        {data: 'SalesThis01', className: 'text-left', visible: true},
        {data: 'SalesThis02', className: 'text-left', visible: true},
        {data: 'SalesThis03', className: 'text-left', visible: true},
        {data: 'SalesThis04', className: 'text-left', visible: true},
        {data: 'SalesThis05', className: 'text-left', visible: true},
        {data: 'SalesThis06', className: 'text-left', visible: true},
        {data: 'SalesThis07', className: 'text-left', visible: true},
        {data: 'SalesThis08', className: 'text-left', visible: true},
        {data: 'SalesThis09', className: 'text-left', visible: true},
        {data: 'SalesThis10', className: 'text-left', visible: true},
        {data: 'SalesThis11', className: 'text-left', visible: true},
        {data: 'SalesThis12', className: 'text-left', visible: true},
        {data: 'SalesThis13', className: 'text-left', visible: true},
        {data: 'SalesLast01', className: 'text-left', visible: true},
        {data: 'SalesLast02', className: 'text-left', visible: true},
        {data: 'SalesLast03', className: 'text-left', visible: true},
        {data: 'SalesLast04', className: 'text-left', visible: true},
        {data: 'SalesLast05', className: 'text-left', visible: true},
        {data: 'SalesLast06', className: 'text-left', visible: true},
        {data: 'SalesLast07', className: 'text-left', visible: true},
        {data: 'SalesLast08', className: 'text-left', visible: true},
        {data: 'SalesLast09', className: 'text-left', visible: true},
        {data: 'SalesLast10', className: 'text-left', visible: true},
        {data: 'SalesLast11', className: 'text-left', visible: true},
        {data: 'SalesLast12', className: 'text-left', visible: true},
        {data: 'SalesLast13', className: 'text-left', visible: true},
        {data: 'PostAddress01', className: 'text-left', visible: true},
        {data: 'PostAddress02', className: 'text-left', visible: true},
        {data: 'PostAddress03', className: 'text-left', visible: true},
        {data: 'PostAddress04', className: 'text-left', visible: true},
        {data: 'PostAddress05', className: 'text-left', visible: true},
        {data: 'TaxCode', className: 'text-left', visible: true},
        {data: 'ExemptRef', className: 'text-left', visible: true},
        {data: 'SettlementTerms', className: 'text-left', visible: true},
        {data: 'PaymentTerms', className: 'text-left', visible: true},
        {data: 'LastCrDate', className: 'text-left', visible: true},
        {data: 'LastCrAmount', className: 'text-left', visible: true},
        {data: 'Blocked', className: 'text-left', visible: true},
        {data: 'OpenItem', className: 'text-left', visible: true},
        {data: 'OverRideTax', className: 'text-left', visible: true},
        {data: 'MonthOrDay', className: 'text-left', visible: true},
        {data: 'IncExc', className: 'text-left', visible: true},
        {data: 'CountryCode', className: 'text-left', visible: true},
        {data: 'CurrencyCode', className: 'text-left', visible: true},
        {data: 'CreditLimit', className: 'text-left', visible: true},
        {data: 'Contact', className: 'text-left', visible: true},
        {data: 'Telephone', className: 'text-left', visible: true},
        {data: 'Cellphone', className: 'text-left', visible: true},
        {data: 'Fax', className: 'text-left', visible: true},
        {data: 'DelAddress01', className: 'text-left', visible: true},
        {data: 'DelAddress02', className: 'text-left', visible: true},
        {data: 'DelAddress03', className: 'text-left', visible: true},
        {data: 'DelAddress04', className: 'text-left', visible: true},
        {data: 'DelAddress05', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis01', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis02', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis03', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis04', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis05', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis06', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis07', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis08', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis09', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis10', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis11', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis12', className: 'text-left', visible: true},
        {data: 'CurrBalanceThis13', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast01', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast02', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast03', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast04', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast05', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast06', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast07', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast08', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast09', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast10', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast11', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast12', className: 'text-left', visible: true},
        {data: 'CurrBalanceLast13', className: 'text-left', visible: true},
        {data: 'UserDefined01', className: 'text-left', visible: true},
        {data: 'UserDefined02', className: 'text-left', visible: true},
        {data: 'UserDefined03', className: 'text-left', visible: true},
        {data: 'UserDefined04', className: 'text-left', visible: true},
        {data: 'UserDefined05', className: 'text-left', visible: true},
        {data: 'Ageing01', className: 'text-left', visible: true},
        {data: 'Ageing02', className: 'text-left', visible: true},
        {data: 'Ageing03', className: 'text-left', visible: true},
        {data: 'Ageing04', className: 'text-left', visible: true},
        {data: 'Ageing05', className: 'text-left', visible: true},
        {data: 'UseAgedMessages', className: 'text-left', visible: true},
        {data: 'Email', className: 'text-left', visible: true},
        {data: 'StatPrintorEmail', className: 'text-left', visible: true},
        {data: 'DocPrintorEmail', className: 'text-left', visible: true},
        {data: 'Freight01', className: 'text-left', visible: true},
        {data: 'Ship', className: 'text-left', visible: true},
        {data: 'Password', className: 'text-left', visible: true},
        {data: 'Link1099', className: 'text-left', visible: true},
        {data: 'DefaultContraAccount', className: 'text-left', visible: true},
        {data: 'UpdatedOn', className: 'text-left', visible: true},
        {data: 'Spare', className: 'text-left', visible: true},
        {data: 'CreateDate', className: 'text-left', visible: true},
        {data: 'SoleProprietor', className: 'text-left', visible: true},
        {data: 'SupName', className: 'text-left', visible: true},
        {data: 'SupSurname', className: 'text-left', visible: true},
        {data: 'SupID', className: 'text-left', visible: true},
        {data: 'BankName', className: 'text-left', visible: true},
        {data: 'BankType', className: 'text-left', visible: true},
        {data: 'BankBranch', className: 'text-left', visible: true},
        {data: 'BankAccNumber', className: 'text-left', visible: true},
        {data: 'GUID', className: 'text-left', visible: true},
        {data: 'BankAccRelation', className: 'text-left', visible: true},
        {data: 'ThirdPartyID', className: 'text-left', visible: true},
        {data: 'PassportNumber', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [143]
            }
        ],
    });

    // Table Column Click
    $('#SupplierMaster01 tbody').on('click', 'td', function () {
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
    $('#SupplierMaster01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
