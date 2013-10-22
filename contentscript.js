_delete_dom_obj('adapterIframeDiv');

function _delete_dom_obj( id_name ){
    var dom_obj=document.getElementById(id_name);
    var dom_obj_parent=dom_obj.parentNode;
    var rId = getRecordId(document.location.href);
    var eFlag = getEditFlag(document.location.href);

    if ( rId.match(new RegExp(/00a(.*)/i)) && eFlag.match(new RegExp(/e/i)) ) {
         dom_obj_parent.removeChild(dom_obj);
         resizeCommentBody();
    }else if ( rId.match(new RegExp(/001(.*)/i)) && eFlag.match(new RegExp(/e/i)) ) {
    	 dom_obj_parent.removeChild(dom_obj);
    }else if ( rId.match(new RegExp(/003(.*)/i)) && eFlag.match(new RegExp(/e/i)) ) {
    	 dom_obj_parent.removeChild(dom_obj);
    }else if ( !eFlag.match(new RegExp(/e/i)) ) {
         //Modifying no Edit page behavior
         //document.getElementById("phSearchInput").tabIndex="1"
         //document.getElementById("phSearchInput").focus();
    }
}

function resizeCommentBody(){
    document.getElementById("CommentBody").style.width="750px";
    document.getElementById("CommentBody").style.height="600px";
}

function getRecordId(url){ 
	//Replace back slashes to forward slashes
	url = url.replace(new RegExp(/\\/g),"/");
	//Remove 'http://', 'https://' or 'ftp://'
	url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
	//Remove 'www.'
	url = url.replace(new RegExp(/^www\./i),"");
	//Remove all of string after ?
	url = url.replace(new RegExp(/\?(.*)/),"");
	//Remove String after /e/
	url = url.replace(new RegExp(/\/e(.*)/),"");
	//Remove String before first slash
	url = url.replace(new RegExp(/(.*)\//),"");
	return url;
}

function getEditFlag(url_value){ 
	//Replace back slashes to forward slashes
	url_value = url_value.replace(new RegExp(/\\/g),"/");
	//Remove 'http://', 'https://' or 'ftp://'
	url_value = url_value.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
	//Remove 'www.'
	url_value = url_value.replace(new RegExp(/^www\./i),"");
	//Remove all of string after ?
	url_value = url_value.replace(new RegExp(/\?(.*)/),"");
	//Remove String before first slash
	url_value = url_value.replace(new RegExp(/(.*)\//),"");
	return url_value;
}
