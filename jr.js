
function fiyatGizle() {
            var gizle = document.getElementById("fiyat-gizle");
            if (gizle.style.display === "none") {
            gizle.style.display = "block";
            } else {
            gizle.style.display = "none";
            }
}
function barkodGizle() {
            var gizle = document.getElementById("barkod-gizle");
            if (gizle.style.display === "none") {
            gizle.style.display = "block";
            } else {
            gizle.style.display = "none";
            }
}

    function hesap() {
           var iskontosu = document.getElementById('iskonto').value;
		   var iskonto = iskontosu.replace(/,/g, '.');


        if (iskonto<=0) {
            var fiya = document.getElementById('fiyatt').value;     
			var fiyat = fiya.replace(/,/g, '.');
            var kdv = document.getElementById('kdv').value;
            var dolarkur = document.getElementById('dolarkuru').value;
            var dolarkuru = dolarkur.replace(/,/g, '.');

            var kdvtutar = (Number(fiyat) / 100) * kdv;
            var nettutar = Number(fiyat) + kdvtutar;
			var lirasatis = Number(dolarkuru) * nettutar;

            document.getElementById('nettutarr').value = nettutar;
            document.getElementById('lirasatiss').value = lirasatis;

        }
        else if (iskonto>=1) {
            var fiya = document.getElementById('fiyatt').value;     
			var fiyat = fiya.replace(/,/g, '.');
            var kdv = document.getElementById('kdv').value;
            var dolarkur = document.getElementById('dolarkuru').value;
            var dolarkuru = dolarkur.replace(/,/g, '.');

			
            var kdvtutar = (Number(fiyat) / 100) * kdv;
            var nettutar = Number(fiyat) + kdvtutar;
            var iskontohesapla = (nettutar / 100) * iskonto;
            var iskontolufiyat = nettutar - iskontohesapla;
			var lirasatis = Number(dolarkuru) * iskontolufiyat;

            document.getElementById('nettutarr').value = iskontolufiyat;
			document.getElementById('lirasatiss').value = lirasatis;

}
    }

function barkod() {
            var adet = document.getElementById('adet').value;          
            var seri = document.getElementById('seri').value;

            var barkodhesapla = (adet / 4) / seri;
            document.getElementById('barkodhesapla').value = barkodhesapla;


}
