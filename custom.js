$(".img").each(function() {
    $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
  })