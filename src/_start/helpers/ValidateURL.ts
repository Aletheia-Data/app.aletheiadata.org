export const validURL = (str: string) => {
    let url_string; 
    try {
      url_string = new URL(str);
    } catch (_) {
      return false;  
    }
    return url_string.protocol === "http:" || url_string.protocol === "https:" ;
  }