$("#config_pagination").pagination({});




<div class="page-box-new ">
    <div id="config_pagination" style="float:right;padding-right:10px;"></div>
</div>



// mPageSize = $("#user_pagination").data("pagination").itemsOnPage;
// pageSize: mPageSize




var page ={
  page: $("#user_pagination").data("pagination").currentPage + 1,
  pageSize: 20,
}


var option = {
    "onPageClick": function(pageNumber, event) {
    //   refreshList();
    }
  }
  option.items = res.data.totalElements
  option.currentPage = page.page;
  $("#config_pagination").pagination(option);
