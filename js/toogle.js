$(function(){
    var page={
        init:function(){
            var _this=this;
            $.get("/templates/header.html",function(content,state){
              if( state=="success" ){
                  $("#hederBox").append(content);
                  _this.changeNav();
              }
            })

            $.get("/templates/footer.html",function(content,state){
                if( state=="success" ){
                    $("body").append(content)
                }
            })

        },
        changeNav:function(){
            var pName=location.pathname.match(/(\w+)\.html/);
            var id="";
            if(pName.length>0){
               id=pName[1];
                if(id){
                   $(".hidden-hover").removeClass(" hidden-hover");
                   $("#nav-"+id).addClass("hidden-hover");
                }

            }
        }
    }
    page.init();
})