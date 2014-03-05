$(document).ready( function() {

	function search() {
		var query = $("#filter").val();

		var content = document.getElementsByClassName("entry-content")[0];
		var lists = content.getElementsByTagName('ul');

		for (var i=0; i<lists.length; i++) {
			var hidden_count = 0;
			var header = lists[i].previousSibling.previousSibling;
			var pubs = lists[i].getElementsByTagName('li');

			for (var j=0; j<pubs.length; j++) {
				if (query == "") {
					$(pubs[j]).show();
				} else {
					var text = pubs[j].childNodes[1].textContent;
					if (text.toLowerCase().search(query.toLowerCase()) === -1) {
						$(pubs[j]).hide();
						hidden_count++;
					} else {
						$(pubs[j]).show();
					}
				}
			}
			if (hidden_count === pubs.length) {
				$(header).hide();
			} else {
				$(header).show();
			}
		}
	}

	$("#form").submit(function(e) {
		e.preventDefault();
	});

	$("#filter").keyup(function(e) {
		search();
	});
});
