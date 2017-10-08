$(function() {
var $listForAddProduct = $(".products");
var $productCode = $(".productsMaket").html();
var $listForAddInSecond = $(".notBoughtProducts");
var $productInSecondPanelCode = $(".productInSecondPanelMaket ").html();
var $listForBoughtProducts = $(".lastPanel");
    function addItem(name) {
        if(name==="")return;
        if(name.charAt(0)===' '){
            addItem(name.trim());
            return;
        }
        if(name=="Назва товару")return;
        var node = $($productCode);
        var amount = 1;
        var $amount = node.find(".bl-label");

        var nodeSecond = $($productInSecondPanelCode);
        // $(node.find(".bl-minus")).attr("class","bl-minus-disabled");

        $amount.text(amount);
        node.find(".title").text(name);
        node.find(".deleteButton").click(function () {
            // node.remove();
            node.slideUp('slow', function(){
                node.remove();
            });
            nodeSecond.remove();
        });

        nodeSecond.find(".productWasBought").text(name);
        nodeSecond.find(".amountOfProductsLebel").text(amount);

        node.find(".bl-plus").click(function () {
            amount+=1;
            $(node.find(".bl-minus-disabled")).attr("class","bl-minus");
            if(amount==101)amount=100;
            $amount.text(amount);
            nodeSecond.find(".amountOfProductsLebel").text(amount);
        });
        node.find(".bl-minus").click(function () {
            amount-=1;
            if(amount==0)amount=1;
            if(amount==1)$(this).attr("class","bl-minus-disabled");
            if(amount>1) $(this).attr("class","bl-minus");
            $amount.text(amount);
            nodeSecond.find(".amountOfProductsLebel").text(amount);
        });

        node.find(".boughtButton").click(function () {
            node.find(".bl-plus").hide();
            node.find(".bl-minus").hide();
            node.find(".bl-minus-disabled").hide();
            node.find(".boughtButton").hide();
            node.find(".deleteButton").hide();
            node.find(".boughtButton_state_2").show();
            node.find(".title").html("<del>"+node.find(".title").text()+"</del>");
            nodeSecond.remove();
            nodeSecond.find(".productWasBought").html("<del>"+nodeSecond.find(".productWasBought").text()+"</del>");
            nodeSecond.find(".amountOfProductsLebel").html("<del>"+nodeSecond.find(".amountOfProductsLebel").text()+"</del>");
            $listForBoughtProducts.append(nodeSecond);
        });

        node.find(".boughtButton_state_2").click(function () {
            node.find(".bl-plus").show();
            node.find(".bl-minus").show();
            node.find(".bl-minus-disabled").show();
            node.find(".boughtButton").show();
            node.find(".deleteButton").show();
            node.find(".boughtButton_state_2").hide();
            node.find(".title").html(node.find(".title").text());
            nodeSecond.remove();
            nodeSecond.find(".productWasBought").html(nodeSecond.find(".productWasBought").text());
            nodeSecond.find(".amountOfProductsLebel").html(nodeSecond.find(".amountOfProductsLebel").text());
            $listForAddInSecond.append(nodeSecond);
        });

        node.find(".title").click(function () {
            // $(this).replaceWith("<input class='title_input'type='text'value='"+$(this).text()+"'>");
            if(node.find(".title").html()=="<del>"+node.find(".title").text()+"</del>")return;
            $(this).hide();
            $(node.find(".input-new-name")).val($(this).text());
            $(node.find(".input-new-name")).show();
            $(node.find(".input-new-name")).focus();
        });

        node.find(".input-new-name").keyup(function () {
            if(event.keyCode==13) $(".nameOfProduct").focus();
            nodeSecond.find(".productWasBought").text($(this).val());
            nodeSecond.find(".productWasBought").attr("style","color:black");
        });

        node.find(".input-new-name").blur(function () {
            if($(this).val().trim()==""||$(this).val().trim()=="Undefined"){
                $(this).val("Undefined");
                $(node.find(".title")).attr("style","color:#b4b4b4");
                nodeSecond.find(".productWasBought").text($(this).val());
                nodeSecond.find(".productWasBought").attr("style","color:green");
            }
            else {
                $(node.find(".title")).attr("style","color:black");
                nodeSecond.find(".productWasBought").attr("style","color:black");
            }
            $(this).hide();
            $(node.find(".title")).text($(this).val());
            $(node.find(".title")).show();

        });


        $(node.find(".bl-minus")).attr("class","bl-minus-disabled");

        $listForAddProduct.append(node);
        node.hide();
        node.fadeIn(400);
        $listForAddInSecond.append(nodeSecond);
    }
     addItem("Помідори");
     addItem("Сир");
     addItem("Огірки");

    ($(".nameOfProduct")).click(function () {
        ($(".nameOfProduct")).val("");
    })

     $(".addButton").click(function () {
         addItem(($(".nameOfProduct")).val());
         ($(".nameOfProduct")).val("");
         ($(".nameOfProduct")).focus();
     })

    $(".nameOfProduct").keyup(function(event) {
        if(event.keyCode==13&&$(this).is(":focus")) $(".addButton").click();
    });

});