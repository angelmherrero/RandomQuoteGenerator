 var timeout = setTimeout("location.reload(true);",3000);
  function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout("location.reload(true);",3000);
  }
