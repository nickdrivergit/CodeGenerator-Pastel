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

    let tbl = $("#AccountUser01").DataTable({
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
            url: "/dbview/AccountUser",
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
        {data: 'Password', className: 'text-left', visible: true},
        {data: 'ID', className: 'text-left', visible: true},
        {data: 'Description', className: 'text-left', visible: true},
        {data: 'AccessTable', className: 'text-left', visible: true},
        {data: 'LastDate', className: 'text-left', visible: true},
        {data: 'UseNavigator', className: 'text-left', visible: true},
        {data: 'NextNumber01', className: 'text-left', visible: true},
        {data: 'NextNumber02', className: 'text-left', visible: true},
        {data: 'NextNumber03', className: 'text-left', visible: true},
        {data: 'NextNumber04', className: 'text-left', visible: true},
        {data: 'NextNumber05', className: 'text-left', visible: true},
        {data: 'NextNumber06', className: 'text-left', visible: true},
        {data: 'NextNumber07', className: 'text-left', visible: true},
        {data: 'NextNumber08', className: 'text-left', visible: true},
        {data: 'NextNumber09', className: 'text-left', visible: true},
        {data: 'NextNumber10', className: 'text-left', visible: true},
        {data: 'NextNumber11', className: 'text-left', visible: true},
        {data: 'PrMethod01', className: 'text-left', visible: true},
        {data: 'PrMethod02', className: 'text-left', visible: true},
        {data: 'PrMethod03', className: 'text-left', visible: true},
        {data: 'PrMethod04', className: 'text-left', visible: true},
        {data: 'PrMethod05', className: 'text-left', visible: true},
        {data: 'PrMethod06', className: 'text-left', visible: true},
        {data: 'PrMethod07', className: 'text-left', visible: true},
        {data: 'PrMethod08', className: 'text-left', visible: true},
        {data: 'PrMethod09', className: 'text-left', visible: true},
        {data: 'PrMethod10', className: 'text-left', visible: true},
        {data: 'PrMethod11', className: 'text-left', visible: true},
        {data: 'PaperStyle01', className: 'text-left', visible: true},
        {data: 'PaperStyle02', className: 'text-left', visible: true},
        {data: 'PaperStyle03', className: 'text-left', visible: true},
        {data: 'PaperStyle04', className: 'text-left', visible: true},
        {data: 'PaperStyle05', className: 'text-left', visible: true},
        {data: 'PaperStyle06', className: 'text-left', visible: true},
        {data: 'PaperStyle07', className: 'text-left', visible: true},
        {data: 'PaperStyle08', className: 'text-left', visible: true},
        {data: 'PaperStyle09', className: 'text-left', visible: true},
        {data: 'PaperStyle10', className: 'text-left', visible: true},
        {data: 'PaperStyle11', className: 'text-left', visible: true},
        {data: 'Copies01', className: 'text-left', visible: true},
        {data: 'Copies02', className: 'text-left', visible: true},
        {data: 'Copies03', className: 'text-left', visible: true},
        {data: 'Copies04', className: 'text-left', visible: true},
        {data: 'Copies05', className: 'text-left', visible: true},
        {data: 'Copies06', className: 'text-left', visible: true},
        {data: 'Copies07', className: 'text-left', visible: true},
        {data: 'Copies08', className: 'text-left', visible: true},
        {data: 'Copies09', className: 'text-left', visible: true},
        {data: 'Copies10', className: 'text-left', visible: true},
        {data: 'Copies11', className: 'text-left', visible: true},
        {data: 'Online01', className: 'text-left', visible: true},
        {data: 'Online02', className: 'text-left', visible: true},
        {data: 'Online03', className: 'text-left', visible: true},
        {data: 'Online04', className: 'text-left', visible: true},
        {data: 'Online05', className: 'text-left', visible: true},
        {data: 'Online06', className: 'text-left', visible: true},
        {data: 'Online07', className: 'text-left', visible: true},
        {data: 'Online08', className: 'text-left', visible: true},
        {data: 'Online09', className: 'text-left', visible: true},
        {data: 'Online10', className: 'text-left', visible: true},
        {data: 'Online11', className: 'text-left', visible: true},
        {data: 'CodeMethod01', className: 'text-left', visible: true},
        {data: 'CodeMethod02', className: 'text-left', visible: true},
        {data: 'CodeMethod03', className: 'text-left', visible: true},
        {data: 'CodeMethod04', className: 'text-left', visible: true},
        {data: 'CodeMethod05', className: 'text-left', visible: true},
        {data: 'CodeMethod06', className: 'text-left', visible: true},
        {data: 'CodeMethod07', className: 'text-left', visible: true},
        {data: 'CodeMethod08', className: 'text-left', visible: true},
        {data: 'CodeMethod09', className: 'text-left', visible: true},
        {data: 'CodeMethod10', className: 'text-left', visible: true},
        {data: 'CodeMethod11', className: 'text-left', visible: true},
        {data: 'PeriodInUse01', className: 'text-left', visible: true},
        {data: 'PeriodInUse02', className: 'text-left', visible: true},
        {data: 'PeriodInUse03', className: 'text-left', visible: true},
        {data: 'PeriodInUse04', className: 'text-left', visible: true},
        {data: 'PeriodInUse05', className: 'text-left', visible: true},
        {data: 'PeriodInUse06', className: 'text-left', visible: true},
        {data: 'PeriodInUse07', className: 'text-left', visible: true},
        {data: 'PeriodInUse08', className: 'text-left', visible: true},
        {data: 'PeriodInUse09', className: 'text-left', visible: true},
        {data: 'PeriodInUse10', className: 'text-left', visible: true},
        {data: 'PeriodInUse11', className: 'text-left', visible: true},
        {data: 'UseUserDef01', className: 'text-left', visible: true},
        {data: 'UseUserDef02', className: 'text-left', visible: true},
        {data: 'UseUserDef03', className: 'text-left', visible: true},
        {data: 'UseUserDef04', className: 'text-left', visible: true},
        {data: 'UseUserDef05', className: 'text-left', visible: true},
        {data: 'UseUserDef06', className: 'text-left', visible: true},
        {data: 'UseUserDef07', className: 'text-left', visible: true},
        {data: 'UseUserDef08', className: 'text-left', visible: true},
        {data: 'UseUserDef09', className: 'text-left', visible: true},
        {data: 'UseUserDef10', className: 'text-left', visible: true},
        {data: 'UseUserDef11', className: 'text-left', visible: true},
        {data: 'QuickMode01', className: 'text-left', visible: true},
        {data: 'QuickMode02', className: 'text-left', visible: true},
        {data: 'QuickMode03', className: 'text-left', visible: true},
        {data: 'QuickMode04', className: 'text-left', visible: true},
        {data: 'QuickMode05', className: 'text-left', visible: true},
        {data: 'QuickMode06', className: 'text-left', visible: true},
        {data: 'QuickMode07', className: 'text-left', visible: true},
        {data: 'QuickMode08', className: 'text-left', visible: true},
        {data: 'QuickMode09', className: 'text-left', visible: true},
        {data: 'QuickMode10', className: 'text-left', visible: true},
        {data: 'QuickMode11', className: 'text-left', visible: true},
        {data: 'TypeofUser', className: 'text-left', visible: true},
        {data: 'UseEnter', className: 'text-left', visible: true},
        {data: 'POSSupervisor', className: 'text-left', visible: true},
        {data: 'AutoInvoke', className: 'text-left', visible: true},
        {data: 'CDTot', className: 'text-left', visible: true},
        {data: 'ShiftStatus', className: 'text-left', visible: true},
        {data: 'CDrawer01', className: 'text-left', visible: true},
        {data: 'CDrawer02', className: 'text-left', visible: true},
        {data: 'ParSer01', className: 'text-left', visible: true},
        {data: 'ParSer02', className: 'text-left', visible: true},
        {data: 'PortNumber01', className: 'text-left', visible: true},
        {data: 'PortNumber02', className: 'text-left', visible: true},
        {data: 'SendChars01', className: 'text-left', visible: true},
        {data: 'SendChars02', className: 'text-left', visible: true},
        {data: 'BaudRate01', className: 'text-left', visible: true},
        {data: 'BaudRate02', className: 'text-left', visible: true},
        {data: 'Parity01', className: 'text-left', visible: true},
        {data: 'Parity02', className: 'text-left', visible: true},
        {data: 'DataBits01', className: 'text-left', visible: true},
        {data: 'DataBits02', className: 'text-left', visible: true},
        {data: 'StopBits01', className: 'text-left', visible: true},
        {data: 'StopBits02', className: 'text-left', visible: true},
        {data: 'ODCheque', className: 'text-left', visible: true},
        {data: 'ODCreditCard', className: 'text-left', visible: true},
        {data: 'ODVouchers', className: 'text-left', visible: true},
        {data: 'ShowMoreLines', className: 'text-left', visible: true},
        {data: 'PoleDisplayDescs01', className: 'text-left', visible: true},
        {data: 'PoleDisplayDescs02', className: 'text-left', visible: true},
        {data: 'PoleDisplayDescs03', className: 'text-left', visible: true},
        {data: 'PoleDisplayDescs04', className: 'text-left', visible: true},
        {data: 'ShowDesc', className: 'text-left', visible: true},
        {data: 'NextTimesheetNo', className: 'text-left', visible: true},
        {data: 'DefaultStoreCode', className: 'text-left', visible: true},
        {data: 'EmailAddress', className: 'text-left', visible: true},
        {data: 'System', className: 'text-left', visible: true},
        {data: 'AllowOnHold', className: 'text-left', visible: true},
        {data: 'AutoRefreshExplorer', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [142]
            }
        ],
    });

    // Table Column Click
    $('#AccountUser01 tbody').on('click', 'td', function () {
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
    $('#AccountUser01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
