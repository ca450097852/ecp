/*
*功能：分类地区获取
*主要有：页面加载时所属地区添加页运行的方法、加载地区的级联select、加载只读产品分类属性的显示、加载显示分类
*/



//加载只读产品分类属性的显示,用于新增供应与新增分类信息
 var count=1;//已出现几个DIV记数
 function onlyshowcate(id,level) {
	       $.ajax({
           type: "post",
           url: "/category!viewlist.action?cid="+id+"&ajaxRequestRandom="+Math.random(),
           datatype:"json",
           async:false,
           success: function(data){ 
            if(data.length>0)
            {
                  $("#attr").html("<font color='red'>请先选择分类!</font>");//向分类属性框加入提示信息
                  if(count<level)
                  {
                     for(var i=(level+1);i<(count+1);i++)
	                    {
	                      $("#level"+i).remove(); 		                      
	                    }
                        $("#divlist").append(data);	                     
                        count=level+1;
                  }                  
                  if(level+1<=count)
                  {
                       for(var i=(level+1);i<(count+1);i++)
	                    {
	                      $("#level"+i).remove(); 		                      
	                    }
                        $("#divlist").append(data);	                     
                        count=level+1;
                  } 
                  else{
  	             	 $("#divlist").append(data);	
	  	             count=count+1;//个数加1	    
  	              }   
  	              try{
  	              //如果为添加供应属性的分类时， 则要加上这个属性
  	              if(is_supply_insert=="supply"){  	             
		   	          $(".select").attr("size",2); 
		   	      }   
		   	      }catch(e){
		   	      	alert(e.name);
		   	      }              	             
            }else{
               for(var i=(level+1);i<(count+1);i++)
                   {
                     $("#level"+i).remove(); 		                      
                   }
            }
         }                 
     });  	 
 }
 
 
//加载地区的级联select
function onlyshowarea(obj,level){
	 var id=$(obj).val();
	 var area_div_id=$(obj).parent("div").attr("id");
     $.ajax({  	 
           type: "post",    	     
           url: "/area!arealist.action?up_area_id="+id+"&count="+(level+1)+"&ajaxRequestRandom="+Math.random(),       
           datatype:"json",
           async:true,
           success: function(data){ 
              $(obj).nextAll("select").remove();
              $("#"+area_div_id).append(data);            
          }                 
     });  	 
}

//根据上级分类ID找出本级的分类添加到select中
 function getThisArea(up_area_id,count,div_id){     
		  var div_type=typeof(div_id); 
	 	  $.ajax({  	 
	            type: "post",    	     
	            url: "/area!arealist.action?up_area_id="+up_area_id+"&count="+count+"&ajaxRequestRandom="+Math.random(),       
	            datatype:"json",
	            async:false,
	            success: function(data){      
	               if(div_type!="undefined"){
	               		$("#"+div_id).append(data);
	               }else{
	               		$("#arealist").append(data);
	               }    
	   	        }
	       });
 } 

//根据上级分类ID找出本级的分类添加到select中
 function getThisCat(up_cat_id){
 	$.ajax({  	 
            type: "post",    	     
            url: "/category!viewlist.action?cid="+up_cat_id+"&type="+mtype+"&ajaxRequestRandom="+Math.random(),       
            datatype:"json",
            async:false,
            success: function(data){          
   	         $("#divlist").append(data);
   	     }
    });
 } 
  
//所属分类的回选方法
function cate_select(id,level,type) {    	
     mtype=type;
     var hiddenval='';     
     if($("#search_cat_attr").length>0){
     	hiddenval=$("#search_cat_attr").val();
     	hiddenval=id+","+hiddenval;
     }else{
	 	hiddenval=$("#hidden_cat_value").val();
	 }
	 if(hiddenval==""){
	     getThisCat(id);
	 }else{
		 var cat_arr=new Array();
		 cat_arr=hiddenval.split(",");
		 for(var i=0;i<cat_arr.length;i++)
		 {  
		    if(cat_arr[i]!=''){
		    	 getThisCat(cat_arr[i]);
		  		 selectCheckObj("level"+(i+1),cat_arr[i+1])
		   		 count=level+i+1;
		    }
		 }
	 }
}
 
//所属地区的回选方法
function area_select(id,div_id){
	var area_value = '';
	if($("#search_area_attr").length>0){
     	area_value=$("#search_area_attr").val();
     	area_value=id+","+area_value;
    }else{
	 	area_value=$("#hidden_area_value").val();
	}	
    if(area_value==""){ //默认新增的情况下，找出一级分类
    	getThisArea(id,"",div_id);
    }else{//回选状态下，默认选择之前选择的分类
 	var area_sel_val = new Array();
 	area_sel_val = area_value.split(",");
	if(area_sel_val.length > 0){
 		for(var i=0;i<area_sel_val.length;i++){
 			if(area_sel_val[i] != ""){
 				//根据上级找出本级分类
 				getThisArea(area_sel_val[i],(i+1));
 				//选中之前选择的分类
 				selectCheckObj("arealevel"+(i+1),area_sel_val[i+1]);
 			} 			
 		}
 		areacount=area_sel_val.length-1;
 	  }
   }
}

/****列表对地区和分类的搜索获取值功能****/
function showSelectDiv(area_attrid,cat_atrrid,bandareaid,bandcatid){
	    //地区获取
	    if(area_attrid!="")
	    {
		 var area_attr = document.getElementsByName(area_attrid);
		 var area_attr_str = '';
		 for(var i=0;i<area_attr.length;i++){
			if(area_attr[i].value!='0'){
				area_attr_str += area_attr[i].value+',';
			}
		 }
		 if(area_attr_str!="")
		 {
		   area_attr_str=area_attr_str.substring(0,area_attr_str.length-1);
		 }
		 $("#"+bandareaid+"").val(area_attr_str);
		}
		//分类获取
		if(cat_atrrid!="")
		{
		var cat_attr= document.getElementsByName(cat_atrrid);
		var cat_attr_str = '';
		for(var i=0;i<cat_attr.length;i++){
			if(cat_attr[i].value!='0'){
				cat_attr_str += cat_attr[i].value+',';
			}
		}
		if(cat_attr_str!="")
		{
		 cat_attr_str=cat_attr_str.substring(0,cat_attr_str.length-1);
		}
		$("#"+bandcatid+"").val(cat_attr_str);
		}
		document.forms[0].submit();
	}

//对查找出的select 进行回选
function selectCheckObj(objid,thisvalue){
	var levelone = document.getElementById(objid);
	if(levelone!=null){
		for (var j = 0; j < levelone.options.length; j++) {
	        if (levelone.options[j].value == thisvalue) {
	            levelone.options[j].selected = true;
	        }
        }
	}
}
	
