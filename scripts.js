$(function() {
var $listForAddProduct = $(".products");
var $productCode = $(".productsMaket").html();
    function addItem(name) {
        if(name==="")return;
        if(name.charAt(0)===' '){
            addItem(name.trim());
            return;
        }
        var node = $($productCode);
        var amount = 1;
        var $amount = node.find(".bl-label");
        // $(node.find(".bl-minus")).attr("class","bl-minus-disabled");

        $amount.text(amount);
        node.find(".title").text(name);
        node.find(".deleteButton").click(function () {
            // node.remove();
            node.hide('slow', function(){
                node.remove();
            });
        });

        node.find(".bl-plus").click(function () {
            amount+=1;
            $(node.find(".bl-minus-disabled")).attr("class","bl-minus");
            if(amount==101)amount=100;
            $amount.text(amount);
        });
        node.find(".bl-minus").click(function () {
            amount-=1;
            if(amount==0)amount=1;
            if(amount==1)$(this).attr("class","bl-minus-disabled");
            if(amount>1) $(this).attr("class","bl-minus");
            $amount.text(amount);
        });
        $(node.find(".bl-minus")).attr("class","bl-minus-disabled");
        $listForAddProduct.append(node);
    }
     addItem("Помідори");
     addItem("Сир");
     addItem("Огірки");

     $(".addButton").click(function () {
         addItem(($(".nameOfProduct")).val());
     })


});