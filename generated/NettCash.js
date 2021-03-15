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

    let tbl = $("#NettCash01").DataTable({
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
            url: "/dbview/NettCash",
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
        {data: 'GUID', className: 'text-left', visible: true},
        {data: 'CoId', className: 'text-left', visible: true},
        {data: 'MasterType', className: 'text-left', visible: true},
        {data: 'NetcashIDValid', className: 'text-left', visible: true},
        {data: 'NetcashBankValid', className: 'text-left', visible: true},
        {data: 'NetcashIDVerified', className: 'text-left', visible: true},
        {data: 'NetcashBankVerified', className: 'text-left', visible: true},
        {data: 'NetcashCrCheck', className: 'text-left', visible: true},
        {data: 'NetcashCiproCheck', className: 'text-left', visible: true},
        {data: 'SpareFlag02', className: 'text-left', visible: true},
        {data: 'SpareFlag03', className: 'text-left', visible: true},
        {data: 'SpareFlag04', className: 'text-left', visible: true},
        {data: 'SpareFlag05', className: 'text-left', visible: true},
        {data: 'SpareFlag06', className: 'text-left', visible: true},
        {data: 'SpareFlag07', className: 'text-left', visible: true},
        {data: 'SpareFlag08', className: 'text-left', visible: true},
        {data: 'SpareFlag09', className: 'text-left', visible: true},
        {data: 'SpareFlag10', className: 'text-left', visible: true},
        {data: 'NetcashIDVerGUID', className: 'text-left', visible: true},
        {data: 'NetcashBankValGUID', className: 'text-left', visible: true},
        {data: 'NetcashBankVerGUID', className: 'text-left', visible: true},
        {data: 'NetcashCrCheckGUID', className: 'text-left', visible: true},
        {data: 'NetcashCiproChkGUID', className: 'text-left', visible: true},
        {data: 'SpareGuid02', className: 'text-left', visible: true},
        {data: 'SpareGuid03', className: 'text-left', visible: true},
        {data: 'SpareGuid04', className: 'text-left', visible: true},
        {data: 'SpareGuid05', className: 'text-left', visible: true},
        {data: 'SpareGuid06', className: 'text-left', visible: true},
        {data: 'SpareGuid07', className: 'text-left', visible: true},
        {data: 'SpareGuid08', className: 'text-left', visible: true},
        {data: 'SpareGuid09', className: 'text-left', visible: true},
        {data: 'SpareGuid10', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [32]
            }
        ],
    });

    // Table Column Click
    $('#NettCash01 tbody').on('click', 'td', function () {
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
    $('#NettCash01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
