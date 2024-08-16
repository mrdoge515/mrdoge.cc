export function cleanDate(date: Date | null): string {
  if (!date) {
    return "";
  }

  let dateString = "";

  if (date.getHours() < 10) {
    dateString += "0" + date.getHours();
  } else {
    dateString += date.getHours();
  }

  if (date.getMinutes() < 10) {
    dateString += ":0" + date.getMinutes();
  } else {
    dateString += ":" + date.getMinutes();
  }

  if (date.getDate() < 10) {
    dateString += " | 0" + date.getDate();
  } else {
    dateString += " | " + date.getDate();
  }

  if (date.getMonth() < 10) {
    dateString += "/0" + date.getMonth();
  } else {
    dateString += "/" + date.getMonth();
  }

  dateString += "/" + date.getFullYear();

  return dateString;
}
