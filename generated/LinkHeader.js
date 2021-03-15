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

    let tbl = $("#LinkHeader01").DataTable({
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
            url: "/dbview/LinkHeader",
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
        {data: 'LnkCode', className: 'text-left', visible: true},
        {data: 'LnkDesc', className: 'text-left', visible: true},
        {data: 'Percent01', className: 'text-left', visible: true},
        {data: 'Percent02', className: 'text-left', visible: true},
        {data: 'Percent03', className: 'text-left', visible: true},
        {data: 'Percent04', className: 'text-left', visible: true},
        {data: 'Percent05', className: 'text-left', visible: true},
        {data: 'Percent06', className: 'text-left', visible: true},
        {data: 'Percent07', className: 'text-left', visible: true},
        {data: 'Percent08', className: 'text-left', visible: true},
        {data: 'Percent09', className: 'text-left', visible: true},
        {data: 'Percent10', className: 'text-left', visible: true},
        {data: 'AddCost01', className: 'text-left', visible: true},
        {data: 'AddCost02', className: 'text-left', visible: true},
        {data: 'AddCost03', className: 'text-left', visible: true},
        {data: 'AddSell01', className: 'text-left', visible: true},
        {data: 'AddSell02', className: 'text-left', visible: true},
        {data: 'AddSell03', className: 'text-left', visible: true},
        {data: 'Spare', className: 'text-left', visible: true},
        {data: 'FGCode', className: 'text-left', visible: true},
        {data: 'Always', className: 'text-left', visible: true},
        {data: 'Method', className: 'text-left', visible: true},
        {data: 'Selling', className: 'text-left', visible: true},
        {data: 'Picture', className: 'text-left', visible: true},
        {data: 'Blocked', className: 'text-left', visible: true},
        {data: 'PrnDetails', className: 'text-left', visible: true},
        {data: 'StoreCode', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [27]
            }
        ],
    });

    // Table Column Click
    $('#LinkHeader01 tbody').on('click', 'td', function () {
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
    $('#LinkHeader01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
