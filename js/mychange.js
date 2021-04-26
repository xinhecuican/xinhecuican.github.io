var name = "xinhecuican";
var repository = "xinhecuican.github.io";
if(document.domain != 'localhost')
{
	if(document.getElementById("post"))
	{
		for (var key in document.getElementById("article-container").getElementsByTagName('img'))
		{
  			if (isNaN(key))
			{
    			break;
  			}
    		document.getElementById("article-container").getElementsByTagName('img')[key].src = document.getElementById("article-container").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
		}
    }
}

var banner_index1 = Math.ceil(Math.random() * 3518);
document.getElementById("page-header").style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/xinhecuican/Resources/img/pic_" + banner_index1 + ".jpg)";
console.log(document.getElementById("page-header").style);

if(document.getElementById("recent-posts"))
{
	for(var key in document.getElementById("recent-posts").getElementsByTagName('img'))
	{
		if(isNaN(key))
		{
			break;
		}
		var banner_index = Math.ceil(Math.random() * 3518)
		document.getElementById("recent-posts").getElementsByTagName('img')[key].src = "https://cdn.jsdelivr.net/gh/xinhecuican/Resources/img/pic_" + banner_index + ".jpg";
	}
}