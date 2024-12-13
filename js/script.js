var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
    });

document.getElementById('popoverButton').addEventListener('click', function() {
      var modal = new bootstrap.Modal(document.getElementById('exampleModal_1'));
        modal.show();
    });

document.getElementById('popoverButton_1').addEventListener('click', function() {
        var modal = new bootstrap.Modal(document.getElementById('exampleModal_1'));
        modal.show();
    });

document.getElementById('popoverButton_2').addEventListener('click', function() {
        var modal = new bootstrap.Modal(document.getElementById('exampleModal_1'));
        modal.show();
    });
