$("#config_pagination").pagination({});




<div class="page-box-new ">
    <div id="config_pagination" style="float:right;padding-right:10px;"></div>
</div>





mPage = $("#user_pagination").data("pagination").currentPage + 1;
mPageSize = $("#user_pagination").data("pagination").itemsOnPage;
a={
  page: mPage,
  pageSize: mPageSize
  
}


var option = {
    "onPageClick": function(pageNumber, event) {
    //   refreshList();
    }
  }
  option.items = res.data.totalElements
  option.currentPage = mPage;
  $("#config_pagination").pagination(option);
