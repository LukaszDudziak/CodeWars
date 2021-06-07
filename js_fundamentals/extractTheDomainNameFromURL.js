// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  //your code here
  let newOne = url
    .replace("www.", "")
    .replace("http://", "")
    .replace("https://", "");
  return newOne.slice(0, newOne.indexOf("."));
}

domainName("http://www.google.com");
