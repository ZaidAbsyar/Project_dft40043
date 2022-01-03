document.getElementById("output").style.display = "none";

function kira() {

    if (confirm('Do U Want Us To Calculate ?')) {
        // INPUT
        let name = document.getElementById("i_name").value;
        let alamat = document.getElementById("alamat").value;
        let item = document.getElementById("item").value;
        let unitprice = document.getElementById("unitprice").value;
        let quantity = document.getElementById("quantity").value;
        let item2 = document.getElementById("item2").value;
        let unitprice2 = document.getElementById("unitprice2").value;
        let quantitiy2 = document.getElementById("quantity2").value;

        if (name == '' || alamat == ''|| item == '' || unitprice=='' || quantity=='' || item2=='' || unitprice2=='' || quantitiy2=='' ) {
            alert('Complete Your Form');
        } else {

            // OUTPUT
            document.getElementById("o_name").innerText = name;
            document.getElementById("o_alamat").innerText = alamat;
            document.getElementById("input").style.display = "none";
            document.getElementById("output").style.display = "table";
            document.getElementById("outputitem1").innerText = item;
            document.getElementById("outputunitprice1").innerText = unitprice;
            document.getElementById("outputquantity1").innerText = quantity;

            let total = unitprice * quantity;
            document.getElementById("total1").innerText = total;

            document.getElementById("outputitem2").innerText = item2;
            document.getElementById("outputunitprice2").innerText = unitprice2;
            document.getElementById("outputquantity2").innerText = quantitiy2;

            let total2 = unitprice2 * quantitiy2;
            document.getElementById("total2").innerText = total2;

            let gdtotal = total + total2;
            document.getElementById("gdtotal").innerText = gdtotal;


        }
    }
}