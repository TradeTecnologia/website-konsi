function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}
 
var myParam = queryObj();

var campaignId = myParam["campaignId"]
var userOrigin = myParam["userOrigin"]

var linkStart = "https://links.konsi.com.br/?link=https://konsi.com.br?"
var linkEnd= "&apn=com.br.konsi&isi=1591286851&ibi=com.br.konsi"

var parameterCampaingId= 'campaignId%3D' + campaignId
var parameterUserOrigin= "%26userOrigin%3D" + userOrigin

var linkFinal= linkStart+ parameterCampaingId + parameterUserOrigin + linkEnd

// console.log(linkFinal)

window.onload = function() {
    //when the document is finished loading, replace everything
    //between the <a ...> </a> tags with the value of splitText
document.getElementById("deepLinkAndroid").href=linkFinal
document.getElementById("deepLinkApple").href=linkFinal
console.log(linkFinal)
}