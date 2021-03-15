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

    let tbl = $("#LedgerBalances01").DataTable({
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
            url: "/dbview/LedgerBalances",
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
        {data: 'AccNumber', className: 'text-left', visible: true},
        {data: 'OpeningBal01', className: 'text-left', visible: true},
        {data: 'OpeningBal02', className: 'text-left', visible: true},
        {data: 'OpeningBal03', className: 'text-left', visible: true},
        {data: 'OpeningBal04', className: 'text-left', visible: true},
        {data: 'OpeningBal05', className: 'text-left', visible: true},
        {data: 'Balance01Year01', className: 'text-left', visible: true},
        {data: 'Balance02Year01', className: 'text-left', visible: true},
        {data: 'Balance03Year01', className: 'text-left', visible: true},
        {data: 'Balance04Year01', className: 'text-left', visible: true},
        {data: 'Balance05Year01', className: 'text-left', visible: true},
        {data: 'Balance06Year01', className: 'text-left', visible: true},
        {data: 'Balance07Year01', className: 'text-left', visible: true},
        {data: 'Balance08Year01', className: 'text-left', visible: true},
        {data: 'Balance09Year01', className: 'text-left', visible: true},
        {data: 'Balance10Year01', className: 'text-left', visible: true},
        {data: 'Balance11Year01', className: 'text-left', visible: true},
        {data: 'Balance12Year01', className: 'text-left', visible: true},
        {data: 'Balance13Year01', className: 'text-left', visible: true},
        {data: 'Balance01Year02', className: 'text-left', visible: true},
        {data: 'Balance02Year02', className: 'text-left', visible: true},
        {data: 'Balance03Year02', className: 'text-left', visible: true},
        {data: 'Balance04Year02', className: 'text-left', visible: true},
        {data: 'Balance05Year02', className: 'text-left', visible: true},
        {data: 'Balance06Year02', className: 'text-left', visible: true},
        {data: 'Balance07Year02', className: 'text-left', visible: true},
        {data: 'Balance08Year02', className: 'text-left', visible: true},
        {data: 'Balance09Year02', className: 'text-left', visible: true},
        {data: 'Balance10Year02', className: 'text-left', visible: true},
        {data: 'Balance11Year02', className: 'text-left', visible: true},
        {data: 'Balance12Year02', className: 'text-left', visible: true},
        {data: 'Balance13Year02', className: 'text-left', visible: true},
        {data: 'Balance01Year03', className: 'text-left', visible: true},
        {data: 'Balance02Year03', className: 'text-left', visible: true},
        {data: 'Balance03Year03', className: 'text-left', visible: true},
        {data: 'Balance04Year03', className: 'text-left', visible: true},
        {data: 'Balance05Year03', className: 'text-left', visible: true},
        {data: 'Balance06Year03', className: 'text-left', visible: true},
        {data: 'Balance07Year03', className: 'text-left', visible: true},
        {data: 'Balance08Year03', className: 'text-left', visible: true},
        {data: 'Balance09Year03', className: 'text-left', visible: true},
        {data: 'Balance10Year03', className: 'text-left', visible: true},
        {data: 'Balance11Year03', className: 'text-left', visible: true},
        {data: 'Balance12Year03', className: 'text-left', visible: true},
        {data: 'Balance13Year03', className: 'text-left', visible: true},
        {data: 'Balance01Year04', className: 'text-left', visible: true},
        {data: 'Balance02Year04', className: 'text-left', visible: true},
        {data: 'Balance03Year04', className: 'text-left', visible: true},
        {data: 'Balance04Year04', className: 'text-left', visible: true},
        {data: 'Balance05Year04', className: 'text-left', visible: true},
        {data: 'Balance06Year04', className: 'text-left', visible: true},
        {data: 'Balance07Year04', className: 'text-left', visible: true},
        {data: 'Balance08Year04', className: 'text-left', visible: true},
        {data: 'Balance09Year04', className: 'text-left', visible: true},
        {data: 'Balance10Year04', className: 'text-left', visible: true},
        {data: 'Balance11Year04', className: 'text-left', visible: true},
        {data: 'Balance12Year04', className: 'text-left', visible: true},
        {data: 'Balance13Year04', className: 'text-left', visible: true},
        {data: 'Balance01Year05', className: 'text-left', visible: true},
        {data: 'Balance02Year05', className: 'text-left', visible: true},
        {data: 'Balance03Year05', className: 'text-left', visible: true},
        {data: 'Balance04Year05', className: 'text-left', visible: true},
        {data: 'Balance05Year05', className: 'text-left', visible: true},
        {data: 'Balance06Year05', className: 'text-left', visible: true},
        {data: 'Balance07Year05', className: 'text-left', visible: true},
        {data: 'Balance08Year05', className: 'text-left', visible: true},
        {data: 'Balance09Year05', className: 'text-left', visible: true},
        {data: 'Balance10Year05', className: 'text-left', visible: true},
        {data: 'Balance11Year05', className: 'text-left', visible: true},
        {data: 'Balance12Year05', className: 'text-left', visible: true},
        {data: 'Balance13Year05', className: 'text-left', visible: true},
        {data: 'Budget01Year01', className: 'text-left', visible: true},
        {data: 'Budget02Year01', className: 'text-left', visible: true},
        {data: 'Budget03Year01', className: 'text-left', visible: true},
        {data: 'Budget04Year01', className: 'text-left', visible: true},
        {data: 'Budget05Year01', className: 'text-left', visible: true},
        {data: 'Budget06Year01', className: 'text-left', visible: true},
        {data: 'Budget07Year01', className: 'text-left', visible: true},
        {data: 'Budget08Year01', className: 'text-left', visible: true},
        {data: 'Budget09Year01', className: 'text-left', visible: true},
        {data: 'Budget10Year01', className: 'text-left', visible: true},
        {data: 'Budget11Year01', className: 'text-left', visible: true},
        {data: 'Budget12Year01', className: 'text-left', visible: true},
        {data: 'Budget13Year01', className: 'text-left', visible: true},
        {data: 'Budget01Year02', className: 'text-left', visible: true},
        {data: 'Budget02Year02', className: 'text-left', visible: true},
        {data: 'Budget03Year02', className: 'text-left', visible: true},
        {data: 'Budget04Year02', className: 'text-left', visible: true},
        {data: 'Budget05Year02', className: 'text-left', visible: true},
        {data: 'Budget06Year02', className: 'text-left', visible: true},
        {data: 'Budget07Year02', className: 'text-left', visible: true},
        {data: 'Budget08Year02', className: 'text-left', visible: true},
        {data: 'Budget09Year02', className: 'text-left', visible: true},
        {data: 'Budget10Year02', className: 'text-left', visible: true},
        {data: 'Budget11Year02', className: 'text-left', visible: true},
        {data: 'Budget12Year02', className: 'text-left', visible: true},
        {data: 'Budget13Year02', className: 'text-left', visible: true},
        {data: 'Budget01Year03', className: 'text-left', visible: true},
        {data: 'Budget02Year03', className: 'text-left', visible: true},
        {data: 'Budget03Year03', className: 'text-left', visible: true},
        {data: 'Budget04Year03', className: 'text-left', visible: true},
        {data: 'Budget05Year03', className: 'text-left', visible: true},
        {data: 'Budget06Year03', className: 'text-left', visible: true},
        {data: 'Budget07Year03', className: 'text-left', visible: true},
        {data: 'Budget08Year03', className: 'text-left', visible: true},
        {data: 'Budget09Year03', className: 'text-left', visible: true},
        {data: 'Budget10Year03', className: 'text-left', visible: true},
        {data: 'Budget11Year03', className: 'text-left', visible: true},
        {data: 'Budget12Year03', className: 'text-left', visible: true},
        {data: 'Budget13Year03', className: 'text-left', visible: true},
        {data: 'Budget01Year04', className: 'text-left', visible: true},
        {data: 'Budget02Year04', className: 'text-left', visible: true},
        {data: 'Budget03Year04', className: 'text-left', visible: true},
        {data: 'Budget04Year04', className: 'text-left', visible: true},
        {data: 'Budget05Year04', className: 'text-left', visible: true},
        {data: 'Budget06Year04', className: 'text-left', visible: true},
        {data: 'Budget07Year04', className: 'text-left', visible: true},
        {data: 'Budget08Year04', className: 'text-left', visible: true},
        {data: 'Budget09Year04', className: 'text-left', visible: true},
        {data: 'Budget10Year04', className: 'text-left', visible: true},
        {data: 'Budget11Year04', className: 'text-left', visible: true},
        {data: 'Budget12Year04', className: 'text-left', visible: true},
        {data: 'Budget13Year04', className: 'text-left', visible: true},
        {data: 'Budget01Year05', className: 'text-left', visible: true},
        {data: 'Budget02Year05', className: 'text-left', visible: true},
        {data: 'Budget03Year05', className: 'text-left', visible: true},
        {data: 'Budget04Year05', className: 'text-left', visible: true},
        {data: 'Budget05Year05', className: 'text-left', visible: true},
        {data: 'Budget06Year05', className: 'text-left', visible: true},
        {data: 'Budget07Year05', className: 'text-left', visible: true},
        {data: 'Budget08Year05', className: 'text-left', visible: true},
        {data: 'Budget09Year05', className: 'text-left', visible: true},
        {data: 'Budget10Year05', className: 'text-left', visible: true},
        {data: 'Budget11Year05', className: 'text-left', visible: true},
        {data: 'Budget12Year05', className: 'text-left', visible: true},
        {data: 'Budget13Year05', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [136]
            }
        ],
    });

    // Table Column Click
    $('#LedgerBalances01 tbody').on('click', 'td', function () {
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
    $('#LedgerBalances01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
