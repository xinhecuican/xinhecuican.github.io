var name = "xinhecuican";
var repository = "xinhecuican.github.io";
var total_picture = 12211
if(document.domain != 'localhost')
{
	if(document.getElementById("post"))
	{
		var banner_index1 = Math.ceil(Math.random() * total_picture);
		document.getElementById("page-header").style.backgroundImage = "url(https://cdn.jsdelivr.net/gh/xinhecuican/Resources/img/pic_" + banner_index1 + ".jpg)";
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



if(document.getElementById("recent-posts"))
{
	for(var key in document.getElementById("recent-posts").getElementsByTagName('img'))
	{
		if(isNaN(key))
		{
			break;
		}
		var banner_index = Math.ceil(Math.random() * total_picture)
		document.getElementById("recent-posts").getElementsByTagName('img')[key].src = "https://cdn.jsdelivr.net/gh/xinhecuican/Resources/img/pic_" + banner_index + ".jpg";
	}
}