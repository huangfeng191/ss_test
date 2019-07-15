mauto.page = $("#current_pagination").data("pagination").currentPage + 1;
mauto.pageSize = $("#current_pagination").data("pagination").itemsOnPage;




var option = {
    "onPageClick": function(pageNumber, event) {
    //   search("current");
    }

  }
  option.items = ret.totalElements
  option.currentPage = mauto.page;

  $("#current_pagination").pagination(option);





  let index = $('#manage .deleted').index(this);
  delDeviceId = manageList[index].id;
  $('#delModal').modal('show');