function dateToStoreInDb(unixTimeStamp) {
  // customized date and time when the post was made
  if (unixTimeStamp == null) {
    let dt = new Date();
    dt =
      dt.getDate() +
      "/" +
      (dt.getMonth() + 1) +
      "/" +
      dt.getFullYear() +
      " @ " +
      dt.getHours() +
      ":" +
      dt.getMinutes();

    return dt;
  }

  // if scheduled
  else {
    let dt = new Date(unixTimeStamp * 1000);
    dt =
      dt.getDate() +
      "/" +
      (dt.getMonth() + 1) +
      "/" +
      dt.getFullYear() +
      " @ " +
      dt.getHours() +
      ":" +
      dt.getMinutes();

    return dt;
  }
}

export default dateToStoreInDb;
