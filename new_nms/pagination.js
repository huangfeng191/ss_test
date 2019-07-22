$("#config_pagination").pagination({});




<div class="page-box-new ">
<div id="config_pagination" style="float:right;padding-right:10px;"></div>
</div>




var option = {
    "onPageClick": function(pageNumber, event) {
    //   refreshList();
    }
  }
  option.items = res.data.totalElements
  option.currentPage = page;
  $("#config_pagination").pagination(option);
