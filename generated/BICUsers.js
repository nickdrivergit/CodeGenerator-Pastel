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

    let tbl = $("#BICUsers01").DataTable({
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
            url: "/dbview/BICUsers",
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
        {data: 'ReportID', className: 'text-left', visible: true},
        {data: 'Description', className: 'text-left', visible: true},
        {data: 'User00', className: 'text-left', visible: true},
        {data: 'User01', className: 'text-left', visible: true},
        {data: 'User02', className: 'text-left', visible: true},
        {data: 'User03', className: 'text-left', visible: true},
        {data: 'User04', className: 'text-left', visible: true},
        {data: 'User05', className: 'text-left', visible: true},
        {data: 'User06', className: 'text-left', visible: true},
        {data: 'User07', className: 'text-left', visible: true},
        {data: 'User08', className: 'text-left', visible: true},
        {data: 'User09', className: 'text-left', visible: true},
        {data: 'User10', className: 'text-left', visible: true},
        {data: 'User11', className: 'text-left', visible: true},
        {data: 'User12', className: 'text-left', visible: true},
        {data: 'User13', className: 'text-left', visible: true},
        {data: 'User14', className: 'text-left', visible: true},
        {data: 'User15', className: 'text-left', visible: true},
        {data: 'User16', className: 'text-left', visible: true},
        {data: 'User17', className: 'text-left', visible: true},
        {data: 'User18', className: 'text-left', visible: true},
        {data: 'User19', className: 'text-left', visible: true},
        {data: 'User20', className: 'text-left', visible: true},
        {data: 'User21', className: 'text-left', visible: true},
        {data: 'User22', className: 'text-left', visible: true},
        {data: 'User23', className: 'text-left', visible: true},
        {data: 'User24', className: 'text-left', visible: true},
        {data: 'User25', className: 'text-left', visible: true},
        {data: 'User26', className: 'text-left', visible: true},
        {data: 'User27', className: 'text-left', visible: true},
        {data: 'User28', className: 'text-left', visible: true},
        {data: 'User29', className: 'text-left', visible: true},
        {data: 'User30', className: 'text-left', visible: true},
        {data: 'User31', className: 'text-left', visible: true},
        {data: 'User32', className: 'text-left', visible: true},
        {data: 'User33', className: 'text-left', visible: true},
        {data: 'User34', className: 'text-left', visible: true},
        {data: 'User35', className: 'text-left', visible: true},
        {data: 'User36', className: 'text-left', visible: true},
        {data: 'User37', className: 'text-left', visible: true},
        {data: 'User38', className: 'text-left', visible: true},
        {data: 'User39', className: 'text-left', visible: true},
        {data: 'User40', className: 'text-left', visible: true},
        {data: 'User41', className: 'text-left', visible: true},
        {data: 'User42', className: 'text-left', visible: true},
        {data: 'User43', className: 'text-left', visible: true},
        {data: 'User44', className: 'text-left', visible: true},
        {data: 'User45', className: 'text-left', visible: true},
        {data: 'User46', className: 'text-left', visible: true},
        {data: 'User47', className: 'text-left', visible: true},
        {data: 'User48', className: 'text-left', visible: true},
        {data: 'User49', className: 'text-left', visible: true},
        {data: 'User50', className: 'text-left', visible: true},
        {data: 'User51', className: 'text-left', visible: true},
        {data: 'User52', className: 'text-left', visible: true},
        {data: 'User53', className: 'text-left', visible: true},
        {data: 'User54', className: 'text-left', visible: true},
        {data: 'User55', className: 'text-left', visible: true},
        {data: 'User56', className: 'text-left', visible: true},
        {data: 'User57', className: 'text-left', visible: true},
        {data: 'User58', className: 'text-left', visible: true},
        {data: 'User59', className: 'text-left', visible: true},
        {data: 'User60', className: 'text-left', visible: true},
        {data: 'User61', className: 'text-left', visible: true},
        {data: 'User62', className: 'text-left', visible: true},
        {data: 'User63', className: 'text-left', visible: true},
        {data: 'User64', className: 'text-left', visible: true},
        {data: 'User65', className: 'text-left', visible: true},
        {data: 'User66', className: 'text-left', visible: true},
        {data: 'User67', className: 'text-left', visible: true},
        {data: 'User68', className: 'text-left', visible: true},
        {data: 'User69', className: 'text-left', visible: true},
        {data: 'User70', className: 'text-left', visible: true},
        {data: 'User71', className: 'text-left', visible: true},
        {data: 'User72', className: 'text-left', visible: true},
        {data: 'User73', className: 'text-left', visible: true},
        {data: 'User74', className: 'text-left', visible: true},
        {data: 'User75', className: 'text-left', visible: true},
        {data: 'User76', className: 'text-left', visible: true},
        {data: 'User77', className: 'text-left', visible: true},
        {data: 'User78', className: 'text-left', visible: true},
        {data: 'User79', className: 'text-left', visible: true},
        {data: 'User80', className: 'text-left', visible: true},
        {data: 'User81', className: 'text-left', visible: true},
        {data: 'User82', className: 'text-left', visible: true},
        {data: 'User83', className: 'text-left', visible: true},
        {data: 'User84', className: 'text-left', visible: true},
        {data: 'User85', className: 'text-left', visible: true},
        {data: 'User86', className: 'text-left', visible: true},
        {data: 'User87', className: 'text-left', visible: true},
        {data: 'User88', className: 'text-left', visible: true},
        {data: 'User89', className: 'text-left', visible: true},
        {data: 'User90', className: 'text-left', visible: true},
        {data: 'User91', className: 'text-left', visible: true},
        {data: 'User92', className: 'text-left', visible: true},
        {data: 'User93', className: 'text-left', visible: true},
        {data: 'User94', className: 'text-left', visible: true},
        {data: 'User95', className: 'text-left', visible: true},
        {data: 'User96', className: 'text-left', visible: true},
        {data: 'User97', className: 'text-left', visible: true},
        {data: 'User98', className: 'text-left', visible: true},
        {data: 'User99', className: 'text-left', visible: true},
        {data: 'Group01', className: 'text-left', visible: true},
        {data: 'Group02', className: 'text-left', visible: true},
        {data: 'Group03', className: 'text-left', visible: true},
        {data: 'Group04', className: 'text-left', visible: true},
        {data: 'Group05', className: 'text-left', visible: true},
        {data: 'Group06', className: 'text-left', visible: true},
        {data: 'Group07', className: 'text-left', visible: true},
        {data: 'Group08', className: 'text-left', visible: true},
        {data: 'Group09', className: 'text-left', visible: true},
        {data: 'Group10', className: 'text-left', visible: true},
        {data: 'Group11', className: 'text-left', visible: true},
        {data: 'Group12', className: 'text-left', visible: true},
        {data: 'Group13', className: 'text-left', visible: true},
        {data: 'Group14', className: 'text-left', visible: true},
        {data: 'Group15', className: 'text-left', visible: true},
        {data: 'Group16', className: 'text-left', visible: true},
        {data: 'Group17', className: 'text-left', visible: true},
        {data: 'Group18', className: 'text-left', visible: true},
        {data: 'Group19', className: 'text-left', visible: true},
        {data: 'Group20', className: 'text-left', visible: true},
        {data: 'Group21', className: 'text-left', visible: true},
        {data: 'Group22', className: 'text-left', visible: true},
        {data: 'Group23', className: 'text-left', visible: true},
        {data: 'Group24', className: 'text-left', visible: true},
        {data: 'Group25', className: 'text-left', visible: true},
        {data: 'Group26', className: 'text-left', visible: true},
        {data: 'Group27', className: 'text-left', visible: true},
        {data: 'Group28', className: 'text-left', visible: true},
        {data: 'Group29', className: 'text-left', visible: true},
        {data: 'Group30', className: 'text-left', visible: true},
        {data: 'Group31', className: 'text-left', visible: true},
        {data: 'Group32', className: 'text-left', visible: true},
        {data: 'Group33', className: 'text-left', visible: true},
        {data: 'Group34', className: 'text-left', visible: true},
        {data: 'Group35', className: 'text-left', visible: true},
        {data: 'Group36', className: 'text-left', visible: true},
        {data: 'Group37', className: 'text-left', visible: true},
        {data: 'Group38', className: 'text-left', visible: true},
        {data: 'Group39', className: 'text-left', visible: true},
        {data: 'Group40', className: 'text-left', visible: true},
        {data: 'Group41', className: 'text-left', visible: true},
        {data: 'Group42', className: 'text-left', visible: true},
        {data: 'Group43', className: 'text-left', visible: true},
        {data: 'Group44', className: 'text-left', visible: true},
        {data: 'Group45', className: 'text-left', visible: true},
        {data: 'Group46', className: 'text-left', visible: true},
        {data: 'Group47', className: 'text-left', visible: true},
        {data: 'Group48', className: 'text-left', visible: true},
        {data: 'Group49', className: 'text-left', visible: true},
        {data: 'Group50', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [152]
            }
        ],
    });

    // Table Column Click
    $('#BICUsers01 tbody').on('click', 'td', function () {
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
    $('#BICUsers01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
