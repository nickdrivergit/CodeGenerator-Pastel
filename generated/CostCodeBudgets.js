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

    let tbl = $("#CostCodeBudgets01").DataTable({
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
            url: "/dbview/CostCodeBudgets",
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
        {data: 'CostCode', className: 'text-left', visible: true},
        {data: 'AccNumber', className: 'text-left', visible: true},
        {data: 'BudgetThis01', className: 'text-left', visible: true},
        {data: 'BudgetThis02', className: 'text-left', visible: true},
        {data: 'BudgetThis03', className: 'text-left', visible: true},
        {data: 'BudgetThis04', className: 'text-left', visible: true},
        {data: 'BudgetThis05', className: 'text-left', visible: true},
        {data: 'BudgetThis06', className: 'text-left', visible: true},
        {data: 'BudgetThis07', className: 'text-left', visible: true},
        {data: 'BudgetThis08', className: 'text-left', visible: true},
        {data: 'BudgetThis09', className: 'text-left', visible: true},
        {data: 'BudgetThis10', className: 'text-left', visible: true},
        {data: 'BudgetThis11', className: 'text-left', visible: true},
        {data: 'BudgetThis12', className: 'text-left', visible: true},
        {data: 'BudgetThis13', className: 'text-left', visible: true},
        {data: 'BudgetNext01', className: 'text-left', visible: true},
        {data: 'BudgetNext02', className: 'text-left', visible: true},
        {data: 'BudgetNext03', className: 'text-left', visible: true},
        {data: 'BudgetNext04', className: 'text-left', visible: true},
        {data: 'BudgetNext05', className: 'text-left', visible: true},
        {data: 'BudgetNext06', className: 'text-left', visible: true},
        {data: 'BudgetNext07', className: 'text-left', visible: true},
        {data: 'BudgetNext08', className: 'text-left', visible: true},
        {data: 'BudgetNext09', className: 'text-left', visible: true},
        {data: 'BudgetNext10', className: 'text-left', visible: true},
        {data: 'BudgetNext11', className: 'text-left', visible: true},
        {data: 'BudgetNext12', className: 'text-left', visible: true},
        {data: 'BudgetNext13', className: 'text-left', visible: true},
        {data: 'BudgetLast01', className: 'text-left', visible: true},
        {data: 'BudgetLast02', className: 'text-left', visible: true},
        {data: 'BudgetLast03', className: 'text-left', visible: true},
        {data: 'BudgetLast04', className: 'text-left', visible: true},
        {data: 'BudgetLast05', className: 'text-left', visible: true},
        {data: 'BudgetLast06', className: 'text-left', visible: true},
        {data: 'BudgetLast07', className: 'text-left', visible: true},
        {data: 'BudgetLast08', className: 'text-left', visible: true},
        {data: 'BudgetLast09', className: 'text-left', visible: true},
        {data: 'BudgetLast10', className: 'text-left', visible: true},
        {data: 'BudgetLast11', className: 'text-left', visible: true},
        {data: 'BudgetLast12', className: 'text-left', visible: true},
        {data: 'BudgetLast13', className: 'text-left', visible: true},
        
        //{ data: "menu", className: "text-center", width: "20px", visible: true},   // Menu
        ],
		aoColumnDefs: [
            {
                'bSortable': false,
                'aTargets': [41]
            }
        ],
    });

    // Table Column Click
    $('#CostCodeBudgets01 tbody').on('click', 'td', function () {
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
    $('#CostCodeBudgets01 tbody').on( 'click', 'tr', function (){
        let row_data = tbl.row( this ).data();
        console.log(row_data);
    });
});
